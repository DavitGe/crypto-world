import React from "react";
import { IoIosMore } from "react-icons/io";
import Popover from "../../../../../Popover/Popover";
import { topMenuElements } from "./store/topMenuElements.conf";
const List: React.FC<{
  title: string;
  elements: { label: string; to: string }[];
}> = ({ title, elements }) => {
  return (
    <div className="flex flex-col w-[124px]">
      <h4 className="p-0 font-semibold text-title text-lg mb-[1.25rem]">
        {title}
      </h4>
      <ul className="list-none">
        {elements.map((el, i) => {
          return (
            <li key={i} className="mb-[1rem] text-desc">
              {el.label}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
const MoreElements = () => {
  return (
    <Popover
      content={
        <div className="flex gap-[48px]">
          {topMenuElements.map((el, i) => {
            return <List key={i} title={el.title} elements={el.elements} />;
          })}
        </div>
      }
      position="bottom"
      bodyProps={{
        className: "p-6 translate-y-[4%] bordered-[100px] shadow-2xl",
      }}
    >
      <div className="navEl text-nav bordered-[100px]">
        <IoIosMore fontSize={22} />
      </div>
    </Popover>
  );
};

export default MoreElements;
