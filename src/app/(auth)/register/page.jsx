"use client";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaGithub, FaGoogle, FaRegEye } from "react-icons/fa";
import { IoEyeOffSharp } from "react-icons/io5";
import { toast } from "react-toastify";

const RegisterPage = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const handleRegister = async (data) => {
    const { name, photo, email, password } = data;

    const { data: res, error } = await authClient.signUp.email({
      name: name,
      email: email,
      password: password,
      image: photo,
      callbackURL: "/login",
    });

    if (error) {
      toast.error(error.message);
    }

    if (res) {
      toast.success("Signup successful");
      router.push("/login");
    }
  };

  const [isPass, setIsPass] = useState(true);

  const googleRegister = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
  };

  const githubRegister = async () => {
    const data = await authClient.signIn.social({
      provider: "github",
    });
  };

  return (
    <div className="flex items-center justify-center bg-gray-200 min-h-[75vh] ">
      <div className="bg-white p-6 rounded-xl space-y-3">
        <form onSubmit={handleSubmit(handleRegister)}>
          <fieldset className="fieldset">
            <legend className="fieldset-legend ">Name</legend>
            <input
              {...register("name", { required: "Name is Required" })}
              type="text"
              className="input  w-full"
              placeholder="Enter your Name"
            />
          </fieldset>
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}

          <fieldset className="fieldset">
            <legend className="fieldset-legend ">Image URL</legend>
            <input
              {...register("photo", { required: "Image URL is Required" })}
              type="text"
              className="input  w-full"
              placeholder="Enter your Image URL"
            />
          </fieldset>
          {errors.photo && (
            <p className="text-red-500">{errors.photo.message}</p>
          )}

          <fieldset className="fieldset">
            <legend className="fieldset-legend ">Email</legend>
            <input
              {...register("email", { required: "Email is Required" })}
              type="email"
              className="input  w-full"
              placeholder="Enter your Email"
            />
          </fieldset>
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}

          <fieldset className="fieldset relative">
            <legend className="fieldset-legend">Password</legend>
            <input
              {...register("password", { required: "Password is Required" })}
              type={isPass ? "password" : "text"}
              className="input w-full"
              placeholder="Enter your Password"
            />
            <span
              onClick={() => setIsPass(!isPass)}
              className="absolute right-3 top-3 text-2xl"
            >
              {isPass ? <FaRegEye /> : <IoEyeOffSharp />}
            </span>
          </fieldset>
          {errors.password && (
            <p className="text-red-500">{errors.password.message}</p>
          )}

          <button className="btn w-full mt-5 bg-[linear-gradient(130deg,#2F5848,#A77E55)] text-white">
            Register
          </button>
        </form>

        <div className="flex flex-col md:flex-row  gap-5 mt-5">
          <button
            onClick={() => googleRegister()}
            className="btn bg-white text-green-700"
          >
            <FaGoogle />
            Register with Google
          </button>

          <button onClick={() => githubRegister()} className="btn bg-white">
            <FaGithub />
            Register with Github
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;