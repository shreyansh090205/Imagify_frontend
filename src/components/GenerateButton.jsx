import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { motion } from "motion/react"
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'

const GenerateButton = () => {
  const { user, setShowLogin } = useContext(AppContext)
  const navigate = useNavigate()
  const onClickHandler = () => {
    if (user) {
      navigate('/result')
    } else {
      setShowLogin(true)
    }
  }
  return (
    <motion.div
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center py-20">
      <h1 className="text-3xl sm:text-4xl font-semibold text-gray-800 mb-6">See the Magic. Try It Now</h1>
      <button onClick={onClickHandler} className="inline-flex items-center gap-3 px-10 py-3 rounded-full bg-black hover:bg-blue-700 text-white text-lg font-medium transition-transform hover:scale-105 cursor-pointer">
        Generate Images <img src={assets.star_group} className="h-6" alt="star" />
      </button>
    </motion.div>

  )
}

export default GenerateButton
