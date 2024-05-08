import FaceTest from "../Components/face/FaceTest";
import Navbar from "../Components/Navbar";
import PrivacyNotice from "../Components/face/PrivacyNotice";
import LoadingComponent from "../Components/loading_comp/LoadingComponent";

function face() {
  return (
    <>
      <LoadingComponent>
        <PrivacyNotice />
        <Navbar />
        <FaceTest />
      </LoadingComponent>
    </>
  );
}

export default face;
