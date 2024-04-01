"use client";
import React, { useState } from "react";
import axios from "axios";

export default function UploadImage() {
  const [file, setFile] = useState(null);
  const [promedios, setPromedios] = useState(null);
  const [error, setError] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("imagen", file);

    try {
      const response = await axios.post(
        "http://localhost:5000/obtener_datos",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setPromedios(response.data);
      setError(null);
    } catch (error) {
      setError("Error al enviar la imagen. Por favor, inténtalo de nuevo.");
      console.error("Error al enviar la imagen:", error);
    }
  };

  return (
    <div>
      <h1>Subir Imagen</h1>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleSubmit}>Enviar</button>

      {promedios && (
        <div>
          <h2>Promedios de Coordenadas:</h2>
          <p>Promedio X: {promedios.promedio_x}</p>
          <p>Promedio Y: {promedios.promedio_y}</p>
          <p>Promedio Z: {promedios.promedio_z}</p>
        </div>
      )}

      {error && <p>{error}</p>}
    </div>
  );
}
