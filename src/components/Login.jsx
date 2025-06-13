import React, { useContext, useEffect, useState } from 'react';
import { assets } from "../assets/assets";
import { AppContext } from '../context/AppContext';
import { motion } from "motion/react"
const Login = () => {
  const [state, setState] = useState('Login');
  const { setShowLogin } = useContext(AppContext);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 backdrop-blur-md bg-black/30 flex justify-center items-center px-4">
      <motion.form
        initial={{ opacity: 0.2, y: 50 }}
        transition={{ duration: 0.6 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative bg-white w-full max-w-sm p-8 rounded-2xl shadow-xl text-gray-700 space-y-4">

        <h1 className="text-2xl font-bold text-center text-blue-700">{state}</h1>
        <p className="text-sm text-center text-gray-500">
          {state === 'Login' ? 'Welcome back! Please sign in to continue' : 'Please sign up to continue'}
        </p>

        {state !== 'Login' && (
          <div className="flex items-center gap-3 border border-gray-200 px-4 py-2 rounded-full">
            <img className="w-4 h-4" src={assets.user_icon} alt="user" />
            <input type="text" placeholder="Full Name" required className="flex-1 text-sm outline-none bg-transparent" />
          </div>
        )}

        <div className="flex items-center gap-3 border border-gray-200 px-4 py-2 rounded-full">
          <img src={assets.email_icon} alt="email" className="w-4 h-4" />
          <input type="email" placeholder="Email ID" required className="flex-1 text-sm outline-none bg-transparent" />
        </div>

        <div className="flex items-center gap-3 border border-gray-200 px-4 py-2 rounded-full">
          <img src={assets.lock_icon} alt="lock" className="w-4 h-4" />
          <input type="password" placeholder="Password" required className="flex-1 text-sm outline-none bg-transparent" />
        </div>

        <p className="text-sm text-blue-600 text-right cursor-pointer">Forgot password?</p>

        <button className="w-full py-2.5 bg-blue-600 hover:bg-blue-800 text-white rounded-full font-medium transition">
          {state === 'Login' ? 'Login' : 'Create Account'}
        </button>

        <p className="text-center text-sm">
          {state === 'Login' ? (
            <>
              Don’t have an account? <span className="text-blue-600 cursor-pointer" onClick={() => setState('Sign Up')}>Sign Up</span>
            </>
          ) : (
            <>
              Already have an account? <span className="text-blue-600 cursor-pointer" onClick={() => setState('Login')}>Login</span>
            </>
          )}
        </p>

        <img
          onClick={() => setShowLogin(false)}
          src={assets.cross_icon}
          alt="close"
          className="absolute top-5 right-5 w-5 h-5 cursor-pointer"
        />
      </motion.form>
    </div>
  );
};

export default Login;
