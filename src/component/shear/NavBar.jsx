"use client";
import Link from "next/link";
import React from "react";
import NavLink from "./NavLink";

const NavBar = () => {
  const link = (
  <>
    <li><NavLink href="/">Home</NavLink></li>
    <li><NavLink href="/allbooks">All Books</NavLink></li>
    <li><NavLink href="/myprofile">My Profile</NavLink></li>
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
      <Link href="/login" className="navbar-end">
        <p className="btn bg-[linear-gradient(130deg,#2F5848,#A77E55)] text-white">
          Login
        </p>
      </Link>
    </div>
  );
};

export default NavBar;
