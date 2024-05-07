import cv2
import numpy as np
import mediapipe as mp
import urllib.request
import cloudinary
import cloudinary.api

# Configura tus credenciales de Cloudinary
cloudinary.config(
    cloud_name="dpraaof2f",
    api_key="885155165686768",
    api_secret="fKrYGvZ3ijGA38GyfyyxJ66Ctzc",
)


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


def comparar_coordenadas(img1, img2):
    with mp.solutions.face_mesh.FaceMesh(
        static_image_mode=True,
        refine_landmarks=False,
        max_num_faces=1,  # Puedes ajustar esto si necesitas más de una cara
        min_detection_confidence=0.5,
    ) as face_mesh:

        # Procesar la primera imagen
        resultados1 = face_mesh.process(cv2.cvtColor(img1, cv2.COLOR_BGR2RGB))

        # Verificar si se detectó alguna cara en la primera imagen
        if resultados1.multi_face_landmarks:
            coordenadas1 = obtener_coordenadas_facemesh(
                resultados1.multi_face_landmarks[0], img1
            )

            # Procesar la segunda imagen
            resultados2 = face_mesh.process(cv2.cvtColor(img2, cv2.COLOR_BGR2RGB))

            # Verificar si se detectó alguna cara en la segunda imagen
            if resultados2.multi_face_landmarks:
                coordenadas2 = obtener_coordenadas_facemesh(
                    resultados2.multi_face_landmarks[0], img2
                )

                # Comparar coordenadas
                if np.array_equal(coordenadas1, coordenadas2):
                    print("Registrada")
                    return True
                else:
                    diferencias = coordenadas2 - coordenadas1

                    # Calcular el promedio por columnas
                    promedio_por_columna = np.mean(diferencias, axis=0)

                    # Verificar condiciones y mostrar imágenes si se cumplen
                    if (
                        -100 <= promedio_por_columna[0] <= 100
                        and -100 <= promedio_por_columna[1] <= 100
                        and -5 <= promedio_por_columna[2] <= 5
                    ):
                        print("Registrada")
                        cv2.namedWindow(
                            "Base de Datos", cv2.WINDOW_NORMAL
                        )  # Tamaño de ventana normal
                        cv2.namedWindow(
                            "Ingreso", cv2.WINDOW_NORMAL
                        )  # Tamaño de ventana normal
                        cv2.imshow("Base de Datos", img1)
                        cv2.imshow("Ingreso", img2)
                        cv2.waitKey(0)
                        cv2.destroyAllWindows()
                        return True
                    else:
                        print("No registrada")
                        return False
            else:
                print("No se detectó ninguna cara en la segunda imagen.")
                return False
        else:
            print("No se detectó ninguna cara en la primera imagen.")
            return False


# Leer la segunda imagen desde el archivo local
imagen2 = cv2.imread("C:/Users/maste/Downloads/Diego.jpg")

# Obtén la lista de recursos (imágenes) desde Cloudinary
lista_recursos = cloudinary.api.resources(type="upload")

# Comparar las URLs de las imágenes
for recurso in lista_recursos["resources"]:
    # Definir la URL de la imagen
    url_imagen1 = recurso["url"]
    imagen1 = obtener_imagen_desde_url(url_imagen1)
    # Comparar coordenadas de las dos imágenes
    if comparar_coordenadas(imagen1, imagen2):
        break
