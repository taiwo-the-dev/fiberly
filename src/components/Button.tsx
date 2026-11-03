import React from "react";
import clsx from "clsx";

interface ButtonProps {
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  children: React.ReactNode;
  disabled?: boolean;
  className?: string;
  variant?: "default" | "outline"; 
}

const Button: React.FC<ButtonProps> = ({
  type = "button",
  onClick,
  children,
  disabled = false,
  className = "",
  variant = "default", 
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        "px-10 py-3 rounded-full text-xl transition-all cursor-pointer hover:-translate-y-0.5 hover:shadow-lg disabled:opacity-50 disabled:hover:translate-y-0 disabled:hover:shadow-none disabled:cursor-not-allowed font-semibold",
        variant === "default"
          ? "bg-brand text-white hover:bg-brand-dark"
          : "border-2 border-brand text-brand bg-white",
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
