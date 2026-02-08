import React from 'react'
import B_right from './B_right'

const B_left = () => {
  return (
 <section
  id="about"
  className="min-h-screen bg-gray-900 text-white flex items-center justify-center px-6 py-20"
>
  <div className="max-w-6xl w-full flex flex-col md:flex-row items-start gap-12">
    
    {/* LEFT SIDE → About Me */}
    <div className="flex-1">
      <h2 className="text-4xl md:text-5xl font-bold mb-4 text-amber-300">
        About <span className="text-amber-300">Me</span>
      </h2>

      <p className="text-gray-300 text-lg leading-relaxed mb-6">
        I’m <span className="font-semibold text-white">Piyush Yadav</span>, a 
        passionate Web Developer, Data Scientist, and Data Analyst.
        I specialize in building dynamic websites using React and Django,
        and I develop machine learning models for impactful real-world solutions.
        My goal is to merge development + data skills to create intelligent, 
        user-friendly applications.
      </p>

      {/* Highlight Boxes */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="p-4 bg-gray-800 rounded-xl shadow">
          <h3 className="text-2xl font-bold text-amber-300">1+</h3>
          <p className="text-gray-400">Year Experience</p>
        </div>

        <div className="p-4 bg-gray-800 rounded-xl shadow">
          <h3 className="text-2xl font-bold text-amber-300">30+</h3>
          <p className="text-gray-400">Projects Completed</p>
        </div>

        <div  className="p-4 bg-gray-800 rounded-xl shadow">
          <h3 className="text-2xl font-bold text-amber-300">10+</h3>
          <p className="text-gray-400">Web Apps Built</p>
        </div>

        <div className="p-4 bg-gray-800 rounded-xl shadow">
          <h3 className="text-2xl font-bold text-amber-300">6+</h3>
          <p className="text-gray-400">ML Models Created</p>
        </div>
      </div>

      {/* Tech Stack */}
      <h3 className="text-2xl font-semibold mb-3">Tech Stack</h3>
      <div className="flex flex-wrap gap-3 text-black">
        <span id='tech' className="px-4 py-2 bg-amber-300 rounded-full text-sm font-medium">React</span>
        <span id='tech' className="px-4 py-2 bg-amber-300 rounded-full text-sm font-medium hover:scale-1.2">JavaScript</span>
        <span id='tech' className="px-4 py-2 bg-amber-300 rounded-full text-sm font-medium">Django</span>
        <span id='tech' className="px-4 py-2 bg-amber-300 rounded-full text-sm font-medium">Python</span>
        <span id='tech' className="px-4 py-2 bg-amber-300 rounded-full text-sm font-medium">Machine Learning</span>
        <span  id='tech' className="px-4 py-2 bg-amber-300 rounded-full text-sm font-medium">Data Analysis</span>
      </div>
    </div>

    {/* RIGHT SIDE → Get In Touch Form */}
   <B_right/>

  </div>
</section>

  )
}

export default B_left