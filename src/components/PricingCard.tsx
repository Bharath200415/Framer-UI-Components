"use client"

import React, { useState } from 'react'
import { cn } from '@/lib/utils';
import { IconCheck, IconGlobe, IconGlobeFilled, IconGlobeOff, IconWorld } from '@tabler/icons-react';
import {motion} from 'motion/react'
import { TextAnimate } from './ui/text-animate';
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { ShinyButton } from "@/components/ui/shiny-button"
import SlidingNumber from './ui/SlidingNumber';
// import { SlidingNumber } from './animate-ui/primitives/texts/sliding-number';

export const PricingCard = () => {
  const [isDev, setIsDev] = useState(false)
  
  return (
    <motion.div className={cn('top-5 w-105 relative min-h-104 h-150 rounded-3xl ',
      'shadow-md bg-white',
      'flex flex-col p-2 justify-center align-center'
      )}>
      <div className={cn('h-[78%] inset-x-2 top-2 p-5 absolute rounded-2xl rounded-b-3xl bg-neutral-100/70 ',
        'border border-neutral-200 mb-2'
        )}>
        <div >
            <IconWorld size={32} stroke={1.5} color='var(--color-neutral-800)'/>
        </div>
        
        <div className='mt-3'>
          <TextAnimate 
          animation="blurInUp" by="character" once
          className='text-3xl font-satoshi text-neutral-900 font-bold tracking-tighter leading-none'>{`Landing Page Design ${isDev? "+ Dev":""}`}</TextAnimate>
          <div className='flex mt-4 w-full bg-neutral-200 rounded-lg object-fit tracking-tight p-1.5 text-[11.3px] text-foreground/50'>
            <p className='ml-1 text-neutral-500 font-medium'>Bring your dream website to life in just days, not months.</p>
          </div>
          <div className='bg-gray-200 mt-4 h-px w-full '></div>
          <div className='mt-5 '>
            <div className='flex'>
               <IconCheck stroke={1.5} size='18' color='var(--color-neutral-400)'/><p className='text-neutral-600 font-medium tracking-tight text-[12px] ml-2'>Wireframes</p>
            </div>
            <div className='bg-gray-200/60 mt-2 mb-2 h-px w-full '></div>
            <div className='flex'>
               <IconCheck stroke={1.5} size='18' color='var(--color-neutral-400)'/><p className='text-neutral-600 font-medium tracking-tight text-[12px] ml-2'>Custom Layout</p>
            </div>
            <div className='bg-gray-200/60 mt-2 mb-2 h-px w-full '></div>
            <div className='flex'>
               <IconCheck stroke={1.5} size='18' color='var(--color-neutral-400)'/><p className='text-neutral-600 font-medium tracking-tight text-[12px] ml-2'>Desktop, Tablet, Mobile Responsive Design</p>
            </div>
            <div className='bg-gray-200/60 mt-2 mb-2 h-px w-full '></div>
            <div className='flex'>
               <IconCheck stroke={1.5} size='18' color='var(--color-neutral-400)'/><p className='text-neutral-600 font-medium tracking-tight text-[12px] ml-2'>Brand Consistency</p>
            </div>
            <div className='bg-gray-200/60 mt-2 mb-2 h-px w-full '></div>
            <div className='flex'>
               <IconCheck stroke={1.5} size='18' color='var(--color-neutral-400)'/><p className='text-neutral-600 font-medium tracking-tight text-[12px] ml-2'>Figma File</p>
            </div>
            <div className='bg-gray-200/60 mt-2 mb-2 h-px w-full '></div>
            <div className='flex'>
               <IconCheck stroke={1.5} size='18' color='var(--color-neutral-400)'/><p className='text-neutral-600 font-medium tracking-tight text-[12px] ml-2'>Updates every 48 hours</p>
            </div>
            <div className='bg-gray-200/60 mt-2 mb-2 h-px w-full '></div>
            <div className='flex'>
               <IconCheck stroke={1.5} size='18' color='var(--color-neutral-400)'/><p className='text-neutral-600 font-medium tracking-tight text-[12px] ml-2'>+$400 For Each Extra Page</p>
            </div>
            <div className='bg-gray-200/60 mt-2 mb-2 h-px w-full '></div>
          </div>
          <div className="flex items-center mt-4 space-x-2">
            <Switch id="airplane-mode" checked={isDev} onCheckedChange={setIsDev} />
            <Label className='text-green-600 text-shadow-green-100 text-shadow-xs text-[11px]' htmlFor="airplane-mode">Website development (Framer) +2k</Label>
          </div>
           
        </div>
      </div>
      <div className='absolute bottom-1 left-3 items-center justify-center h-[17%]'>
        <div className='text-3xl mt-[2px] font-semibold text-neutral-800 flex items-center gap-1'>
            <span>$</span>
            {isDev? <SlidingNumber className="-tracking-tighter" number={6449}/>:<SlidingNumber className='-tracking-tighter' number={5149} />}
        </div>
      </div>
      <div className='absolute inset-x-3 bottom-2 flex gap-2.5 h-[7.7%]'>
        <ShinyButton className='shadow-xs flex-1 rounded-full bg-neutral-900 cursor-pointer flex items-center justify-center'>
            <p className='text-neutral-50 text-lg font-regular text-center'>Book a Call</p>
        </ShinyButton>
        <div className='flex-1 rounded-full bg-transparent cursor-pointer font-medium shadow-xs border border-neutral-200 flex items-center justify-center'>
          Follow us on X
        </div>
      </div>
    </motion.div>
  )
}
