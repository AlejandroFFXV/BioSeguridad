import React from "react";
import Image from "next/image";
import Robot from "@/assets/robot.png";

const ParaQue = () => {
  return (
    <>
      <div
        className="text-center hover:text-orange-600 duration-300 delay-300
        text-gray-700 bg-gray-300 p-4 rounded-lg shadow-md mb-2"
      >
        <h2 className="text-xl sm:text-2xl font-semibold mb-2 ">
          ¿Para que se utiliza las IA?
        </h2>
        <div className="flex flex-col sm:flex-row items-center text-center mb-10">
          <p className="text-gray-700 paragraph_home">
            La inteligencia artificial desempeña un papel en la seguridad
            biométrica, proporcionando mejoras significativas en la precisión,
            la eficiencia y la confiabilidad de los sistemas de identificación
            basados en características únicas de individuos. Tambien cuenta con
            un gran uso en los siguientes aspectos: creación de recomendaciones
            personalizadas para los consumidores, utilizando datos como sus
            búsquedas y compras anteriores, así como otros comportamientos en
            línea. Su relevancia se destaca especialmente en el ámbito
            comercial, donde contribuye de manera significativa a la
            optimización de productos, la planificación de inventarios y la
            mejora de los procesos logísticos, entre otros aspectos clave.
          </p>
          <Image
            src={Robot}
            alt="Objetivo"
            height={360}
            width={360}
            className="object-cover rounded ml-4 mb-4 sm:mb-0 sm:mr-4 max-w-full"
          />
        </div>
      </div>
    </>
  );
};

export default ParaQue;
