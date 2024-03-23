import React, { useState } from 'react'
import { HeroScrollDemo } from './components/Land/Land'; 
import { TypewriterEffectSmoothDemo } from './components/Land/HeroText';


export default function Home(){
  return (
    <main className='bg-white'>
      <TypewriterEffectSmoothDemo />
      <HeroScrollDemo />
    </main>
  );
}