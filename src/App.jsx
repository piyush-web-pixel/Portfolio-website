import React from 'react'
import Nav from './Components/Nav';
import Section1 from './Components/Section1'
import Section2 from './Components/Section2'
import Section3 from './Components/Section3'
import Section4 from './Components/Section4'


const App = () => {



  return (
    <div className='h-full'>

    <Nav/>
    
    <Section1 id='section1' />
    <Section2 id='section2' /> 
    <Section3 id='skills'/>
    <Section4 id='about'/>
    </div>
  )
}

export default App