import React from 'react'
import Web from './web'
import Dataanalystic from './dataanalystic'
import Datascience from './datascience'

const Bnav = () => {
  return (
    <div className=' flex flex-wrap text-white h-6 w-full ml-9 items-center justify-center'>
       <Web/>
       <Dataanalystic/>
       <Datascience/>
       
      
    </div>
  )
}

export default Bnav