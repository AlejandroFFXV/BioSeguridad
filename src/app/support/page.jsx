// import WorkingOnIt from "../Components/WorkingOnIt";
import Navbar from "../Components/Navbar";
import LoadingAnimation from "../Components/loading_comp/LoadingComponent";
import SupportForm from "../Components/support/SupportForm";

const Support = () => {
  return (
    <>
      <LoadingAnimation>
        <Navbar />
        <SupportForm />
      </LoadingAnimation>
    </>
  );
};

export default Support;
