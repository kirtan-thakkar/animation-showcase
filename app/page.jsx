
"use client";
import StickyCardPin from "./animations/StickyCardPin";
import { Outfit } from "next/font/google";
import { ReactLenis } from 'lenis/react'
import AnimationComponent from "./animations/idk";
const outfit = Outfit({
  subsets:["Latin"],
  weights:["400","700"],
})
export default function Home() {
  return (
    <>
    <div className="revealer fixed top-0 left-0 w-screen h-svh z-502  pointer-events-none origin-top"></div>
    <ReactLenis root />
    <div className="relative flex flex-col items-center justify-center h-[60vh] min-h-screen w-min-screen mx-auto px-12">
     <h1 className={`${outfit.className} text-white text-8xl tracking-tight text-center`}>Welcome to Scroll Animation Showcase!</h1>
     
    </div>
    <section className="scroll-animation-sections mt-12 min-h-screen w-full flex items-center justify-center">
      <StickyCardPin />
     </section>
     <section className="mt-12">
      <AnimationComponent />

     </section>
    </>
    
  );
}
