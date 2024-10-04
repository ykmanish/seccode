'use client'; // Ensure this is at the top for Next.js if you're using React Server Components

import React, { useEffect, useRef } from 'react';
import Scrollbar from 'smooth-scrollbar';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { gsap } from 'gsap';

gsap.registerPlugin(ScrollTrigger);

const Layout = ({ children }) => {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const scrollbar = Scrollbar.init(scrollContainerRef.current, {
      damping: 0.1,
      thumbMinSize: 20,
    });

    // Proxy ScrollTrigger to the Scrollbar instance
    ScrollTrigger.scrollerProxy(scrollbar, {
      scrollTop(value) {
        if (arguments.length) {
          scrollbar.scrollTop = value;
        }
        return scrollbar.scrollTop;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
    });

    // Update ScrollTrigger on scrollbar scroll
    scrollbar.addListener(ScrollTrigger.update);

    // Cleanup function to destroy scrollbar and triggers
    return () => {
      scrollbar.destroy();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  useEffect(() => {
    // Example GSAP animation
    gsap.from(".animate-me", {
      scrollTrigger: {
        trigger: ".animate-me",
        scroller: scrollContainerRef.current,
        start: "top 80%", // Trigger animation when the top of the element hits 80% of the viewport
        end: "top 30%",   // End of trigger when it hits 30% of the viewport
        scrub: true,      // Smooth scrubbing during scroll
      },
      opacity: 0,
      y: 50,
    });
  }, []);

  return (
    <div ref={scrollContainerRef} className="scroll-container h-screen overflow-hidden">
      <div className="animate-me"> {/* Example animated element */}
        
      </div>
      {children}
      
    </div>
  );
};

export default Layout;
