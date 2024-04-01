// import LoadingAnimation from "../Components/LoadingAnimation";
// import WorkingOnIt from "../Components/WorkingOnIt";
import NeroHeadTest from "../Components/NeroHeadTest";
import QuienesSomos from "../Components/about_us/QuienesSomos";
import LoadingComponent from "../Components/loading_comp/LoadingComponent";
function About() {
  return (
    <>
      <LoadingComponent>
        <NeroHeadTest />
        <QuienesSomos />
        {/* <WorkingOnIt /> */}
      </LoadingComponent>
    </>
  );
}

export default About;
