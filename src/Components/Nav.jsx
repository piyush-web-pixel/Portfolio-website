import React from 'react'

const Nav = () => {

  const scrollToSection = (id) => {
    const section = document.getElementById(id)
    section?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className='fixed top-0 left-0 w-full bg-gray-900/80 backdrop-blur-md pr-15 pt-6 pb-4 flex gap-4 items-center justify-end text-amber-300 z-50'>

      <ul onClick={() => scrollToSection('section1')} className='cursor-pointer'>Home</ul>

      <ul onClick={() => scrollToSection("section2")} className='cursor-pointer'>Projects</ul>

      <ul onClick={() => scrollToSection("about")} className='cursor-pointer'>About</ul>

      <ul onClick={() => scrollToSection("skills")} className='cursor-pointer'>Skills</ul>

      <ul onClick={() => scrollToSection("about")} className='cursor-pointer'>Contact</ul>

    </div>
  )
}

export default Nav
