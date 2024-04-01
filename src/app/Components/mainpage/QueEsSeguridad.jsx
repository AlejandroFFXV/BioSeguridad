import React from "react";

const QueEsSeguridad = () => {
  return (
    <div className="flex justify-center align-center py-10">
      <div className="card">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="card-inner">
          <div
            className="text-center hover:text-blue-200 duration-300 delay-300
        dark:text-white text-gray-700 p-4 rounded-lg shadow-md mb-2"
          >
            <h2
              className="text-xl sm:text-2xl font-semibold mb-2  
      delay-300 "
            >
              ¿Que es la seguridad por IA?
            </h2>
            <div className="flex flex-col sm:flex-row items-center text-center mb-10">
              <p className=" paragraph_home">
                La seguridad por inteligencia artificial (IA), también conocida
                como seguridad impulsada por IA, se refiere al uso de técnicas y
                algoritmos de inteligencia artificial para fortalecer y proteger
                sistemas, redes, datos y dispositivos contra amenazas
                cibernéticas y riesgos de seguridad. Esta enfoque combina la
                capacidad analítica y predictiva de la inteligencia artificial
                con el propósito de anticipar, detectar, prevenir y responder a
                posibles ataques o vulnerabilidades en entornos digitales.
              </p>
              <ul className="my-4 ml-10">
                <li className="inline-block hover:animate-pulse delay-75 hover:py-5 duration-300 rounded-lg px-4 py-1 mr-2 ">
                  Detección de Amenazas:
                  <p className="paragraph_list">
                    Utilización de algoritmos de aprendizaje automático para
                    analizar patrones y comportamientos anómalos que podrían
                    indicar posibles amenazas o actividades maliciosas
                  </p>
                </li>
                <li className="inline-block hover:animate-pulse delay-75 hover:py-5 duration-300 rounded-lg px-4 py-1 mr-2">
                  Prevención de Ataques:
                  <p className="paragraph_list">
                    Implementación de sistemas basados en IA para prevenir
                    activamente ataques cibernéticos mediante la identificación
                    y bloqueo proactivo de posibles amenazas.
                  </p>
                </li>
                <li className="inline-block hover:animate-pulse delay-75 hover:py-5 duration-300  rounded-lg px-4 py-1 mr-2 ">
                  Análisis de Big Data:
                  <p className="paragraph_list">
                    Manejo eficiente y rápido de grandes conjuntos de datos (Big
                    Data) para identificar patrones de comportamiento,
                    correlaciones y anomalías que podrían indicar una violación
                    de seguridad.
                  </p>
                </li>
                <li className="inline-block hover:animate-pulse delay-75 hover:py-5 duration-300 rounded-lg px-4 py-1 mr-2 ">
                  Adaptabilidad y Aprendizaje Continuo:
                  <p className="paragraph_list">
                    La seguridad por IA se beneficia de la capacidad de los
                    algoritmos para aprender de nuevas amenazas y adaptarse
                    constantemente a los cambios en el panorama de seguridad
                    cibernética.
                  </p>
                </li>
                <li className="inline-block hover:animate-pulse delay-75 hover:py-5 duration-300  rounded-lg px-4 py-1 mr-2 ">
                  Automatización de Respuestas:
                  <p className="paragraph_list">
                    Implementación de respuestas automáticas a eventos de
                    seguridad detectados, reduciendo el tiempo de reacción y
                    mejorando la eficiencia en la mitigación de riesgos.
                  </p>
                </li>
                <li className="inline-block hover:animate-pulse delay-75 hover:py-5 duration-300 rounded-lg px-4 py-1 mr-2 ">
                  Autenticación Biométrica:
                  <p className="paragraph_list">
                    Integración de técnicas biométricas basadas en IA para
                    mejorar la autenticación de usuarios, como el reconocimiento
                    facial, de voz o de huellas dactilares.
                  </p>
                </li>
                <li className="inline-block hover:animate-pulse delay-75 hover:py-5 duration-300  rounded-lg px-4 py-1 mr-2">
                  Análisis de Vulnerabilidades:
                  <p className="paragraph_list">
                    Utilización de algoritmos para identificar posibles puntos
                    vulnerables en sistemas y redes, permitiendo correcciones
                    proactivas.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QueEsSeguridad;
