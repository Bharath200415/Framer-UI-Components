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
        {activeComponent === 'Button' ? <Button /> : <div>
          <Card />
          </div>}
      </div>
    </>
  );
}
