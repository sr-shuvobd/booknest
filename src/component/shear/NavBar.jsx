"use client";
import Link from "next/link";
import React from "react";
import { FaHome } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import { IoBookSharp } from "react-icons/io5";

const NavBar = () => {
  const link = (
    <>
      <Link href="/" className="flex gap-1 items-center">
        <FaHome />
        <li className="">Home</li>
      </Link>
      <Link href="/allbooks" className="flex gap-1 items-center">
        <IoBookSharp />
        <li>All Books</li>
      </Link>
      <Link href="/myprofile" className="flex gap-1 items-center">
        <ImProfile />
        <li>My Profile</li>
      </Link>
    </>
  );
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
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {link}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl text-[#2F5848]">
          BOOK<span className="text-[#A77E55]">NEST</span>{" "}
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-4">{link}</ul>
      </div>
      <Link href="/login" className="navbar-end">
        <p className="btn bg-[linear-gradient(130deg,#2F5848,#A77E55)] text-white">
          Login
        </p>
      </Link>
    </div>
  );
};

export default NavBar;
