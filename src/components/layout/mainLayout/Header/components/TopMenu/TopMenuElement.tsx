import React, { ReactNode } from "react";
import { Link } from "react-router-dom";

const TopMenuElement: React.FC<{ to: string; children: ReactNode }> = ({
  to,
  children,
}) => {
  return (
    <ul className="px-2 py-1">
      <Link to={to}>{children}</Link>
    </ul>
  );
};

export default TopMenuElement;
