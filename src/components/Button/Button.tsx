import React from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: React.FC<ButtonProps> = ({ children, className, ...rest }) => {
  return (
    <button
      {...rest}
      className={twMerge(
        "py-3 px-7 rounded-[0.5rem]  hover:opacity-80 ",
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
