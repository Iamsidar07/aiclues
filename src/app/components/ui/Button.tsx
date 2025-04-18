import { ButtonHTMLAttributes, forwardRef } from "react";
import { clsx } from "clsx";
import { ArrowRightIcon } from "lucide-react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  withIcon?: boolean;
  isLoading?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      withIcon = false,
      isLoading = false,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles = "rounded-full font-medium transition-colors duration-200 flex items-center justify-center gap-2";
    
    const variants = {
      primary: "bg-blue-700 text-white hover:bg-blue-800 disabled:bg-blue-300",
      secondary: "bg-gray-200 text-gray-900 hover:bg-gray-300 disabled:bg-gray-100",
      outline: "border-2 border-blue-700 text-blue-700 hover:bg-blue-50 disabled:border-blue-300 disabled:text-blue-300"
    };

    const sizes = {
      sm: "px-4 py-1.5 text-sm",
      md: "px-8 py-2.5 text-base",
      lg: "px-10 py-3 text-lg"
    };

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={clsx(
          baseStyles,
          variants[variant],
          sizes[size],
          isLoading && "opacity-70 cursor-not-allowed",
          className
        )}
        {...props}
      >
        {isLoading ? (
          <>
            <span className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full" />
            Loading...
          </>
        ) : (
          <>
            {children}
            {withIcon && <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
          </>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";
