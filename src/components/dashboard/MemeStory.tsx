const MemeStory = () => {
  return (
    <div className="flex mx-auto pt-[51px] pb-[43px] items-center justify-center flex-col w-full bg-[#42CFD9]">
      <div className="story-board-1 relative">
        <div className="absolute top-0 left-0 pl-[53px] pr-[23px] bg-[#3987BF] flex flex-row items-center justify-center">
          <span className="text-white text-[37px] leading-[88px] tracking-[0.74px] text-center">
            Episode 1 : The King of Memes
          </span>
        </div>
        <div className="absolute bottom-0 px-[58px] py-[14px] border border-[rgba(40,37,37,0.1)] bg-[rgba(40,37,37,0.38)] backdrop-blur-[4.5px] w-full">
          <span className="text-[30px] text-white font-normal leading-[56px] tracking-[0.6px]">
            The meme empire of "Solatopia" is ruled by King "Sola" and Queen
            "Nana". However, upon noticing that marauding dogs and frogs are
            disturbing the market, King Sola takes special measures and
            dispatches their natural enemies his, the guardian animals "SORA"
            and "MALA".
          </span>
        </div>
      </div>
      <div className="story-board-2 relative">
        <div className="absolute top-0 left-0 pl-[53px] pr-[23px] bg-[#3987BF] flex flex-row items-center justify-center">
          <span className="text-white text-[37px] leading-[88px] tracking-[0.74px] text-center">
            Episode 2 : Hunting Time
          </span>
        </div>
        <div className="absolute bottom-0 px-[58px] py-[14px] border border-[rgba(40,37,37,0.1)] bg-[rgba(40,37,37,0.38)] backdrop-blur-[4.5px] w-full">
          <span className="text-[28px] text-white font-normal leading-[56px] tracking-[0.58px]">
            Now it's their lunchtime. "SORA", who was hungry, played with them
            like acorns and ate them, while "MALA" grew tired of them and burn
            them. However, these creatures are persistent in their vitality, and
            their remnants are still scattered everywhere. Eventually, King
            "Sola" begins to send out hunters with a bounty on them.
          </span>
        </div>
      </div>
      <div className="relative w-full pt-[122px] mx-auto">
        <div className="flex flex-row gap-12 justify-center">
          <div className="">
            <img src="/assets/CleaningLeft.svg" alt="CleaningLeft" />
          </div>
          <div className="flex flex-col gap-[25px]">
            <span className="text-white text-[108px] leading-[0.8em] tracking-[2.16px] font-normal">
              Cleaning the Area
            </span>
            <span className="max-w-[744px] text-primaryText text-[30px] leading-normal tracking-[0.6px] font-normal">
              Now, it's time to become a hunter and earn a huge bounty by
              catching marauding bounty criminals (dogs, frogs, sloths) and
              sending them to prison to make the meme empire "Solatopia" a clean
              area!
            </span>
          </div>
        </div>
        <div className="absolute top-0 left-0 pl-[53px] pr-[23px] bg-[#3987BF] flex flex-row items-center justify-center">
          <span className="text-white text-[37px] leading-[88px] tracking-[0.74px] text-center">
            Episode 3 : Cleaning the Area
          </span>
        </div>
      </div>
      <div className="relative w-full mt-12 pt-[122px] mx-auto bg-[#66DCE5]">
        <div className="flex flex-row gap-8 pl-[62px] justify-center">
          <div className="flex flex-col gap-[35px] max-w-[651px]">
            <span className="max-w-[651px] text-primaryText text-[26px] leading-[48px] tracking-[0.58px] font-normal">
              "Solatopia" forms an alliance with the neighboring kingdom "Sora
              Land" and starts mass-producing "SORA", "MALA", and other smart
              memes through artificial intelligence.
            </span>
            <span className="max-w-[651px] text-primaryText text-[26px] leading-[48px] tracking-[0.58px] font-normal">
              Now, the two kingdoms embark on their long journey to control all
              of the old meme kingdoms, unify the meme world, and take control
              of Hollywood.
            </span>
          </div>
          <img
            src="/assets/CleaningRight.svg"
            alt="CleaningLeft"
            className="mt-[-120px] ml-[-50px]"
          />
        </div>
        <div className="absolute top-0 left-0 pl-[53px] pr-[23px] bg-[#3987BF] flex flex-row items-center justify-center">
          <span className="text-white text-[37px] leading-[88px] tracking-[0.74px] text-center">
            Episode 4 : A.I
          </span>
        </div>
      </div>
    </div>
  );
};

export default MemeStory;
