"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/Button";
import { OTPInput } from "@/components/ui/OTPInput";
import LeftLoginPanel from "@/components/login/LeftPanel";

const otpSchema = z.object({
  otp: z.string().min(6, "Please enter the complete OTP"),
});

type OTPFormData = z.infer<typeof otpSchema>;

// Carousel slides for OTP page
const slides = [
  {
    title: "Analyze Any Company's Trade Activity",
    description:
      "Dive deep into company profiles - buyers, suppliers, competitors. View shipment trends and discover new opportunities in seconds.",
    image: "/Vector.png",
  },
  {
    title: "Analyze Any Company's Trade Activity",
    description:
      "Dive deep into company profiles - buyers, suppliers, competitors. View shipment trends and discover new opportunities in seconds.",
    image: "/Vector.png",
  },
  {
    title: "Analyze Any Company's Trade Activity",
    description:
      "Dive deep into company profiles - buyers, suppliers, competitors. View shipment trends and discover new opportunities in seconds.",
    image: "/Vector.png",
  },
  {
    title: "Analyze Any Company's Trade Activity",
    description:
      "Dive deep into company profiles - buyers, suppliers, competitors. View shipment trends and discover new opportunities in seconds.",
    image: "/Vector.png",
  },
];

export default function OTPVerificationPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [otp, setOtp] = useState("");
  const [timeLeft, setTimeLeft] = useState(20); // 20 seconds countdown
  const [canResend, setCanResend] = useState(false);

  // Get email from URL params or use default
  const email = searchParams.get("email") || "test@gmail.com";

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<OTPFormData>({
    resolver: zodResolver(otpSchema),
    defaultValues: {
      otp: "",
    },
  });

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Countdown timer
  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setCanResend(true);
    }
  }, [timeLeft]);

  // Update form when OTP changes
  useEffect(() => {
    setValue("otp", otp);
  }, [otp, setValue]);

  const handleOTPChange = (value: string) => {
    setOtp(value);
  };

  const handleOTPComplete = (value: string) => {
    setOtp(value);
    // Auto-submit when OTP is complete
    if (value.length === 6) {
      handleSubmit(onSubmit)();
    }
  };

  const onSubmit = async (data: OTPFormData) => {
    setIsLoading(true);
    try {
      // TODO: Replace with actual API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Simulate successful verification
      console.log("OTP verified:", data.otp);

      // Set authentication token for protected routes
      const token = "mock-jwt-token-" + Date.now();
      const userData = {
        id: "123",
        name: "Dr. Sarah Johnson",
        email: email,
        role: "Family Administrator",
        permissions: ["read", "write"],
      };

      localStorage.setItem("auth_token", token);
      localStorage.setItem("user_data", JSON.stringify(userData));
      console.log("Token set in localStorage:", token);
      console.log("User data set:", userData);
      console.log(
        "Verifying token was set:",
        localStorage.getItem("auth_token")
      );

      // Add a small delay to ensure token is set before redirect
      setTimeout(() => {
        console.log("About to redirect to dashboard...");
        console.log("Final token check:", localStorage.getItem("auth_token"));
        router.push("/dashboard");
      }, 100);
    } catch (error) {
      console.error("OTP verification failed:", error);
      // TODO: Handle error state
    } finally {
      setIsLoading(false);
    }
  };

  const handleResendOTP = async () => {
    if (!canResend) return;

    setIsLoading(true);
    try {
      // TODO: Replace with actual API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Reset timer and OTP
      setTimeLeft(20);
      setCanResend(false);
      setOtp("");
      setValue("otp", "");

      console.log("OTP resent to:", email);
    } catch (error) {
      console.error("Failed to resend OTP:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  const isOTPComplete = otp.length === 6;

  return (
    <div className="min-h-screen flex flex-col lg:flex-row font-figtree animate-in fade-in duration-700">
      {/* Left Panel - Blue Background with Carousel */}
      <LeftLoginPanel />

      {/* Right Panel - White Background with slide-in animation */}
      <div className="w-full lg:w-1/2 bg-white flex flex-col justify-center px-12 py-16 animate-in slide-in-from-right duration-800">
        <div className="max-w-md mx-auto w-full">
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

          {/* OTP Verification Form */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-800"
            style={{ animationDelay: "200ms" }}
          >
            {/* Main Heading */}
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                OTP Verification
              </h2>
              <p className="text-base text-gray-600">
                Please enter OTP sent on{" "}
                <span className="text-[#2563eb] font-medium">{email}</span>
              </p>
            </div>

            {/* OTP Input Fields */}
            <div className="flex justify-center">
              <OTPInput
                length={6}
                value={otp}
                onChange={handleOTPChange}
                onComplete={handleOTPComplete}
                disabled={isLoading}
                className="gap-3"
              />
            </div>

            {/* Timer and Resend */}
            <div className="text-center space-y-2">
              <div className="text-gray-600 text-sm">
                {canResend ? (
                  <span>Didn't receive the code? </span>
                ) : (
                  <span>Resend code in {formatTime(timeLeft)}</span>
                )}
              </div>

              {canResend && (
                <button
                  type="button"
                  onClick={handleResendOTP}
                  disabled={isLoading}
                  className="text-[#2563eb] hover:underline font-medium transition-colors duration-200 hover:text-[#1d4ed8] disabled:opacity-50"
                >
                  Resend Now
                </button>
              )}
            </div>

            {/* Continue Button */}
            <div className="flex justify-center">
              <Button
                type="submit"
                className={`w-3/4 h-12 text-base font-medium transition-all duration-300 ${
                  isOTPComplete
                    ? "bg-[#2563eb] text-white hover:bg-[#1d4ed8] hover:scale-105 hover:shadow-lg"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
                disabled={!isOTPComplete || isLoading}
                loading={isLoading}
              >
                {isLoading ? "Verifying..." : "Continue"}
              </Button>
            </div>

            {/* OR Separator */}
            <div
              className="text-center py-4 animate-in fade-in duration-500"
              style={{ animationDelay: "400ms" }}
            >
              <span className="text-gray-500 text-sm font-medium">OR</span>
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
