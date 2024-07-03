import React from "react";
import Wrapper from "../../../../components/Wrapper";
import TextInput from "../../../../components/Inputs/TextInput";
import Button from "../../../../components/Button/Button";

const EarlyFeatures = () => {
  return (
    <div className="w-screen">
      <div className="w-screen h-[570px] bg-home-hero-gradient bg-cover	bg-no-repeat bg-right-bottom flex justify-center">
        <Wrapper className="flex items-center h-full w-[1000px] xl:w-[1000px] px-10">
          <div className="h-min max-w-[46.6875rem]">
            <h3 className="mb-6 text-white font-bold text-5xl	leading-[3.625rem]">
              Be early to the future of finance
            </h3>
            <p className="mb-8 text-white text-2xl leading-[2.125rem]">
              Buy Bitcoin, Ethereum, and other leading cryptocurrencies on a
              platform trusted by millions.
            </p>
            <form className="flex align-center gap-4">
              <TextInput
                placeholder="Your email address"
                className="w-[355px] py-3 px-4 h-12 rounded-[0.5rem] bg-[rgba(255,255,255,0.1)] text-white"
              />
              <Button
                type="submit"
                className="py-3 px-[22px] bg-white text-[#0C6CF2]"
              >
                Sign Up
              </Button>
            </form>
          </div>
        </Wrapper>
      </div>
    </div>
  );
};

export default EarlyFeatures;
