import cv2
import numpy as np
import mediapipe as mp
import pymysql
import urllib.request
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Parámetros de conexión a la base de datos en la nube
host = "mna97msstjnkkp7h.cbetxkdyhwsb.us-east-1.rds.amazonaws.com"
usuario = "yrnmapz66r0wdm88"
contraseña = "ny7f0qnu63fcc4oz"
base_de_datos = "hjqazw0ynzxk0qbf"


def decode_image(img_bytes):
    """Decodifica la imagen a partir de bytes."""
    nparr = np.frombuffer(img_bytes, np.uint8)
    return cv2.imdecode(nparr, cv2.IMREAD_COLOR)


def obtener_imagen_desde_url(url):
    # Leer los datos de la imagen desde la URL
    respuesta = urllib.request.urlopen(url)
    arr = np.asarray(bytearray(respuesta.read()), dtype=np.uint8)

    # Decodificar los datos en una imagen
    imagen = cv2.imdecode(arr, -1)

    return imagen


def obtener_coordenadas_facemesh(landmark_list, img):
    # Extraer las coordenadas de landmarks de FaceMesh en una matriz NumPy de 468x3
    h, w = img.shape[:2]  # obtener ancho y alto de la imagen
    xyz = [(lm.x, lm.y, lm.z) for lm in landmark_list.landmark]

    return np.multiply(xyz, [w, h, w]).astype(int)


def obtener_coordenadas_imagen(img):
    with mp.solutions.face_mesh.FaceMesh(
        static_image_mode=True,
        refine_landmarks=False,
        max_num_faces=1,
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


@app.route("/procesar-imagen", methods=["POST"])
def procesar_imagen():
    if "image" not in request.files:
        return jsonify({"error": "No se envió ninguna imagen"}), 400

    img_bytes = request.files["image"].read()
    img_decoded = decode_image(img_bytes)

    # Obtener las coordenadas de FaceMesh de la imagen
    coordenadas_imagen = obtener_coordenadas_imagen(img_decoded)

    # Verificar si se detectó alguna cara en la imagen
    if coordenadas_imagen is None:
        return jsonify({"mensaje": "No se detectó ninguna cara en la imagen"}), 200

    # Obtener promedios
    promedios = np.mean(coordenadas_imagen, axis=0)
    px, py, pz = promedios

    # Conectar a la base de datos en la nube
    conexion = pymysql.connect(
        host=host, user=usuario, password=contraseña, database=base_de_datos
    )

    # Crear un cursor para ejecutar consultas SQL
    cursor = conexion.cursor()

    # Ejecutar una consulta SQL para seleccionar promedios de la base de datos
    consulta = "SELECT promediox, promedioy, promedioz, url_img, name FROM hjqazw0ynzxk0qbf.faces;"

    # Ejecutar la consulta SQL
    cursor.execute(consulta)

    # Obtener el resultado de la consulta
    resultado = cursor.fetchall()

    # Cerrar el cursor y la conexión
    cursor.close()
    conexion.close()

    # Comparar valores de los promedios
    for r in resultado:
        difx = px - r[0]
        dify = py - r[1]
        difz = pz - r[2]
        if -100 <= difx <= 100 and -100 <= dify <= 100 and -5 <= difz <= 5:
            # Definir la URL de la imagen
            url_imagen2 = r[3]
            nombre = r[4]

            # Enviar respuesta JSON
            return (
                jsonify(
                    {
                        "mensaje": f"Imagen registrada: {nombre}",
                        "url_imagen": url_imagen2,
                    }
                ),
                200,
            )

    # Si no se encuentra ninguna coincidencia, enviar respuesta JSON
    return jsonify({"mensaje": "Imagen no registrada"}), 200


if __name__ == "__main__":
    app.run(debug=True)
