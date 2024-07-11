import React, { useCallback } from "react";
import Wrapper from "../Wrapper";
import Button from "../Button/Button";
import SectionListElement from "./components/SectionListElement";

interface ISectionProps {
  bgImage: string;
  bgColor: string;
  icon: JSX.Element;
  title: string;
  heading: string;
  color: string;
  reverse?: boolean;
  iconBgColor: string;
  button: {
    text?: string;
    color?: string;
    bgColor?: string;
  };
  list?: {
    data: {
      title: string;
      desc: string;
    }[];
  };
}

const Section: React.FC<ISectionProps> = ({
  bgColor,
  icon,
  color,
  iconBgColor,
  title,
  heading,
  button,
  list,
}) => {
  const [activeIndex, setActiveIndex] = React.useState<number>(0);
  const changeIndex = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);
  return (
    <Wrapper className={`"px-10 flex m-auto `}>
      <section
        style={{ backgroundColor: bgColor }}
        className={`w-full rounded-[1.25rem] p-4`}
      >
        <div className="py-[70px] pl-[140px] w-1/2">
          <div
            style={{ backgroundColor: iconBgColor }}
            className={`p-4 flex align-center rounded-[1.25rem] w-min mb-5`}
          >
            <div className="h-8 w-8">{icon}</div>
            <span
              style={{ color }}
              className={` ml-[10px]  text-lg font-medium	leading-6 self-center`}
            >
              {title}
            </span>
          </div>
          <h3
            style={{ color }}
            className={`max-w-[30.5rem] text-[40px] font-semibold mb-[30px]`}
          >
            {heading}
          </h3>
          {list?.data?.length ? (
            <ul className="list-none mb-[30px]">
              {list.data.map((item, i) => {
                return (
                  <SectionListElement
                    item={item}
                    color={color}
                    bgColor={iconBgColor}
                    active={activeIndex === i}
                    onClick={() => changeIndex(i)}
                  />
                );
              })}
            </ul>
          ) : null}
          <Button
            style={{ backgroundColor: button.bgColor, color: button.color }}
            className="mt-[74px]"
          >
            {button.text}
          </Button>
        </div>
      </section>
    </Wrapper>
  );
};

export default Section;
