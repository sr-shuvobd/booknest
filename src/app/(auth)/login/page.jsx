'use client'
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { toast } from "react-toastify";

const LoginPage = () => {
const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()


  const handleLogin = async(data) => {
    const {email,password} = data;
    console.log(email,password)

    const { data: res, error } = await authClient.signIn.email({
    email: email, // required
    password: password, // required
    rememberMe: true,
    callbackURL: "/",
});
if(error){
    toast.error(error.message)
  }
  if(res){
    toast.success("Login successful");
  }
  }

  return (
    <div className="flex items-center justify-center bg-gray-200 min-h-[75vh] ">
      <div className="bg-white p-6 rounded-xl space-y-3">
        <form onSubmit={handleSubmit(handleLogin)}>
          <fieldset className="fieldset">
            <legend className="fieldset-legend ">Email</legend>
            <input
              {...register("email",{ required: "Email is Required" })}
              type="email"
              className="input  w-full"
              placeholder="Enter your Email"
            />
          </fieldset>
          {errors.email && <p className="text-red-500">{errors.email.message}</p>}

          <fieldset className="fieldset">
            <legend className="fieldset-legend">Password</legend>
            <input
              {...register("password",{ required: "Password is Required" })}
              type="password"
              className="input w-full"
              placeholder="Enter your Password"
            />
          </fieldset>
          {errors.password && <p className="text-red-500">{errors.password.message}</p>}

          <button className="btn w-full mt-5 bg-[linear-gradient(130deg,#2F5848,#A77E55)] text-white">
            Login
          </button>
        </form>

        <div className="flex flex-col md:flex-row gap-5 mt-5">
        <button className="btn bg-white text-green-700"><FaGoogle/>Login with Google</button>
        <button className="btn bg-white"><FaGithub />Login with Github</button>
        </div>
        <div className="text-center">
            <p className="">Dont’t Have An Account? <Link href="/register" className="text-red-600">Register</Link></p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
