import React from "react";
import { IoIosMore } from "react-icons/io";
import Popover from "../../../../../Popover/Popover";
const MoreElements = () => {
  return (
    <Popover
      content={<div>asdfasdf</div>}
      position="bottom"
      bodyProps={{
        className: "bottom-[-61px]",
      }}
    >
      <div className="navEl text-nav">
        <IoIosMore fontSize={22} />
      </div>
    </Popover>
  );
};

export default MoreElements;
