import React from "react";
import Image from "next/image";
import IA from "@/assets/IA_aprendiendo.png";

const WhatIsIt = () => {
  return (
    <>
      <div
        className="text-center hover:text-orange-600 duration-300 delay-300
        text-gray-700 bg-gray-300 p-4 rounded-lg shadow-md mb-2"
      >
        <h2 className="text-xl sm:text-2xl font-semibold mb-2">
          Descripción del proyecto
        </h2>
        <div className="flex flex-col sm:flex-row items-center text-center mb-10">
          <p className="text-gray-700 paragraph_home">
            El proyecto tiene como objetivo desarrollar una inteligencia
            artificial dedicada a la detección de datos biométricos, incluyendo
            características faciales y vocales. Esta iniciativa busca
            proporcionar una aplicación versátil, con aplicaciones tanto en el
            ámbito empresarial como educativo. La finalidad es simplificar el
            acceso al mundo de la creación de inteligencias artificiales,
            permitiendo que tanto empresas como instituciones educativas puedan
            beneficiarse de esta tecnología de manera más accesible y eficiente.
          </p>
          <Image
            src={IA}
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

export default WhatIsIt;
