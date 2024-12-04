import React from 'react'
import { assets } from '../assets/assets'
import { delay, motion } from "motion/react"

const Header = () => {
    return (
        <motion.div 
        className='flex flex-col justify-center items-center text-center my-20'
        initial={{opacity:0.2, y:100}}
        transition={{duration:1}}
        whileInView={{ opacity: 1, y:0 }}
        viewport={{ once: true }}
        >

            <motion.div 
            className='text-stone-500 inline-flex text-center gap-2 bg-white px-6 py-1 rounded-full border border-neutral-500'
            initial={{opacity:0, y:-20}}
            animate={{ opacity: 1, y: 0 }}
            duration={{ delay: 0.2, duration:0.8 }}
            >
                <p>Best Text to Image Generator</p>
                <img src={assets.star_icon} alt="" />
            </motion.div>

            <motion.h1 className='text-4xl max-w-[300px] sm:text-7xl sm:max-w-[590px] mx-auto mt-10 text-center'>Turn Text to <span className='text-blue-600'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            duration={{ delay: 0.4, duration: 2 }}
            >Image</span>, in seconds</motion.h1>

            <motion.p className='text-center max-w-xl mx-auto mt-5'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            >Unleash your creativity with AI. Turn your imagination into visual art in seconds - just type, and wathc the magic engine happen!.</motion.p>

            <motion.button 
            className='sm:text-lg text-white bg-black w-auto mt-8 px-12 py-2.5 flex items-center gap-2 rounded-full'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale:0.95 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ default: {duration: 0.5 }, opacity: { delay: 0.8, duration:1 } }}
            >Generate Images 
                <img className='h-6' src={assets.star_group} alt="" />
            </motion.button>

            <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className='flex flex-wrap justify-center mt-16 gap-3'>
                {Array(6).fill('').map((item,index) => (
                    <motion.img
                    whileHover={{ scale}}
                    className='rounded hover:scale-105 transition-all duration-300 cursor-pointer max-sm:w-10' 
                    src={index % 2 === 0 ? assets.sample_img_2 : assets.sample_img_1} 
                    alt="" 
                    key={index} 
                    width={70}/>
                ))}
            </motion.div>
            <p className='mt-2 text-neutral-600'>Generate Images from imagify</p>
        </motion.div>
    )
}

export default Header