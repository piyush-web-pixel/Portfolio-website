import { Github,Linkedin  } from 'lucide-react'
import React from 'react'

import { Briefcase, FileDown } from "lucide-react";

export const RightCard = () => {

  const scrollToSection = (id) => {
    const section = document.getElementById(id)
    section?.scrollIntoView({ behavior: "smooth" })
  }



  return (
  <div className="h-full max-w-2xl text-white p-4 space-y-4">

  <h3 className="text-2xl sm:text-3xl">Hi</h3>

  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
    I Am Piyush Yadav
  </h1>

  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-amber-200">
  Data Science | Data Analytics | Web Developer
  </h2>

  <p className="text-base sm:text-lg lg:text-xl leading-relaxed">
  I specialize in building dynamic websites using React and Django,
        and I develop machine learning models for impactful real-world solutions.
        My goal is to merge development + data skills to create intelligent, 
        user-friendly applications.
  </p>

  {/* Social Icons */}
  <div className="flex items-center gap-4 sm:gap-6 mt-4">
    <a href="https://github.com/piyush-web-pixel">
    <button className="p-2 sm:p-3 bg-white text-black rounded-full shadow hover:scale-105 transition">
      <Github />
    </button>
    </a>

    <a href="https://www.linkedin.com/in/piyush-yadav45/">
    <button className="p-2 sm:p-3 bg-white text-black rounded-full shadow hover:scale-105 transition">
      <Linkedin />
    </button>
</a>

  </div>

  {/* Buttons */}
  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-10 mt-6">
  <ul onClick={() => scrollToSection("section2")} className='cursor-pointer bg-amber-300 text-black rounded-lg px-5 py-2 text-xl sm:text-2xl shadow-lg hover:bg-amber-400'>View Work</ul>

<a href="/resume.pdf" download>
  <button className="bg-amber-300 text-black rounded-lg px-5 py-2 text-xl sm:text-2xl shadow-lg hover:bg-amber-400" >
    Resume
  </button>
</a>
  </div>

</div>



  )
}
