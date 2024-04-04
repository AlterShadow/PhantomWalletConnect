const Footer = () => {
  return (
    <>
      <div className="w-full bg-primaryBackground flex flex-col pt-8 pb-14 m-auto gap-[30px] border-t border-[#3887BF]">
        <div className="flex flex-row gap-[26px] items-center justify-center">
          <span className="w-12 h-12 rounded-[38px] bg-white">
            <img src="/assets/discord.svg" alt="discord" />
          </span>
          <span className="w-12 h-12 rounded-[38px] bg-white">
            <img src="/assets/telegram.svg" alt="telegram" />
          </span>
          <span className="w-12 h-12 rounded-[38px] bg-white">
            <img src="/assets/doc.svg" alt="docs" />
          </span>
        </div>
        <div className="max-w-[838px] m-auto flex flex-col gap-[20px] text-center text-primaryText">
          <span className="text-[25px] leading-[1.2em] font-normal">
            Dogs, frogs, sloths have already enjoyed it to the fullest.
            <br></br>Now it is time for noble memes equipped with AI to take the
            baton.
          </span>
          <span className="text-[25px] font-normal text-center">
            $SORAMALA is a smart meme coin with intrinsic value or expectation
            of financial return.
          </span>
        </div>
      </div>
    </>
  );
};

export default Footer;
