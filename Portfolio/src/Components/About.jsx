import React from 'react'
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import profileImg from "../assets/gulshan.jpg"
// import universityLogo from "../assets/imagecollege.png";
import CollegeLogo from "../assets/CollegeLogo.jpg";

function About() {

     const cardHover = {
    hover: {
      scale: 1.05,
      y: -10,
      boxShadow: "0px 20px 30px rgba(135, 206, 250, 0.3)",
      transition: { duration: 0.3 },
    },
  };

    const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
   <div className="bg-[#0f172a] px-4 md:px-16 py-16 text-white md:w-[92%] md:ml-5 md:mt-4">
      {/* Heading */}
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-center mb-16 group relative"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        About <span className="text-cyan-400">Me</span>
        <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-blue-600 transition-all duration-500 group-hover:w-full"></span>
      </motion.h1>

      {/* Profile & Bio */}
      <motion.div
        className="flex flex-col lg:flex-row items-center justify-center gap-10 md:w-[90%]"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Profile Image */}
        <motion.div
          className="w-40 h-40 rounded-full overflow-hidden border border-white/10 backdrop-blur-md shadow-lg"
          whileHover={{
            scale: 1.15,
            rotate: 5,
            transition: { type: "spring", stiffness: 120 },
          }}
          variants={fadeUp}
        >
          <motion.img
            src={profileImg}
            alt="Profile"
            className="w-full h-full object-cover rounded-full "
          />
        </motion.div>

        {/* Bio Card */}
        <motion.div
          className="glass-card p-6 rounded-xl backdrop-blur-md bg-white/5 border border-white/10 shadow-lg flex-1 md:w-[50%]"
          variants={fadeUp}
          whileHover="hover"
          initial="hidden"
          whileInView="visible"
        >
          <motion.h2
            className="text-2xl md:text-3xl font-bold mb-4"
            variants={fadeUp}
          >
            I am looking for{" "}
            <span className="text-sky-400">New Opportunities</span> & projects
          </motion.h2>
          <motion.p
            className="text-gray-300 leading-relaxed mb-6"
            variants={fadeUp}
          >
            I'm an undergraduate and aspiring Full Stack Developer with
            practical experience in building full-stack web applications using
            React, Node.js, Express, and MongoDB. I love learning,
            problem-solving, and writing clean, scalable code as well as i have core understanding of Java and SQL.
          </motion.p>

          {/* Stats */}
          <motion.div className="flex gap-6 flex-wrap mb-6" variants={fadeUp}>
            {[
              { num: "8.2", label: "CGPA" },
              { num: "Freshers", label: "Years Experience" },
              { num: "5+", label: "Award Winning" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
              >
                <h2 className="text-2xl font-bold">{stat.num}</h2>
                <p className="text-sm text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Button */}
         <Link to="mailto:gk0507818@gmail.com"> <motion.button
            className="bg-sky-500 hover:bg-sky-600 text-white font-semibold px-6 py-3 rounded-lg transition duration-300"
            whileHover={{ scale: 1.05 }}
          >
            Get in Touch →
          </motion.button></Link>
        </motion.div>
      </motion.div>

      {/* Education */}
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-center mt-24 mb-10 group relative"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        Education
        <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-blue-600 transition-all duration-500 group-hover:w-full"></span>
      </motion.h1>

      <motion.div
        className="flex flex-col md:flex-row gap-6 items-center justify-center"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* University Card */}
        <motion.div
          className="w-72 p-6 rounded-xl backdrop-blur-md bg-white/5 border border-white/10 shadow-lg text-white"
          whileHover="hover"
          variants={{ ...fadeUp, hover: cardHover.hover }}
        >
          <div className="flex items-center gap-4 mb-4">
            <motion.img
              src={CollegeLogo}
              alt="University Logo"
              className="w-12 h-12 rounded-full"
              whileHover={{ scale: 1.2, rotate: 10 }}
            />
            <h3 className="text-xl font-semibold">
              Greater Noida Institute of Technology
            </h3>
          </div>
          <p className="text-gray-300 text-sm mb-2">
            University: Dr. A. P. J. Abdul Kalam Technical University, Lucknow
          </p>
          <p className="text-gray-300 text-sm mb-2">
            B.Tech in Computer Science
          </p>
          <p className="text-gray-400 text-sm">
            CGPA: <span className="text-white font-bold">8.2</span>
          </p>
        </motion.div>

        {/* College Card */}
        <motion.div
          className="w-72 p-6 rounded-xl backdrop-blur-md bg-white/5 border border-white/10 shadow-lg text-white"
          whileHover="hover"
          variants={{ ...fadeUp, hover: cardHover.hover }}
        >
          <div className="flex items-center gap-4 mb-4">
            <img alt="College Logo" className="w-12 h-12 rounded-full" />
            <h3 className="text-xl font-semibold">RAO KASAL PUBLIC SCHOOL</h3>
          </div>
          <p className="text-gray-300 text-sm mb-2">
            Higher Secondary Education
          </p>
          <p className="text-gray-400 text-sm">
            CGPA: <span className="text-white font-bold">86.2%</span>
          </p>
        </motion.div>
      </motion.div>

      {/* Online Profiles */}
<motion.h1
  className="text-4xl md:text-5xl font-bold text-center mt-24 mb-10 group relative"
  variants={fadeUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
>
  Online <span className="text-cyan-400">Profiles</span>
  <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-blue-600 transition-all duration-500 group-hover:w-full"></span>
</motion.h1>

<motion.div
  className="flex flex-col md:flex-row items-center justify-center gap-6"
  variants={container}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
>
  {[
    {
      label: "GitHub",
      url: "https://github.com/gulshan-ray123",
      icon: "🌐",
    },
    {
      label: "LeetCode",
      url: "https://leetcode.com/u/Gulshan_1234/",
      icon: "💡",
    },
    {
      label: "Coding Ninjas",
      url: "https://www.naukri.com/code360/profile/GulshanRai",
      icon: "🎯",
    },
  ].map((profile, i) => (
    <motion.a
      key={i}
      href={profile.url}
      target="_blank"
      rel="noopener noreferrer"
      className="w-64 p-5 rounded-xl backdrop-blur-md bg-white/5 border border-white/10 shadow-lg text-white text-center hover:bg-white/10 transition duration-300"
      variants={fadeUp}
      whileHover={{ scale: 1.05 }}
    >
      <div className="text-3xl mb-2">{profile.icon}</div>
      <h3 className="text-xl font-semibold">{profile.label}</h3>
    </motion.a>
  ))}
</motion.div>
    </div>
  )
}

export default About
