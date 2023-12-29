/** @format */

"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import useRouter from "next/router";

const Nav = () => {
  return (
    <section className="flex text-base">
      <div className="flex justify-center"></div>
      <ul className="flex flex-row items-center max-md:mt-5 max-md:mb-16 md:mt-8 md:pb-16">
        <li className="border-transparent hover:border-hclr hover:text-hclr2 px-2 rounded group text-hclr3 ">
          <Link href="/">
            <button className="focus:outline-none py-0.5 border-b-2 border-transparent hover:border-current text-hclr2 transition-all hover:text-txtlcr2 align-middle py-1 px-2">
              home
            </button>
          </Link>
        </li>
        <li className="border-transparent hover:border-hclr hover:text-hclr2 px-2 rounded group">
          <Link href="/projects">
            <button className="focus:outline-none py-0.5 border-b-2 border-transparent hover:border-current text-gray-100 transition-all hover:text-txtlcr2 align-middle py-1 px-2">
              projects
            </button>
          </Link>
        </li>
        <li className="border-transparent hover:border-hclr hover:text-hclr2 px-2 rounded group ">
          <Link href="/blog">
            <button className="focus:outline-none py-0.5 border-b-2 border-transparent hover:border-current text-gray-100 transition-all hover:text-txtlcr2 align-middle py-1 px-2">
              blog
            </button>
          </Link>
        </li>
        <li className="border-transparent hover:border-hclr hover:text-hclr2 px-2 rounded group">
          <Link href="/fun">
            <button className="focus:outline-none py-0.5 border-b-2 border-transparent hover:border-current  text-gray-100 transition-all hover:text-txtlcr2 align-middle py-1 px-2">
              fun
            </button>
          </Link>
        </li>
      </ul>
    </section>
  );
};

export default Nav;

/*
            <button className="py-1 border-b-2 border-transparent">
*/
