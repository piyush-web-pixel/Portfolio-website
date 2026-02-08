import React from 'react'
import ALL from './All'


const All_project = () => {

  
const projects=[{
'title':'first data scienece project',
'code':'github.com',
'url':'first_project.com'
}
,
{
'title':'second data scienece project',
'code':'github.com',
'url':'second_project.com'
}

]
  
  return (
<div className="min-h-screen w-full bg-amber-900 flex flex-wrap gap-6 p-10 justify-center items-start">

  {projects.map(function(elem){
    return <ALL title={elem.title}/>
  })}


</div>

  )
}

export default All_project