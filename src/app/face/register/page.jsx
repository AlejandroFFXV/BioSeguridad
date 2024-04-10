import React from "react";
// import TesteoImage from "../Components/testeo/TestImage";
import FaceRegister from "@/app/Components/face_register/FaceRegister";
import LoadingComponent from "@/app/Components/loading_comp/LoadingComponent";
import Navbar from "@/app/Components/Navbar";

const register = () => {
  return (
    <>
      <LoadingComponent>
        <Navbar />
        <FaceRegister />
      </LoadingComponent>
    </>
  );
};

export default register;
