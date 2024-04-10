// // Importa las bibliotecas necesarias
// const express = require("express");
// const router = express.Router();
// const { Canvas, Image } = require("canvas");
// const faceapi = require("face-api.js");
// const fs = require("fs");

// // Ruta para obtener las coordenadas faciales
// router.post("/facial-coordinates", async (req, res) => {
//   try {
//     // Verifica si se ha proporcionado una imagen
//     if (!req.files || !req.files.image) {
//       return res
//         .status(400)
//         .json({ error: "No se proporcionó ninguna imagen." });
//     }

//     // Lee la imagen desde la solicitud
//     const image = req.files.image.data;

//     // Carga modelos de face-api.js
//     await faceapi.nets.ssdMobilenetv1.loadFromDisk("./models");
//     await faceapi.nets.faceLandmark68Net.loadFromDisk("./models");

//     // Convierte los datos de imagen a un buffer
//     const imageBuffer = Buffer.from(image);

//     // Crea una imagen de Canvas a partir de los datos de la imagen
//     const img = new Image();
//     img.src = imageBuffer;
//     const canvas = new Canvas(img.width, img.height);
//     const ctx = canvas.getContext("2d");
//     ctx.drawImage(img, 0, 0, img.width, img.height);

//     // Detecta las caras y los puntos de referencia faciales en la imagen
//     const detections = await faceapi.detectAllFaces(canvas).withFaceLandmarks();

//     // Si no se detectan caras, devuelve un mensaje de error
//     if (!detections || detections.length === 0) {
//       return res
//         .status(400)
//         .json({ error: "No se detectó ninguna cara en la imagen." });
//     }

//     // Obtiene las coordenadas de los puntos de referencia faciales de la primera cara detectada
//     const coordinates = detections[0].landmarks.positions.map(({ _x, _y }) => [
//       _x,
//       _y,
//     ]);

//     // Devuelve las coordenadas faciales
//     return res.json({ coordinates });
//   } catch (error) {
//     console.error("Error obteniendo coordenadas faciales:", error);
//     return res
//       .status(500)
//       .json({ error: "Ocurrió un error al procesar la imagen." });
//   }
// });

// // Exporta el router
// module.exports = router;
