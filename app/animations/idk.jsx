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
  const boxRef = useRef(null);
  useGSAP(() => {
    gsap.to(boxRef.current, {
      scrollTrigger: {
        trigger: boxRef.current,
        start: "top 90%",
        end: "top 10%", 
        scrub: 1.5,
        markers : true,
      },
      x: 150,
      y: 300,
      duration: 10,
      delay: 0.5,
      ease:"elastic.out(1,0.3)",
    });
  }, []);
  return (
    <div
      ref={ContainerRef}
      className="h-screen bg-violet-300 text-5xl text-center"
    >
      <div className=" flex h-screen justify-center ">
        <div ref={boxRef} className="bg-red-500 w-64 h-64 rounded-[50%]"></div>
      </div>
      <div className="h-screen bg-amber-600"></div>
    </div>
  );
};
export default AnimationComponent;
