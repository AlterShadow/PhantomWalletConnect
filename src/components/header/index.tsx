import { Link } from "react-router-dom";
import Connect2Phantom from "../Connect2Phantom";

const Header = () => {
  return (
    <div className="fixed z-50 w-full bg-[white]">
      <div className="h-[84px] pr-20 pl-[88px] flex items-center justify-between w-full mx-auto">
        <Link to="/" className="gap-[6px] flex flex-row items-center">
          <img src="/logo.png" alt="logo" className="w-[54px] h-[53px]" />
          <span className="text-[24px] leading-[1em] font-normal text-[#3887BF]">
            Sora&nbsp;<span className="inline-flex text-[#42CFD9]">Mala</span>
          </span>
        </Link>
        <div className="flex flex-row gap-[35px] items-start">
          <Link
            to="/staking"
            target="_blank"
            className="text-[24px] font-normal leading-[1em] -primaryText"
          >
            MemeHunt
          </Link>
          <Link
            to="/"
            className="text-[24px] font-normal leading-[1em] text-primaryText"
          >
            Story
          </Link>
          <Link
            to="/"
            className="text-[24px] font-normal leading-[1em] text-primaryText"
          >
            Memenomics
          </Link>
          <Link
            to="/vault"
            className="text-[24px] font-normal leading-[1em] text-primaryText"
          >
            Roadmap
          </Link>
          <Link
            to="/vault"
            className="text-[24px] font-normal leading-[1em] text-primaryText"
          >
            About
          </Link>
        </div>
        <div className="flex flex-row items-center pt-[15px] pb-[14px]">
          <span className="w-[44px] h-[44px]">
            <img src="/assets/flag.svg" alt="flag" />
          </span>
          <span className="ml-[15px] w-[33px] h-[33px]">
            <img src="/assets/twitter.svg" alt="twitter" />
          </span>
          {/* <button className="bg-[#3887BF] w-[193px] h-[55px] ml-[21px] flex text-center justify-center items-center text-[20px] leading-normal font-normal text-white">
            <Connect2Phantom />
          </button> */}
          <Connect2Phantom />
        </div>
      </div>
    </div>
  );
};

export default Header;
