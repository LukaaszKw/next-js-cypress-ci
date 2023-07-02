'use client';
 
import React from 'react';
 
export default function NewObject() {
   return (
    <div className="relative flex min-h-screen flex-col space-y-10 justify-center overflow-hidden py-6 sm:py-12">
    <button data-cy-id="button" className="bg-gradient-to-b w-max mx-auto text-red-500 font-bold from-slate-50 to-red-100 px-20 py-3 rounded-3x2 shadow-red-400 shadow-md border-r-4 hover border-b border-red-200 hover:shadow-sm transition-all duration-500">NewObject</button>
    </div>
  );
}