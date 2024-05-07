from flask import Flask, jsonify, request
from flask_cors import CORS
import cv2
import numpy as np
import mediapipe as mp

app = Flask(__name__)
CORS(app)


def decode_image(img_bytes):
    """Decodifica la imagen a partir de bytes."""
    nparr = np.frombuffer(img_bytes, np.uint8)
    return cv2.imdecode(nparr, cv2.IMREAD_COLOR)


def process_image_with_facemesh(img):
    """Procesa la imagen con FaceMesh y devuelve las coordenadas de los landmarks."""
    with mp.solutions.face_mesh.FaceMesh(
        static_image_mode=True,
        refine_landmarks=False,
        max_num_faces=1,
        min_detection_confidence=0.5,
    ) as face_mesh:
        resultados = face_mesh.process(cv2.cvtColor(img, cv2.COLOR_BGR2RGB))
        if resultados.multi_face_landmarks:
            coordenadas = obtener_coordenadas_facemesh(
                resultados.multi_face_landmarks[0], img
            )
            return coordenadas
        else:
            print("No se detectó ninguna cara en la imagen.")
            return None


@app.route("/obtener_datos", methods=["POST"])
def obtener_datos():
    if "image" not in request.files:
        return jsonify({"error": "No se recibió ninguna imagen."}), 400

    try:
        img_bytes = request.files["image"].read()
        img = decode_image(img_bytes)
        coordenadas = process_image_with_facemesh(img)
        if coordenadas is None:
            return jsonify({"error": "No se detectó ninguna cara en la imagen."}), 400

        promedios = np.mean(coordenadas, axis=0)
        promedio_x, promedio_y, promedio_z = promedios

        # Convertir las coordenadas a una lista antes de enviarlas como JSON
        coordenadas_lista = coordenadas.tolist()

        return jsonify(
            {
                "promedio_x": promedio_x,
                "promedio_y": promedio_y,
                "promedio_z": promedio_z,
                "coordenadas": coordenadas_lista,
            }
        )
    except Exception as e:
        return jsonify({"error": str(e)}), 500


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
