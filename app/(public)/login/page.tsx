"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import LoginForm from "@/components/login/LoginForm";
import LeftLoginPanel from "@/components/login/LeftPanel";

// --- ZOD SCHEMA & TYPES ---
// The schema ensures that EITHER email OR mobile is provided, but not necessarily both.
const loginSchema = z
  .object({
    email: z
      .string()
      .email("Please enter a valid email address")
      .optional()
      .or(z.literal("")),
    mobile: z
      .string()
      .min(10, "Mobile number must be at least 10 digits")
      .optional()
      .or(z.literal("")),
  })
  .superRefine((data, ctx) => {
    if (!data.email && !data.mobile) {
      ctx.addIssue({
        code: "custom",
        message: "An email or mobile number is required.",
        path: ["email"], // Show error on the first field by default
      });
    }
  });

// Export the inferred type so child components can use it
export type LoginFormData = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    shouldUnregister: true, // This helps clear validation when switching tabs
  });

  // This function receives the filtered data (either email or mobile) from the LoginForm component
  const onSubmit = async (data: Partial<LoginFormData>) => {
    setIsLoading(true);
    try {
      const identifier = data.email || data.mobile;
      console.log("Submitting OTP request for:", identifier);

      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate API call

      if (identifier) {
        router.push(`/otp-verification?id=${encodeURIComponent(identifier)}`);
      } else {
        console.error("No valid identifier provided for OTP verification.");
      }
    } catch (error) {
      console.error("Error sending OTP:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Global styles for animations */}

      <div className="h-screen flex font-sans overflow-hidden">
        <LeftLoginPanel />
        <LoginForm
          register={register}
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
          errors={errors}
          isLoading={isLoading}
        />
      </div>
    </>
  );
}
