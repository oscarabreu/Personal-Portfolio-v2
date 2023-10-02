"use client"
import React from "react";
import Menu from  "@/components/Menu";


// animate-fadeIn animation-delay-2 First DIV if you want animation fade-in
const BlogSection = () => {
  return (
    <section id="blog">
      <div className="flex flex-col md:flex-row justify-center max-md:items-center md:space-y-0 md:w-5xl m-auto "> 
        <div className = "flex justify-center md:justify-start sm:items-start">
            <Menu></Menu>
        </div>
        <div className="text-txtclr text-base-lg flex flex-col flex-grow">
          <h1 className="text-3xl text-hclr font-bold flex justify-center max-md:mb-6 max-md:py-3 pb-20">
            Hey, I&apos;m Oscar          
          </h1>
          <h1 className="text-xl text-hclr3 flex justify-center max-md:mb-6 max-md:py-3 text-txtclr3"> There is not much to view here just yet.  Please check back later!</h1>

        </div>
    </div>
    </section>
  )
}

export default BlogSection;

