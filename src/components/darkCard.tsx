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
    <motion.div className={cn('top-5 w-102 relative min-h-105 h-148 rounded-4xl ',
      'shadow-md bg-neutral-950 shadow-neutral-700',
      'flex flex-col p-2 justify-center align-center'
      )}>
        <div className='z-1 h-[45%] top-81 rounded-b-4xl inset-x-1 absolute bg-linear-to-t from-black/90 to-black/20 backdrop-blur-xl mask-t-from-65% opacity-95  shadow-xl'></div>
        
        <div className='z-2 h-[40%] top-100 ml-5 flex flex-col gap-3 absolute'>
            <p className='text-neutral-100/98 text-[29px] leading-[33px] font-satoshi font-medium'>Crafting a Timeless <br></br> Brand Identity</p>
            <p className='text-lg font-light text-neutral-50/75 leading-[22px] tracking-wide'>We're a small team in Berlin doing<br></br> design work</p>
        </div>
    
        <div className='z-2 h-[40%] top-135 flex w-full overflow-hidden absolute'>
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
            <img src="/Halftone.png" className='rounded-2xl w-full h-full' alt="random bs"/>
      </div>
    </motion.div>
  )
}
