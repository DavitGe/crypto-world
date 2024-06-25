import React, { ReactNode, useEffect } from "react";
import { Link } from "react-router-dom";

const TopMenuElement: React.FC<{
  to: string;
  children: ReactNode;
  active: boolean;
}> = ({ to, children, active }) => {
  return (
    <li
      className={`navEl ${
        active
          ? "text-navActive after:content-[''] after:absolute after:border after:border-white after:border-solid after:bottom-[-20px] after:left-0 after:w-full after:h-[1px]"
          : "text-nav"
      }`}
    >
      <Link
        to={to}
        onClick={(e) => {
          if (active) {
            e.preventDefault();
          }
        }}
      >
        {children}
      </Link>
    </li>
  );
};

export default TopMenuElement;
