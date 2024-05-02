"use client";
import { useRef, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";

const FaceRegister = () => {
  const [user, setUser] = useState({
    name: "",
  });
  const [file, setFile] = useState(null);
  const form = useRef(null);
  const router = useRouter();

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", user.name);
    if (file) {
      formData.append("image", file);
    }
    console.log(user);
    const res = await axios.post("/api/faces", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log(res);
    toast("Datos enviados!");
    form.current.reset();
    router.push("/");
  };
  return (
    <>
      <ToastContainer />
      <div className="flex items-center justify-center h-screen">
        <form className="form" onSubmit={handleSubmit} ref={form}>
          <ul className="wrapper">
            <li className="li-supp" style={{ "--i": 4 }}>
              <input
                className="input-supp"
                type="text"
                placeholder="Name"
                required=""
                name="name"
                onChange={handleChange}
              />
            </li>
            <li className="li-supp" style={{ "--i": 3 }}>
              <input
                className="input-supp"
                type="file"
                placeholder="your photo"
                required=""
                name="image"
                onChange={(e) => {
                  setFile(e.target.files[0]);
                }}
              />
            </li>
            <li className="button-li" style={{ "--i": 2 }}>
              <button className="button-supp">Submit</button>
            </li>
          </ul>
        </form>
        {file && (
          <img
            className="w-1/4 h-full object-contain ml-10"
            src={URL.createObjectURL(file)}
            alt=""
          ></img>
        )}
      </div>
    </>
  );
};

export default FaceRegister;
