"use client";
import { useRef, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";

const FaqsForm = () => {
  const [user, setUser] = useState({
    name: "",
    description: "",
  });

  const form = useRef(null);
  const router = useRouter();

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);
    try {
      const res = await axios.post("/api/faqs", user);
      console.log(res);
      toast("Datos enviados!");
      form.current.reset();
      router.push("/");
    } catch (error) {
      if (error.response && error.response.status === 500) {
        router.push("/error");
      } else {
        console.error(error);
      }
    }
  };
  return (
    <>
      <ToastContainer />
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mt-8">
          ¿Tienes alguna pregunta? No dudes en enviárnosla a través de este
          formulario.
        </h1>
        <p className="text-sm text-gray-300 my-4">
          Nos ayudara mejorar esta sección de la página.
        </p>
      </div>
      <div className="flex items-center justify-center h-screen">
        <div className="max-w-md mx-auto relative overflow-hidden z-10 bg-gray-800 p-8 rounded-lg shadow-md before:w-24 before:h-24 before:absolute before:bg-purple-600 before:rounded-full before:-z-10 before:blur-2xl after:w-32 after:h-32 after:absolute after:bg-sky-400 after:rounded-full after:-z-10 after:blur-xl after:top-24 after:-right-12">
          <h2 className="text-2xl font-bold text-white mb-6">
            Envia tus dudas!
          </h2>

          <form onSubmit={handleSubmit} ref={form}>
            <div className="mb-4">
              <label
                className="block text-sm font-medium text-gray-300"
                for="name"
              >
                Nombre Completo
              </label>
              <input
                type="text"
                placeholder="Full Name"
                required=""
                name="name"
                onChange={handleChange}
                className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-sm font-medium text-gray-300"
                for="description"
              >
                Ingresa tu pregunta:
              </label>
              <textarea
                className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
                rows="3"
                placeholder="description"
                required=""
                name="description"
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="flex justify-end">
              <button className="bg-gradient-to-r from-purple-600 via-purple-400 to-blue-500 text-white px-4 py-2 font-bold rounded-md hover:opacity-80">
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default FaqsForm;
