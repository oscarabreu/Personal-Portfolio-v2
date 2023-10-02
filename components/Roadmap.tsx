"use client"
import React from "react";
import Image from "next/image";
import Menu from  "@/components/Menu";

const skills = [
  { skill: "C++" },
  { skill: "CUDA" },
  { skill: "Golang" },
  { skill: "gRPC" },
  { skill: "etcd" },
  { skill: "Prometheus" },
  { skill: "Boost.asio" },
  { skill: "Docker" },
  { skill: "Kubernetes" },
  { skill: "Zookeeper" },
  { skill: "Spark" },
  { skill: "Kafka" },
  { skill: "Python" },
  { skill: "Numpy/Pandas" },
  { skill: "TensorFlow" },
  { skill: "AWS" },
  { skill: "Postgres" },
  { skill: "MongoDB" },
  { skill: "Redis" }

]


const Roadmap = () => {
  return (
    <section id="home">
      <div className="flex flex-col md:flex-row justify-center md:space-y-0  animate-fadeIn animation-delay-2 max-w-screen-lg m-auto p-5">
        <div className = "flex flex-grow justify-center md:justify-start md:items-start">
        <Menu></Menu>
        </div>
        <div className="flex-grow md:text-left space-y-4 text-txtclr px-5 sm: my-10"></div>
        
        </div>
    </section>
  )
}

export default Roadmap;


