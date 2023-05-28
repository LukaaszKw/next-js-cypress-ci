'use client';
 
import React, { useState } from 'react';
 
export default function Counter() {
  const [count, setCount] = useState(0);
 
  return (
    <div>
      <p data-cy-id="count-value">You clicked {count} times</p>
      <button data-cy-id="count" onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}