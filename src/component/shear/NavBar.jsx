"use client";

import Link from "next/link";
import React from "react";
import NavLink from "./NavLink";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";

const NavBar = () => {
  const link = (
    <>
      <li>
        <NavLink href="/">Home</NavLink>
      </li>
      <li>
        <NavLink href="/allbooks">All Books</NavLink>
      </li>
      <li>
        <NavLink href="/myprofile">My Profile</NavLink>
      </li>
    </>
  );

  const { data: session ,isPending } = authClient.useSession();
  const user = session?.user;

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow gap-3"
          >
            {link}
          </ul>
        </div>
        <Link href="/" className="btn btn-ghost text-xl text-[#2F5848]">
          BOOK<span className="text-[#A77E55]">NEST</span>{" "}
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-4">{link}</ul>
      </div>
      <div className="navbar-end">
        {isPending? <span className="loading loading-spinner text-error"></span> : user ? (
          <>
            <div className="flex flex-col md:flex-row items-center gap-4 px-4 py-2 rounded-full  transition-all duration-300">
              <Image
                src={user.image || "https://cdn-icons-png.freepik.com/512/3135/3135715.png"}
                alt={user.name || "img"}
                width={45}
                height={45}
                className="rounded-full border-2 border-[#A77E55]"
              />

              <div className="flex flex-col leading-tight">
                <p className="text-sm text-gray-500">Welcome back</p>
                <h1 className="font-semibold text-[#2F5848]">{user.name}</h1>
              </div>

              <button onClick={async ()=> await authClient.signOut()} className="ml-3 px-4 py-2 text-sm rounded-full bg-[linear-gradient(130deg,#2F5848,#A77E55)] text-white hover:scale-105 transition-all duration-200">
                Logout
              </button>
            </div>
          </>
        ) : (
          <Link href="/login" className="navbar-end">
            <p className="btn bg-[linear-gradient(130deg,#2F5848,#A77E55)] text-white">
              Login
            </p>
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavBar;
