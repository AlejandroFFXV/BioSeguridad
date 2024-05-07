const express = require("express");
const cors = require("cors");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const Jimp = require("jimp");
const faceapi = require("face-api.js");

const app = express();
app.use(cors());

app.post("/obtener_datos", upload.single("image"), async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "No se recibió ninguna imagen." });
  }

  try {
    const img = await Jimp.read(req.file.path);
    const imgBuffer = await img.getBufferAsync(Jimp.MIME_JPEG);

    const detections = await faceapi
      .detectAllFaces(imgBuffer)
      .withFaceLandmarks();
    if (detections.length === 0) {
      return res
        .status(400)
        .json({ error: "No se detectó ninguna cara en la imagen." });
    }

    const landmarks = detections[0].landmarks.positions;
    const coordenadas = landmarks.map((p) => ({ x: p._x, y: p._y }));

    const promedio_x =
      coordenadas.reduce((sum, p) => sum + p.x, 0) / coordenadas.length;
    const promedio_y =
      coordenadas.reduce((sum, p) => sum + p.y, 0) / coordenadas.length;

    return res.json({
      promedio_x,
      promedio_y,
      coordenadas,
    });
  } catch (e) {
    return res.status(500).json({ error: e.toString() });
  }
});

app.listen(5000, () => {
  console.log("Servidor corriendo en el puerto 5000");
});
