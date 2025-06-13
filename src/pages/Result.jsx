import React, { useState } from 'react';
import { assets } from "../assets/assets";
import { motion } from "motion/react"

const Result = () => {
  const [image, setImage] = useState(assets.sample_img_1);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState('');

  const onSubmitHandler = async (e) => {};

  return (
    <motion.form 
      initial={{opacity:0.2, y: 100}}
      transition={{duration: 1}}
      whileInView={{opacity: 1, y: 0}}
      viewport={{once:true}}
      onSubmit={onSubmitHandler} className="flex flex-col items-center justify-center min-h-[90vh] px-4">
      <div className="relative">
        <img src={image} alt="Generated" className="max-w-sm rounded-xl shadow-md" />
        <span className={`absolute bottom-0 left-0 h-1 bg-indigo-500 ${loading ? 'w-full transition-all duration-[10s]' : 'w-0'}`} />
      </div>
      <p className={`mt-2 text-indigo-600 ${!loading ? 'hidden' : ''}`}>Loading...</p>

      {!isImageLoaded && (
        <div className="flex w-full max-w-xl bg-white border border-indigo-200 shadow-md rounded-full mt-10 overflow-hidden">
          <input
            onChange={(e) => setInput(e.target.value)}
            value={input}
            type="text"
            placeholder="Describe what you want to generate"
            className="flex-1 px-6 py-3 text-sm text-gray-700 placeholder-gray-400 outline-none bg-transparent"
          />
          <button
            type="submit"
            className="bg-indigo-600 text-white text-sm px-8 py-3 hover:bg-indigo-700 transition">
            Generate
          </button>
        </div>
      )}

      {isImageLoaded && (
        <div className="flex gap-4 flex-wrap justify-center text-sm mt-10">
          <button
            onClick={() => setIsImageLoaded(false)}
            className="border border-indigo-600 text-indigo-700 px-8 py-3 rounded-full hover:bg-indigo-50 transition"
          >
            Generate Another
          </button>
          <a
            href={image}
            download
            className="bg-indigo-600 text-white px-10 py-3 rounded-full hover:bg-indigo-700 transition"
          >
            Download
          </a>
        </div>
      )}
    </motion.form>
  );
};

export default Result;
