"use client"
import React from 'react'
import { easeInOut, motion } from 'motion/react'

export const Button = () => {
  return (
        <div 
        className="[perspective:1000px] [transform-style:preserve-3d] flex h-screen w-full items-center justify-center bg-neutral-50"
        style={{
            backgroundImage:'radial-gradient(circle at 1px 1px, var(--color-neutral-400) 0.4px, transparent 0)',
            backgroundSize:"15px 15px",
            backgroundRepeat:"repeat",
        }}>

            <motion.button
            whileHover={{
                rotateX:25,
                rotateY:10,
                boxShadow:"0px 10px 44px rgba(8,112,184,0.7)",
                y:-5,
            }}
            whileTap={{
                y:0,
            }}
            style={{
                translateZ:100,
            }}
            transition={{
                duration:0.4,
                ease:"easeInOut"
            }}
             className="group relative text-neutral-300 px-12 py-4 rounded-lg bg-neutral-950 
                        shadow-[0px_1px_4px_0px_rgb(255,255,255,0.1)_inset,0px_-1px_2px_0px_rgba(255,255,255,0.1)_inset]">
                <span className='group-hover:text-cyan-500 transition-colors duration-500'>Subscribe</span>
                <span 
                className="absolute inset-x-0 bottom-px mx-auto bg-linear-to-r from-transparent via-cyan-500 to-transparent h-px w-3/4"></span>
                <span 
                className="absolute group-hover:opacity-100 opacity-0 transition-opacity duration-300 inset-x-0 bottom-px mx-auto bg-linear-to-r from-transparent via-cyan-500 to-transparent h-[4px] w-full blur-sm"></span>
            </motion.button>
    </div>
  )
}
