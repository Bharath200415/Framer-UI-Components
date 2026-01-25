"use client";
import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'motion/react';
import React, { useState } from 'react'
import Image from 'next/image';
import {Icon24Hours, Icon360, Icon360View, Icon3dCubeSphere, IconMessage, IconPlus, IconX} from '@tabler/icons-react';

export const Keyboard = () => {
    
  return (
    <div className="max-w-[88rem] mx-auto">
      <div className="rounded-xl bg-zinc-900 p-4 shadow-2xl">
        
        {/* Row 1 */}
        <div className="grid grid-cols-10 gap-2 mb-2">
          {["Q","W","E","R","T","Y","U","I","O","P"].map((key) => (
            <Key key={key} label={key} />
          ))}
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-9 gap-2 mb-2 ml-4">
          {["A","S","D","F","G","H","J","K","L"].map((key) => (
            <Key key={key} label={key} />
          ))}
        </div>

        {/* Row 3 */}
        <div className="grid grid-cols-10 gap-2 mb-2">
          <Key label="Shift" wide />
          {["Z","X","C","V","B","N","M"].map((key) => (
            <Key key={key} label={key} />
          ))}
          <Key label="⌫" />
        </div>

        {/* Space bar */}
        <div className="grid grid-cols-5 gap-2 mt-3">
          <Key label="Ctrl" />
          <Key label="Alt" />
          <Key label="Space" space />
          <Key label="Alt" />
          <Key label="Ctrl" />
        </div>

      </div>
    </div>
  );
};

const Key = ({ label, wide, space }: { label: string; wide?: boolean; space?: boolean }) => {
  return (
    <div
      className={`
        flex items-center justify-center
        rounded-md bg-zinc-800 text-zinc-200
        text-sm font-medium shadow-md
        h-12
        ${wide ? "col-span-2" : ""}
        ${space ? "col-span-3" : ""}
        hover:bg-zinc-700 transition
      `}
    >
      {label}
    </div>
  );
};

