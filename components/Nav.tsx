/** @format */

"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import useRouter from "next/router";

const Nav = () => {
  return (
    <section className="flex text-xl">
      <div className="flex justify-center"></div>
      <ul className="flex flex-row items-center text-txtclr text-base ">
        <li className="border-transparent hover:border-ytclr hover:text-ytclr px-2 rounded group ">
          <Link href="/">
            <button className="focus:outline-none py-0.5 border-b-2 border-transparent hover:border-current  transition-all hover:text-txtlcr2 align-middle py-1 px-2">
              home
            </button>
          </Link>
        </li>
        <li className="border-transparent hover:border-ytclr hover:text-ytclr px-2 rounded group">
          <Link href="/projects">
            <button className="focus:outline-none py-0.5 border-b-2 border-transparent hover:border-current  transition-all hover:text-txtlcr2 align-middle py-1 px-2">
              projects
            </button>
          </Link>
        </li>
        <li className="border-transparent hover:border-ytclr hover:text-ytclr px-2 rounded group ">
          <Link href="/blog">
            <button className="focus:outline-none py-0.5 border-b-2 border-transparent hover:border-current transition-all hover:text-txtlcr2 align-middle py-1 px-2">
              blog
            </button>
          </Link>
        </li>
        <li className="px-2 rounded group text-gray-700">          
            <h4 className="py-0.5 border-transparent transition-all align-middle py-1 px-2">
              fun
            </h4>
        </li>
      </ul>
    </section>
  );
};

export default Nav;

/*
            <button className="py-1 border-b-2 border-transparent">
*/
