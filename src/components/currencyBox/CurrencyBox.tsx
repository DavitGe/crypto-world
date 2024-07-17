import React from "react";
import Button from "../Button/Button";

interface ICurrencyBoxProps {
  title?: string;
  abr?: string;
  img?: string;
  price?: string;
  percent?: number;
}

const CurrencyBox: React.FC<ICurrencyBoxProps> = ({
  title,
  abr,
  img,
  price,
  percent,
}) => {
  return (
    <div className="p-5 rounded-lg shadow-lg bg-white max-w-[232px] w-full cursor-pointer">
      <div className="flex w-full justify-between align-top mb-2">
        <img className="h-10 w-10 rounded-full bg-main" alt="pic" src={img} />
        <div className="flex gap-2 h-min">
          <Button className="text-sm py-1 px-2 text-[#5322e5] bg-[#EFECFE] leading-5">
            Buy
          </Button>
          <Button className="text-sm py-1 px-2 text-[#00994C] bg-[#E6FAEC] leading-5">
            Trade
          </Button>
        </div>
      </div>
      <div className="flex mb-1">
        <p className="text-base text-title">{title}</p>
        <p className="text-desc text-base ml-2">{abr}</p>
      </div>
      <div className="flex mb-1">
        <p className="text-base text-title">{price}</p>
        <p
          style={
            percent && percent < 0 ? { color: "#ff443a" } : { color: "#00b26b" }
          }
          className="text-base ml-2"
        >
          {percent && percent > 0 && "+"}
          {percent}%
        </p>
      </div>
    </div>
  );
};

export default CurrencyBox;
