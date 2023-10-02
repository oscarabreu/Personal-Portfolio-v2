"use client"
import React from "react";
import Image from "next/image";
import Link from "next/link";
import useRouter from "next/router";

const Menu = () => {
  return (
    <section className="flex flex-col min-w-140">
      <div className="flex justify-center">
        <Image
          src="/headshot1.png"
          alt="Oscar's Headshot"
          height={90}
          width={90}
          priority
          className="rounded-full"
        />
      </div>
      <ul className="flex flex-row text-txtclr3 md:flex-col items-center font-bold py-6">
        <li className="border-transparent hover:border-hclr hover:text-hclr2 max-md:mx-5 py-1 md:my-1 rounded group">
          <Link href="/">
          <button className="focus:outline-none py-0.5 border-b-2 border-transparent hover:border-current">
              Home
            </button>
          </Link>
        </li>
        <li className="border-transparent hover:border-hclr hover:text-hclr2 max-md:mx-5 py-1 md:my-1 rounded group">
          <Link href="/projects">
            <button className="focus:outline-none py-0.5 border-b-2 border-transparent hover:border-current">
              Projects
            </button>
          </Link>
        </li>
        <li className="border-transparent hover:border-hclr hover:text-hclr2 max-md:mx-5 py-1 md:my-1 rounded group ">
          <Link href="/blog">
            <button className="focus:outline-none py-0.5 border-b-2 border-transparent hover:border-current">
              Blog
            </button>
          </Link>
        </li>
        <li className="border-transparent hover:border-hclr hover:text-hclr2 max-md:mx-5 py-1 md:my-1 rounded group">
          <Link href="/fun">
            <button className="focus:outline-none py-0.5 border-b-2 border-transparent hover:border-current">
              Fun
            </button>
          </Link>
        </li>
      </ul>
    </section>
  )
}

export default Menu;

/*
            <button className="py-1 border-b-2 border-transparent">
*/