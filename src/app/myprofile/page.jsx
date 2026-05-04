"use client";

import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";

import React from "react";

const MyProfile = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;
  
  if (isPending) {
    return <p className="text-center mt-10">Loading...</p>;
  }
  if (!user) {
    return <div className="h-[60vh] flex justify-center items-center">
        <p className="text-center text-2xl mt-10">No user found ! please <Link href='/login' className="text-red-500">Login</Link></p>
    </div> ;
  }
  return (
    <div className="md:min-h-screen flex items-center justify-center bg-[#FAF8F5] px-4">
      <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-sm text-center">
        <div className="flex justify-center">
          <Image
            src={user.image || "/default-avatar.png"}
            alt="profile"
            width={120}
            height={120}
            className="rounded-full border-4 border-[#A77E55] object-cover"
          />
        </div>

        <h1 className="text-2xl font-bold mt-4 text-[#2F5848]">{user.name}</h1>

        <p className="text-gray-500 mt-1">{user.email}</p>

        <div className="border-t my-5"></div>

        <button className="w-full py-2 rounded-full bg-[linear-gradient(130deg,#2F5848,#A77E55)] text-white font-semibold hover:scale-105 transition">
          Update Profile
        </button>
      </div>
    </div>
  );
};

export default MyProfile;
