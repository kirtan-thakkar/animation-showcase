"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { Outfit } from "next/font/google";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const outfit = Outfit({
  subsets: ["Latin"],
  weights: ["400", "700"],
});

const AnimationComponent = () => {
    const ContainerRef = useRef(null);
    useGSAP(()=>{
        const t1 = gsap.timeline({
            scrollTrigger:{
                trigger : ContainerRef.current,
                start : "top center",
                end: "bottom left",
                scrub:true,
                scale:1.3,
                duration : 2,
                delay : 0.3,
                rotation:120,
                x:200,
                y:100,
            }
        })

    },[])
  return (
    <div className="h-screen bg-violet-300 text-5xl text-center" ref={ContainerRef}>
      <h1 className={outfit.className}>
        This is an simple component and i dk what i am going to build on this
        particular thing!
      </h1>
    </div>
  );
};
export default AnimationComponent;
