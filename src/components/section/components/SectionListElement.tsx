import React from "react";

const SectionListElement: React.FC<{
  item: {
    title: string;
    desc: string;
  };
  color: string;
  bgColor: string;
  active?: boolean;
  onClick?: () => void;
}> = ({ item, color, active, bgColor, onClick }) => {
  return (
    <li
      className="cursor-pointer rounded-xl"
      onClick={onClick}
      style={{ color, backgroundColor: active ? bgColor : "inherit" }}
    >
      <div
        style={{ height: active ? 132 : 56 }}
        className="border border-solid border-[rgb(222,216,253)] rounded-xl mb-3 py-4 px-5 transition-all duration-200"
      >
        <span className="font-medium text-base">{item.title}</span>
        {active && (
          <p
            style={{ opacity: active ? 1 : 0, height: active ? 56 : 0 }}
            className={"max-w-max pt-2 transition-all duration-500 ml-[10px]"}
          >
            {item.desc}
          </p>
        )}
      </div>
    </li>
  );
};

export default SectionListElement;
