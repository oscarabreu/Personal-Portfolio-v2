/** @format */

"use client";
import React from "react";
import Nav from "@/components/Nav";
import Blog from "@/components/Blog"
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
const BlogSection = () => {
  return (
    <section id="home">
      <div className="flex flex-col max-w-5xl m-auto text-txtclr text-lg">
        <div className="flex justify-center md:justify-start pt-4 pb-12">
          <Nav></Nav>
        </div>
        <h1 className="text-4xl pb-2 font-bold max-md:text-center">Blogs</h1>
        {/* Add something useful here regarding Projects? */}
        <div className="flex flex-col md:flex-row pb-0 justify-between">
            <div className="flex flex-col space-y-2 md:w-2/5">
                <h4 className="text-sm text-gray-500 max-md:text-center">By name</h4>
                <div className="relative pb-4 ">
                    <input type="text" aria-label="Search blogs" placeholder="Search blogs" className="block w-full rounded-md px-4 py-1 focus:border-primary-500 focus:ring-primary-500 border-gray-900 bg-gray-800 text-gray-200"></input>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="absolute right-3 top-2 h-5 w-5 text-gray-400 dark:text-gray-300">
                    <svg className="absolute right-3 top-2 h-5 w-5 text-gray-400 dark:text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </svg>
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
            <Blog 
                title="
                Fall into my arms Peifeng and I will catch you with my love and affection and I will never let you go"
                category="Graphics"
                description="This is a blog post about my journey into graphics, distributed systems, and deep learning. 
                I will be posting about my projects, my thoughts, and my experiences. I hope you enjoy!" 
                technologies={["C++", "CUDA", "OptiX", "Thrust", "cuRAND", "NVRTC"]}
                date="January 1st, 2024"
                githubLink="https://github.com/project-link"
                projectLink="https://project-link.com"
            />
            <Blog 
                title="
                Peifeng please let me know if you are okay and if you are not okay please let me know so I can help you"
                category="Graphics"
                description="This is a blog post about my journey into graphics, distributed systems, and deep learning. 
                I will be posting about my projects, my thoughts, and my experiences. I hope you enjoy!" 
                technologies={["C++", "CUDA", "OptiX", "Thrust", "cuRAND", "NVRTC"]}
                date="January 1st, 2024"
                githubLink="https://github.com/project-link"
                projectLink="https://project-link.com"
            />
            <Blog 
                title="
                Peifeng I left you some food in the fridge and I hope you enjoy it and I hope you are doing well and I hope you are happy"
                category="Graphics"
                description="This is a blog post about my journey into graphics, distributed systems, and deep learning. 
                I will be posting about my projects, my thoughts, and my experiences. I hope you enjoy!" 
                technologies={["C++", "CUDA", "OptiX", "Thrust", "cuRAND", "NVRTC"]}
                date="January 1st, 2024"
                githubLink="https://github.com/project-link"
                projectLink="https://project-link.com"
            />
            <Blog 
                title="
                Peifeng can you remember to take your medication and can you remember to eat and can you remember to drink water and can you remember to sleep"
                category="Graphics"
                description="This is a blog post about my journey into graphics, distributed systems, and deep learning. 
                I will be posting about my projects, my thoughts, and my experiences. I hope you enjoy!" 
                technologies={["C++", "CUDA", "OptiX", "Thrust", "cuRAND", "NVRTC"]}
                date="January 1st, 2024"
                githubLink="https://github.com/project-link"
                projectLink="https://project-link.com"
            />
        </div>
      </div>
    {/* </div> */}
    </section>
  );
};

export default BlogSection;
