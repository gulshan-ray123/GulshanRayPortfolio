import React from 'react'
import Card from './Card'
import Marksheet from './Marksheet'
function Project() {
  return (
     <section className='h-[200%]  bg-gradient-to-r from-slate-950 to-slate-900  md:w-[92%] w-[100%]  md:ml-5 md:mt-4 '>
      <h1 className='text-white text-center merriweather text-6xl relative top-11'>My Projects</h1>
      <h1 className='text-white text-center merriweather text-5xl relative top-7 opacity-35'>My Projects</h1>

      <div>
        <Card Title="Marksheet Generator" Description="Devloped a website Marksheet Generator a free, easy-to-use web application that automates the process of marksheet creation with a clean and simple UI. Our goal is to help schools and organizations save time, reduce errors, and move toward digital solutions" img="https://i.pinimg.com/736x/3f/a7/a3/3fa7a3f3f4eff2b730de3c584569b694.jpg" linkpage="/Marksheet"/>

        <Card Title="SemPrep" Description="Devlop a website Semprep that help student for there semester preperations. Our goal is to help schools and organizations save time, reduce errors, and move toward digital solutions." img="https://miro.medium.com/v2/resize:fit:826/1*guDemC6-7rq_TueNOJj28w.png" linkpage="/Semprep"/>
      
      <Card Title="Bank Management System" Description="Devlop a banking application/ portal that help banks employee for seamless and smooth functioning of organisation." img="https://static.vecteezy.com/system/resources/previews/015/214/718/original/bank-3d-illustration-icon-png.png" linkpage="/Project_Bank"/>

        <Card Title="HealthTracker" Description="devlop a healthcare portal where user can get seamless online healthcare experience. The Patient can purchase medicine from same portal as well as programmed doctor assistance." img="https://cdn3d.iconscout.com/3d/premium/thumb/doctor-5565584-4715129.png" linkpage="/HealthTracker"/>

      </div>

      </section>
      
  )
}

export default Project
