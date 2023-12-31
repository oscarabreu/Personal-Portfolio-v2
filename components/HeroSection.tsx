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

const skills = [
  { skill: "C++" },
  { skill: "CUDA" },
  { skill: "OpenGL" },
  { skill: "SDL2" },
  { skill: "Go" },
  { skill: "Python" },
  { skill: "Numpy/Pandas" },
  { skill: "TensorFlow" },
  { skill: "Typescript" },
  { skill: "Next" },
  { skill: "AWS Lambda" },
  { skill: "EventBridge" },
  { skill: "API Gateway" },
  { skill: "SNS/SQS" },
  { skill: "gRPC" },
  { skill: "Docker" },
  { skill: "Kubernetes" },
  { skill: "PostgreSQL" },
  { skill: "MongoDB" },
  { skill: "DynamoDB" },
  { skill: "Redis" },
  { skill: "S3" },
  { skill: "VPC/NAT" },
];

// animate-fadeIn animation-delay-2 First DIV if you want animation fade-in
const HeroSection = () => {
  return (
    <section id="home">
      {/* Div for the entire vertical container */}
      <div className="flex flex-col max-w-4xl m-auto text-txtclr text-lg">
        {/* Div for the nav bar */}
        <div className="flex justify-center md:justify-start pt-4 pb-12">
          <Nav></Nav>
        </div>
        {/* Div for the profile + about text (1/4 width = pfp, 3/4 width = text)*/}
        <div className="flex flex-row max-md:flex-col pb-4">
          <div className="flex flex-col md:w-1/3 justify-center">
            <Profile></Profile>
          </div>
          <div className="flex flex-col md:w-2/3 space-y-4 text-base">
            <h2 className="text-3xl font-bold flex max-md:justify-center max-md:pt-8">
              Hey, I am&nbsp;<span className="text-hclr">Oscar</span>
            </h2>
            {/* <h2 className="font-bold max-md:text-center">About me:</h2> */}
            <p className="max-md:flex max-md:justify-center text-base">
              Welcome to my page! I first embarked on my academic path with a BS
              in Biochemistry at Binghamton University, only to find my passion
              within Software Engineering. It all started with a hobby in
              Arduino electronics, which blossomed into a deep-seated passion
              for computer science. This led me to the New York University
              Bridge to Tandon program, where I gained proficiency in the
              fundamentals and successfully earned my place in the Master of
              Science in Computer Engineering program.
            </p>
            <p className="max-md:justify-center text-base">
              I&apos;ve independently explored myriad fields in Software and
              Computer Engineering though projects and coursework, and narrowed
              my passions toward&nbsp;
              <span className="text-hclr">
                Distributed Systems, Deep Learning,
              </span>{" "}
              and <span className="text-hclr">Graphics Programming.</span> More
              specifically, I am interested in documenting and implementing work
              pertaining to:{" "}
              <span className="text-hclr">
                Transformers (Vision, NLP and RecSys), Rendering, Microservices
              </span>{" "}
              and
              <span className="text-hclr"> Databases.</span>
            </p>
            {/* <p>
              For fun I enjoy jogging in Forest Park, drawing pixel-art, trying
              different NYC coffee shops, reading, and practicing the piano.
              This year, I am learning how to play soccer with BetterPlayer.{" "}
              <span className="italic">Fun tab coming soon!</span>
            </p> */}
            {/* <ul className="pb-10 flex flex-col justify-center">
              <b>Reading List:</b>
              <br></br>
              <li className="italic">
                Designing Data Intensive Applications - Kleppmann
              </li>
              <li className="italic">
                Machine Learning Design Patterns - Lakshmanan
              </li>
              <li className="italic">Physically Based Rendering - Pharr</li>
              <li className="italic">Sophies World - Gaarder</li>
            </ul> */}
            {/* <div>
              <Footer></Footer>
            </div> */}
          </div>
        </div>
        <hr></hr>
        <div className="flex flex-col md:flex-row py-4">
          <div className="w-1/8 flex justify-center items-center text-hclr md:px-2 max-md:pb-4">
            Skills:
          </div>
          {/* <h4 className="flex justify-center items-center text-sm text-hclr ">
            Skills
          </h4> */}
          <div className="w-7/8 flex flex-wrap flex-row justify-center text-xs">
            {skills.map((item, idx) => {
              return (
                <p
                  key={idx}
                  className="bg-hclr text-bgclr px-3 py-1 mx-1 my-1 rounded"
                >
                  {item.skill}
                </p>
              );
            })}
          </div>
        </div>
        <hr></hr>
        {/* Div for the entire Featured Project container */}
        <div className="flex flex-row h-auto justify-center items-center py-4 ">
          <div>
            <a
              className="flex items-center hover:text-hclr text-3xl mr-4"
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillCaretLeft />
            </a>
          </div>
          {/* Div for the project container */}
          <div className="relative flex">
            <div
              className=" flex flex-col justify-between md:items-start max-md:absolute max-md:items-center max-md:justify-center max-md:space-y-4 
                              top-0 left-0 right-0 bottom-0 flex flex-col z-20 lg:w-1/2 mr-4
                              "
            >
              <p>Featured Project</p>
              <h3 className="text-2xl font-bold text-hclr">Ray-Tracer</h3>
              <p className="text-sm max-md:text-center text-txtclr">
                {" "}
                A graphic ray-tracer built from scratch, optimized with CUDA{" "}
              </p>
              <div className="text-2xl flex flex-gap gap-4 flex-row">
                <a
                  className="text-txtclr hover:text-hclr "
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiOutlineGithub />
                </a>
                <a
                  className="text-txtclr hover:text-hclr "
                  href="https://google.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiOutlineApartment />
                </a>
              </div>
              <ul className="text-xs flex gap-1 flex flex-wrap max-md:justify-center">
                <li className="border rounded px-2 py-1 bg-bgclr text-hclr border-hclr">
                  C++
                </li>
                <li className="border rounded px-2 py-1 bg-bgclr text-hclr border-hclr">
                  CUDA
                </li>
                <li className="border rounded px-2 py-1 bg-bgclr text-hclr border-hclr">
                  OptiX
                </li>
                <li className="border rounded px-2 py-1 bg-bgclr text-hclr border-hclr">
                  Thrust
                </li>
                <li className="border rounded px-2 py-1 bg-bgclr text-hclr border-hclr">
                  cuRAND
                </li>
                <li className="border rounded px-2 py-1 bg-bgclr text-hclr border-hclr">
                  NVRTC
                </li>
              </ul>
            </div>
            <div>
              <Image
                className="flex max-md:opacity-20 py-2 max-h-300 mx-auto"
                src="/image1.png"
                alt="Ray Tracing Image"
                width={900}
                height={600}
                priority
              />
            </div>
          </div>
          <div>
            <a
              className="flex items-center hover:text-hclr text-3xl ml-4"
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillCaretRight />
            </a>
          </div>
        </div>
        <hr></hr>
        <div className="flex relative flex-col md:flex-row text-sm">
          <div className="flex flex-col text-center justify-center md:w-1/3 py-4 px-2">
            <h4 className="pb-4"> Recent Blogs:</h4>
            <div className="pb-4">
              <a href="https://pluh.com" className="underline text-hclr">
                {" "}
                Intuition for Dynamic Programming - 10 Comprehensive Problems &
                Explanations
              </a>
              <br></br>
              <div className="flex flex-row flex-wrap justify-center pt-4">
                <p className="text-hclr border border-hclr px-2 py-1 mx-1 my-1 text-xs rounded">
                  Data Structures
                </p>
                <p className="text-hclr border border-hclr px-2 py-1 mx-1 my-1 text-xs rounded">
                  Python
                </p>
                <p className="text-hclr border border-hclr px-2 py-1 mx-1 my-1 text-xs rounded">
                  C++
                </p>
              </div>
            </div>
            <div className="pb-4">
              <a href="https://pluh.com" className="underline text-hclr">
                {" "}
                Constructing a Swin Transformer - Intuition & Code
              </a>
              <br></br>
              <div className="flex flex-row flex-wrap justify-center pt-4">
                <p className="text-hclr border border-hclr px-2 py-1 mx-1 my-1 text-xs rounded">
                  Computer Vision
                </p>
                <p className="text-hclr border border-hclr px-2 py-1 mx-1 my-1 text-xs rounded">
                  Transformers
                </p>
                <p className="text-hclr border border-hclr px-2 py-1 mx-1 my-1 text-xs rounded">
                  Python
                </p>
              </div>
            </div>
          </div>
          <hr className="md:hidden"></hr>
          <div className="py-4 px-2 flex flex-col text-center justify-center md:w-1/3 md:border-l md:border-r ">
            <h4 className="pb-4"> Reading List:</h4>
            <div className="flex flex-row justify-center ">
              <a
                className="flex items-center hover:text-hclr text-xl mr-2"
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillCaretLeft />
              </a>
              <div className="flex justify-center items-center ">
                <Image
                  src="/textbook/ddia.jpg"
                  alt="Designing Data Intensive Applications"
                  width={190}
                  height={250}
                  className="justify-center items-center "
                />
              </div>
              <div className="flex flex-col justify-center text-center text-hclr w-3/4 px-2 py-4 max-h-300">
                <h4>
                  Designing Data Intensive Applications by Martin Kleppman
                </h4>
                <br></br>
                <a href="google.com" className="underline">
                  Notes Here
                </a>
                <br></br>
                <p className="text-txtclr"> Applied Distributed Systems!</p>
              </div>
              <a
                className="flex items-center hover:text-hclr text-xl"
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillCaretRight />
              </a>
            </div>
          </div>
          <hr className="md:hidden"></hr>
          <div className="py-4 px-2 flex flex-col text-center justify-center md:w-1/3 max-md:max-h-300 space-y-4">
            <h4> My Art/Photography:</h4>
            <div className="mx-auto">
              <Image
                src="/pixelart.png"
                alt="PixelArt Image"
                width={500}
                height={381}
                className="max-md:max-h-200 object-contain"
                priority
              />
            </div>
            <p>Pixel Art - Composed by Studio Ghibli</p>
          </div>
        </div>

        <hr className="max-lg:hidden"></hr>
      </div>
    </section>
  );
};

export default HeroSection;
