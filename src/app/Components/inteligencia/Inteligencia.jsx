import Image from "next/image";
import Primera from "@/assets/primer-test.jpg";
import Segunda from "@/assets/Segunda.jpg";

const Inteligencia = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center py-10">
        <div className="card">
          <div className="circle_Ai"></div>
          <div className="circle_Ai"></div>
          <div className="card-inner">
            <div className="text-center hover:text-blue-200 duration-300 delay-300 dark:text-white text-gray-700 p-4 rounded-lg shadow-md mb-2">
              <h2 className="text-xl sm:text-2xl font-semibold mb-2 ">
                Proceso de la Inteligencia Artificial.
              </h2>
              <div className="flex flex-col sm:flex-row items-center text-center mb-10">
                <p className="paragraph_home">
                  El desarrollo del proceso de inteligencia artificial comenzó
                  con la detección de rasgos faciales en un sujeto específico.
                  La inteligencia artificial fue entrenada utilizando el
                  conjunto de datos conocido como Helen, el cual se distingue
                  por su amplia cobertura y diversidad de modelos faciales. Este
                  conjunto de datos comprende una variedad considerable de
                  características faciales, lo que proporciona a los modelos de
                  inteligencia artificial una base sólida y completa para su
                  entrenamiento y perfeccionamiento.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row py-10">
          <div className="py-5 px-5">
            <Image
              src={Primera}
              style={{ width: "240px", height: "240px", margin: "auto" }}
              className="rounded-full"
              alt="Ia"
            />
          </div>
          <div className="py-5 px-5">
            <Image
              src={Segunda}
              style={{ width: "240px", height: "240px", margin: "auto" }}
              className="rounded-full"
              alt="Ia"
            />
          </div>
        </div>
        <div className="py-5 ">
          <div className="cursor-pointer group overflow-hidden p-5 duration-1000 hover:duration-1000 relative w-auto h-auto bg-neutral-800 rounded-xl">
            <div className="group-hover:-top-3 bg-transparent -top-12 -left-12 absolute shadow-yellow-800 shadow-inner rounded-xl transition-all ease-in-out group-hover:duration-1000 duration-1000 w-24 h-24"></div>
            <div className="group-hover:top-60 bg-transparent top-44 left-14 absolute shadow-red-800 shadow-inner rounded-xl transition-all ease-in-out group-hover:duration-1000 duration-1000 w-24 h-24"></div>
            <div className="group-hover:-left-12 bg-transparent top-24 left-56 absolute shadow-sky-800 shadow-inner rounded-xl transition-all ease-in-out group-hover:duration-1000 duration-1000 w-24 h-24"></div>
            <div className="group-hover:-top-44 bg-transparent top-12 left-12 absolute shadow-red-800 shadow-inner rounded-xl transition-all ease-in-out group-hover:duration-1000 duration-1000 w-12 h-12"></div>
            <div className="group-hover:left-44 bg-transparent top-12 left-12 absolute shadow-green-800 shadow-inner rounded-xl transition-all ease-in-out group-hover:duration-1000 duration-1000 w-44 h-44"></div>
            <div className="group-hover:-left-2 bg-transparent -top-24 -left-12 absolute shadow-sky-800 shadow-inner rounded-xl transition-all ease-in-out group-hover:duration-1000 duration-1000 w-64 h-64"></div>
            <div className="group-hover:top-44 bg-transparent top-24 left-12 absolute shadow-sky-500 shadow-inner rounded-xl transition-all ease-in-out group-hover:duration-1000 duration-1000 w-4 h-4"></div>
            <div className="w-full h-full shadow-xl shadow-neutral-900 p-3 bg-neutral-600 opacity-50 rounded-xl flex-col gap-2 flex justify-center">
              <span className="text-neutral-50 font-bold text-xl italic">
                Deteccion inicial y final
              </span>
              <p className="text-neutral-300">
                Se presenta la evolución del algoritmo desarrollado por
                inteligencia artificial, cuyo funcionamiento se basa en
                BlazeFace de corto alcance, especializado en la detección
                facial. Este algoritmo ha evolucionado para incorporar un
                detector de caja única de múltiples objetivos conocido como
                Single Shot MultiBox Detector. Además, se ha optimizado mediante
                el uso de la función de pérdida Expresso + Loss, que define la
                forma en que se calcula el error durante el entrenamiento. La
                ecuación de activación asociada a este proceso refleja la
                transformación no lineal aplicada a la salida de cada neurona en
                la red, desempeñando un papel crucial en la capacidad del
                algoritmo para aprender y adaptarse a los datos de entrada.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Inteligencia;
