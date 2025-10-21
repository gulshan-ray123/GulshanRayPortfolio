import React from 'react'
import { Link } from 'react-router-dom'
function HealthProj() {
  return (
   <section className='h-[200%]  bg-gradient-to-r from-slate-950 to-slate-900  md:w-[94%] w-[85%]  md:ml-5 md:mt-4'>
     <h1 className=' hidden md:text-white text-3xl md:flex justify-center relative top-9'>Project Name: Patient Health Tracker Website</h1>
        <h1 className=' block text-center text-white text-lg relative top-9 md:hidden'>Project Name: Patient Health Tracker Website</h1>
            <div>  <h1 className='text-green-100 flex justify-center mt-20 text-xl font-bold'>Description:</h1>
            <p className='text-yellow-50 p-4 justify-items-center text-justify'>We worked on this project for about 5 months which including learning the basics of frontend technologies like HTML,CSS and Javascript as well as server side technology like nodejs ExpressJs  and Some portions of non- relational Database i.e mongoodb includes user appointment and registrations.Basically this project was a part of mini project for 2nd semester alloted to us by our college professors.<b className='bg-green-400 text-blue-800'>The main objective of this project is to devlop a healthcare portal where user can get seamless online healthcare experience.</b>I have worked on both client and server side technologies as well as API integration. <br/><br/>Throughout the project, I utilize various JS libraries and frameworks to devlop a robust and scalable fullstack website. This project allowed me to devlop strong problem-solving skills and gains hand on experience with modern web devlopement Technologies.</p>
            <h1 className='text-green-100 flex justify-center mt-20 text-xl font-bold'>Stack Used:</h1>
            <div className='flex-col md:flex justify-center md:flex-row'>
            <div className=" h-44 md:ml-5 ml-1 p-2  md:h-44 md:w-80 w-72 bg-slate-100 rounded-xl border-lime-200 mt-7 bg-[url('https://tse4.mm.bing.net/th?id=OIP.GcdMkiHLIYaHlCD6k4HSpgHaEK&pid=Api&P=0&h=180')] bg-cover hover:border-4"></div>
            <div className="flex-col h-44 ml-1  p-2  md:h-44 md:w-80 w-72 bg-slate-100 rounded-xl border-lime-200 mt-7 md:ml-10 bg-[url('https://wallpapercave.com/wp/wp7420966.jpg')] bg-cover hover:border-4"></div></div>
            
            </div>
            <h1 className='text-green-100 flex justify-center mt-20 text-xl font-bold'>key Features:</h1>
            
            <div className='flex justify-center text-justify'><ul className='text-yellow-50 p-4 '>
                <li>1. online Appointment features resolve waiting time.</li>
                <li>2. Dashboard for each patient for long term assistance.</li>
                <li>3. Integrated e-commerce platform where patient purchase medicenes</li>
                <li>4. Programmed medical Doctor assistance or Chatboat</li>
            </ul>
            </div>
            <h1 className='text-green-100 flex justify-center mt-10 text-xl'>Timeline: December 2023- April 2024</h1>
            <h1 className='text-green-100 flex justify-center mt-10 text-xl'>Demo and Clip:</h1>
            <span className='flex-col  md: flex md:justify-center'>
            <i class="fa-brands fa-github text-white text-3xl mt-4  text-center"> </i><Link to='https://github.com/gulshan-ray123/healthcarefullstack' className="text-white mt-5 ml-4 text-center underline">Project code Repository link</Link>
            <i class="fa-solid fa-globe text-white text-3xl mt-4  text-center"></i><Link to='https://gulshan-ray123.github.io/e-healthcare/' className="text-white mt-5 ml-2 text-center underline">
             Website Link (Static Part)</Link>
            </span>
   </section>
  )
}

export default HealthProj
