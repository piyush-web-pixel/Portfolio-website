import React from 'react'
import Pagecontent from './Pagecontent';
import Pageonebottom from './Pageonebottom';



const Section1 = () => {
 
  return (
<div  id='section1' className="min-h-dvh w-full bg-gray-900 flex flex-col overflow-x-hidden">



  {/* Page content grows and becomes scrollable on small screens */}
  <div className="flex-1 w-full px-4 sm:px-6 lg:px-12 py-4">
    <Pagecontent />
  </div>

</div>



  )
}

export default Section1;

