import React from "react";
import Wrapper from "../Wrapper";

interface ISectionProps {
  bgImage?: string;
  bgColor?: string;
  icon?: JSX.Element;
  title?: string;
  heading?: string;
  color?: string;
  reverse?: boolean;
  iconBgColor?: string;
}

const Section: React.FC<ISectionProps> = ({
  bgColor,
  icon,
  color,
  iconBgColor,
}) => {
  return (
    <Wrapper>
      <div className={`w-full bg-[${bgColor}]`}>
        <div
          className={`p-4 flex align-center bg-[${iconBgColor}] rounded-[1.25rem] w-min`}
        >
          <div>{icon}</div>
          <span
            className={`text-[${color}] ml-[10px] text-lg	leading-6 self-center`}
          >
            Wallet
          </span>
        </div>
      </div>
    </Wrapper>
  );
};

export default Section;
