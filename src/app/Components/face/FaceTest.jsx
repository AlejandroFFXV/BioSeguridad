const FaceTest = () => {
  return (
    <>
      <div className="flex space-x-20 justify-center items-center h-screen">
        <a href="/face/register" className="btn cube cube-hover" type="button">
          <div className="bg-top">
            <div className="bg-inner"></div>
          </div>
          <div className="bg-right">
            <div className="bg-inner"></div>
          </div>
          <div className="bg">
            <div className="bg-inner"></div>
          </div>
          <div className="text">Ya te registraste? No? Haz clic!</div>
        </a>
        <a
          href="/face/isregistered"
          className="btn cube cube-hover"
          type="button"
        >
          <div className="bg-top">
            <div className="bg-inner"></div>
          </div>
          <div className="bg-right">
            <div className="bg-inner"></div>
          </div>
          <div className="bg">
            <div className="bg-inner"></div>
          </div>
          <div className="text">Prueba la app!</div>
        </a>
      </div>
    </>
  );
};

export default FaceTest;
