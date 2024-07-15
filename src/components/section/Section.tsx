import React, { useCallback } from "react";
import Wrapper from "../Wrapper";
import Button from "../Button/Button";
import SectionListElement from "./components/SectionListElement";

interface ISectionProps {
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
  };
  list?: {
    data: {
      title: string;
      desc: string;
      img: string;
      imgWidth?: number;
      overflow?: boolean; //true if image goes outside of borders
    }[];
    bgColor: string;
  };
  shapeSrc: string;
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
  shapeSrc,
  reverse,
}) => {
  const [activeIndex, setActiveIndex] = React.useState<number>(0);
  const changeIndex = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);
  return (
    <Wrapper className={`"px-0 flex mx-auto`}>
      <section
        style={{
          backgroundColor: bgColor,
          backgroundImage: `url(${shapeSrc})`,
          backgroundPosition: reverse
            ? "left bottom 2.25rem"
            : "right bottom 2.25rem",
          minHeight: "52.5rem",
          backgroundSize: "625px",
        }}
        className={`rounded-[1.25rem] max-w-[80rem] w-full bg-no-repeat my-[3.75rem]`}
      >
        <div className={`flex ${reverse ? "flex-row-reverse" : "flex-row"}`}>
          <div
            className={`z-10 relative py-[70px] w-full ${
              reverse ? "pr" : "pl"
            }-[140px]`}
          >
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
              <ul className="list-none mb-[30px] max-w-[30.5rem]">
                {list.data.map((item, i) => {
                  const active = activeIndex === i;
                  return (
                    <SectionListElement
                      item={item}
                      color={color}
                      bgColor={active ? iconBgColor : list.bgColor}
                      active={active}
                      onClick={() => changeIndex(i)}
                    />
                  );
                })}
              </ul>
            ) : null}
            <Button
              style={{ backgroundColor: color, color: button.color }}
              className="mt-[74px]"
            >
              {button.text}
            </Button>
          </div>
          <div
            className={`${
              reverse ? "pl" : "pr"
            }-[140px] w-full flex align-center justify-center`}
          >
            {list ? (
              <div className="relative w-full">
                <img
                  src={list?.data?.[activeIndex].img}
                  alt="image"
                  style={{
                    width: list?.data?.[activeIndex].imgWidth ?? "auto",
                  }}
                  className={`absolute ${
                    reverse ? "right" : "left"
                  }-0 top-1/2 translate-y-[-50%] max-w-[unset] ${
                    list?.data?.[activeIndex]?.overflow
                      ? "right-0"
                      : "left-[50%] translate-x-[-50%]"
                  }`}
                />
              </div>
            ) : null}
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

export default Section;
