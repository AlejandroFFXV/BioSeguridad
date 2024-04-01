import React from "react";
import Image from "next/image";
import ObjeComponent from "@/assets/objetivo-component.png";
const Objetivo = () => {
  return (
    <>
      <div
        className="text-center hover:text-orange-600 duration-300 
      delay-300 text-white-700 p-4 rounded shadow-md"
      >
        <h2 className="text-xl sm:text-2xl font-semibold mb-2 ">Objetivo</h2>
        <div className="flex flex-col sm:flex-row items-center text-center mb-10">
          <Image
            src={ObjeComponent}
            alt="Objetivo"
            height={360}
            width={360}
            className="object-cover rounded mr-4 mb-4 sm:mb-0 sm:mr-4 max-w-full"
          />
          <p className="text-white paragraph_home">
            El propósito de este proyecto es optimizar el acceso a los
            establecimientos, tomando como referencia la situación actual en el
            CUCEI, donde ocasionalmente hay dificultades, ya sea debido a
            problemas de iluminación o a la escasa luminosidad. Nuestra meta es
            explorar soluciones que perfeccionen el reconocimiento facial y,
            además, incorporar un método adicional de acceso basado en la voz.
            Con esto, aspiramos a generar un interés tanto entre los estudiantes
            como las empresas en la utilización de este algoritmo. Nos enfocamos
            especialmente en la comunidad estudiantil, con el fin de que puedan
            apreciar y comprender el funcionamiento de una inteligencia
            artificial al analizar datos y desarrollar su propio algoritmo.
          </p>
        </div>
      </div>
    </>
  );
};

export default Objetivo;
