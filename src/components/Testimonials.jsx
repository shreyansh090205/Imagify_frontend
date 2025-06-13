import React from 'react'
import { assets, testimonialsData } from '../assets/assets'
import { motion } from "motion/react"


const Testimonials = () => {
    return (
        <motion.div
            initial={{ opacity: 0.2, y: 100 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center my-24 px-4">
            <h1 className="text-4xl font-semibold text-gray-800 mb-3">Customer Testimonials</h1>
            <p className="text-gray-500 mb-12">What our users say about us:</p>

            <div className="flex flex-wrap justify-center gap-8">
                {testimonialsData.map((testimonial, index) => (
                    <div key={index} className="bg-white p-6 rounded-xl shadow-lg w-80 hover:scale-105 transition">
                        <img src={testimonial.image} alt="" className="w-14 h-14 rounded-full mx-auto" />
                        <h2 className="text-lg font-bold mt-3 text-blue-700">{testimonial.name}</h2>
                        <p className="text-sm text-gray-400">{testimonial.role}</p>
                        <div className="flex justify-center my-3">
                            {Array(testimonial.stars).fill().map((_, i) => (
                                <img key={i} src={assets.rating_star} alt="star" className="w-4 h-4" />
                            ))}
                        </div>
                        <p className="text-sm text-gray-600">{testimonial.text}</p>
                    </div>
                ))}
            </div>
        </motion.div>

    )
}

export default Testimonials
