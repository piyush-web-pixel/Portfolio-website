import React from 'react'
import Bnav from './Bnav';
import ALL from './ALL';


import All_project from './All_project';
import { Languages } from 'lucide-react';


const Section2 = () => {
  const projects=[
{
title:'Loan Aproval Prediction',
description:"A comprehensive ML model that predicts loan approval status using multiple algorithms including Logistic Regression, SVM, and Random Forest with comparative analysis.",
languages:["Python", "NLP", "Machine Learning", "Streamlit"],
code:'https://github.com/piyush-web-pixel/Loan_classification_ml_project',
livelink: "https://loan-classification-ml-project-1.onrender.com",
img:'https://t4.ftcdn.net/jpg/07/33/05/33/360_F_733053339_zZEJxW7acELQLKzUetKrpNVuX4mHgyQj.jpg'
},

{
title: "Heart Stroke Prediction",
description:"A health analytics ML model that predicts stroke risk based on various health metrics. Includes comprehensive data visualization and feature analysis.",   
languages:["Python", "NLP", "Machine Learning", "Streamlit"],
code:'https://github.com/piyush-web-pixel/Heart-Stroke-Prediction-model',
livelink:"https://piyush-web-pixel-heart-stroke-prediction-model-app-mzygtn.streamlit.app",
img:'https://www.careinsurance.com/upload_master/media/posts/December2022/human-heart-attack-pain1.jpg'
},

{
title: "Resume Screening Model",
description:"An intelligent NLP-powered Streamlit application that automates resume classification and ranking. Uses machine learning to match candidates with job requirements efficiently.",
languages:["Python", "NLP", "Machine Learning", "Streamlit"],
code:'https://github.com/piyush-web-pixel/Resume-Screening-Model',
livelink:"https://piyush-web-pixel-resume-screening-model-app-urakjf.streamlit.app",
img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHw1aabFH0Q5PPBNqrfcato9AImcqt8ORsWQ&s'
}

]


  return (
<div id='section2' className="min-h-screen w-full  bg-gray-900">

   
  <h1 className='   flex justify-center items-center text-5xl font-bold text-amber-50 '> My Projects</h1>

  {/* Cards Grid */}
  <div  className="flex flex-wrap gap-6 p-8 justify-center mt-12">

      {projects.map(function(elem){
          return  <ALL title={elem.title} languages={elem.languages} description={elem.description} livelink={elem.livelink} code={elem.code} img={elem.img}/>
        })}

  </div>

</div>


  )
}
export default Section2;

