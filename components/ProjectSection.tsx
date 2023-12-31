/** @format */

"use client";
import React from "react";
import Nav from "@/components/Nav";
import Image from "next/image";
import Profile from "@/components/Profile";
import {
  AiOutlineGithub,
  AiOutlineApartment,
  AiFillCaretLeft,
  AiFillCaretRight,
} from "react-icons/ai";
import { BsArrowUpRight } from "react-icons/bs";
import { featuredProjects } from "data";
import Project from "@/components/Project"
import Link from "next/link";

interface ProfItem {
    label: string;
    page: string;
  }
  
  const PROF_ITEMS: Array<ProfItem> = [
    {
      label: "Deep Learning",
      page: "https://www.dropbox.com/scl/fi/mt22pey65wsmx5h1i6yjt/Oscar-Abreu-Resume.pdf?rlkey=yo30u4gbgnntnioptp8f687l6&dl=0",
    },
    {
      label: "Graphics",
      page: "mailto:oja227@nyu.edu",
    },
    {
        label: "Systems",
        page: "mailto:oja227@nyu.edu",
    },
    {
        label: "All",
        page: "mailto:oja227@nyu.edu",
    },

  ];
  

// animate-fadeIn animation-delay-2 First DIV if you want animation fade-in
const ProjectSection = () => {
  return (
    <section id="home">
      <div className="flex flex-col max-w-5xl m-auto text-txtclr text-lg">
        <div className="flex justify-center md:justify-start pt-4 pb-12">
          <Nav></Nav>
        </div>
        <h1 className="text-4xl pb-2 font-bold max-md:text-center">Projects</h1>
        {/* Add something useful here regarding Projects? */}
        <div className="flex flex-col md:flex-row pb-0 justify-between">
            <div className="flex flex-col space-y-2 md:w-2/5">
                <h4 className="text-sm text-gray-500 max-md:text-center">By name</h4>
                <div className="relative pb-4 ">
                    <input type="text" aria-label="Search projects" placeholder="Search projects" className="block w-full rounded-md px-4 py-1 focus:border-primary-500 focus:ring-primary-500 border-gray-900 bg-gray-800 text-gray-100"></input>
                    <svg className="absolute right-3 top-2 h-5 w-5 text-gray-400 dark:text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </div>
            </div>
            <div className="flex flex-col space-y-2 pb-4 md:w-3/5">
                <h4 className="text-sm text-gray-500 md:text-end max-md:text-center">By category</h4>
                <div className=" text-base flex flex-row jusify-center md:justify-end">
                    <div className="space-x-2 max-md:w-full flex flex-row flex-wrap max-md:justify-center">
                        {PROF_ITEMS.map((item, idx) => {
                            return (
                            <Link legacyBehavior key={idx} href={item.page}>
                                <a
                                className={`block md:inline-block rounded ${
                                    "bg-hclr text-gray-800 border-gray-800 hover:bg-ytclr whitespace-nowrap"
                                } hover:text-bgclr border px-3 py-1`}
                                >
                                {item.label}
                                </a>
                            </Link>
                            );
                        })}
                        </div>
                </div>
            </div>
        </div>
        <hr></hr>
        <div className="flex flex-col py-6 justify-evenly">
            <Project 
                title="Multithreaded Ray Tracer"
                category="Graphics"
                description="I implemented a multithreaded ray tracer in C++ that uses Bounding Volume Hierarchies
                to accelerate ray-object intersection tests. I also implemented a CUDA version of the ray tracer" 
                technologies={["C++", "CUDA", "OptiX", "Thrust", "cuRAND", "NVRTC"]}
                imageSrc="/nvidiart.png"
                githubLink="https://github.com/project-link"
                projectLink="https://project-link.com"
            />
            <Project 
                title="Wireframe Renderer"
                category="Graphics"
                description="I implemented a wireframe renderer using the SDL2 library an TGA in C++ that allows users to load in .obj files and render them in a 3D space."
                technologies={["C++", "CUDA", "OptiX", "Thrust", "cuRAND", "NVRTC"]}
                imageSrc="/african.png"
                githubLink="https://github.com/project-link"
                projectLink="https://project-link.com"
            />
            <Project 
                title="Gameboy Advanced Emulator"
                category="Graphics"
                description="I implemented a Gameboy Advanced emulator in C++.  "
                technologies={["C++", "CUDA", "OptiX", "Thrust", "cuRAND", "NVRTC"]}
                imageSrc="/gameboy.png"
                githubLink="https://github.com/project-link"
                projectLink="https://project-link.com"
            />
            <Project 
                title="Recuer"
                category="Web"
                description="I implemented a message-to-the-future fullstack web application that allows users to send messages to themselves in the future via SMS, SES, via the Twilio API."
                technologies={["C++", "CUDA", "OptiX", "Thrust", "cuRAND", "NVRTC"]}
                imageSrc="/sowabi.png"
                githubLink="https://github.com/project-link"
                projectLink="https://project-link.com"
            />
            <Project 
                title="Redis"
                category="Distributed Systems"
                description="I implemented a simplified version of Redis in C++ that supports the GET, SET, DEL, and EXPIRE commands."
                technologies={["C++", "CUDA", "OptiX", "Thrust", "cuRAND", "NVRTC"]}
                imageSrc="/redis.png"
                githubLink="https://github.com/project-link"
                projectLink="https://project-link.com"
            />
        </div>
      </div>
    {/* </div> */}
    </section>
  );
};

export default ProjectSection;
