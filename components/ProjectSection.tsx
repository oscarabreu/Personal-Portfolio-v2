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
const ProjectSection = () => {
  return (
    <section id="projects">
      {/* Div for the entire vertical container */}
      <div className="flex flex-col max-w-5xl m-auto text-txtclr text-base-lg">
        {/* Div for the nav bar */}
        <div className="flex justify-center md:justify-start">
          <Nav></Nav>
        </div>
        <h1 className="text-2xl pb-4">Projects</h1>
        {/* Container for every project instance */}
        <div></div>
        <hr></hr>
      </div>
    </section>
  );
};

export default ProjectSection;
