import Navbar from "../Components/Navbar";
import WorkingOnIt from "../Components/WorkingOnIt";
import FaqsForm from "../Components/faqs/FaqsForm";
import LoadingAnimation from "../Components/loading_comp/LoadingComponent";

const Faqs = () => {
  return (
    <>
      <LoadingAnimation>
        <Navbar />
        <FaqsForm />
      </LoadingAnimation>
    </>
  );
};

export default Faqs;
