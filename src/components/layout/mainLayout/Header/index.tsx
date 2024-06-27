import React from "react";
import Logo from "../../../Logo";
import Wrapper from "../../../Wrapper";
import TopMenu from "./components/TopMenu";
import { headerElements } from "./store/headerElements";

const Header = () => {
  return (
    <div className="w-full sticky top-0 h-[72px] bg-red-500 bg-main flex justify-center">
      <Wrapper className="flex items-center h-full ">
        <Logo />
        <TopMenu items={headerElements} />
      </Wrapper>
    </div>
  );
};

export default Header;
