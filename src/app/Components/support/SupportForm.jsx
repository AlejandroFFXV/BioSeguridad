"use client";
import { useRef, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";

const SupportForm = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
  });

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
    console.log(user);
    try {
      const res = await axios.post("/api/support", user);
      console.log(res);
      toast("Datos enviados!");
      form.current.reset();
      router.push("/");
    } catch (error) {
      if (error.response && error.response.status === 500) {
        router.push("/error");
      } else {
        console.error(error);
      }
    }
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
                type="email"
                placeholder="E-mail"
                required=""
                name="email"
                onChange={handleChange}
              />
            </li>
            <li className="button-li" style={{ "--i": 2 }}>
              <button className="button-supp">Submit</button>
            </li>
          </ul>
        </form>
      </div>
    </>
  );
};

export default SupportForm;
