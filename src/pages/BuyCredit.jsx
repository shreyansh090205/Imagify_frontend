import React, { useContext } from 'react';
import { assets, plans } from "../assets/assets";
import { AppContext } from "../context/AppContext";
import { motion } from "motion/react"

const BuyCredit = () => {
  const { user } = useContext(AppContext);

  return (
    <motion.div
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="min-h-[80vh] text-center pt-14 pb-20 px-4">
      <button className="border border-blue-300 text-blue-700 px-8 py-2 rounded-full mb-6 bg-white shadow-sm hover:bg-blue-100 transition">Our Plans</button>
      <h1 className="text-4xl font-bold text-gray-800 mb-10">Choose the Plan</h1>

      <div className="flex flex-wrap justify-center gap-8 text-left">
        {plans.map((item, index) => (
          <div
            key={index}
            className="bg-white border border-blue-100 rounded-xl py-10 px-8 w-[300px] text-gray-700 hover:shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <img width={40} src={assets.logo_icon} alt="icon" />
            <p className="mt-4 font-semibold text-lg text-gray-900">{item.id}</p>
            <p className="text-sm text-gray-600">{item.desc}</p>
            <p className="mt-6 text-blue-800 text-xl font-bold">
              ${item.price} <span className="text-sm font-normal text-gray-500">/ {item.credits} credits</span>
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ default: { duration: 0.5 }, opacity: { delay: 0.8, duration: 1 } }}
              className="w-full mt-8 bg-black hover:bg-blue-700 text-white text-sm rounded-lg py-2.5">
              {user ? 'Purchase' : 'Get Started'}
            </motion.button>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default BuyCredit;
