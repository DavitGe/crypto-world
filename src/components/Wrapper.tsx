import React, { ReactNode } from "react";

interface WrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

const Wrapper: React.FC<WrapperProps> = (props) => {
  const argClass = props?.className ?? "";
  return (
    <div
      {...{
        ...props,
        children: undefined,
        className: `w-screen xl:w-[1280px] px-4 ${argClass}`,
      }}
    >
      {props?.children}
    </div>
  );
};

export default Wrapper;
