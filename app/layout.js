"use client";

import { Inter } from "next/font/google";
import { NextUIProvider } from "@nextui-org/react";
import { QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "@/providers/theme-provider";
import { queryClient } from "@/lib/query-client";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter?.className}>
        <QueryClientProvider client={queryClient}>
          <NextUIProvider>
            <ThemeProvider attribute="class" defaultTheme="light">
              <Toaster 
                position="top-right"
                toastOptions={{
                  duration: 4000,
                  style: {
                    background: '#363636',
                    color: '#fff',
                  },
                }}
              />
              {children}
            </ThemeProvider>
          </NextUIProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
