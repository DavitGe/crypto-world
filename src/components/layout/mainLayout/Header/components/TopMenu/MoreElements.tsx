import React from "react";
import { IoIosMore } from "react-icons/io";
import Popover from "../../../../../Popover/Popover";
import { topMenuElements } from "./store/topMenuElements.conf";
const List: React.FC<{
  title: string;
  elements: { label: string; to: string }[];
}> = ({ title, elements }) => {
  return (
    <div className="flex flex-col">
      <h4 className="p-0">{title}</h4>
      <ul className="list-none">
        {elements.map((el, i) => {
          return <li key={i}>{el.label}</li>;
        })}
      </ul>
    </div>
  );
};
const MoreElements = () => {
  return (
    <Popover
      content={
        <div className="flex">
          {topMenuElements.map((el, i) => {
            return <List key={i} title={el.title} elements={el.elements} />;
          })}
        </div>
      }
      position="bottom"
      bodyProps={{
        className: "p-6 translate-y-[0%]",
      }}
    >
      <div className="navEl text-nav">
        <IoIosMore fontSize={22} />
      </div>
    </Popover>
  );
};

export default MoreElements;
