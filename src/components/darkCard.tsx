"use client"

import React, { useState } from 'react'
import { cn } from '@/lib/utils';
import { IconCheck, IconGlobe, IconGlobeFilled, IconGlobeOff, IconWorld } from '@tabler/icons-react';
import {motion} from 'motion/react'
import { TextAnimate } from './ui/text-animate';
import { IconBookmarkFilled } from '@tabler/icons-react';


// import { SlidingNumber } from './animate-ui/primitives/texts/sliding-number';

export const DarkCard = () => {
  const [isDev, setIsDev] = useState(false)
  
  return (
    <motion.div
        initial={{
        opacity:0,
        scale:0.98,
        filter:'blur(5px)'
        }}
        animate={{
          opacity:1,
          scale:1,
          filter:"blur(0px)"
        }}
        transition={{
            duration:0.2,
            ease:"easeInOut"
        }}
     className={cn('top-5 w-102 relative min-h-105 h-159 rounded-4xl ',
      'shadow-lg bg-neutral-950 shadow-neutral-600',
      'flex flex-col p-2 justify-center align-center'
      )}>
        <div className='z-1 h-[49%] top-81 rounded-b-4xl inset-x-1 absolute bg-linear-to-t from-black/90 to-black/20 backdrop-blur-xl mask-t-from-65% opacity-95  shadow-xl'></div>
        
        <div className='z-2 h-[40%] top-100 ml-5 flex flex-col gap-5 absolute'>
          <div>
              <TextAnimate className='text-neutral-100/98 text-[29px] leading-[33px] font-satoshi font-medium' duration={1} by='line' animation="blurIn" >Crafting a Timeless </TextAnimate>
              <TextAnimate className='text-neutral-100/98 text-[29px] leading-[33px] font-satoshi font-medium' duration={1} by='line' animation="blurIn">Brand Identity</TextAnimate>
            </div>
            <p className='text-md font-light text-neutral-50/75 leading-[22px] tracking-wide'>We're a small team in Berlin doing<br></br> design work for brands that want to <br></br>stand out</p>
        </div>
    
        <div className='z-2 h-[40%] top-146 flex w-full overflow-hidden absolute'>
            <div className='ml-5 '>
                <p className='text-neutral-50/70 text-[16px] tracking-tight leading-[33px] font-satoshi'>5 min read</p>
            </div>
            <div className='mt-2 ml-57'>            
                <IconBookmarkFilled size={17} color='var(--color-green-400)'/>
            </div>
            <p className='text-neutral-50 text-sm mt-2 ml-1'>320</p>
        </div>

      <div className={cn('z-0 inset-x-4 inset-y-4 absolute bg-neutral-900  rounded-3xl rounded-b-3xl ',
        'border border-neutral-900 mb-2'
        )}>
            <img src="/Halftone.png" className='rounded-2xl w-full h-full' loading="lazy" alt="random bs"/>
      </div>
    </motion.div>
  )
}
