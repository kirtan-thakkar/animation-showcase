
import StickyCardPin from "./animations/StickyCardPin";
import { Outfit } from "next/font/google";
import { ReactLenis } from 'lenis/react'
const outfit = Outfit({
  subsets:["Latin"],
  weights:["400","700"],
})
export default function Home() {
  return (
    <>
    <ReactLenis root />
    <div className="relative flex flex-col items-center justify-center h-[60vh] min-h-screen w-min-screen mx-auto px-12">
     <h1 className={`${outfit.className} text-white text-8xl tracking-tight text-center`}>Welcome to Scroll Animation Showcase!</h1>
     
    </div>
    <section className="scroll-animation-sections mt-12 min-h-screen w-full flex items-center justify-center">
      <StickyCardPin />
     </section>
    </>
    
  );
}
