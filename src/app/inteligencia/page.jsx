import Navbar from "../Components/Navbar";
import Inteligencia from "../Components/inteligencia/Inteligencia";
import LoadingAnimation from "../Components/loading_comp/LoadingComponent";

const inteligencia = () => {
  return (
    <>
      <LoadingAnimation>
        <Navbar />
        <Inteligencia />
      </LoadingAnimation>
    </>
  );
};

export default inteligencia;
