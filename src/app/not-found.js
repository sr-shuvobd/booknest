import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex justify-center items-center text-center m-60 container mx-auto bg-gray-100 rounded-2xl">
      <div className=" w-full p-20">
        <h1 className="text-6xl text-red-500">404</h1>
        <p className="text-2xl text-red-500">Oops! Page Not Found</p>
        <Link href='/' className="btn bg-[linear-gradient(130deg,#2F5848,#A77E55)] text-white mt-10">GO Home</Link>
      </div>
    </div>
  );
};

export default NotFound;
