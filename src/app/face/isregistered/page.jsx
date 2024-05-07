import React from "react";
import FaceMain from "@/app/Components/face/FaceMain";
import LoadingComponent from "@/app/Components/loading_comp/LoadingComponent";
import Navbar from "@/app/Components/Navbar";
const isRegistered = () => {
  return (
    <LoadingComponent>
      <Navbar />
      <FaceMain />
    </LoadingComponent>
  );
};

export default isRegistered;
