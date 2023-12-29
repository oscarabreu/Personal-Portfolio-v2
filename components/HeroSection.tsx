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
  { skill: "Colly" },
  { skill: "Python" },
  { skill: "Numpy/Pandas" },
  { skill: "Matplotlib/Scikit" },
  { skill: "TensorFlow" },
  { skill: "Typescript/Next/Tailwind" },
  { skill: "AWS Lambda & EventBridge" },
  { skill: "API Gateway" },
  { skill: "SNS/SQS" },
  { skill: "gRPC" },
  { skill: "Docker" },
  { skill: "Kubernetes" },
  { skill: "Kafka" },
  { skill: "PostgreSQL" },
  { skill: "MongoDB" },
  { skill: "DynamoDB" },
  { skill: "Redis" },
  { skill: "S3" },
  { skill: "VPC/NAT" },
  { skill: "Cloudwatch" },
  { skill: "GCP" },
];

// animate-fadeIn animation-delay-2 First DIV if you want animation fade-in
const HeroSection = () => {
  return (
    <section id="home">
      {/* Div for the entire vertical container */}
      <div className="flex flex-col max-w-5xl m-auto text-txtclr text-base-lg">
        {/* Div for the nav bar */}
        <div className="flex justify-center md:justify-start">
          <Nav></Nav>
        </div>
        {/* Div for the profile + about text (1/4 width = pfp, 3/4 width = text)*/}
        <div className="flex flex-row max-md:flex-col">
          <div className="flex flex-col md:w-1/4 justify-center">
            <Profile></Profile>
          </div>
          <div className="flex flex-col md:w-3/4 space-y-6 max-md:pb-8 text-base">
            <h2 className="text-3xl font-bold flex max-md:justify-center max-md:pt-8">
              Hey, I am&nbsp;<span className="text-hclr">Oscar</span>
            </h2>
            <h2 className="font-bold">About me:</h2>
            <p className="max-md:flex max-md:justify-center">
              Welcome to my page! I first embarked on my academic path with a BS
              in Biochemistry at Binghamton University, only to find my passion
              within Software Engineering. It all started with a hobby in
              Arduino electronics, which blossomed into a deep-seated passion
              for computer science. This led me to the New York University
              Bridge to Tandon program, where I gained proficiency in the
              fundamentals and successfully earned my place in the Master of
              Science in Computer Engineering program.
            </p>
            <p className="max-md:justify-center">
              Here, I independently explored myriad fields in Software and
              Computer Engineering though projects and coursework, and narrowed
              my passions toward&nbsp;
              <span className="text-hclr">
                Distributed Systems, Deep Learning,
              </span>{" "}
              and <span className="text-hclr">Graphics Programming.</span> More
              specifically, I am interested in documenting and implementing work
              pertaining to:{" "}
              <span className="text-hclr">
                Transformers (Vision, NLP and RecSys), Render Engines
              </span>{" "}
              and
              <span className="text-hclr"> Databases.</span>
            </p>
            <p>
              For fun I enjoy jogging in Forest Park, drawing pixel-art, trying
              different NYC coffee shops, reading, and practicing the piano.
              This year, I am learning how to play soccer with BetterPlayer.{" "}
              <span className="italic">Fun tab coming soon!</span>
            </p>
            <ul className="pb-10 flex flex-col justify-center">
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
            </ul>
            {/* <div>
              <Footer></Footer>
            </div> */}
          </div>
        </div>
        {/* Horizontal Rule */}
        <hr />
        {/* Div for the entire Featured Project container */}
        <div className="flex flex-row h-auto items-center py-5 max-h-325">
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
              className=" flex flex-col justify-evenly sm:items-start max-md:absolute max-md:items-center max-md:justify-center max-md:space-y-4 
                              top-0 left-0 right-0 bottom-0 flex flex-col justify-evenly max-sm:w-full md:mr-4"
            >
              <p>Featured Project</p>
              <h3 className="text-2xl font-bold text-hclr3">Ray-Tracer</h3>
              <p className="text-sm max-md:text-center">
                {" "}
                A graphic ray-tracer built from scratch, optimized with CUDA{" "}
              </p>
              <div className="text-2xl flex flex-gap gap-4 flex-row">
                <a
                  className="text-hclr3 hover:text-hclr"
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiOutlineGithub />
                </a>
                <a
                  className="text-hclr3 hover:text-hclr"
                  href="https://google.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiOutlineApartment />
                </a>
              </div>
              <ul className="text-xs flex gap-2 flex flex-wrap max-md:justify-center">
                <li className="border rounded px-2 py-1 bg-bgclr2 text-hclr2 border-hclr2">
                  C++
                </li>
                <li className="border rounded px-2 py-1 bg-bgclr2 text-hclr2 border-hclr2">
                  CUDA
                </li>
                <li className="border rounded px-2 py-1 bg-bgclr2 text-hclr2 border-hclr2">
                  OptiX
                </li>
                <li className="border rounded px-2 py-1 bg-bgclr2 text-hclr2 border-hclr2">
                  Thrust
                </li>
                <li className="border rounded px-2 py-1 bg-bgclr2 text-hclr2 border-hclr2">
                  cuRAND
                </li>
                <li className="border rounded px-2 py-1 bg-bgclr2 text-hclr2 border-hclr2">
                  NVRTC
                </li>
              </ul>
            </div>
            <div>
              <Image
                className="flex flex-grow max-md:opacity-20 max-h-300"
                src="/image1.png"
                alt="Ray Tracing Image"
                width={900}
                height={600}
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
        <hr className="" />
        <div className="flex flex-col">
          <h4 className="flex justify-center items-center text-2xl text-hclr3 py-6">
            Skills
          </h4>
          <div className="flex flex-wrap flex-row justify-center z-10 justify-start">
            {skills.map((item, idx) => {
              return (
                <p
                  key={idx}
                  className="bg-hclr text-bgclr px-4 py-2 mx-1 my-1 rounded"
                >
                  {item.skill}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
