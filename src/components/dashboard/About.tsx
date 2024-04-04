const About = () => {
  return (
    <>
      <div className="flex mx-auto py-[49px] px-10 items-center justify-center gap-[35px] flex-col w-full bg-[#42CFD9]">
        <span className="text-[108px] leading-[1.2em] tracking-[2.16px] font-normal text-white">
          SORAMALA ABOUT
        </span>
        <div className="w-[1152px] h-[875px] overflow-y-auto bg-white pl-[51px] pr-[21px] pb-[23px] pt-[37px] flex flex-col">
          <div className="w-full text-[#232222] text-center font-normal text-[30px] leading-normal tracking-[0.6px]">
            We hail from esteemed backgrounds in blockbuster franchise game
            development, artistic endeavors, and film screenwriting. Over the
            years, we've garnered trust from the industry's elite clientele.
            However, with the advent of Sora AI, concerns arose among our peers
            regarding potential job displacement. To address this, we pivoted
            our focus towards the burgeoning meme market, leveraging our
            expertise to adapt our technology.
          </div>
          <div className="mt-[23px] w-full text-[#232222] text-center font-normal text-[30px] leading-normal tracking-[0.6px]">
            We are a small global team of geek geniuses and powerful
            influencers. We follow meme trends on the front-end, but we are a
            solid technology team that deals with the latest AI and Web3
            technologies on the back-end.
          </div>
          <div className="mt-[41px] w-full text-[#232222] text-center font-normal text-[30px] leading-normal tracking-[0.6px]">
            While our chosen theme revolves around the entertainment aspect of
            meme proliferation, it's crucial to clarify that this is not
            intended as a critique of existing meme projects. Rather, it's
            intended to infuse an element of fun and levity.
          </div>
          <img src="/assets/About.png" className="mt-5" alt="About" />
        </div>
      </div>
    </>
  );
};

export default About;
