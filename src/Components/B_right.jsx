import React from "react";
import { Linkedin, Github, Mail, Instagram } from "lucide-react";

const B_right = () => {
  return (
    <div className="w-full max-w-lg  text-black flex flex-col gap-6 
    items-center p-6 rounded-3xl shadow-xl mx-auto mt-10">

      <h1 className="text-3xl font-bold text-amber-100">Get In Touch</h1>
      <p className="text-center text-gray-50">
        Feel free to connect with me on any platform below
      </p>

      {/* Social Links */}
      <div className="grid grid-cols-2 gap-4 w-full">

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/piyush-yadav45"
          target="_blank"
          className="flex items-center gap-3 p-4 rounded-2xl bg-white 
          hover:bg-amber-200 transition shadow"
        >
          <Linkedin className="text-blue-600" />
          <span className="font-semibold">LinkedIn</span>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/piyush-web-pixel"
          target="_blank"
          className="flex items-center gap-3 p-4 rounded-2xl bg-white 
          hover:bg-amber-200 transition shadow"
        >
          <Github className="text-black" />
          <span className="font-semibold">GitHub</span>
        </a>

        {/* Gmail */}
        <a
          href="mailto:piyushyadav6226@gmail.com"
          className="flex items-center gap-3 p-4 rounded-2xl bg-white 
          hover:bg-amber-200 transition shadow"
        >
          <Mail className="text-red-500" />
          <span className="font-semibold">Email</span>
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/piyushyadav6224/"
          target="_blank"
          className="flex items-center gap-3 p-4 rounded-2xl bg-white 
          hover:bg-amber-200 transition shadow"
        >
          <Instagram className="text-pink-600" />
          <span className="font-semibold">Instagram</span>
        </a>

      </div>
    </div>
  );
};

export default B_right;
