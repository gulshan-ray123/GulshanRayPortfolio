import React from 'react';
import { motion } from 'framer-motion';

function CertCard(props) {
  const { duration, year, link, org, CertificationName } = props;

  // Hover lift + glow effect
  const cardHover = {
    hover: {
      scale: 1.05,
      y: -10,
      boxShadow: "0px 25px 40px rgba(0, 255, 255, 0.2)",
      backgroundColor: "rgba(255, 255, 255, 0.08)",
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  // Entry animation
  const fadeInUp = {
    hidden: { opacity: 0, scale: 0.95, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  // Staggered child animation
  const childFade = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.4 },
    }),
  };

  return (
    <motion.div
      className="w-[300px] h-[370px] mt-24 ml-6 md:ml-24 p-6 rounded-xl backdrop-blur-md bg-white/5 border border-white/10 shadow-lg text-center text-white transition-transform duration-300"
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true }}
      variants={cardHover}
    >
      <motion.img
        src="https://tse2.mm.bing.net/th/id/OIP.wa8QjlM2nkp-TnpNhV6qaAHaHa?w=4000&h=4000&rs=1&pid=ImgDetMain&o=7&rm=3"
        alt="Certificate"
        className="w-full h-auto mb-3 object-contain rounded-md"
        custom={0}
        variants={childFade}
        whileHover={{ scale: 1.05, rotate: 2 }}
      />
      <motion.h3
        className="font-alumni-sans-sc text-lg font-semibold mb-1"
        custom={1}
        variants={childFade}
      >
        {org}
      </motion.h3>
      <motion.p className="text-sm mb-1" custom={2} variants={childFade}>
        <strong>Name:</strong> {CertificationName}
      </motion.p>
      <motion.p className="text-sm mb-1" custom={3} variants={childFade}>
        <strong>Duration:</strong> {duration}
      </motion.p>
      <motion.p className="text-sm mb-3" custom={4} variants={childFade}>
        <strong>Year:</strong> {year}
      </motion.p>
      <motion.a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sky-400 underline text-sm"
        custom={5}
        variants={childFade}
        whileHover={{ scale: 1.1, color: "#38bdf8" }}
      >
        View Certificate
      </motion.a>
    </motion.div>
  );
}

export default CertCard;