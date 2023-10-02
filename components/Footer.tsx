import React from "react"
import {
  AiOutlineGithub,
  AiOutlineTwitter,
  AiOutlineLinkedin,
  AiOutlineYoutube,
} from "react-icons/ai"

const Footer = () => {
  return (
    <footer className="md:px-1">
      <hr className="w-full h-0.5 bg-txtclr3 border-0"></hr>
      <div className="p-4 flex flex-col text-center text-txtclr3 md:flex-row md:justify-between">
        <div className="flex flex-row items-center justify-center space-x-1 max-md:pb-2 text-hclr">
          © 2023 Oscar Abreu<a href="/" className="hover:underline"></a>
        </div>
        <div className="flex flex-row items-center justify-center space-x-4 mb-1 md:mt-3">
          <a href="https://github.com/oscarabreu" rel="noreferrer" target="_blank">
            <AiOutlineGithub
              className="hover:-translate-y-1 hover:text-hclr2 transition-transform cursor-pointer text-txtclr3 dext--txtclr3"              size={30}
            />
          </a>
          <a
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineTwitter
              className="hover:-translate-y-1 hover:text-hclr2 transition-transform cursor-pointer text-txtclr3 dext--txtclr3"              size={30}
            />
          </a>

          <a
            href="https://www.linkedin.com/in/ojabreu/"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineLinkedin
              className="hover:-translate-y-1 hover:text-hclr2 transition-transform cursor-pointer text-txtclr3 dext--txtclr3"              size={30}
            />
          </a>
          <a
            href="https://www.youtube.com/channel/UCQBMkSDgbxDb8usMeXmOZy"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineYoutube
              className="hover:-translate-y-1 hover:text-hclr2 transition-transform cursor-pointer text-txtclr3 dext--txtclr3"              size={30}
            />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
