const QuienesSomos = () => {
  return (
    <>
      <div className="flex justify-center align-center py-10">
        <div class="card">
          <div class="circle"></div>
          <div class="circle"></div>
          <div class="card-inner">
            <div
              className="text-center hover:text-blue-200 duration-300 delay-300
        dark:text-white text-gray-700 p-4 rounded-lg shadow-md mb-2"
            >
              <h2 className="text-xl sm:text-2xl font-semibold mb-2">
                Nuestro objetivo
              </h2>
              <div className="flex flex-col sm:flex-row items-center text-center mb-10">
                <p className="paragraph_home">
                  Con este proyecto, nuestro principal objetivo es fomentar la
                  comprensión del uso de algoritmos basados en Inteligencia
                  Artificial (IA), al mismo tiempo que buscamos que la
                  implementación de nuestro algoritmo sea de utilidad en
                  diversos procesos empresariales. Como estudiantes y futuros
                  egresados, nos motiva la idea de retribuir a la comunidad que
                  ha sido fundamental en nuestra formación, y ahora deseamos
                  contribuir activamente para beneficiar a dicha comunidad.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-screen"></div>
    </>
  );
};

export default QuienesSomos;
