'use client';

import { forwardRef, useRef, useEffect } from 'react';
import { cn } from '@/utils/helpers';

export interface OTPInputProps {
  length?: number;
  value: string;
  onChange: (value: string) => void;
  onComplete?: (value: string) => void;
  disabled?: boolean;
  className?: string;
  autoFocus?: boolean;
}

const OTPInput = forwardRef<HTMLDivElement, OTPInputProps>(
  ({ 
    length = 6, 
    value, 
    onChange, 
    onComplete, 
    disabled = false, 
    className,
    autoFocus = true,
    ...props 
  }, ref) => {
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

    useEffect(() => {
      if (autoFocus && inputRefs.current[0]) {
        inputRefs.current[0].focus();
      }
    }, [autoFocus]);

    const handleChange = (index: number, inputValue: string) => {
      if (disabled) return;

      // Only allow single digit
      const digit = inputValue.replace(/\D/g, '').slice(-1);
      
      if (digit) {
        const newValue = value.split('');
        newValue[index] = digit;
        const updatedValue = newValue.join('').slice(0, length);
        
        onChange(updatedValue);
        
        // Auto-focus next input
        if (index < length - 1) {
          inputRefs.current[index + 1]?.focus();
        }
        
        // Check if OTP is complete
        if (updatedValue.length === length && onComplete) {
          onComplete(updatedValue);
        }
      }
    };

    const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
      if (disabled) return;

      if (e.key === 'Backspace') {
        const newValue = value.split('');
        if (newValue[index]) {
          newValue[index] = '';
        } else if (index > 0) {
          newValue[index - 1] = '';
          inputRefs.current[index - 1]?.focus();
        }
        onChange(newValue.join(''));
      } else if (e.key === 'ArrowLeft' && index > 0) {
        inputRefs.current[index - 1]?.focus();
      } else if (e.key === 'ArrowRight' && index < length - 1) {
        inputRefs.current[index + 1]?.focus();
      }
    };

    const handlePaste = (e: React.ClipboardEvent) => {
      if (disabled) return;
      
      e.preventDefault();
      const pastedData = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, length);
      
      if (pastedData.length > 0) {
        onChange(pastedData);
        
        // Focus the next empty input or the last input
        const nextEmptyIndex = Math.min(pastedData.length, length - 1);
        inputRefs.current[nextEmptyIndex]?.focus();
        
        if (pastedData.length === length && onComplete) {
          onComplete(pastedData);
        }
      }
    };

    return (
      <div 
        ref={ref}
        className={cn('flex gap-3 justify-center', className)}
        {...props}
      >
        {Array.from({ length }, (_, index) => (
          <input
            key={index}
            ref={(el) => { inputRefs.current[index] = el; }}
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            maxLength={1}
            value={value[index] || ''}
            onChange={(e) => handleChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            onPaste={handlePaste}
            disabled={disabled}
            className={cn(
              'w-12 h-12 text-center text-lg font-semibold border-2 rounded-lg',
              'transition-all duration-200 focus:outline-none',
              'border-gray-300 focus:border-[#2563eb] focus:ring-2 focus:ring-[#2563eb]/20',
              'hover:border-gray-400',
              disabled && 'bg-gray-100 cursor-not-allowed',
              value[index] && 'border-[#2563eb] bg-blue-50'
            )}
          />
        ))}
      </div>
    );
  }
);

OTPInput.displayName = 'OTPInput';

export { OTPInput };
