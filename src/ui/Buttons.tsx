// src/components/ui/Button.tsx

import { cn } from "../lib/utils";


interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost";
}

export const Buttons = ({ variant = "primary", className, ...props }: ButtonProps) => {
  const base = "px-4 py-2 rounded-lg font-medium transition-all duration-200";
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border border-blue text-blue-800 hover:bg-gray-100",
    ghost: "text-gray-600 hover:text-gray-900 hover:bg-gray-50",
  };

  return <button className={cn(base, variants[variant], className)} {...props} />;
};
