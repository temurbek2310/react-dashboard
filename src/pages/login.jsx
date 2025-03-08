import { Button } from "../components/button";
import { AuthContext } from "../context/authContext";
import axiosInstance from "../api/axios";
import React from "react";
import { useNavigate } from "react-router";

function Login() {
  const navigate = useNavigate();
  const { token, setToken } = React.useContext(AuthContext);

  const onSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const email = form.get("email");
    const password = form.get("password");

    console.log({ email, password });

    try {
      const response = await axiosInstance.post("/login", { email, password });
      console.log(response.data);
      setToken(response.data.token);
      localStorage.setItem("token", response.data.token);
      alert(response.data.message);
      navigate("/");
    } catch (error) {
      console.log(error);
      alert(error.response.data.message);
    }
  };
  return (
    <div className="flex size-full items-center justify-center bg-white text-center">
      <form
        className="flex w-full max-w-80 flex-col gap-6 rounded-md p-5 shadow-lg"
        onSubmit={onSubmit}
      >
        <h2 className="text-start text-4xl font-semibold text-black">Login</h2>
        <section className="flex flex-col items-start gap-2">
          <label className="text-lg font-semibold text-gray-800">Email</label>
          <input
            name="email"
            id="email"
            type="email"
            placeholder="Enter your email"
            className="w-full rounded-sm bg-white px-2 py-1.5 text-sm text-black outline-none ring-1 ring-gray-400 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-500"
          />
        </section>

        <section className="flex flex-col items-start gap-2">
          <label className="text-lg font-semibold text-gray-800">
            Password
          </label>
          <input
            name="password"
            id="password"
            type="password"
            placeholder="Enter your password"
            className="w-full rounded-sm bg-white px-2 py-1.5 text-sm text-black outline-none ring-1 ring-gray-400 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-500"
          />
        </section>
        <Button type="submit" variant="indigo" size="lg">
          Login
        </Button>
      </form>
    </div>
  );
}

export default Login;
