'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useOnboarding } from '@/hooks/auth';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';

const onboardingSchema = z.object({
  companySize: z.string().min(1, 'Please select company size'),
  businessType: z.string().min(1, 'Please select business type'),
  targetMarkets: z.array(z.string()).min(1, 'Please select at least one target market'),
  productCategories: z.array(z.string()).min(1, 'Please select at least one product category'),
  annualRevenue: z.string().min(1, 'Please select annual revenue'),
  experience: z.string().min(1, 'Please select your experience level'),
});

type OnboardingFormData = z.infer<typeof onboardingSchema>;

const companySizes = [
  '1-10 employees',
  '11-50 employees',
  '51-200 employees',
  '201-500 employees',
  '500+ employees',
];

const businessTypes = [
  'Manufacturer',
  'Trading Company',
  'Distributor',
  'Retailer',
  'Service Provider',
  'Other',
];

const targetMarkets = [
  'North America',
  'Europe',
  'Asia Pacific',
  'Middle East & Africa',
  'Latin America',
  'Global',
];

const productCategories = [
  'Electronics',
  'Textiles & Apparel',
  'Food & Beverages',
  'Automotive',
  'Machinery & Equipment',
  'Chemicals',
  'Construction Materials',
  'Healthcare & Medical',
  'Agriculture',
  'Other',
];

const annualRevenues = [
  'Under $100K',
  '$100K - $500K',
  '$500K - $1M',
  '$1M - $5M',
  '$5M - $10M',
  '$10M+',
];

const experienceLevels = [
  'New to international trade',
  '1-3 years experience',
  '4-10 years experience',
  '10+ years experience',
];

export default function OnboardingPage() {
  const [step, setStep] = useState(1);
  const onboardingMutation = useOnboarding();

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<OnboardingFormData>({
    resolver: zodResolver(onboardingSchema),
  });

  const watchedTargetMarkets = watch('targetMarkets') || [];
  const watchedProductCategories = watch('productCategories') || [];

  const toggleArrayValue = (field: 'targetMarkets' | 'productCategories', value: string) => {
    const currentValues = watch(field) || [];
    const newValues = currentValues.includes(value)
      ? currentValues.filter(v => v !== value)
      : [...currentValues, value];
    setValue(field, newValues);
  };

  const onSubmit = (data: OnboardingFormData) => {
    onboardingMutation.mutate(data);
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-700">Step {step} of 3</span>
            <span className="text-sm text-gray-500">{Math.round((step / 3) * 100)}% Complete</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(step / 3) * 100}%` }}
            />
          </div>
        </div>

        {/* Header */}
        <div className="text-center mb-8">
          <div className="mx-auto h-12 w-12 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
            <span className="text-white text-xl font-bold">V</span>
          </div>
          <h1 className="mt-4 text-3xl font-extrabold text-gray-900">
            Welcome to Volza!
          </h1>
          <p className="mt-2 text-lg text-gray-600">
            Let's set up your profile to get you started
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="bg-white shadow-lg rounded-lg p-8">
          {/* Step 1: Company Information */}
          {step === 1 && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-gray-900">Company Information</h2>
              
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Company Size <span className="text-red-500">*</span>
                </label>
                <select
                  {...register('companySize')}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                >
                  <option value="">Select company size</option>
                  {companySizes.map(size => (
                    <option key={size} value={size}>{size}</option>
                  ))}
                </select>
                {errors.companySize && (
                  <p className="text-sm text-red-600">{errors.companySize.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Business Type <span className="text-red-500">*</span>
                </label>
                <select
                  {...register('businessType')}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                >
                  <option value="">Select business type</option>
                  {businessTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
                {errors.businessType && (
                  <p className="text-sm text-red-600">{errors.businessType.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Annual Revenue <span className="text-red-500">*</span>
                </label>
                <select
                  {...register('annualRevenue')}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                >
                  <option value="">Select annual revenue</option>
                  {annualRevenues.map(revenue => (
                    <option key={revenue} value={revenue}>{revenue}</option>
                  ))}
                </select>
                {errors.annualRevenue && (
                  <p className="text-sm text-red-600">{errors.annualRevenue.message}</p>
                )}
              </div>
            </div>
          )}

          {/* Step 2: Target Markets */}
          {step === 2 && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-gray-900">Target Markets</h2>
              <p className="text-gray-600">Select the markets you're interested in (you can select multiple)</p>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {targetMarkets.map(market => (
                  <button
                    key={market}
                    type="button"
                    onClick={() => toggleArrayValue('targetMarkets', market)}
                    className={`p-3 rounded-lg border text-sm font-medium transition-colors ${
                      watchedTargetMarkets.includes(market)
                        ? 'bg-blue-50 border-blue-500 text-blue-700'
                        : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {market}
                  </button>
                ))}
              </div>
              {errors.targetMarkets && (
                <p className="text-sm text-red-600">{errors.targetMarkets.message}</p>
              )}
            </div>
          )}

          {/* Step 3: Product Categories & Experience */}
          {step === 3 && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-gray-900">Product Categories & Experience</h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Product Categories <span className="text-red-500">*</span>
                  </label>
                  <p className="text-gray-600 text-sm mb-3">Select the categories you work with (you can select multiple)</p>
                  
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {productCategories.map(category => (
                      <button
                        key={category}
                        type="button"
                        onClick={() => toggleArrayValue('productCategories', category)}
                        className={`p-3 rounded-lg border text-sm font-medium transition-colors ${
                          watchedProductCategories.includes(category)
                            ? 'bg-blue-50 border-blue-500 text-blue-700'
                            : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                  {errors.productCategories && (
                    <p className="text-sm text-red-600">{errors.productCategories.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    International Trade Experience <span className="text-red-500">*</span>
                  </label>
                  <select
                    {...register('experience')}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  >
                    <option value="">Select experience level</option>
                    {experienceLevels.map(level => (
                      <option key={level} value={level}>{level}</option>
                    ))}
                  </select>
                  {errors.experience && (
                    <p className="text-sm text-red-600">{errors.experience.message}</p>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8">
            <Button
              type="button"
              variant="outline"
              onClick={prevStep}
              disabled={step === 1}
            >
              Previous
            </Button>

            {step < 3 ? (
              <Button
                type="button"
                onClick={nextStep}
              >
                Next
              </Button>
            ) : (
              <Button
                type="submit"
                loading={onboardingMutation.isPending}
                disabled={onboardingMutation.isPending}
              >
                Complete Setup
              </Button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
