import React from 'react'

import ALL from './ALL';


import All_project from './All_project';
import { Languages } from 'lucide-react';
import phonepe from "../assets/phonepe.png";
import hospital from "../assets/hospital_dashboaard.png";
import sales from "../assets/sales.png";

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
},
{
  title: "PhonePe Transaction Dashboard",
  description: "An interactive Power BI dashboard that analyzes PhonePe transaction data with dynamic KPIs, state-wise insights, transaction trends, user analysis, and custom DAX measures. Built using Power Query for data transformation and enhanced with interactive tooltips for an intuitive user experience.",
  languages: ["Power BI", "DAX", "Power Query", "Data Visualization"],
  code: "https://github.com/piyush-web-pixel/PhonePe-PowerBI-Dashboard",
  livelink: "/pdf/phonepe-dashboard.pdf", // Replace with your PDF path
  img:phonepe
},
{
  title: "Hospital Emergency Room Dashboard",
  description: "An interactive Power BI dashboard designed to analyze hospital emergency room operations and patient trends. It provides insights into total patients, admissions, average waiting time, patient satisfaction, demographic distribution, department referrals, and monthly patient trends using dynamic DAX measures, Power Query transformations, and interactive filters.",
  languages: ["Power BI", "DAX", "Power Query", "Data Visualization"],
  code: "https://github.com/piyush-web-pixel/Hospital-ER-Dashboard",
  livelink:"/pdf/hospital_dashboard.pdf",
  img:hospital
}
,
{
  title: "Sales Data Analysis Dashboard",
  description: "An interactive Power BI dashboard built to analyze sales performance, profitability, customer purchasing behavior, and regional trends. The dashboard provides comprehensive business insights through dynamic KPIs, sales forecasting, profit analysis, payment mode distribution, shipping analysis, and category-wise performance using DAX measures, Power Query, and interactive slicers.",
  languages: ["Power BI", "DAX", "Power Query", "Data Visualization"],
  code: "https://github.com/piyush-web-pixel/Sales-Data-Dashboard",
  livelink:"/pdf/sales_data_dashboard.pdf",
  img:sales
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

