import Link from "next/link";
import { FaGithub, FaGoogle } from "react-icons/fa";

const LoginPage = () => {
  return (
    <div className="flex items-center justify-center bg-gray-200 min-h-[80vh] ">
      <div className="bg-white p-6 rounded-xl space-y-3">
        <form>
          <fieldset className="fieldset">
            <legend className="fieldset-legend ">Email</legend>
            <input type="email" className="input  w-full" placeholder="Enter your Email" />
          </fieldset>

          <fieldset className="fieldset">
            <legend className="fieldset-legend">Password</legend>
            <input type="password" className="input w-full" placeholder="Enter your Password" />
          </fieldset>
          <button className="btn w-full mt-5 bg-[linear-gradient(130deg,#2F5848,#A77E55)] text-white">Login</button>
        </form>

        <div className="flex  gap-5 mt-5">
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
