import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  icon?: LucideIcon;
  fullWidth?: boolean;
  href?: string;
  target?: string;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  icon: Icon, 
  className = '', 
  fullWidth = false,
  href,
  target,
  ...props 
}) => {
  const baseStyles = "relative inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-bold tracking-wide uppercase transition-all duration-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer no-underline";
  
  const variants = {
    primary: "bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-400 hover:to-blue-500 shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] border-transparent",
    secondary: "bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:from-purple-500 hover:to-indigo-500 shadow-[0_0_20px_rgba(147,51,234,0.4)] hover:shadow-[0_0_30px_rgba(147,51,234,0.6)] border-transparent",
    outline: "bg-transparent border border-cyan-500/50 text-cyan-400 hover:border-cyan-400 hover:bg-cyan-950/30 hover:text-cyan-300 shadow-[0_0_10px_rgba(6,182,212,0.1)]",
    ghost: "bg-transparent text-slate-400 hover:text-white hover:bg-white/5",
  };

  const widthClass = fullWidth ? 'w-full' : '';
  const combinedClassName = `${baseStyles} ${variants[variant]} ${widthClass} ${className}`;

  if (href) {
    return (
      <a href={href} target={target} className={combinedClassName}>
        {Icon && <Icon className="w-5 h-5" />}
        <span>{children}</span>
      </a>
    );
  }

  return (
    <button 
      className={combinedClassName}
      {...props}
    >
      {Icon && <Icon className="w-5 h-5" />}
      <span>{children}</span>
    </button>
  );
};

export default Button;