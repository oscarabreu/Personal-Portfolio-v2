import React from "react";
import Image from "next/image";
import {
    AiOutlineGithub,
    AiOutlineApartment,
} from "react-icons/ai";

interface ProjectProps {
    title: string;
    category: string;
    description: string;
    technologies: string[];
    date: string;
    githubLink: string;
    projectLink: string;
}

export const Project: React.FC<ProjectProps> = ({ 
    title, 
    category, 
    description, 
    technologies, 
    date, 
    githubLink, 
    projectLink 
}) => {
    return (
        <>
            <div className="flex flex-row my-4 relative justify-between">
                <div className="max-md:hidden">
                    <h4 className="text-gray-400">{date}</h4>
                </div>
                <div className=" flex flex-col md:ml-4  space-y-3 md:w-3/4 ">
                    <h3 className="text-base text-hclr">{category}</h3>
                    <h3 className="text-2xl font-semibold text-ytclr">{title}</h3>
                    <ul className="text-sm flex gap-1.5 flex flex-wrap text-2xl">
                        {technologies.map((tech) => (
                            <li key={tech} className="border rounded px-1 py-1 bg-bgclr text-hclr border-hclr">
                                {tech}
                            </li>
                        ))}
                    </ul>
                    <p className="text-base py-2 space-y-2 text-gray-400">{description}</p>
                    
                </div>
            </div>
        </>
    );
}

export default Project;