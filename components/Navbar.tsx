"use client" // this is a client component
import React from "react"
import Link from "next/link"
import { BsArrowUpRight } from "react-icons/bs";

interface NavItem {
  label: string
  page: string
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
]

export default function Navbar() {
  return (
    <header className="w-full mx-auto px-4 md:px-20 top-0 z-50 shadow border-b text-txtclr3">
      <div className="justify-between items-center flex">
        <div>
          <div className="flex items-center justify-between py-3 py-5 block">
            <Link href="http://localhost:3000">
                <div className="container flex items-center space-x-2">
                  <button className="text-2xl font-bold font-body2 text-hclr">Oscar Abreu</button>
                </div>
            </Link>
          </div>
        </div>
        <div>
          <div>
            <div className="items-center justify-center flex space-x-6 space-y-0">
              {NAV_ITEMS.map((item, idx) => {
                const isLastItem = idx === NAV_ITEMS.length - 1;
                return (
                  <Link legacyBehavior key={idx} href={item.page}>
                    <a className={
                      `block lg:inline-block rounded ${isLastItem ? "bg-hclr text-bgclr border-bgclr hover:bg-hclr2" : "text-txtclr3 bg-bgclr border-txtclr3 hover:bg-txtclr3"} hover:text-bgclr border px-4 py-1`
                    }>
                      {item.label}
                      {isLastItem && <BsArrowUpRight className="inline ml-2 -translate-y-0.5"/>}
                    </a>
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}