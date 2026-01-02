"use client";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import {GeistSans} from "geist/font/sans";
import { Button } from "@/components/button";
import Image from "next/image";
import { Card } from "@/components/card";
import { Navbar } from "@/components/navbar";

export default function Home() {
  const [activeComponent, setActiveComponent] = useState<'Card' | 'Button'>('Card');

  return (
    <>
      <Navbar activeComponent={activeComponent} setActiveComponent={setActiveComponent} />
      <div
          style={{
              backgroundImage:'radial-gradient(circle at 1px 1px, var(--color-neutral-400) 0.4px, transparent 0)',
              backgroundSize:"15px 15px",
              backgroundRepeat:"repeat",
          }}
      className={cn(GeistSans.className,"h-screen flex items-center justify-center mt-2 bg-gray-50")}>
        {activeComponent === 'Button' ? <Button /> : 
        <div className="relative">
          <div className="absolute top-20 -left-40 flex items-center gap-2 animate-pulse duration-300">
            <span className="text-md font-medium text-neutral-600">hover over here</span>
            <svg 
              width="40" 
              height="40" 
              viewBox="0 0 40 40" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="text-cyan-500 mt-13"
            >
              <path 
                d="M10 10 Q 15 20, 25 25 L 22 27 M 25 25 L 27 22" 
                stroke="currentColor" 
                strokeWidth="1.5" 
                strokeLinecap="round"
                fill="none"
              />
            </svg>
          </div>
          <Card/>
          </div>
          }
          
      </div>
    </>
  );
}
