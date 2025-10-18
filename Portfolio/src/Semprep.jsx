import React from 'react'
import { Link } from 'react-router-dom'
function Semprep() {
  return (
   <section className='h-[200%]  bg-gradient-to-r from-slate-950 to-slate-900  w-[94%]  ml-5 mt-4'>
      <h1 className=' hidden md:text-white text-3xl md:flex justify-center relative top-9'>Project Name: SemPrep</h1>
              <h1 className=' block  text-white text-lg  justify-center relative top-9 md:hidden text-center'>Project Name: SemPrep</h1>
                  <div>  <h1 className='text-green-100 flex justify-center mt-20 text-xl font-bold'>Description:</h1>
                  <p className='text-yellow-50 p-4 justify-items-center text-justify'>I had worked on this project for about 4 months which including applying the learned basics of frontend and backend technologies .Basically this project was a part of major project for 4nd semester made for college Students.<b className='bg-green-400 text-blue-800'>The main objective of this project is to devlop a website Semprep that help student for there semester preperations. Our goal is to help schools and organizations save time, reduce errors, and move toward digital solutions. </b>I have worked on both client and server side technologies as well as API integration. The main topic we learned during this project is authentication, microservices and deployement.<br/><br/>Throughout the project, I utilize various JS libraries and frameworks to devlop a robust and scalable fullstack website. This project allowed me to devlop strong problem-solving skills and gains hand on experience with modern web devlopement Technologies.</p>
                  <h1 className='text-green-100 flex justify-center mt-20 text-xl font-bold'>Stack Used:</h1>
                  <div className='flex-col md:flex justify-center md:flex-row'>
                  <div className=" h-44 ml-5 p-2  md:h-44 w-80 bg-slate-100 rounded-xl border-lime-200 mt-7 bg-[url('https://static.vecteezy.com/system/resources/previews/015/214/718/original/bank-3d-illustration-icon-png.png')] bg-cover hover:border-4"></div>
                  <div className="flex-col h-44 ml-5 p-2  md:h-44 w-80 bg-slate-100 rounded-xl border-lime-200 mt-7 md:ml-10 bg-[url('https://wallpapercave.com/wp/wp7420966.jpg')] bg-cover hover:border-4"></div></div>
                  
                  </div>
                  <h1 className='text-green-100 flex justify-center mt-20 text-xl font-bold'>key Features:</h1>
                  
                  <div className='flex justify-center text-justify'><ul className='text-yellow-50 p-4 '>
                      <li>1. Help students to access free notes.</li>
                      <li>2.User authentication and Authorization.</li>
                      <li>3.Integration of microServices </li>
                      <li>4.Use of Tokens for session management.</li>
                  </ul>
                  </div>
                  <h1 className='text-green-100 flex justify-center mt-10 text-xl'>Timeline: January 2025- April 2025</h1>
                  <h1 className='text-green-100 flex justify-center mt-10 text-xl'>Demo and Clip:</h1>
                  <span className='flex-col  md: flex md:justify-center'>
                  <i class="fa-brands fa-github text-white text-3xl mt-4  text-center"> </i><Link to='https://github.com/gulshan-ray123/Sem-prep' className="text-white mt-5 ml-4 text-center underline">Project code Repository link</Link>
                  <i class="fa-solid fa-globe text-white text-3xl mt-4  text-center"></i><Link to='https://sem-prep.onrender.com/' className="text-white mt-5 ml-2 text-center underline">
                   Website Link </Link>
                  </span>
    </section>
  )
}

export default Semprep
