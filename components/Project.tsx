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
    imageSrc: string;
    githubLink: string;
    projectLink: string;
}

export const Project: React.FC<ProjectProps> = ({ 
    title, 
    category, 
    description, 
    technologies, 
    imageSrc, 
    githubLink, 
    projectLink 
}) => {
    return (
        <>
            <div className="flex flex-row my-4 relative justify-center min-h-250 max-h-250">
                <div className="max-md:relative flex justify-center items-center max-md:opacity-20 overflow-hidden rounded">
                    <Image src={imageSrc} width={500} height={500} alt={title} className="rounded"/>
                </div>
                <div className="max-md:absolute max-md:text-center flex flex-col md:ml-4 max-md:h-full justify-evenly md:w-3/4 ">
                    <h3 className="text-base text-hclr">{category}</h3>
                    <h3 className="text-2xl font-semibold text-ytclr">{title}</h3>
                    <ul className="text-sm flex gap-1.5 flex flex-wrap max-md:justify-center text-2xl">
                        {technologies.map((tech) => (
                            <li key={tech} className="border rounded px-1 py-1 bg-bgclr text-hclr border-hclr">
                                {tech}
                            </li>
                        ))}
                    </ul>
                    <p className="text-sm text-gray-400">{description}</p>
                    <div className="text-2xl flex flex-gap gap-4 flex-row max-md:justify-center">
                        <a
                          className="text-txtclr hover:text-hclr "
                          href={githubLink}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <AiOutlineGithub />
                        </a>
                        <a
                          className="text-txtclr hover:text-hclr "
                          href={projectLink}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <AiOutlineApartment />
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Project;