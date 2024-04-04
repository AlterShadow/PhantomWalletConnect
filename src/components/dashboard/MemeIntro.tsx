const MemeIntro = () => {
  return (
    <div className="flex mx-auto pt-0 pr-0 pb-8 pl-7 items-center justify-center flex-row w-full">
      <div className="max-w-[832px]">
        <div className="flex flex-col">
          <div className="relative flex items-start ml-[-120px]">
            <div className="flex-1"></div>
            <div className="flex-[4] z-10 text-white text-[94px] text-center tracking-[2.48px] leading-[250px]">
              Sora Mala
            </div>
            <div className="absolute top-[14px] w-full h-full">
              <img
                src="/assets/IntroTitle.svg"
                alt="intro"
                className="w-full h-full"
              />
            </div>
          </div>
          <span className="w-[549px] text-primaryText text-[19px] leading-[29px] tracking-[0.38px] font-normal">
            The most impressive meme coin created by sora AJ. The dogs, frogs,
            sloths have had their day, it's time for SORAMALA to take roign."!!
          </span>
          <div className="relative w-[517px] h-[63px] bg-[#3887BF] mt-[9px]">
            <div className="absolute left-0 top-0 w-[512px] h-[55px] flex flex-row items-center pl-[19.6px] pr-[23.11px] border border-[#3887BF] gap-[42px] bg-[#42CFD9]">
              <span className="text-[20px] leading-[1em] font-normal text-white">
                fCuw5ppJ9aZYzjm8EsT2fHwxV1h5JwUfqXM44iX3Pzb
              </span>
              <span className="w-[29px] h-[29px] hover:cursor-pointer">
                <img src="/assets/clipboard.svg" alt="clipboard" />
              </span>
            </div>
          </div>
          <span className="mt-[17px] w-[549px] text-[26px] text-primaryText font-normal tracking-[0.52px]">
            Send Sol to wallet and wait for the super airdrop. Please purchase
            $SoraMala before listing<br></br> 1 SOL = 2,000,000 $SORAMALA
          </span>
        </div>
      </div>
      <div className="">
        <img src="/assets/IntroRight.png" alt="IntroRight" />
      </div>
    </div>
  );
};

export default MemeIntro;
