"use client";
import { useRef } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

// components
import { HorizontalScrollContainer, type HorizontalScrollContainerRef } from "@/components/shared/HorizontalScrollContainer";
import Header from "@/components/Header";
import ImageZoom from "@/components/shared/ImageZoom";

// assets
import BGImage from "@/assets/bg-image.jpg";
import Logo from "@/assets/ethos/logo.png";
import Image1 from "@/assets/projects/image1.jpeg";
import Image2 from "@/assets/projects/image2.jpeg";
import Image3 from "@/assets/projects/image3.jpeg";
import Image4 from "@/assets/projects/image4.jpeg";
import Image5 from "@/assets/projects/image5.jpeg";
import Image6 from "@/assets/projects/image6.jpeg";
import Image7 from "@/assets/projects/image7.jpeg";
import Image8 from "@/assets/projects/image8.jpeg";
import Image9 from "@/assets/projects/image9.jpeg";
import MobileBG from "@/../public/media/mobile projects bg.png";

// types
interface ScrollInfo {
  scrollPosition: number;
  maxScroll: number;
  scrollPercentage: number;
  direction: "left" | "right";
}

export default function Projects() {
  const scrollContainerRef = useRef<HorizontalScrollContainerRef>(null);

  const scrollToStart = () => {
    scrollContainerRef.current?.resetScroll();
  };

  const handleScrollChange = () => {
    // Scroll change handler for future use
  };

  return (
    <div className='relative min-h-screen'>
      {/* Desktop Background */}
      <div className='hidden md:block absolute inset-0 z-0'>
        <Image
          src={BGImage}
          alt=""
          fill
          className='object-cover'
          priority
        />
      </div>
      {/* Mobile Background */}
      <div className='md:hidden absolute inset-0 z-0'>
        <Image
          src={MobileBG}
          alt=""
          fill
          className='object-cover'
          priority
        />
      </div>
      <div className='absolute inset-0 bg-black/20 z-0'></div>

      {/* Header with Logo and Menu */}
      <Header logo={Logo} buttonClassName='text-[#D6D5C9]' />

      {/* Main Content */}
      <main className='relative z-10 container pt-24 sm:pt-28 md:pt-32 lg:pt-36 xl:pt-36 pb-8'>
        <HorizontalScrollContainer ref={scrollContainerRef} onScrollChange={handleScrollChange}>
          {/* Section 1: Our Projects */}
          <div className='lg:max-w-[900px] lg:min-w-[900px] w-full max-w-[900px] px-4 sm:px-6 md:pl-6 lg:pl-8 text-center md:text-left space-y-3'>
            <h1 className='text-[#d5d5c8] font-serif text-[24px] uppercase tracking-wider leading-tight'>OUR PROJECTS</h1>
            
            <div className='space-y-4'>
              <p className='text-[#d5d5c8] font-[300] text-base leading-relaxed'>
                Introducing a new model for living that goes beyond design — it&apos;s about reimagining what a home can feel like. Each project is shaped by a philosophy rooted in simplicity, natural flow, and emotional connection.
              </p>

              <p className='text-[#d5d5c8] font-[300] text-base leading-relaxed'>
                A cozy cottage that&apos;s been updated with modern amenities while maintaining its original charm. Creative, timeless, and deeply human. This is slow architecture — built with care, not convention.
              </p>
            </div>
            
            <div className='pt-2'>
              <h2 className='text-[#d5d5c8] font-[300] text-base uppercase tracking-wider'>THE QUARRY</h2>
              <div className='w-8 h-px bg-[#d5d5c8]/50 mt-2 mx-auto md:mx-0'></div>
            </div>
          </div>

          {/* Images 1 & 2 for Our Projects section */}
          <div className='flex flex-col gap-6 lg:ml-[2vw] w-full px-6 lg:px-0 my-10 lg:my-0'>
            <ImageZoom
              src={Image1}
              alt=''
              className='w-full lg:h-full h-auto object-cover'
              containerClassName='relative lg:max-w-[50vw] lg:min-w-[350px] lg:h-[29vh] w-full h-auto'
            />
            <ImageZoom
              src={Image2}
              alt=''
              className='w-full lg:h-full h-auto object-cover'
              containerClassName='relative lg:max-w-[50vw] lg:min-w-[350px] lg:h-[29vh] w-full h-auto'
            />
          </div>

          {/* Section 2: The Quarry Details */}
          <div className='lg:max-w-[900px] lg:min-w-[900px] w-full max-w-[900px] px-4 sm:px-6 md:pl-6 lg:pl-8 text-center md:text-left space-y-3'>
            <h1 className='text-[#d5d5c8] font-serif text-[24px] uppercase tracking-wider leading-tight'>THE QUARRY</h1>
            
            <div className='space-y-4'>
              <p className='text-[#d5d5c8] font-[300] text-base leading-relaxed'>
                A modern family home that&apos;s both functional and beautiful, with an open floor plan and large windows that bring in natural light. The structure&apos;s gentle curves and warm wood tones create a sense of movement that mirrors the surrounding landscape.
              </p>

              <div className='bg-[#d5d5c8]/10 p-6 rounded-lg border border-[#d5d5c8]/20'>
                <p className='text-[#d5d5c8] font-[300] text-base leading-relaxed italic'>
&ldquo;Designed for connection—to nature, to art, and to each other—this home features open, flowing spaces that encourage gathering and contemplation in equal measure.&rdquo;
                </p>
              </div>

              <p className='text-[#d5d5c8] font-[300] text-base leading-relaxed'>
                Rooted in Christopher&apos;s aesthetic and philosophical influences — from Wabi-Sabi to biophilia — the design brings nature inward and emotion to the forefront. Light, material, and movement are all treated as collaborators, not afterthoughts.
              </p>

              <p className='text-[#d5d5c8] font-[300] text-base leading-relaxed'>
                Every line is drawn with intention. Local stone, minimal interventions, and breathable textures make the home feel like it's always belonged.
              </p>
            </div>
          </div>

          {/* Images 3 & 4 for The Quarry section */}
          <div className='flex flex-col gap-6 lg:ml-[2vw] w-full px-6 lg:px-0 my-10 lg:my-0'>
            <ImageZoom
              src={Image3}
              alt=''
              className='w-full lg:h-full h-auto object-cover'
              containerClassName='relative lg:max-w-[50vw] lg:min-w-[350px] lg:h-[29vh] w-full h-auto'
            />
            <ImageZoom
              src={Image4}
              alt=''
              className='w-full lg:h-full h-auto object-cover'
              containerClassName='relative lg:max-w-[50vw] lg:min-w-[350px] lg:h-[29vh] w-full h-auto'
            />
          </div>

          {/* Section 3: The Cliffs Details */}
          <div className='lg:max-w-[900px] lg:min-w-[900px] w-full max-w-[900px] px-4 sm:px-6 md:pl-6 lg:pl-8 text-center md:text-left space-y-6'>
            <div className='space-y-4'>
              <p className='text-[#e7e7dc] font-[300] text-base leading-relaxed text-center md:text-left'>
                The Quarry redefines modern living with its seamless integration of natural materials and clean lines. Each
                A beachfront property that&apos;s been designed to take full advantage of its stunning ocean views. Between indoor comfort and the surrounding landscape, creating
                a sanctuary that feels both luxurious and organic.
              </p>

              <p className='text-[#e7e7dc] font-[300] text-base leading-relaxed text-center md:text-left'>
                A minimalist apartment that&apos;s been transformed into a serene retreat, with custom built-ins and a neutral color palette. Built with attention to craftsmanship
                and sustainability, the result is a home that stands as a testament to thoughtful, intentional design.
              </p>

              <div className='pt-4'>
                <h2 className='text-[#e7e7dc] font-[300] text-lg uppercase text-center md:text-left'>THE CLIFFS</h2>
                <div className='w-8 h-px bg-white/50 mt-2 mx-auto md:mx-0'></div>
              </div>
            </div>
          </div>

          {/* Images 5 & 6 for The Quarry section */}
          <div className='flex flex-col gap-6 lg:ml-[2vw] w-full px-6 lg:px-0 my-10 lg:my-0'>
            <ImageZoom
              src={Image5}
              alt=''
              className='w-full lg:h-full h-auto object-cover'
              containerClassName='relative lg:max-w-[50vw] lg:min-w-[350px] lg:h-[29vh] w-full h-auto'
            />
            <ImageZoom
              src={Image6}
              alt=''
              className='w-full lg:h-full h-auto object-cover'
              containerClassName='relative lg:max-w-[50vw] lg:min-w-[350px] lg:h-[29vh] w-full h-auto'
            />
          </div>

          {/* Investment & Contact Section */}
          <div className='lg:max-w-[900px] lg:min-w-[900px] w-full max-w-[900px] pl-4 md:pl-6 lg:pl-8 mt-8 space-y-6'>
            <div>
              <p className='text-[#d5d5c8] font-[300] text-base leading-relaxed text-center md:text-left'>
                As an investment, The Quarry offers a fixed return of 14–20% annually, with capital protected via a
                ring-fenced SPV and detailed development guarantees. Investors are not just backing a build — they're
                aligning with a new, grounded vision of sustainable living. This is a home that feels like a turning point — 
                for design, for lifestyle, and for what comes next.
              </p>
            </div>
            
            <div className='pt-2'>
              <Link href={"/contact"}>
                <h2 className='text-[#d5d5c8] font-[300] text-lg uppercase text-center md:text-left'>Get in Touch</h2>
                <div className='w-8 h-px bg-[#d5d5c8]/50 mt-2 mx-auto md:mx-0'></div>
              </Link>
              <p className='text-[#d5d5c8] font-[300] text-base leading-relaxed mt-2 text-center md:text-left'>
                Interested in working together? We'd love to hear about your project.
              </p>
            </div>
          </div>
          <div className='hidden lg:block lg:min-w-[2vw]'></div>
        </HorizontalScrollContainer>

        {/* Go Back to Start Button */}
        {/* Removed scroll controls as menu is always visible */}
      </main>
    </div>
  );
}
