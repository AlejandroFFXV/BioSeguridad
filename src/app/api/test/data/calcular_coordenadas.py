from flask import Flask, jsonify
from flask_cors import CORS
import cv2
import numpy as np
import csv
import mediapipe as mp
import os

app = Flask(__name__)
CORS(app)

# Tu código existente para obtener y procesar las coordenadas


def obtener_coordenadas_facemesh(landmark_list, img):
    # Extraer las coordenadas de landmarks de FaceMesh en una matriz NumPy de 468x3
    h, w = img.shape[:2]  # obtener ancho y alto de la imagen
    xyz = [(lm.x, lm.y, lm.z) for lm in landmark_list.landmark]

    return np.multiply(xyz, [w, h, w]).astype(int)


def guardar_coordenadas_csv(coordenadas, ruta_archivo):
    # Escribir las coordenadas en un archivo CSV
    with open(ruta_archivo, mode="w", newline="") as file:
        writer = csv.writer(file)
        writer.writerows(coordenadas)

        # Calcular el promedio de cada columna
        promedios = np.mean(coordenadas, axis=0)
        print("Promedio X", promedios[0])
        print("Promedio Y", promedios[1])
        print("Promedio Z", promedios[2])
        return promedios


def obtener_coordenadas_imagen(img):
    with mp.solutions.face_mesh.FaceMesh(
        static_image_mode=True,
        refine_landmarks=False,
        max_num_faces=1,  # Puedes ajustar esto si necesitas más de una cara
        min_detection_confidence=0.5,
    ) as face_mesh:

        # Procesar la imagen
        resultados = face_mesh.process(cv2.cvtColor(img, cv2.COLOR_BGR2RGB))

        # Verificar si se detectó alguna cara
        if resultados.multi_face_landmarks:
            # Obtener las coordenadas de FaceMesh
            coordenadas = obtener_coordenadas_facemesh(
                resultados.multi_face_landmarks[0], img
            )
            return coordenadas
        else:
            print("No se detectó ninguna cara en la imagen.")
            return None


# Leer la imagen
imagen1 = cv2.imread(
    "D:\SoftwareDevelopment\Proyecto-Modular\modular-project\src\img\prueba1.jpg"
)

# Ruta donde se guardará el archivo CSV
ruta_archivo_csv = "csv_database/coordenadas_imagen1.csv"

# Asegurarse de que el directorio donde se guardará el archivo CSV exista
os.makedirs(os.path.dirname(ruta_archivo_csv), exist_ok=True)

# Obtener las coordenadas de FaceMesh de la imagen
coordenadas_imagen1 = obtener_coordenadas_imagen(imagen1)

# Guardar las coordenadas en un archivo CSV
if coordenadas_imagen1.any():
    promedios = guardar_coordenadas_csv(coordenadas_imagen1, ruta_archivo_csv)
    print(f"Las coordenadas se han guardado correctamente en '{ruta_archivo_csv}'.")
    promedio_x, promedio_y, promedio_z = promedios


@app.route("/calcular_coordenadas", methods=["POST"])
def calcular_coordenadas():
    # Obtener la imagen enviada desde la solicitud POST
    file = request.files["image"]
    image_stream = file.stream
    img_array = np.asarray(bytearray(image_stream.read()), dtype=np.uint8)
    image = cv2.imdecode(img_array, cv2.IMREAD_COLOR)

    # Obtener las coordenadas de FaceMesh de la imagen
    coordenadas_imagen = obtener_coordenadas_imagen(image)

    if coordenadas_imagen is not None:
        promedios = guardar_coordenadas_csv(coordenadas_imagen, ruta_archivo_csv)
        print("Las coordenadas se han guardado correctamente.")
        promedio_x, promedio_y, promedio_z = promedios
        return jsonify(
            {
                "promedio_x": promedio_x,
                "promedio_y": promedio_y,
                "promedio_z": promedio_z,
            }
        )
    else:
        return jsonify({"error": "No se detectó ninguna cara en la imagen."})


if __name__ == "__main__":
    app.run(debug=True)
