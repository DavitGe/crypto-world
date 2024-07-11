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
  title,
  heading,
}) => {
  return (
    <Wrapper className={`"px-10 flex m-auto `}>
      <section style={{ backgroundColor: bgColor }} className={`w-full`}>
        <div className="">
          <div
            style={{ backgroundColor: iconBgColor }}
            className={`p-4 flex align-center rounded-[1.25rem] w-min`}
          >
            <div>{icon}</div>
            <span
              style={{ color }}
              className={` ml-[10px]  text-lg	leading-6 self-center`}
            >
              {title}
            </span>
          </div>
          <h3
            style={{ color }}
            className={`max-w-[30.5rem] text-[40px] font-semibold`}
          >
            {heading}
          </h3>
        </div>
      </section>
    </Wrapper>
  );
};

export default Section;
