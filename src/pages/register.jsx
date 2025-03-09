import { Button } from "../components/button";
import axiosInstance from "../api/axios";
import React from "react";
import { NavLink, useNavigate } from "react-router";

function Register() {
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get("name");
    const email = form.get("email");
    const password = form.get("password");

    console.log({ name, email, password });

    try {
      const response = await axiosInstance.post("/register", {
        name,
        email,
        password,
      });
      console.log(response.data);
      alert(response.data.message);
      navigate("/login");
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
        <h2 className="text-start text-4xl font-semibold text-black">
          Register
        </h2>
        <section className="flex flex-col items-start gap-2">
          <label className="text-lg font-semibold text-gray-800">Name</label>
          <input
            name="name"
            id="name"
            type="text"
            placeholder="Enter your name"
            className="w-full rounded-sm bg-white px-2 py-1.5 text-sm text-black outline-none ring-1 ring-gray-400 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-500"
          />
        </section>

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
            autoComplete="username"
            placeholder="Enter your password"
            className="w-full rounded-sm bg-white px-2 py-1.5 text-sm text-black outline-none ring-1 ring-gray-400 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-500"
          />
        </section>
        <Button type="submit" variant="indigo" size="lg">
          Register
        </Button>
        <p className="text-sm text-gray-500">Already have an account?</p>
        <NavLink to="/login" className={"-mt-3"}>
          Login
        </NavLink>
      </form>
    </div>
  );
}

export default Register;
