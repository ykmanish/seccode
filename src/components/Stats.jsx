'use client'
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const Stats = () => {
  const cardRefs = useRef([]);
  const statsContainerRef = useRef(null);

  useEffect(() => {
    cardRefs.current.forEach((card, index) => {
      const countElement = card.querySelector(".stat-value"); // Target the count element inside the card
      let countUpValue = { value: 0 }; // GSAP object for count animation

      ScrollTrigger.create({
        trigger: card,
        start: "top center",
        end: "bottom center",
        onEnter: () => {
          // Animate the card to zoom in and blur the background
          gsap.to(card, {
            scale: 1.5,
            zIndex: 999,
            position: "fixed",
            top: "50%",
            left: "50%",
            xPercent: -50,
            yPercent: -50,
            duration: 1,
            ease: "power2.out",
            onStart: () => {
              gsap.to(".blur-background", { filter: "blur(10px)", duration: 0.5 });
            },
          });

          // Animate the count up
          gsap.to(countUpValue, {
            value: 10, // Target count value
            duration: 1.5,
            ease: "power2.out",
            onUpdate: () => {
              countElement.textContent = Math.floor(countUpValue.value); // Update the count element
            },
          });
        },
        onLeave: () => {
          // Revert card to normal size and position after animation
          gsap.to(card, {
            scale: 1,
            position: "relative",
            top: "auto",
            left: "auto",
            xPercent: 0,
            yPercent: 0,
            duration: 1,
            zIndex: 1,
            ease: "power2.in",
            onComplete: () => {
              gsap.to(".blur-background", { filter: "blur(0px)", duration: 0.5 });
            },
          });
        },
      });
    });
  }, []);

  return (
    <div className="max-w-7xl mx-auto flex justify-center blur-background" ref={statsContainerRef}>
      <div className="stats shadow">
        {/* Card 1 */}
        <div
          className="stat"
          ref={(el) => (cardRefs.current[0] = el)}
        >
          <div className="stat-figure text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-8 w-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              ></path>
            </svg>
          </div>
          <div className="stat-title heading">Happy Clients</div>
          <div className="stat-value heading text-primary">0</div>
          <div className="stat-desc small">21% more than last month</div>
        </div>

        {/* Card 2 */}
        <div
          className="stat"
          ref={(el) => (cardRefs.current[1] = el)}
        >
          <div className="stat-figure text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-8 w-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              ></path>
            </svg>
          </div>
          <div className="stat-title heading">Projects</div>
          <div className="stat-value heading text-secondary">0</div>
          <div className="stat-desc small">21% more than last month</div>
        </div>

        {/* Additional cards can follow the same structure */}
      </div>
    </div>
  );
};

export default Stats;
