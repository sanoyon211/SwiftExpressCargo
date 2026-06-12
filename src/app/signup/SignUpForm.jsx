"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import Link from 'next/link';

const signUpSchema = z.object({
  firstName: z.string().min(2, { message: "First name is too short" }),
  lastName: z.string().min(2, { message: "Last name is too short" }),
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters" }),
  confirmPassword: z.string(),
  terms: z.boolean().refine((val) => val === true, {
    message: "You must agree to the terms",
  }),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});

export default function SignUpForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = async (data) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log(data);
    toast.success("Account created successfully! Welcome to Swift Express.");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
            First name
          </label>
          <div className="mt-1">
            <input
              id="firstName"
              type="text"
              autoComplete="given-name"
              {...register("firstName")}
              className={`appearance-none block w-full px-4 py-3 border ${
                errors.firstName ? "border-red-500" : "border-slate-200 dark:border-slate-700"
              } rounded-[16px] shadow-sm placeholder-slate-400 focus:outline-none focus:ring-teal-500 focus:border-teal-500 transition-colors sm:text-sm bg-white dark:bg-slate-800 dark:text-slate-50`}
              placeholder="First name"
            />
            {errors.firstName && (
              <p className="mt-1 text-sm text-red-500">{errors.firstName.message}</p>
            )}
          </div>
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
            Last name
          </label>
          <div className="mt-1">
            <input
              id="lastName"
              type="text"
              autoComplete="family-name"
              {...register("lastName")}
              className={`appearance-none block w-full px-4 py-3 border ${
                errors.lastName ? "border-red-500" : "border-slate-200 dark:border-slate-700"
              } rounded-[16px] shadow-sm placeholder-slate-400 focus:outline-none focus:ring-teal-500 focus:border-teal-500 transition-colors sm:text-sm bg-white dark:bg-slate-800 dark:text-slate-50`}
              placeholder="Last name"
            />
            {errors.lastName && (
              <p className="mt-1 text-sm text-red-500">{errors.lastName.message}</p>
            )}
          </div>
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
          Email address
        </label>
        <div className="mt-1">
          <input
            id="email"
            type="email"
            autoComplete="email"
            {...register("email")}
            className={`appearance-none block w-full px-4 py-3 border ${
              errors.email ? "border-red-500" : "border-slate-200 dark:border-slate-700"
            } rounded-[16px] shadow-sm placeholder-slate-400 focus:outline-none focus:ring-teal-500 focus:border-teal-500 transition-colors sm:text-sm bg-white dark:bg-slate-800 dark:text-slate-50`}
            placeholder="Enter your email"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="password" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
          Password
        </label>
        <div className="mt-1">
          <input
            id="password"
            type="password"
            autoComplete="new-password"
            {...register("password")}
            className={`appearance-none block w-full px-4 py-3 border ${
              errors.password ? "border-red-500" : "border-slate-200 dark:border-slate-700"
            } rounded-[16px] shadow-sm placeholder-slate-400 focus:outline-none focus:ring-teal-500 focus:border-teal-500 transition-colors sm:text-sm bg-white dark:bg-slate-800 dark:text-slate-50`}
            placeholder="Create a password"
          />
          {errors.password && (
            <p className="mt-1 text-sm text-red-500">{errors.password.message}</p>
          )}
        </div>
      </div>
      
      <div>
        <label htmlFor="confirmPassword" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
          Confirm Password
        </label>
        <div className="mt-1">
          <input
            id="confirmPassword"
            type="password"
            autoComplete="new-password"
            {...register("confirmPassword")}
            className={`appearance-none block w-full px-4 py-3 border ${
              errors.confirmPassword ? "border-red-500" : "border-slate-200 dark:border-slate-700"
            } rounded-[16px] shadow-sm placeholder-slate-400 focus:outline-none focus:ring-teal-500 focus:border-teal-500 transition-colors sm:text-sm bg-white dark:bg-slate-800 dark:text-slate-50`}
            placeholder="Confirm your password"
          />
          {errors.confirmPassword && (
            <p className="mt-1 text-sm text-red-500">{errors.confirmPassword.message}</p>
          )}
        </div>
      </div>

      <div className="flex items-center">
        <input
          id="terms"
          type="checkbox"
          {...register("terms")}
          className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-slate-300 rounded cursor-pointer"
        />
        <label htmlFor="terms" className="ml-2 block text-sm text-slate-700 dark:text-slate-300">
          I agree to the{' '}
          <Link href="#" className="font-medium text-teal-600 dark:text-teal-400 hover:text-teal-500">
            Terms of Service
          </Link>{' '}
          and{' '}
          <Link href="#" className="font-medium text-teal-600 dark:text-teal-400 hover:text-teal-500">
            Privacy Policy
          </Link>
        </label>
      </div>
      {errors.terms && (
        <p className="text-sm text-red-500">{errors.terms.message}</p>
      )}

      <div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full flex justify-center py-3 px-4 border border-transparent rounded-[24px] shadow-sm text-sm font-medium text-white bg-gradient-to-r from-teal-500 to-emerald-400 hover:from-teal-600 hover:to-emerald-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-all duration-300 transform hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <span className="flex items-center">
              <i className="fa-solid fa-spinner fa-spin mr-2"></i> Creating account...
            </span>
          ) : (
            "Create account"
          )}
        </button>
      </div>
    </form>
  );
}
