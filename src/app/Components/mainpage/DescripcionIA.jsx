const DescripcionIA = () => {
  return (
    <div className="flex justify-center py-10">
      <div class="card">
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="card-inner">
          <div
            className="text-center hover:text-blue-200 duration-300 delay-300
        dark:text-white text-gray-700 p-4 rounded-lg shadow-md mb-2"
          >
            <h2 className="text-xl sm:text-2xl font-semibold mb-2">
              Descripción del proyecto
            </h2>
            <div className="flex flex-col sm:flex-row items-center text-center mb-10">
              <p className="paragraph_home">
                El proyecto tiene como objetivo desarrollar una inteligencia
                artificial dedicada a la detección de datos biométricos,
                incluyendo características faciales y vocales. Esta iniciativa
                busca proporcionar una aplicación versátil, con aplicaciones
                tanto en el ámbito empresarial como educativo. La finalidad es
                simplificar el acceso al mundo de la creación de inteligencias
                artificiales, permitiendo que tanto empresas como instituciones
                educativas puedan beneficiarse de esta tecnología de manera más
                accesible y eficiente.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DescripcionIA;
