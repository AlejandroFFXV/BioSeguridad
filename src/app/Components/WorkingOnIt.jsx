import React from "react";
import Link from "next/link";
import Image from "next/image";
import Patricio from "@/assets/working-on.png";
const WorkingOnIt = () => {
  return (
    <>
      <Link
        href="/"
        className="hover:bg-amber-500 duration-300 delay-300 text-white py-2 px-4 rounded absolute top-0 left-0 m-4"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 -960 960 960"
          width="24"
          fill="white"
        >
          <path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z" />
        </svg>
      </Link>

      <div className="text-center min-h-screen flex items-center justify-center">
        <div className="bg-gray-300 p-8 rounded shadow-lg">
          <h1 className="text-3xl font-semibold mb-4">¡Fuera de servicio!</h1>
          <Image
            src={Patricio}
            alt="Descripción de la imagen"
            className="w-64 h-64 object-cover rounded-full mb-4"
          />
          <p className="text-gray-800">¡Estamos trabajando en ello!</p>
        </div>
      </div>
    </>
  );
};

export default WorkingOnIt;
