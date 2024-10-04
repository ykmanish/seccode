"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

const Bawaal = () => {
  const textRef = useRef(null);
  
  const textpRef = useRef(null);
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const card3Ref = useRef(null);
  const card4Ref = useRef(null);

  useEffect(() => {
    // Common animation properties
    const cardAnimationProps = {
      y: 100, // Start from below
      scale: 0.7, // Initial scale
      opacity: 0, // Initial opacity
      duration: 1.2, // Slow down the animation duration
      ease: "power2.out", // Easing for a smoother effect
    };

    // Animate the first card
    gsap.fromTo(
      card1Ref.current,
      cardAnimationProps,
      {
        y: 0,
        scale: 1,
        opacity: 1,
        scrollTrigger: {
          trigger: card1Ref.current,
          start: "top 80%",
          end: "top 50%",
          scrub: 1,
          onEnter: () => gsap.set(card1Ref.current, { y: 0, scale: 1, opacity: 1 }),
          onLeaveBack: () => gsap.set(card1Ref.current, { y: 200, scale: 0.5, opacity: 0 }),
        },
      }
    );

    // Animate the text upwards as the cards scroll
    const textAnimationProps = {
      y: -70,
      duration: 2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: card1Ref.current,
        start: "top 60%",
        end: "top 30%",
        scrub: 2,
      },
    };

    gsap.to(textRef.current, textAnimationProps);
    gsap.to(textpRef.current, textAnimationProps);

    // Animate the second card
    gsap.fromTo(
      card2Ref.current,
      cardAnimationProps,
      {
        y: 0,
        scale: 1,
        opacity: 1,
        scrollTrigger: {
          trigger: card1Ref.current,
          start: "top 50%",
          end: "top 30%",
          scrub: 1,
          onEnter: () => gsap.set(card2Ref.current, { y: 0, scale: 1, opacity: 1 }),
        },
      }
    );

    // Animate the third card
    gsap.fromTo(
      card3Ref.current,
      cardAnimationProps,
      {
        y: 0,
        scale: 1,
        opacity: 1,
        scrollTrigger: {
          trigger: card2Ref.current,
          start: "top 50%",
          end: "top 30%",
          scrub: 1,
          onEnter: () => gsap.set(card3Ref.current, { y: 0, scale: 1, opacity: 1 }),
        },
      }
    );

    // Animate the fourth card
    gsap.fromTo(
      card4Ref.current,
      cardAnimationProps,
      {
        y: 0,
        scale: 1,
        opacity: 1,
        scrollTrigger: {
          trigger: card3Ref.current,
          start: "top 50%",
          end: "top 30%",
          scrub: 1,
          onEnter: () => gsap.set(card4Ref.current, { y: 0, scale: 1, opacity: 1 }),
        },
      }
    );
  }, []);

  return (
    <div className="max-w-6xl  mx-auto">
    
    <div className="flex gap-20 justify-between"> {/* Increased margin top here */}
      <div
        ref={card1Ref}
        className="w-96 h-96 bg-[#b8b8ff] flex flex-col justify-center items-center rotate-6 rounded-xl " // Lower z-index for cards
      >
        <h1 className="w-8 h-8 text-2xl flex justify-center border-[#0c0c0c] heading items-center rounded-full border">
          1
        </h1>
        <h1 className="mt-6 text-black text-center text-5xl small">
          Always Keep
          <br />
         Smiling
        </h1>
      </div>
      <div
        ref={card2Ref}
        className="w-96 h-96 bg-[#eca0ff] flex flex-col justify-center items-center -rotate-6 rounded-xl"
      >
        <h1 className="w-8 h-8 text-2xl flex justify-center border-[#0c0c0c] heading items-center rounded-full border">
          2
        </h1>
        <h1 className="mt-6 text-center text-5xl small">
          Krishna 
          <br />
          Blesses You
        </h1>
      </div>
    </div>
    <div className="flex gap-20 justify-between mt-16">
      <div
        ref={card3Ref}
        className="w-96 flex flex-col justify-center items-center h-96 bg-[#dcf48e] -rotate-12 rounded-xl"
      >
        <h1 className="w-8 h-8 text-2xl flex justify-center border-[#0c0c0c] heading items-center rounded-full border">
          3
        </h1>
        <h1 className="mt-6 text-center text-5xl small">
          Keep
          <br />
         Coding
        </h1>
      </div>
      <div
        ref={card4Ref}
        className="w-96 h-96 flex flex-col justify-center items-center bg-[#e8dab2] rotate-12 rounded-xl mt-10"
      >
        <h1 className="w-8 h-8 text-2xl flex justify-center border-[#0c0c0c] heading items-center rounded-full border">
          4
        </h1>
        <h1 className="mt-6 text-center text-5xl small">
         Keep
          <br />
          Growing
          
        </h1>
      </div>
    </div>
  </div>
  );
};

export default Bawaal;
