import React from "react";
import Button from "../Button/Button";

const CurrencyBox = () => {
  return (
    <div className="p-5 rounded-lg shadow bg-white max-w-[232px]">
      <div className="flex w-full justify-between align-top mb-2">
        <img className="h-10 w-10 rounded-full bg-main" alt="pic" />
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
        <p className="text-base text-title">Bitcoin</p>
        <p className="text-desc text-base ml-2">BTC</p>
      </div>
      <div className="flex mb-1">
        <p className="text-base text-title">$60,927.21</p>
        <p className="text-[#ff443a] text-base ml-2">-2.58%</p>
      </div>
    </div>
  );
};

export default CurrencyBox;
