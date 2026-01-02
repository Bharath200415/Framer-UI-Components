"use client";
import React from 'react';

interface NavbarProps {
  activeComponent: 'Card' | 'Button';
  setActiveComponent: (component: 'Card' | 'Button') => void;
}

export const Navbar = ({ activeComponent, setActiveComponent }: NavbarProps) => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm border-b border-neutral-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-12">
          <div className="flex space-x-8">
            <button
              onClick={() => setActiveComponent('Card')}
              className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors ${
                activeComponent === 'Card'
                  ? 'border-cyan-500 text-gray-900'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Card
            </button>
            <button
              onClick={() => setActiveComponent('Button')}
              className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors ${
                activeComponent === 'Button'
                  ? 'border-cyan-500 text-gray-900'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Button
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
