import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

function Card(props) {
  let { Title, Description, img, linkpage } = props;

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <motion.div
      className="inline-block mr-16"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      whileHover={{ scale: 1.05, y: -5 }}
      transition={{ type: 'spring', stiffness: 120 }}
    >
      <motion.div
        className="md:w-94 bg-gray-900 rounded-2xl overflow-hidden shadow-lg text-white mt-14 w-72 md:ml-14 ml-1"
        variants={fadeUp}
      >
        <motion.img
          src={img}
          alt="Card"
          className="w-full h-60 object-contain rounded-lg"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        />
        <motion.div className="p-4" variants={fadeUp}>
          <motion.h2 className="text-xl font-semibold mb-2" variants={fadeUp}>
            {Title}
          </motion.h2>
          <motion.p className="text-sm mb-4 text-gray-300" variants={fadeUp}>
            {Description}
          </motion.p>
          <NavLink to={linkpage}>
            <motion.button
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl transition duration-200"
              whileHover={{ scale: 1.05 }}
            >
              Click Here
            </motion.button>
          </NavLink>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Card;