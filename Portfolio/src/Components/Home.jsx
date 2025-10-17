import React from 'react'
import { Link } from 'react-router-dom'
import profileImg from "../assets/Gulshan Kumar Ray.jpg"
import{motion} from 'framer-motion'
function Home({isDark, isYellow}) {
    const text= "> Full stack developer_"
  return (
    <div>
      <div className='h-[100%]'>
      
    </div>
      <section className='h-screen  bg-gradient-to-r from-slate-950 to-slate-900  md:w-[92%] w-[100%]  md:ml-5 md:mt-4'>
      <motion.div
  whileHover={{
    rotate: [0, 5, -5, 0],
    scale: [1, 1.05, 0.98, 1],
    transition: {
      duration: 1.8,
      ease: 'easeInOut',
      repeat: Infinity,
      repeatType: 'loop',
    },
  }}
  className={`h-[40%] w-[80%] md:h-[50%] left-12 md:w-[25%] bg-gradient-to-br ${
    isDark
      ? 'from-purple-600 to-pink-500'
      : 'bg-gradient-to-r from-orange-600 to-pink-700'
  } ${
    isYellow
      ? 'from-orange-600 to-pink-700'
      : 'from-purple-300 to-yellow-500'
  } absolute top-[10%] md:left-[38%] rounded-[100%] bg-[url('src/assets/Gulshan Kumar Ray.jpg')] bg-no-repeat bg-center bg-contain bg-clip-padding`}
>
  <div
    className="absolute inset-0 bg-no-repeat bg-center bg-cover opacity-100 m-2 rounded-[100%]"
    style={{
      backgroundImage: `url(${profileImg})`,
      clipPath: 'circle(100% at center)',
    }}
  ></div>
</motion.div>


       <span className='relative md:top-[60%] top-[48%] z-10 md:left-8'>
        <h1 className={`bg-gradient-to-b from-purple-600 to-pink-700 bg-clip-text text-transparent font-extrabold md:text-5xl text-center ${isDark ? 'from-purple-600 to-pink-700': 'text-orange-500'} ${isYellow ?'text-orange-500': 'text-yellow-400'} text-center text-3xl `}>Gulshan Kumar Ray</h1></span>
        <div className='md:h-1/6  bg-gradient-to-r from-slate-950 to-slate-900  w-fit border-b border-orange-700 p-1
        relative top-[60%] md:left-[20%] hidden md:block z-0'>
          <table className='table-auto'>
            <tr>
              <td className='text-white pr-28 pl-28 border-r border-red-600 alumni-sans-sc'>3+</td>
               <td className='text-white pr-28  pl-28 border-r border-red-600 alumni-sans-sc'>8+</td>
                <td className='text-white pr-28  pl-28 border-r border-red-600 alumni-sans-sc'>150+</td>
            </tr>
            <tr><td className='text-white  pl-16 border-r border-red-600'>Projects Completed</td>
            <td className='text-white  pl-12 border-r border-red-600'>Hackathons & Certifications</td>
              <td className='text-white  pl-16 border-r border-red-600'>Problem Solving {`(DSA)`}</td></tr>
          </table>
        </div>
            <div className='h-[50%]  bg-gradient-to-r from-slate-950 to-slate-900  w-fit border-b border-orange-700 p-1
        relative md:top-[60%] top-[46%] left-[10%] md:hidden z-0'>
          <table className='table-auto'>
            <tr>
              <td className='text-white pr-28 pl-28  border-red-600 alumni-sans-sc'>3+</td>
            </tr>
            
            <tr><td className='text-white  pl-16 pb-1   border-b border-red-600'>Projects Completed</td>
            </tr>
             <tr>
              <td className='text-white pr-28 pl-28  border-red-600 alumni-sans-sc'>8+</td>
            </tr>
            
            <tr><td className='text-white  pl-12 pb-1  border-b  border-red-600'>Hackathons & Certifications</td>
            </tr>
             <tr>
              <td className='text-white pr-28 pl-28  border-red-600 alumni-sans-sc'>150+</td>
            </tr>
            
            <tr><td className='text-white  pl-16  border-b  border-red-600'>Problem Solving {`(DSA)`}</td>
            </tr>
          </table>
        </div>
         <div className='bg-gradient-to-r from-slate-950 to-slate-900 h-[90%] w-[100%] md:w-[92%] absolute md:top-[88%] md:h-[70%] top-[105%] '>
                {/* <span className='text-center'><h1 className='cascadia-mono md:text-4xl text-center mt-12 md:mt-0 text-2xl'> {'>'}   Full stack developer_</h1></span> */}
                <span className='text-center'>
                  <motion.div
    className="cascadia-mono md:text-4xl text-center mt-4 md:mt-0 text-2xl"
    initial="hidden"
    animate="visible"
    variants={{
      hidden: {},
      visible: {
        transition: {
           staggerChildren: 0.1
        },
      },
    }}
  >
    {text.split("").map((char, index) => (
      <motion.span
        key={index}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0
           },
        }}
      >
        {char}
      </motion.span>
    ))}
  </motion.div>
                </span>
                <div className='text-white md:w-1/2 w-[80%] h-fit mt-10 md:left-1/4 left-[10%] absolute text-justify edu-sa-hand'>Aspiring Software Engineer with a solid foundation in computer science and strong proficiency in web development. Seeking to contribute to innovative and scalable software solutions by leveraging my skills in modern frameworks, clean coding practices, and problem-solving. Eager to join a dynamic team where I can grow technically and make a meaningful impact.</div>
         </div>
         <div className='w-[20%]  h-16 bg-purple-400 absolute top-[135%] left-[40%] hidden md:block '>
         
         </div>
        <Link to='https://drive.google.com/file/d/1n5ubEU3JF9hmt1HTKcTSC9luja0HlZI2/view?usp=sharing'> <button className='w-[20%]  h-16 bg-white  absolute top-[134%] left-[39.5%]  hidden md:block '> Download Resume</button></Link>
          <div className='md:hidden w-[48%] h-16 bg-purple-400 absolute  top-[170%]  left-[30%]'>
         
         </div>
    <Link to="https://drive.google.com/file/d/1n5ubEU3JF9hmt1HTKcTSC9luja0HlZI2/view?usp=sharing"> <button className='md:hidden w-[50%] h-16 bg-white absolute top-[169%] left-[26%]'> Download Resume</button></Link>
      </section>
    </div>
  )
}

export default Home
