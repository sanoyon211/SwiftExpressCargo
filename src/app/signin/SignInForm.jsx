"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const signInSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters" }),
  rememberMe: z.boolean().optional(),
});

export default function SignInForm() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(signInSchema),
  });

  const onSubmit = async (data) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log(data);
    toast.success("Signed in successfully! Redirecting...");`n    router.push("/dashboard");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
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

      <div className="space-y-1">
        <div className="flex items-center justify-between">
          <label htmlFor="password" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
            Password
          </label>
          <div className="text-sm">
            <Link href="#" className="font-medium text-teal-600 dark:text-teal-400 hover:text-teal-500 transition-colors">
              Forgot your password?
            </Link>
          </div>
        </div>
        <div className="mt-1 relative">
          <input
            id="password"
            type="password"
            autoComplete="current-password"
            {...register("password")}
            className={`appearance-none block w-full px-4 py-3 border ${
              errors.password ? "border-red-500" : "border-slate-200 dark:border-slate-700"
            } rounded-[16px] shadow-sm placeholder-slate-400 focus:outline-none focus:ring-teal-500 focus:border-teal-500 transition-colors sm:text-sm bg-white dark:bg-slate-800 dark:text-slate-50`}
            placeholder="Enter your password"
          />
          {errors.password && (
            <p className="mt-1 text-sm text-red-500">{errors.password.message}</p>
          )}
        </div>
      </div>

      <div className="flex items-center">
        <input
          id="rememberMe"
          type="checkbox"
          {...register("rememberMe")}
          className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-slate-300 rounded cursor-pointer"
        />
        <label htmlFor="rememberMe" className="ml-2 block text-sm text-slate-700 dark:text-slate-300 cursor-pointer">
          Remember me for 30 days
        </label>
      </div>

      <div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full flex justify-center py-3 px-4 border border-transparent rounded-[24px] shadow-sm text-sm font-medium text-white bg-gradient-to-r from-teal-500 to-emerald-400 hover:from-teal-600 hover:to-emerald-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-all duration-300 transform hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <span className="flex items-center">
              <i className="fa-solid fa-spinner fa-spin mr-2"></i> Signing in...
            </span>
          ) : (
            "Sign in"
          )}
        </button>
      </div>
    </form>
  );
}
