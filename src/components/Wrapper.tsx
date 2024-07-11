import React, { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface WrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

const Wrapper: React.FC<WrapperProps> = ({ children, className, ...rest }) => {
  return (
    <div
      {...rest}
      className={twMerge("w-screen xl:w-[calc(1304px)] px-4 ", className)}
    >
      {children}
    </div>
  );
};

export default Wrapper;
