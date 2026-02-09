import React from 'react'
import { RightCard } from './RightCard';

import { LeftCard } from './LeftCard';


const Pagecontent = () => {
  return (
<div className="
  w-full min-h-screen 
  flex flex-col lg:flex-row 
  items-center justify-center 
  gap-8 px-4
">
  <RightCard />
  <LeftCard />
</div>

  )
}

export default Pagecontent;

