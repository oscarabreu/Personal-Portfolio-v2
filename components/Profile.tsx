/** @format */

"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  AiOutlineGithub,
  AiOutlineTwitter,
  AiOutlineLinkedin,
  AiOutlineYoutube,
} from "react-icons/ai";
import { BsArrowUpRight } from "react-icons/bs";

interface NavItem {
  label: string;
  page: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Resume",
    page: "https://www.dropbox.com/scl/fi/mt22pey65wsmx5h1i6yjt/Oscar-Abreu-Resume.pdf?rlkey=yo30u4gbgnntnioptp8f687l6&dl=0",
  },
  {
    label: "Contact",
    page: "mailto:oja227@nyu.edu",
  },
];

const Profile = () => {
  return (
    <section className="flex flex-col justify-center items-center max-md:border-txtclr">
      <div className="flex justify-center">
        <div
          className="relative overflow-hidden rounded-full"
          style={{ width: "120px", height: "120px" }}
        >
          <Image
            src="/headshot.jpg"
            alt="Oscar's Headshot"
            layout="fill"
            objectFit="cover"
            objectPosition="top" // Aligns to the top
            priority
            className="rounded-full" // Adds margin to the left, moving the image to the right
          />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center space-y-4 py-8 text-sm text-center text-txtclr">
        <h1 className="text-hclr3">Oscar Abreu</h1>
        <h3>
          MSCE at NYU <br></br> May 2024
        </h3>
        <div className="flex flex-row items-center justify-center space-x-3">
          <a
            href="https://github.com/oscarabreu"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineGithub
              className="hover:-translate-y-1 hover:text-hclr2 transition-transform cursor-pointer text-txtclr3 dext--txtclr3"
              size={30}
            />
          </a>
          <a
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineTwitter
              className="hover:-translate-y-1 hover:text-hclr2 transition-transform cursor-pointer text-txtclr3 dext--txtclr3"
              size={30}
            />
          </a>

          <a
            href="https://www.linkedin.com/in/ojabreu/"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineLinkedin
              className="hover:-translate-y-1 hover:text-hclr2 transition-transform cursor-pointer text-txtclr3 dext--txtclr3"
              size={30}
            />
          </a>
          <a
            href="https://www.youtube.com/channel/UCQBMkSDgbxDb8usMeXmOZy"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineYoutube
              className="hover:-translate-y-1 hover:text-hclr2 transition-transform cursor-pointer text-txtclr3 dext--txtclr3"
              size={30}
            />
          </a>
        </div>
        <div className="items-center justify-center flex space-x-3">
          {NAV_ITEMS.map((item, idx) => {
            const isLastItem = idx === NAV_ITEMS.length - 1;
            return (
              <Link legacyBehavior key={idx} href={item.page}>
                <a
                  className={`block lg:inline-block rounded ${
                    isLastItem
                      ? "bg-hclr text-bgclr border-txtclr hover:bg-hclr2"
                      : "text-txtclr3 bg-bgclr border-txtclr hover:bg-txtclr3"
                  } hover:text-bgclr border px-4 py-1`}
                >
                  {item.label}
                  {isLastItem && (
                    <BsArrowUpRight className="inline ml-2 -translate-y-0.5 max-lg:hidden" />
                  )}
                </a>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Profile;
