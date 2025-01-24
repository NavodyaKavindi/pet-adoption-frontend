import { useState } from "react";
import axios from "axios";
import "./login.css";
import { IoHandLeft } from "react-icons/io5";

export const backendUrl = import.meta.env.VITE_BACKEND_URL;

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin() {
    axios
      .post(backendUrl + "/api/users/login", {
        email: email,
        password: password,
      })
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        const loggedInUserType = res.data.user.type;

        if (loggedInUserType == "adopter") {
          window.location.href = "/";
        } else if (loggedInUserType == "admin") {
          window.location.href = "/admin";
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="w-full h-[100vh] bg-blue-600 pic-bg flex justify-center items-center">
      <div className="w-[400px] h-[400px] backdrop-blur-md rounded-lg flex flex-col items-center justify-center relative">
        <h1 className="text-3xl p-[15px] text-white text-center absolute top-[40px]">
          Login
        </h1>

        <input
          type="text"
          placeholder="Enter your email address"
          className="w-[80%] bg-[#00000000]  border-[2px] border-y-black text-white placeholder:text-white h-[50px] px-[5px] mb-[20px]"
          defaultValue={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />

        <input
          type="password"
          placeholder="Enter your password "
          className="w-[80%] bg-[#00000000]  border-[2px] border-black text-white placeholder:text-white h-[50px] px-[5px] "
          defaultValue={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />

        <button
          className="w-[80%] absolute bottom-[40px] bg-red-600 text-white h-[50px]"
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
}
