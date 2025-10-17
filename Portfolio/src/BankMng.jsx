import React from 'react'
import { Link } from 'react-router-dom'
function BankMng() {
  return (
   <section className='h-[200%]  bg-gradient-to-r from-slate-950 to-slate-900  md:w-[94%]  md:ml-5 md:mt-4'>

     <h1 className=' hidden md:text-white text-3xl md:flex justify-center relative top-9'>Project Name: Bank Management System</h1>
            <h1 className=' block  text-white text-lg text-center relative top-9 md:hidden'>Project Name: Bank Management System</h1>
            <div>  <h1 className='text-green-100 flex justify-center mt-20 text-xl font-bold'>Description:</h1>
            <p className='text-yellow-50 p-4 justify-items-center text-justify'>We worked on this project for about 2 months which uses python to create GUI interface using tkinter library as well as server side technology.Our project uses relational Database i.e SQL includes customer registrations.Basically this project was a part of technical training  for 3rd semester alloted to us by our college professors.<b className='bg-green-400 text-blue-800'>The main objective of this project is to devlop a banking application/ portal that help banks employee for seamless and smooth functioning of organisation.</b> <br/><br/>Throughout the project, I utilize various python libraries and frameworks to devlop a robust and scalable fullstack applications. This project allowed me to devlop strong application oriented approach of programming language and gains hand on experience with software devlopement Technologies.</p>
            <h1 className='text-green-100 flex justify-center mt-20 text-xl font-bold'>Stack Used:</h1>
            <div className=' flex-col md:flex justify-center md:flex-row'>
            <div className="flex-col h-44 ml-5 p-2 md:h-44 w-80 bg-slate-100 rounded-xl border-lime-200 mt-7 bg-[url('https://tse3.mm.bing.net/th?id=OIP.8VvfJswchA29Zk6fc7RZhwHaEG&pid=Api&P=0&h=180')] bg-cover hover:border-4 "></div>
            <div className="  flex-col h-44 ml-5 p-2 md:h-44 w-80 bg-slate-100 rounded-xl border-lime-200 mt-7 md:ml-10 bg-[url('https://tse1.mm.bing.net/th?id=OIP.z9bb9ZdauvEfoEx3P_yVPgHaEK&pid=Api&P=0&h=180')] bg-cover hover:border-4 "></div></div>
            </div>
            <h1 className='text-green-100 flex justify-center mt-20 text-xl font-bold'>key Features:</h1>
            <div className='flex justify-center'>
            <ul className='text-yellow-50 p-4 text-justify'>
                <li>1. Customer Registration</li>
                <li>2. Dashboard for each Customer</li>
                <li>3. Provide flexiblity to bank employee.</li>
            </ul>
            </div>
            <h1 className='text-green-100 flex justify-center mt-10 text-xl'>Timeline: April 2024- June 2024</h1>
            <h1 className='text-green-100 flex justify-center mt-10 text-xl'>Demo and Clip:</h1>
            <span className='flex-col  md: flex md:justify-center'>
            <i class="fa-brands fa-github text-white text-3xl mt-4  text-center"> </i><Link to='https://github.com/gulshan-ray123/Bank_management-System' className="text-white mt-5 ml-4 text-center underline">Project code Repository link</Link>
            </span>
   </section>
  )
}

export default BankMng
