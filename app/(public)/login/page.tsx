'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useLogin } from '@/hooks/auth';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import Logo from '@/components/ui/Logo';

const loginSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
});

type LoginFormData = z.infer<typeof loginSchema>;

// Carousel slides - repeating the same content for now
const slides = [
  {
    title: "Discover New Buyers Instantly",
    description: "Unlock a world of verified global buyers for your products. Connect with leads and accelerate your export growth with a single search.",
    image: "/Vector.png"
  },
  {
    title: "Discover New Buyers Instantly",
    description: "Unlock a world of verified global buyers for your products. Connect with leads and accelerate your export growth with a single search.",
    image: "/Vector.png"
  },
  {
    title: "Discover New Buyers Instantly", 
    description: "Unlock a world of verified global buyers for your products. Connect with leads and accelerate your export growth with a single search.",
    image: "/Vector.png"
  },
  {
    title: "Discover New Buyers Instantly",
    description: "Unlock a world of verified global buyers for your products. Connect with leads and accelerate your export growth with a single search.",
    image: "/Vector.png"
  }
];

export default function LoginPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const loginMutation = useLogin();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });


  // Auto-slide functionality with smooth transitions
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Increased to 5 seconds for better UX
    return () => clearInterval(interval);
  }, []);

  const onSubmit = async (data: LoginFormData) => {
    setIsLoading(true);
    try {
      // Simulate OTP sending
      await new Promise(resolve => setTimeout(resolve, 1000));
      // In real implementation, you would call the OTP API here
      console.log('OTP sent to:', data.email);
      
      // Redirect to OTP verification page
      router.push(`/otp-verification?email=${encodeURIComponent(data.email)}`);
    } catch (error) {
      console.error('Error sending OTP:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row font-figtree animate-in fade-in duration-700">
      {/* Left Panel - Blue Background with Carousel */}
      <div className="hidden lg:flex lg:w-1/2 bg-[#2563eb] relative overflow-hidden">
        {/* Background Pattern with subtle animation */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-white rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-white rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        {/* Carousel Content Container */}
        <div className="relative z-10 flex flex-col items-center justify-center px-12 text-center w-full">
          <div className="relative w-full max-w-lg">
            {/* Slide Container */}
            <div className="relative overflow-hidden">
              <div 
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {slides.map((slide, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    {/* Illustration with hover animation */}
                    <div className="mb-8 flex justify-center">
                      <div className="relative group">
                        {/* Main card */}
                        <div className="w-48 h-32 bg-gray-200 rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105"></div>
                        {/* Overlapping card */}
                        <div className="absolute -bottom-4 -right-4 w-24 h-16 bg-gray-200 rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105"></div>
                        {/* Background circle */}
                        <div className="absolute -top-8 -left-8 w-32 h-32 bg-blue-400 rounded-full opacity-30 transition-all duration-500 group-hover:opacity-50"></div>
                      </div>
                    </div>

                    {/* Title with fade-in animation */}
                    <h1 className="text-3xl font-bold text-white mb-4 leading-tight animate-in fade-in slide-in-from-bottom-4 duration-500">
                      {slide.title}
                    </h1>

                    {/* Description with staggered animation */}
                    <p className="text-lg text-blue-100 leading-relaxed max-w-md mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700" style={{ animationDelay: '200ms' }}>
                      {slide.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Pagination Dots with smooth animations */}
          <div className="flex space-x-2 mt-12">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`transition-all duration-500 ease-in-out hover:scale-110 ${
                  index === currentSlide 
                    ? 'w-8 h-3 bg-white rounded-full shadow-lg' 
                    : 'w-3 h-3 border-2 border-white rounded-full hover:bg-white/30 hover:border-white/80'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Right Panel - White Background with slide-in animation */}
      <div className="w-full lg:w-1/2 bg-white flex flex-col justify-center px-12 py-16 animate-in slide-in-from-right duration-800">
        <div className="max-w-lg mx-auto w-full">
          {/* Vector.png Logo with fade-in animation */}
          <div className="text-center mb-10 animate-in fade-in slide-in-from-top-4 duration-600">
            <div className="flex justify-center">
              <Image
                src="/Vector.png"
                alt="Volza Logo"
                width={140}
                height={70}
                className="object-contain transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>

          {/* Welcome Message with staggered animations */}
          <div className="text-center mb-10 animate-in fade-in slide-in-from-top-4 duration-700" style={{ animationDelay: '200ms' }}>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Hi, Welcome to Volza!
            </h2>
            <p className="text-base text-gray-600 leading-relaxed">
              Enter your credentials to access in your account.
            </p>
          </div>

          {/* Login Form with staggered animations */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-800" style={{ animationDelay: '400ms' }}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
                Email ID
              </label>
              <input
                {...register('email')}
                type="email"
                id="email"
                placeholder="username@gmail.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2563eb] focus:border-transparent transition-all duration-300 hover:border-gray-400 focus:scale-[1.02] text-base"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
              )}
            </div>

            <div className="flex justify-center">
              <Button
                type="submit"
                className="w-3/4 h-10 text-base font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95"
                loading={isLoading}
                disabled={isLoading}
              >
                {isLoading ? 'Sending...' : 'Get OTP →'}
              </Button>
            </div>

            <div className="text-center py-2 animate-in fade-in duration-500" style={{ animationDelay: '600ms' }}>
              <span className="text-gray-500 text-sm font-medium">OR</span>
            </div>

            <div className="text-center pt-2 animate-in fade-in duration-500" style={{ animationDelay: '800ms' }}>
              <span className="text-gray-600 text-sm">
                Don't have an account?{' '}
                <Link href="/signup" className="text-[#2563eb] hover:underline font-medium transition-all duration-300 hover:text-[#1d4ed8]">
                  Sign up
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>

      {/* Mobile Background - Show on mobile */}
      <div className="lg:hidden fixed inset-0 bg-[#2563eb] -z-10">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-white rounded-full"></div>
          <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-white rounded-full"></div>
        </div>
      </div>
    </div>
  );
}
