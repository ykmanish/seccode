'use client';
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const WordPlay = () => {
  const wordsRef = useRef([]);
  const arrowsRef = useRef([]);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: wordsRef.current[0],
        start: "top 80%",
        end: "top 20%",
        scrub: 0.4,
        markers: false,
      }
    });

    wordsRef.current.forEach((word, index) => {
      tl.to(word, {
        rotate: 0,
        color: "#0c0c0c",
        duration: 7,
        ease: "power2.out",
      }, index * 2);
    });

    arrowsRef.current.forEach((arrow, index) => {
      tl.to(arrow, {
        scale: 1,
        opacity: 1,
        duration: 7,
        ease: "power2.out",
      }, index * 2);
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="max-w-7xl mx-auto pt-24 pb-10">
      <div className="flex items-center duration-1000 transition-all lg:gap-10 gap-3 justify-center">
        <h1
          ref={(el) => (wordsRef.current[0] = el)}
          className="birthday -rotate-6 text-zinc-200 text-2xl md:text-9xl" // Responsive text size
        >
          Many
        </h1>
        
        <h1
          ref={(el) => (wordsRef.current[1] = el)}
          className="birthday -rotate-6 text-zinc-200 text-2xl md:text-9xl" // Responsive text size
        >
          Many
        </h1>
       
        <h1
          ref={(el) => (wordsRef.current[2] = el)}
          className="birthday -rotate-6 text-zinc-200 text-2xl md:text-9xl" // Responsive text size
        >
          Happy
        </h1>
      </div>
      <div className="flex mt-10 duration-1000 transition-all gap-10 justify-center">
        <h1
          ref={(el) => (wordsRef.current[3] = el)}
          className="birthday -rotate-6 text-zinc-200 text-4xl md:text-9xl" // Responsive text size
        >
          Returns
        </h1>
        
        <h1
          ref={(el) => (wordsRef.current[4] = el)}
          className="birthday -rotate-6 text-zinc-200 text-4xl md:text-9xl" // Responsive text size
        >
          Of 
        </h1>
        
        <h1
          ref={(el) => (wordsRef.current[5] = el)}
          className="birthday -rotate-6 text-zinc-200 text-4xl md:text-9xl" // Responsive text size
        >
          The
        </h1>
      </div>
      <div className="flex mt-10 duration-1000 transition-all gap-10 justify-center">
        <h1
          ref={(el) => (wordsRef.current[6] = el)}
          className="birthday -rotate-6 text-zinc-200 text-4xl md:text-9xl" // Responsive text size
        >
          Day
        </h1>
        
        
      </div>
    </div>
  );
};

export default WordPlay;
