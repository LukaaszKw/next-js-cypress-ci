'use client';
 
import React, { useState } from 'react';
 
export default function Counter() {
  const [count, setCount] = useState(0);
 
  return (
    <div>
      <p>You clicked {count} times</p>
      {count > 1 && <p>lets test it!</p>}
      <button data-cy-id="count" onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}