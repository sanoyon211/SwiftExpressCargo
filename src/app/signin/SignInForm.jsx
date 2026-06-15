"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Loader2, Mail, Lock } from 'lucide-react';

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
    toast.success("Signed in successfully! Redirecting...");
    router.push("/dashboard");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

      {/* Email Input */}
      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
          Email address
        </label>
        <div className="relative group">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Mail className="text-slate-400 group-focus-within:text-indigo-500 transition-colors" size={18} />
          </div>
          <input
            id="email"
            type="email"
            autoComplete="email"
            {...register("email")}
            className={`appearance-none block w-full pl-11 pr-4 h-12 bg-slate-50 dark:bg-slate-900/50 border ${errors.email ? "border-red-500 focus:ring-red-500" : "border-slate-200 dark:border-white/10 focus:ring-indigo-500 focus:border-transparent"
              } rounded-lg shadow-sm placeholder-slate-400 focus:outline-none focus:ring-2 text-slate-900 dark:text-white transition-all text-sm`}
            placeholder="you@example.com"
          />
        </div>
        {errors.email && (
          <p className="mt-1.5 text-xs font-medium text-red-500">{errors.email.message}</p>
        )}
      </div>

      {/* Password Input */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <label htmlFor="password" className="block text-sm font-semibold text-slate-700 dark:text-slate-300">
            Password
          </label>
          <Link href="#" className="text-sm font-bold text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 transition-colors focus:outline-none">
            Forgot password?
          </Link>
        </div>
        <div className="relative group">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Lock className="text-slate-400 group-focus-within:text-indigo-500 transition-colors" size={18} />
          </div>
          <input
            id="password"
            type="password"
            autoComplete="current-password"
            {...register("password")}
            className={`appearance-none block w-full pl-11 pr-4 h-12 bg-slate-50 dark:bg-slate-900/50 border ${errors.password ? "border-red-500 focus:ring-red-500" : "border-slate-200 dark:border-white/10 focus:ring-indigo-500 focus:border-transparent"
              } rounded-lg shadow-sm placeholder-slate-400 focus:outline-none focus:ring-2 text-slate-900 dark:text-white transition-all text-sm`}
            placeholder="••••••••"
          />
        </div>
        {errors.password && (
          <p className="mt-1.5 text-xs font-medium text-red-500">{errors.password.message}</p>
        )}
      </div>

      {/* Remember Me */}
      <div className="flex items-center pt-1">
        <input
          id="rememberMe"
          type="checkbox"
          {...register("rememberMe")}
          className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-slate-300 dark:border-white/20 bg-white dark:bg-slate-900 rounded cursor-pointer transition-colors"
        />
        <label htmlFor="rememberMe" className="ml-2 block text-sm font-medium text-slate-600 dark:text-slate-400 cursor-pointer">
          Remember me for 30 days
        </label>
      </div>

      {/* Submit Button */}
      <div className="pt-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full h-12 flex justify-center items-center gap-2 border border-transparent rounded-lg shadow-md text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-slate-950 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="animate-spin" size={18} />
              Signing in...
            </>
          ) : (
            "Sign In"
          )}
        </button>
      </div>

    </form>
  );
}