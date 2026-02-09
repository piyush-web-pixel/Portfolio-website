import React from 'react'

import { Github, ExternalLink } from "lucide-react";

const ALL = (props) => {
  return (
<div

  className="
     w-[320px] text-white m-8 bg-transparent overflow-hidden 
    shadow-lg flex flex-col rounded-xl border border-transparent
    transition-all duration-300 
    hover:shadow-2xl hover:border-amber-400 hover:shadow-amber-400/40
  "
>
  
  {/* IMAGE - only this zooms */}
  <div className="overflow-hidden">
    <img 
      className="h-48 w-full object-cover transition-all duration-500 hover:scale-110"
      src={props.img}
      alt=""
    />
  </div>

  <h1 className="m-2 p-2 text-xl font-bold">{props.title}</h1>


  <div className="flex flex-wrap gap-2 mb-2">
                      {props.languages.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs px-2 py-1 bg-muted rounded text-primary font-mono border border-yellow-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>



  <p className="m-3 text-sm">
    {props.description}
  </p>

<div className="text-black flex m-3 items-center justify-between mt-auto">

  {/* GitHub Code Link */}
  <a
    href={props.code}
    target="_blank"
    className="p-3 bg-amber-300 rounded-full hover:bg-amber-400 
    transition transform hover:scale-110 shadow"
  >
    <Github size={22} />
  </a>

  {/* Live Demo Link */}
  <a
    href={props.livelink}
    target="_blank"
    className="p-3 bg-amber-300 rounded-full hover:bg-amber-400 
    transition transform hover:scale-110 shadow"
  >
    <ExternalLink size={22} />
  </a>

</div>

</div>


    
  )
}

export default ALL