"use client";
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Logo from "@/assets/home/logo.png";

export default function Home() {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const quotes = [
    {
      text: "My goal is to help people experience\ntheir homes as more than just\na place to live",
      author: "— Christopher Poole"
    },
    {
      text: "He designed around how we live...\nwe just feel so much more connected\nas a family now.",
      author: "— Sarah & Michael"
    },
    {
      text: "It's not just how it looks…\nit's how it feels.",
      author: "— Emma & James"
    },
    {
      text: "My goal is to help people experience\ntheir homes as more than just\na place to live",
      author: "— Christopher Poole"
    },
    {
      text: "Initially I was just looking to convert\nmy attic to a master bedroom…\nnow I can't stop looking at it!",
      author: "— David & Lisa"
    },
    {
      text: "Simplicity, Balance, Natural materials,\nI blend these elements into every design\nto evoke that sense of calm",
      author: "— Christopher Poole"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentQuoteIndex((prev) => (prev + 1) % quotes.length);
        setIsVisible(true);
      }, 500);
    }, 4000);

    return () => clearInterval(interval);
  }, [quotes.length]);

  return (
    <div className='relative min-h-screen overflow-hidden'>
      {/* Background Video */}
      <div className='absolute inset-0 z-0'>
        <video autoPlay loop muted playsInline className='w-full h-full object-cover min-w-full min-h-full'>
          <source src='./media/home-background.mp4' type='video/mp4' />
        </video>
      </div>

      {/* Header with Logo and Menu */}
      <Header logo={Logo} />

      {/* Main Content - Professional spacing and alignment */}
      <main className='relative z-10 flex items-center justify-center min-h-screen px-3 sm:px-6 pt-8 sm:pt-12 md:pt-16 lg:pt-20 xl:pt-24'>
        <div className='max-w-5xl mx-auto text-center px-2 sm:px-4 w-full'>
          {/* Quote Container with smooth transitions */}
          <div className='flex flex-col justify-center items-center py-4 sm:py-8'>
            <div 
              className={`transition-all duration-1000 ease-in-out ${
                isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'
              }`}
            >
              <blockquote className='font-[300] text-[26px] text-[#574f4d] leading-tight px-2 sm:px-6 text-center max-w-4xl mx-auto whitespace-pre-line'>
                &ldquo;{quotes[currentQuoteIndex].text}&rdquo;
              </blockquote>
            </div>
          </div>

          {/* Quote Navigation Dots - Hidden */}
          {/* <div className='flex justify-center items-center space-x-3 sm:space-x-3 mt-6 sm:mt-10 md:mt-12 pb-4 sm:pb-0'>
            {quotes.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsVisible(false);
                  setTimeout(() => {
                    setCurrentQuoteIndex(index);
                    setIsVisible(true);
                  }, 500);
                }}
                className={`w-3 h-3 sm:w-3 sm:w-3 rounded-full transition-all duration-300 ${
                  index === currentQuoteIndex 
                    ? 'bg-[#574f4d] scale-125' : 'bg-[#574f4d]/30 hover:bg-[#574f4d]/60'
                }`}
                aria-label={`Go to quote ${index + 1}`}
              />
            ))}
          </div> */}
        </div>
      </main>
    </div>
  );
}
