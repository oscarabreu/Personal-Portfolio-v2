"use client"
import React from "react";
import Image from "next/image";
import Menu from  "@/components/Menu";
import {
  AiOutlineGithub,
  AiOutlineApartment
} from "react-icons/ai"
import { BsArrowUpRight } from "react-icons/bs";

/* Do not try this at home. Too lazy to make this shorter. */

const ProjectsSectionAll = () => {
  return (
    <section id="project">
      <div className="flex flex-col md:flex-row max-w-5xl m-auto text-txtclr3">
        <div className = "flex flex-grow justify-center justify-start items-start font-bold">
          <Menu></Menu>
        </div>
        <div className="flex flex-col">
          <h2 className="text-3xl pb-10  font-bold text-hclr flex max-md:pt-3 flex justify-center">Projects</h2>
          <h4 className="text-hclr flex justify-center p-4">Filter by:</h4>
          <ul className="text-sm flex flex flex-wrap justify-center items-center gap-8 pb-10">
              <li className="border rounded px-5 py-1 bg-hclr text-bgclr border-hclr2 hover:bg-hclr2 hover:text-bgclr">View All</li>
                <li className="border rounded px-5 py-1 bg-bgclr text-hclr2 border-hclr2 hover:bg-hclr2 hover:text-bgclr">Fullstack</li>
                <li className="border rounded px-5 py-1 bg-bgclr text-hclr2 border-hclr2 hover:bg-hclr2 hover:text-bgclr">Systems</li>
                <li className="border rounded px-5 py-1 bg-bgclr text-hclr2 border-hclr2 hover:bg-hclr2 hover:text-bgclr">Data</li>
                <li className="border rounded px-5 py-1 bg-bgclr text-hclr2 border-hclr2 hover:bg-hclr2 hover:text-bgclr">Graphics</li>
          </ul>
          <div className="flex flex-col gap-20">
            <div className="w-full relative flex flex-row items-center justify-between sm:m-5 hover:bg-bgclr3 rounded min-h-350 max-h-350">
              <div className="flex justify-end">
                <a 
                  className="w-3/4 max-sm:w-full max-h-300 max-sm:h-full relative group sm:pr-10 "
                  href = "https://www.google.com"
                  target="_blank" rel="noreferrer"
                >
                  <div>
                    <Image 
                      className="w-full h-full object-contain max-sm:opacity-20 max-sm:px-5" 
                      src = "/image1.png"
                      alt = "Ray Tracing Image"
                      width = {1200}
                      height = {900}
                    />
                  </div>
                </a>
              </div>
              <div className="absolute left-0 w-full h-full flex flex-col justify-between max-sm:items-center sm:items-start sm:text-left py-5 md:px-10">
                <p className="font-body3 text-hclr">Graphics</p>
                <h3 className="text-2xl font-bold text-hclr3 w-1/4">Ray-Tracer</h3>
                <p className = "bg-bgclr2 text-sm text-txtclr px-4 py-5 rounded-md max-sm:w-full max-md:w-3/4 md:w-1/2 ">
                  A graphic ray-tracer built from scratch, optimized with CUDA.
                </p>
                <div className = "text-2xl flex flex-gap gap-4 text-txtclr2">
                  <a
                    className="text-hclr3 hover:text-hclr duration-300"
                    href = "https://github.com"
                    target="_blank" rel="noreferrer"
                  >
                    <AiOutlineGithub />
                  </a>
                  <a
                    className="text-hclr3 hover:text-hclr duration-300"
                    href = "https://google.com"
                    target="_blank" rel="noreferrer"
                  >
                    <AiOutlineApartment />
                  </a>
                </div>
                <ul className="text-xs flex gap-2 w-full flex flex-wrap justify-start max-sm:justify-center">
                <li className="border rounded px-2 py-1 bg-bgclr2 text-hclr2 border-hclr2">C++</li>
                  <li className="border rounded px-2 py-1 bg-bgclr2 text-hclr2 border-hclr2">CUDA</li>
                  <li className="border rounded px-2 py-1 bg-bgclr2 text-hclr2 border-hclr2">OptiX</li>
                  <li className="border rounded px-2 py-1 bg-bgclr2 text-hclr2 border-hclr2">Thrust</li>
                  <li className="border rounded px-2 py-1 bg-bgclr2 text-hclr2 border-hclr2">cuRAND</li>
                  <li className="border rounded px-2 py-1 bg-bgclr2 text-hclr2 border-hclr2">NVRTC</li>

                </ul>
              </div>
            </div>
            <div className="w-full relative flex flex-row items-center justify-between sm:p-5 hover:bg-bgclr3 rounded min-h-350 max-h-350">
              <div className="flex justify-start">
                <a 
                  className="w-full h-auto relative group"
                  href = "https://www.google.com"
                  target="_blank" rel="noreferrer"
                >
                  <div>
                    <Image 
                      className="w-3/4 h-full object-contain md:p-5 max-sm:opacity-20 max-sm:w-full max-sm:px-5 "
                      src = "/gameboy.png"
                      alt = "Recuer"
                      width = {1200}
                      height = {900}
                    />
                  </div>
                </a>
              </div>
              <div className="absolute right-0 w-full h-full flex flex-col justify-between max-sm:items-center sm:items-end sm:text-right py-5 md:px-10 ">
                <p className="font-body3 text-hclr text-sm tracking-wide">Graphics / Systems</p>
                <h3 className="text-2xl font-bold text-hclr3 sm:w-1/4">Gameboy Emulator</h3>
                <p className = "bg-bgclr2 text-sm text-txtclr px-4 py-5 rounded-md max-sm:w-full max-md:w-3/4 md:w-1/2">
                  Developed a Gameboy Advance Emulator from scratch, with a special focus on accuracy and performance.
                </p>
                <div className = "text-2xl flex flex-gap gap-4 text-txtclr2">
                  <a
                    className="text-hclr3 hover:text-hclr duration-300"
                    href = "https://github.com"
                    target="_blank" rel="noreferrer"
                  >
                    <AiOutlineGithub />
                  </a>
                  <a
                    className="text-hclr3 hover:text-hclr duration-300"
                    href = "https://google.com"
                    target="_blank" rel="noreferrer"
                  >
                    <AiOutlineApartment />
                  </a>
                  <a
                    className="text-hclr3 hover:text-hclr duration-300"
                    href = "https://google.com"
                    target="_blank" rel="noreferrer"
                  >
                    <BsArrowUpRight />
                  </a>
                </div>
                <ul className="text-xs flex gap-2 w-full flex flex-wrap justify-end max-sm:justify-center">
                  <li className="border rounded px-2 py-1 bg-bgclr2 text-hclr2 border-hclr2">C++</li>
                  <li className="border rounded px-2 py-1 bg-bgclr2 text-hclr2 border-hclr2">OpenGL</li>
                  <li className="border rounded px-2 py-1 bg-bgclr2 text-hclr2 border-hclr2">SDL</li>
                  <li className="border rounded px-2 py-1 bg-bgclr2 text-hclr2 border-hclr2">GDB</li>
                  <li className="border rounded px-2 py-1 bg-bgclr2 text-hclr2 border-hclr2">ARM7TDMI</li>
                  <li className="border rounded px-2 py-1 bg-bgclr2 text-hclr2 border-hclr2">Assembly</li>

                </ul>
              </div>
            </div>
            <div className="w-full relative flex flex-row items-center justify-between sm:p-5 hover:bg-bgclr3 rounded min-h-350 max-h-350">
              <div className="flex justify-end">
                <a 
                  className="w-3/4 max-sm:w-full h-auto max-sm:h-full relative group md:p-5"
                  href = "https://www.google.com"
                  target="_blank" rel="noreferrer"
                >
                  <div>
                    <Image 
                      className="w-full h-full object-contain max-sm:opacity-20 max-sm:px-5 " 
                      src = "/stm32.png"
                      alt = "Embedded Systems"
                      width = {1718}
                      height = {300}
                    />
                  </div>
                </a>
              </div>
              <div className="absolute left-0 w-full h-full flex flex-col justify-between max-sm:items-center sm:items-start sm:text-left py-5 md:px-10">
                <p className="font-body3 text-hclr text-sm tracking-wide">Systems</p>
                <h3 className="text-2xl font-bold text-hclr3 sm:w-1/4">SIDS-Detection Mask</h3>
                <p className = "bg-bgclr2 text-sm text-txtclr px-4 py-5 rounded-md max-sm:w-full max-md:w-3/4 md:w-1/2 ">
                  An embedded O2 Mask that detects whether breathing is normal or abnormal, and alerts the user if the latter. 
                </p>
                <div className = "text-2xl flex flex-gap gap-4 text-txtclr2">
                  <a
                    className="text-hclr3 hover:text-hclr duration-300"
                    href = "https://github.com"
                    target="_blank" rel="noreferrer"
                  >
                    <AiOutlineGithub />
                  </a>
                  <a
                    className="text-hclr3 hover:text-hclr duration-300"
                    href = "https://google.com"
                    target="_blank" rel="noreferrer"
                  >
                    <AiOutlineApartment />
                  </a>
                </div>
                <ul className="text-xs flex gap-2 w-full flex flex-wrap justify-start max-sm:justify-center">
                  <li className="border rounded px-2 py-1 bg-bgclr2 text-hclr2 border-hclr2">C</li>
                  <li className="border rounded px-2 py-1 bg-bgclr2 text-hclr2 border-hclr2">STM32</li>
                  <li className="border rounded px-2 py-1 bg-bgclr2 text-hclr2 border-hclr2">SDA</li>
                  <li className="border rounded px-2 py-1 bg-bgclr2 text-hclr2 border-hclr2">SCL</li>
                  <li className="border rounded px-2 py-1 bg-bgclr2 text-hclr2 border-hclr2">GPIO</li>
                  <li className="border rounded px-2 py-1 bg-bgclr2 text-hclr2 border-hclr2">ASM</li>
                </ul>
              </div>
            </div>
            <div className="w-full relative flex flex-row items-center justify-between sm:p-5 hover:bg-bgclr3 rounded min-h-350 max-h-350">
              <div className="flex justify-start">
                <a 
                  className="w-full h-auto relative group"
                  href = "https://www.google.com"
                  target="_blank" rel="noreferrer"
                >
                  <div>
                    <Image 
                      className="w-3/4 h-full object-contain md:p-5 max-sm:opacity-20 max-sm:w-full max-sm:px-5 "
                      src = "/redis.png"
                      alt = "Redis"
                      width = {1200}
                      height = {900}
                    />
                  </div>
                </a>
              </div>
              <div className="absolute right-0 w-full h-full flex flex-col justify-between max-sm:items-center sm:items-end sm:text-right py-5 md:px-10 ">
                <p className="font-body3 text-hclr text-sm tracking-wide">Systems</p>
                <h3 className="text-2xl font-bold text-hclr3 sm:w-1/4">K/V Store</h3>
                <p className = "bg-bgclr2 text-sm text-txtclr px-4 py-5 rounded-md max-sm:w-full max-md:w-3/4 md:w-1/2">
                  Developed a Key-Value Store from scratch, with a special focus on performance.
                </p>
                <div className = "text-2xl flex flex-gap gap-4 text-txtclr2">
                  <a
                    className="text-hclr3 hover:text-hclr duration-300"
                    href = "https://github.com"
                    target="_blank" rel="noreferrer"
                  >
                    <AiOutlineGithub />
                  </a>
                  <a
                    className="text-hclr3 hover:text-hclr duration-300"
                    href = "https://google.com"
                    target="_blank" rel="noreferrer"
                  >
                    <AiOutlineApartment />
                  </a>
                  <a
                    className="text-hclr3 hover:text-hclr duration-300"
                    href = "https://google.com"
                    target="_blank" rel="noreferrer"
                  >
                    <BsArrowUpRight />
                  </a>
                </div>
                <ul className="text-xs flex gap-2 w-full flex flex-wrap justify-end max-sm:justify-center">
                  <li className="border rounded px-2 py-1 bg-bgclr2 text-hclr2 border-hclr2">C++</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
     </div>
  </section>
  )
}

export default ProjectsSectionAll;

