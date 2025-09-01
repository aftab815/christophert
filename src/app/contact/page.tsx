"use client";
import Header from "@/components/Header";
import Logo from "@/assets/home/logo.png";
import { useEffect, useState } from "react";
import Image from "next/image";
const BG_IMAGE_PATH = "/media/video-poster.jpg";

import InstagramIcon from "@/assets/contacts/instagram-icon.png";
import PinterestIcon from "@/assets/contacts/pinterest-icon.png";
import ImageZoom from "@/components/shared/ImageZoom";
import { sendContactEmail } from "./actions";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitState, setSubmitState] = useState<{ok: boolean | null; message: string | null}>({ ok: null, message: null });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitState({ ok: null, message: null });
    
    try {
      await sendContactEmail(formData);
      setSubmitState({ ok: true, message: 'Message sent successfully!' });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setSubmitState({ 
        ok: false, 
        message: error instanceof Error ? error.message : 'Failed to send message. Please try again.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Reset success message after 5 seconds
  useEffect(() => {
    if (submitState.ok) {
      const timer = setTimeout(() => {
        setSubmitState({ ok: null, message: null });
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [submitState.ok]);

  return (
    <div className='relative min-h-screen overflow-y-auto md:overflow-hidden'>
      {/* Background: static image base, video overlay only on md+ to save bandwidth */}
      <div className='absolute inset-0 z-0'>
        <Image 
          src={BG_IMAGE_PATH} 
          alt='Background' 
          fill 
          className='object-cover' 
          priority 
          sizes="100vw"
        />
        <video
          autoPlay
          loop
          muted
          playsInline
          preload='none'
          poster='./media/video-poster.png'
          aria-hidden='true'
          className='hidden md:block w-full h-full object-cover min-w-full min-h-full'
        >
          <source src='./media/home-background.mp4' type='video/mp4' />
        </video>
      </div>

      {/* Header with Logo and Menu */}
      <Header logo={Logo} />

      {/* Main Content */}
      <main className='relative z-10 container mx-auto px-4 h-auto pt-16 pb-8'>
        <div className='max-w-6xl mx-auto w-full'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            {/* Left Side - Contact Info */}
            <div className='space-y-8 text-center md:text-left px-4 mt-4'>
              <div className='font-sans font-light text-2xl text-[#574f4d] leading-relaxed'>
                <p>Please get in touch by completing the</p>
                <p>form or emailing:</p>
                <p className='mt-4'>
                  <a href='mailto:christopher@christopherpoole.design' className='hover:opacity-80 transition-opacity'>
                    christopher@christopherpoole.design
                  </a>
                </p>
                <div className='flex justify-center md:justify-start space-x-6 mt-6'>
                  <a 
                    href='https://www.instagram.com/christopherpoole.design/' 
                    target='_blank' 
                    rel='noopener noreferrer'
                    className='w-8 h-8 text-[#574f4d] hover:opacity-80 transition-opacity'
                    aria-label='Follow on Instagram'
                  >
                    <ImageZoom src={InstagramIcon} alt='Instagram' className='w-full h-full' />
                  </a>
                  <a 
                    href='https://pinterest.com' 
                    target='_blank' 
                    rel='noopener noreferrer'
                    className='w-8 h-8 text-[#574f4d] hover:opacity-80 transition-opacity'
                    aria-label='Follow on Pinterest'
                  >
                    <ImageZoom src={PinterestIcon} alt='Pinterest' className='w-full h-full' />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className='bg-white/10 backdrop-blur-sm p-8 max-w-[500px] mx-auto lg:mx-0'>
              <form onSubmit={handleSubmit} className='space-y-8'>
                <div className='relative'>
                  <div className='relative border-b border-[#574f4d]'>
                    <input
                      type='text'
                      id='name'
                      name='name'
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      aria-required='true'
                      aria-invalid={submitState.message && !submitState.ok ? 'true' : 'false'}
                      aria-describedby='name-error'
                      placeholder='NAME *'
                      className='w-full py-2 bg-transparent text-[#574f4d] placeholder-[#574f4d]/70 focus:outline-none focus:ring-0 border-none'
                    />
                  </div>
                  {submitState.message && !submitState.ok && (
                    <p id='name-error' className='text-red-600 text-xs mt-1'>{submitState.message}</p>
                  )}
                </div>

                <div className='relative'>
                  <div className='relative border-b border-[#574f4d]'>
                    <input
                      type='email'
                      id='email'
                      name='email'
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      aria-required='true'
                      aria-invalid={submitState.message && !submitState.ok ? 'true' : 'false'}
                      aria-describedby='email-error'
                      placeholder='EMAIL *'
                      className='w-full py-2 bg-transparent text-[#574f4d] placeholder-[#574f4d]/70 focus:outline-none focus:ring-0 border-none'
                    />
                  </div>
                  {submitState.message && !submitState.ok && (
                    <p id='email-error' className='text-red-600 text-xs mt-1'>{submitState.message}</p>
                  )}
                </div>

                <div className='relative'>
                  <div className='relative border-b border-[#574f4d]'>
                    <textarea
                      id='message'
                      name='message'
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      aria-required='true'
                      aria-invalid={submitState.message && !submitState.ok ? 'true' : 'false'}
                      aria-describedby='message-error'
                      placeholder='MESSAGE *'
                      rows={4}
                      className='w-full py-2 bg-transparent text-[#574f4d] placeholder-[#574f4d]/70 focus:outline-none focus:ring-0 border-none resize-none min-h-[100px]'
                    />
                  </div>
                  {submitState.message && !submitState.ok && (
                    <p id='message-error' className='text-red-600 text-xs mt-1'>{submitState.message}</p>
                  )}
                </div>

                {submitState.message && (
                  <p
                    className={`${submitState.ok ? "text-green-600" : "text-red-600"} text-sm`}
                    role='status'
                    aria-live='polite'
                  >
                    {submitState.message}
                  </p>
                )}

                <div className='flex justify-end pt-4'>
                  <button
                    type='submit'
                    disabled={isSubmitting}
                    aria-busy={isSubmitting}
                    className='flex items-center justify-center w-12 h-12 bg-[#574f4d] text-white rounded-full hover:bg-[#574f4d]/80 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#574f4d]/50 disabled:opacity-50 disabled:cursor-not-allowed'
                    aria-label='Submit form'
                  >
                    <svg
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      className='w-6 h-6'
                    >
                      <polyline points='9,18 15,12 9,6'></polyline>
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
