import React from "react";
import { twMerge } from "tailwind-merge";

const Popover = ({
  children,
  content,
  bodyProps,
  position = "bottom",
}: PopoverProps) => {
  return (
    <div className="relative w-max group z-50">
      {children}
      {
        <div
          {...bodyProps}
          className={twMerge(
            "invisible group-hover:visible absolute opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out",
            `p-2 rounded-md shadow-md z-50 bg-white`,
            `before:content-[''] before:w-4 before:h-4 before:bg-white before:absolute before:rotate-45 before:left-1/2 before:top-0 before:translate-x-[-50%] before:translate-y-[-44%] before:z-10 before:rounded-[2px]`,
            !position && "hidden",
            getPositionClasses(position),
            bodyProps?.className ?? ""
          )}
        >
          {content}
        </div>
      }
    </div>
  );
};

const getPositionClasses = (position?: PopoverProps["position"]) => {
  switch (position) {
    case "top":
      return "absolute bottom-full left-1/2 translate-x-[-50%] z-10";
    case "bottom":
      return "absolute left-1/2 translate-x-[-50%] z-10";
    case "left":
      return "absolute top-1/2 right-full translate-y-[-50%] z-10";
    case "right":
      return "absolute top-1/2 left-full translate-y-[-50%] z-10";
    case "bottom-left":
      return "absolute top-full left-0 z-10";
    case "bottom-right":
      return "absolute top-full right-0 z-10";
    case "top-left":
      return "absolute bottom-full left-0 z-10";
    case "top-right":
      return "absolute bottom-full right-0 z-10";
    default:
      return "";
  }
};

interface PopoverProps {
  children: React.ReactNode;
  content: React.ReactNode;
  position?:
    | "top"
    | "bottom"
    | "left"
    | "right"
    | "bottom-left"
    | "bottom-right"
    | "top-left"
    | "top-right";
  bodyProps?: React.HTMLProps<HTMLDivElement>;
}

export default Popover;
