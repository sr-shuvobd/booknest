'use client'
import { FaGithub, FaGoogle } from "react-icons/fa";

const RegisterPage = () => {

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const photo = e.target.photo;
    const email = e.target.email;
    const password = e.target.password;
    console.log(name.value,photo.value, email.value , password.value)
  }
  return (
    <div className="flex items-center justify-center bg-gray-200 min-h-[75vh] ">
      <div className="bg-white p-6 rounded-xl space-y-3">
        <form onSubmit={handleRegister}>
            <fieldset className="fieldset">
            <legend className="fieldset-legend ">Name</legend>
            <input name="name" type="text" className="input  w-full" placeholder="Enter your Name" />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend ">Image URL</legend>
            <input name="photo" type="text" className="input  w-full" placeholder="Enter your Image URL" />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend ">Email</legend>
            <input name="email" type="email" className="input  w-full" placeholder="Enter your Email" />
          </fieldset>

          <fieldset className="fieldset">
            <legend className="fieldset-legend">Password</legend>
            <input name="password" type="password" className="input w-full" placeholder="Enter your Password" />
          </fieldset>
          <button className="btn w-full mt-5 bg-[linear-gradient(130deg,#2F5848,#A77E55)] text-white">Register</button>
        </form>

        <div className="flex flex-col md:flex-row  gap-5 mt-5">
        <button className="btn bg-white text-green-700"><FaGoogle/>Register with Google</button>
        <button className="btn bg-white"><FaGithub />Register with Github</button>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
