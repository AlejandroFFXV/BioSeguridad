const ParaQueIA = () => {
  return (
    <div className="flex justify-center align-center py-10">
      <div className=" card">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="card-inner">
          <div
            className="text-center hover:text-blue-200 duration-300 delay-300
        dark:text-white text-gray-700 p-4 rounded-lg shadow-md mb-2"
          >
            <h2 className="text-xl sm:text-2xl font-semibold mb-2 ">
              ¿Para que se utiliza las IA?
            </h2>
            <div className="flex flex-col sm:flex-row items-center text-center mb-10">
              <p className="paragraph_home">
                La inteligencia artificial desempeña un papel en la seguridad
                biométrica, proporcionando mejoras significativas en la
                precisión, la eficiencia y la confiabilidad de los sistemas de
                identificación basados en características únicas de individuos.
                Tambien cuenta con un gran uso en los siguientes aspectos:
                creación de recomendaciones personalizadas para los
                consumidores, utilizando datos como sus búsquedas y compras
                anteriores, así como otros comportamientos en línea. Su
                relevancia se destaca especialmente en el ámbito comercial,
                donde contribuye de manera significativa a la optimización de
                productos, la planificación de inventarios y la mejora de los
                procesos logísticos, entre otros aspectos clave.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParaQueIA;
