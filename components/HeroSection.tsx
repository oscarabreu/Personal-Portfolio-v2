"use client"
import React from "react";
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


// animate-fadeIn animation-delay-2 First DIV if you want animation fade-in
const HeroSection = () => {
  return (
    <section id="home">
      <div className="flex flex-col md:flex-row justify-center md:space-y-0 max-w-5xl m-auto text-sm "> 
        <div className = "flex flex-grow justify-center md:justify-start sm:items-start">
        <Menu></Menu>
        </div>
        <div className="space-y-4 text-txtclr text-base-lg">
          <h1 className="text-3xl text-hclr3 font-bold max-md:flex max-md:justify-center max-md:mb-6 max-md:py-3 text-txtclr3">
            Hey, I&apos;m Oscar          
          </h1>
          <p className="text-txtclr2 max-md:justify-center">
            I&apos;m a <span className = "text-hclr">Backend Software Engineer</span> based in Brooklyn, NY.
          </p>
          <p>
          Shortly after earning my BS in Biochemistry, while working in healthcare, I started experimenting with Arduinos for home-automation. 
          I quickly developed a passion for programmatic problem solving, which led me to pursue a Master of Science in Computer Engineering at NYU. 
          </p>
          <p className="mb-2">
          During my time at NYU, I delved deep into various fields, and after extensive exploration, realized my passion
           for tackling system-level challenges. This has led me to currently explore opportunities in  <span className="text-hclr"> Distributed Systems</span>, 
           <span className="text-hclr"> Cloud Infrastructure</span>, and <span className="text-hclr"> Data.</span> 
          </p>
          <hr className=""/>
          <div className="flex flex-col">
            <h4 className= "flex justify-center items-center text-2xl text-txtclr2 pb-2">Skills</h4>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-hclr text-bgclr px-4 py-2 mx-1 my-1 rounded"
                  >
                    {item.skill}
                  </p>
                )
              })}
            </div>
          </div>
        </div>
          </div>
    </section>
  )
}

export default HeroSection;

