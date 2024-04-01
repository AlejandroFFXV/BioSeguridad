import React from "react";
import Image from "next/image";
import QueEs from "@/assets/que-es.png";
const QuesIA = () => {
  return (
    <>
      <div className="text-center text-white-700 p-4 rounded-lg shadow-md">
        <h2
          className="text-xl sm:text-2xl font-semibold mb-2
         hover:text-orange-600 duration-300 
      delay-300 "
        >
          ¿Que es la seguridad por IA?
        </h2>
        <div className="flex flex-col sm:flex-row items-center text-center mb-10">
          <Image
            src={QueEs}
            alt="Objetivo"
            height={360}
            width={360}
            className="object-cover rounded mr-4 mb-4 sm:mb-0 sm:mr-4 max-w-full"
          />
          <p className="text-white paragraph_home">
            La seguridad por inteligencia artificial (IA), también conocida como
            seguridad impulsada por IA, se refiere al uso de técnicas y
            algoritmos de inteligencia artificial para fortalecer y proteger
            sistemas, redes, datos y dispositivos contra amenazas cibernéticas y
            riesgos de seguridad. Esta enfoque combina la capacidad analítica y
            predictiva de la inteligencia artificial con el propósito de
            anticipar, detectar, prevenir y responder a posibles ataques o
            vulnerabilidades en entornos digitales.
          </p>
          <ul className="my-4 ml-10">
            <li className="inline-block bg-gray-300 rounded-lg px-4 py-1 mr-2 text-gray-700  hover:bg-orange-400 duration-300 ">
              Detección de Amenazas:
              <p className="paragraph_list">
                Utilización de algoritmos de aprendizaje automático para
                analizar patrones y comportamientos anómalos que podrían indicar
                posibles amenazas o actividades maliciosas
              </p>
            </li>
            <li className="inline-block rounded-lg px-4 py-1 mr-2 hover:text-gray-700  hover:bg-orange-400 duration-300">
              Prevención de Ataques:
              <p className="paragraph_list">
                Implementación de sistemas basados en IA para prevenir
                activamente ataques cibernéticos mediante la identificación y
                bloqueo proactivo de posibles amenazas.
              </p>
            </li>
            <li className="inline-block bg-gray-300 rounded-lg px-4 py-1 mr-2 text-gray-700  hover:bg-orange-400 duration-300">
              Análisis de Big Data:
              <p className="paragraph_list">
                Manejo eficiente y rápido de grandes conjuntos de datos (Big
                Data) para identificar patrones de comportamiento, correlaciones
                y anomalías que podrían indicar una violación de seguridad.
              </p>
            </li>
            <li className="inline-block rounded-lg px-4 py-1 mr-2 hover:text-gray-700  hover:bg-orange-400 duration-300">
              Adaptabilidad y Aprendizaje Continuo:
              <p className="paragraph_list">
                La seguridad por IA se beneficia de la capacidad de los
                algoritmos para aprender de nuevas amenazas y adaptarse
                constantemente a los cambios en el panorama de seguridad
                cibernética.
              </p>
            </li>
            <li className="inline-block bg-gray-300 rounded-lg px-4 py-1 mr-2 text-gray-700 hover:bg-orange-400 duration-300">
              Automatización de Respuestas:
              <p className="paragraph_list">
                Implementación de respuestas automáticas a eventos de seguridad
                detectados, reduciendo el tiempo de reacción y mejorando la
                eficiencia en la mitigación de riesgos.
              </p>
            </li>
            <li className="inline-block rounded-lg px-4 py-1 mr-2 hover:text-gray-700  hover:bg-orange-400 duration-300">
              Autenticación Biométrica:
              <p className="paragraph_list">
                Integración de técnicas biométricas basadas en IA para mejorar
                la autenticación de usuarios, como el reconocimiento facial, de
                voz o de huellas dactilares.
              </p>
            </li>
            <li className="inline-block bg-gray-300 rounded-lg px-4 py-1 mr-2 text-gray-700  hover:bg-orange-400 duration-300">
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
    </>
  );
};

export default QuesIA;
