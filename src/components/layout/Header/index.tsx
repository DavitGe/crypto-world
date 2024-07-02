import Logo from "../../Logo";
import Wrapper from "../../Wrapper";
import TopMenu from "./components/TopMenu";
import { headerElements } from "./store/headerElements";
import Search from "./components/Search";
import Button from "../../Button/Button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="w-full sticky top-0 h-[72px] bg-red-500 bg-main flex justify-center border-b border-solid border-b-[#ffffff33]">
      <Wrapper className="flex items-center h-full">
        <Link to="/" className="mr-6">
          <Logo />
        </Link>
        <TopMenu items={headerElements} />
        <div className="flex align-center justify-end w-full">
          <div className="mr-[1.25rem] ml-auto">
            <Search />
          </div>
          <Button className="text-white py-[10px] px-[14px] border-[2px]  border-white text-[14px] font-medium	mr-[1.25rem] transition">
            Log In
          </Button>
          <Button className="py-[10px] px-[14px] border-[2px]  bg-white text-[14px] font-medium	mr-[1.25rem] transition">
            Sign Up
          </Button>
        </div>
      </Wrapper>
    </div>
  );
};

export default Header;
