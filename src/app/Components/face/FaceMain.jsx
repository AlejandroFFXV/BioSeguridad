"use client";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";

const FaceMain = () => {
  const [file, setFile] = useState(null);
  const [mensaje, setMensaje] = useState("");
  const [urlImagen, setUrlImagen] = useState("");
  const [apiEjecutada, setApiEjecutada] = useState(false); // Estado para controlar si la API se ha ejecutado
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    if (file) {
      formData.append("image", file);
    }
    try {
      const res = await axios.post("/api/upload-image", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(res);
      const { mensaje, url_imagen } = res.data.respuesta;
      setMensaje(mensaje);
      setUrlImagen(url_imagen);
      toast("Datos enviados!");
      setApiEjecutada(true); // Establecer la API como ejecutada
      // // // router.push("/");
    } catch (error) {
      if (error.response && error.response.status === 500) {
        // Redirige al usuario a la página de error
        router.push("/error");
      }
    }
  };

  // Condición para mostrar u ocultar la sección del formulario
  const mostrarFormulario = !apiEjecutada;

  return (
    <>
      <ToastContainer />
      {mostrarFormulario && (
        <div className="flex items-center justify-center h-screen">
          <form className="form" onSubmit={handleSubmit}>
            <ul className="wrapper">
              <li className="li-supp" style={{ "--i": 3 }}>
                <input
                  className="input-supp"
                  type="file"
                  placeholder="your photo"
                  required=""
                  name="image"
                  onChange={(e) => {
                    setFile(e.target.files[0]);
                  }}
                />
              </li>
              <li className="button-li" style={{ "--i": 2 }}>
                <button className="button-supp">Submit</button>
              </li>
            </ul>
          </form>
          {file && (
            <img
              className="w-1/4 h-full object-contain ml-10"
              src={URL.createObjectURL(file)}
              alt=""
            ></img>
          )}
        </div>
      )}
      {mensaje && (
        <div className="flex justify-center items-center h-screen">
          <p className="text-xl font-bold text-center text-white-500">
            {mensaje}
          </p>
          {urlImagen && (
            <img
              src={urlImagen}
              alt="Resultado"
              className="w-1/4 h-full object-contain ml-10"
            />
          )}
        </div>
      )}
    </>
  );
};

export default FaceMain;
