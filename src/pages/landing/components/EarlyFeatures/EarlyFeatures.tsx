import React from "react";
import Wrapper from "../../../../components/Wrapper";
import TextInput from "../../../../components/Inputs/TextInput";
import Button from "../../../../components/Button/Button";

const EarlyFeatures = () => {
  return (
    <div className="w-screen">
      <div className="w-screen h-[570px] bg-home-hero-gradient bg-cover	bg-no-repeat bg-center-bottom flex justify-center">
        <Wrapper className="flex items-center h-full">
          <form className="h-min max-w-[46.6875rem]">
            <h3 className="mb-6 text-white font-bold text-5xl	leading-[3.625rem]">
              Be early to the future of finance
            </h3>
            <p className="mb-8 text-white text-2xl leading-[2.125rem]">
              Buy Bitcoin, Ethereum, and other leading cryptocurrencies on a
              platform trusted by millions.
            </p>
            <div className="flex align-center">
              <TextInput placeholder="Your Email Address" />
              <Button type="submit">Sign Up</Button>
            </div>
          </form>
        </Wrapper>
      </div>
    </div>
  );
};

export default EarlyFeatures;
