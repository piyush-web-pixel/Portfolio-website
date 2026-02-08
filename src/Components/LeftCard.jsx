import React from 'react'
import passnew2 from "../assets/profile_img.jpeg";

export const LeftCard = () => {
  return (
    <div className='h-full ml-24'>
      
      <div className="flex items-center justify-center">
        
        <img
          src={passnew2}
          alt="profile"
          className="w-96 h-96 rounded-full border-4 border-amber-300 object-cover shadow-lg"
        />

      </div>

    </div>
  )
}
