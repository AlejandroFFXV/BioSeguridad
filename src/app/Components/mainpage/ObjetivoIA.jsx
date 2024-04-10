import React from "react";

const ObjetivoIA = () => {
  return (
    <div className="flex justify-center  py-10">
      <div class="card">
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="card-inner">
          <div
            className="text-center hover:text-blue-200 duration-300 delay-300
        dark:text-white text-gray-700 p-4 rounded-lg shadow-md mb-2"
          >
            <h2 className="text-xl sm:text-2xl font-semibold mb-2">Objetivo</h2>
            <div className="flex flex-col sm:flex-row items-center text-center mb-10">
              <p className="paragraph_home">
                El propósito de este proyecto es optimizar el acceso a los
                establecimientos, tomando como referencia la situación actual en
                el CUCEI, donde ocasionalmente hay dificultades, ya sea debido a
                problemas de iluminación o a la escasa luminosidad. Nuestra meta
                es explorar soluciones que perfeccionen el reconocimiento facial
                y, además, incorporar un método adicional de acceso basado en la
                voz. Con esto, aspiramos a generar un interés tanto entre los
                estudiantes como las empresas en la utilización de este
                algoritmo. Nos enfocamos especialmente en la comunidad
                estudiantil, con el fin de que puedan apreciar y comprender el
                funcionamiento de una inteligencia artificial al analizar datos
                y desarrollar su propio algoritmo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ObjetivoIA;
