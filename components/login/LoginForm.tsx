"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import type {
  UseFormRegister,
  UseFormHandleSubmit,
  FieldErrors,
} from "react-hook-form";
import { LoginFormData } from "@/app/(public)/login/page"; // Adjust path if needed

// --- Sub-component for Tab Selector ---
type Tab = { label: string; value: string; icon?: React.ReactNode };
interface TabSelectorProps {
  tabs: Tab[];
  activeTab: string;
  onTabChange: (value: string) => void;
  fullWidth?: boolean;
}
const TabSelector: React.FC<TabSelectorProps> = ({
  tabs,
  activeTab,
  onTabChange,
  fullWidth = false,
}) => (
  <div
    className={`flex items-center border border-gray-200 rounded-lg p-1 mb-6 bg-gray-50 ${
      fullWidth ? "w-full" : "w-max"
    }`}
  >
    {tabs.map((tab, index) => (
      <React.Fragment key={tab.value}>
        <button
          onClick={() => onTabChange(tab.value)}
          className={`flex items-center justify-center text-center px-4 py-2 text-sm font-semibold rounded-md transition-colors ${
            fullWidth ? "flex-1" : ""
          } ${
            activeTab === tab.value
              ? "bg-white text-blue-600 border border-blue-500 shadow-sm"
              : "text-gray-500 hover:text-gray-800"
          }`}
        >
          {tab.icon && <span className="mr-2 h-5 w-5">{tab.icon}</span>}
          {tab.label}
        </button>
        {index < tabs.length - 1 && <div className="w-px h-6 bg-gray-200" />}
      </React.Fragment>
    ))}
  </div>
);

// --- SVG Icon Components ---
const GoogleIcon: React.FC = () => (
  <svg className="w-5 h-5 mr-3" viewBox="0 0 48 48">
    <path
      fill="#FFC107"
      d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
    ></path>
    <path
      fill="#FF3D00"
      d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"
    ></path>
    <path
      fill="#4CAF50"
      d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238C29.211 35.091 26.715 36 24 36c-5.222 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"
    ></path>
    <path
      fill="#1976D2"
      d="M43.611 20.083H42V20H24v8h11.303c-.792 2.237-2.231 4.166-4.087 5.571l6.19 5.238C42.012 35.37 44 30.023 44 24c0-1.341-.138-2.65-.389-3.917z"
    ></path>
  </svg>
);
const LinkedInIcon: React.FC = () => (
  <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);
const EmailIcon: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
    />
  </svg>
);
const MobileIcon: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
    />
  </svg>
);

interface Props {
  register: UseFormRegister<LoginFormData>;
  handleSubmit: UseFormHandleSubmit<LoginFormData>;
  onSubmit: (data: Partial<LoginFormData>) => Promise<void>;
  errors: FieldErrors<LoginFormData>;
  isLoading: boolean;
}

const LoginForm: React.FC<Props> = ({
  register,
  handleSubmit,
  onSubmit,
  errors,
  isLoading,
}) => {
  const [activeTab, setActiveTab] = useState("email");

  const loginTabs: Tab[] = [
    { label: "Email", value: "email", icon: <EmailIcon /> },
    { label: "Mobile", value: "mobile", icon: <MobileIcon /> },
  ];

  const handleFormSubmit = (data: LoginFormData) => {
    const submissionData =
      activeTab === "email" ? { email: data.email } : { mobile: data.mobile };
    onSubmit(submissionData);
  };

  return (
    <div className="w-full lg:w-1/2 bg-white flex items-center justify-center p-8 overflow-y-auto">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <Image
            src="/Logo.png"
            alt="Volza Logo"
            width={36}
            height={36}
            className="mx-auto"
            priority
          />
        </div>
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Welcome to Volza
        </h2>
        <TabSelector
          tabs={loginTabs}
          activeTab={activeTab}
          onTabChange={setActiveTab}
          fullWidth={true}
        />
        <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-5">
          <div
            className={`transition-opacity duration-300 ${
              activeTab === "email"
                ? "opacity-100"
                : "opacity-0 h-0 overflow-hidden"
            }`}
          >
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email ID
            </label>
            <input
              {...register("email")}
              type="email"
              id="email"
              placeholder="username@gmail.com"
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition ${
                errors.email ? "border-red-500 ring-red-500" : "border-gray-300"
              }`}
            />
            {errors.email ? (
              <p className="mt-1 text-sm text-red-600">
                {errors.email.message}
              </p>
            ) : (
              <p className="mt-1 text-xs text-gray-500">
                Use a valid email format: example@domain.com
              </p>
            )}
          </div>
          <div
            className={`transition-opacity duration-300 ${
              activeTab === "mobile"
                ? "opacity-100"
                : "opacity-0 h-0 overflow-hidden"
            }`}
          >
            <label
              htmlFor="mobile"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Mobile Number
            </label>
            <input
              {...register("mobile")}
              type="tel"
              id="mobile"
              placeholder="e.g., 9876543210"
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition ${
                errors.mobile
                  ? "border-red-500 ring-red-500"
                  : "border-gray-300"
              }`}
            />
            {errors.mobile ? (
              <p className="mt-1 text-sm text-red-600">
                {errors.mobile.message}
              </p>
            ) : (
              <p className="mt-1 text-xs text-gray-500">
                Enter your 10-digit mobile number.
              </p>
            )}
          </div>
          <div className="flex items-center justify-between border border-gray-200 rounded-lg p-3 bg-gray-50/80">
            <div className="flex items-center">
              <input
                type="checkbox"
                className="w-6 h-6 border-2 border-gray-300 rounded text-blue-600 focus:ring-blue-500"
                defaultChecked
              />
              <span className="ml-3 text-gray-700">Verify you are human</span>
            </div>
            <Image
              src="https://i.imgur.com/G5I8c1D.png"
              alt="Cloudflare logo"
              width={100}
              height={32}
            />
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center text-base disabled:bg-blue-400 disabled:cursor-not-allowed"
          >
            {isLoading ? "Sending..." : "Send Verification Code ›"}
          </button>
        </form>
        <div className="my-6 flex items-center">
          <div className="flex-grow border-t border-gray-200"></div>
          <span className="flex-shrink mx-4 text-gray-500 text-sm">
            Or continue with
          </span>
          <div className="flex-grow border-t border-gray-200"></div>
        </div>
        <div className="flex space-x-4">
          <button className="w-full flex items-center justify-center py-3 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition">
            <GoogleIcon />
            <span className="font-semibold text-gray-700">Google</span>
          </button>
          <button className="w-full flex items-center justify-center py-3 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition text-blue-700">
            <LinkedInIcon />
            <span className="font-semibold">LinkedIn</span>
          </button>
        </div>
        <div className="text-center mt-6">
          <span className="text-gray-600 text-sm">
            Don't have an account?{" "}
            <Link
              href="/signup"
              className="text-blue-600 hover:underline font-medium transition"
            >
              Sign up
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
