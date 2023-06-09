'use client';

import React from 'react';

export default function Counter() {


  return (
    <div className="relative flex min-h-screen flex-col space-y-10 justify-center overflow-hidden bg-slate-50 py-6 sm:py-12">
      <button className="bg-gradient-to-b w-max mx-auto text-blue-500 font-semibold from-slate-50 to-blue-100 px-10 py-3 rounded-2xl shadow-blue-400 shadow-md border-b-4 hover border-b border-blue-200 hover:shadow-sm transition-all duration-500">Click me</button>
    </div>
  );
}