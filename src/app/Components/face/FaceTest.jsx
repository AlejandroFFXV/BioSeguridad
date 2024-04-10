"use client";
import { useState } from "react";
import axios from "axios";

const PythonTest = ({ data }) => {
  return <div>{data ? <p>{data.message}</p> : <p></p>}</div>;
};

const FaceTest = () => {
  const [data, setData] = useState(null);

  const handleClick = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:5000/api/data");
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

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
        <PythonTest data={data} />
        <button
          onClick={handleClick}
          className=" btn cube cube-hover "
          disabled
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
        </button>
      </div>
    </>
  );
};

export default FaceTest;
