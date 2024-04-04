const Roadmap = () => {
  return (
    <div className="flex mx-auto pt-[58px] pb-[76px] px-10 items-center justify-center gap-[42px] flex-col w-full bg-[#66DCE5]">
      <span className="text-[108px] text-white font-normal tracking-[2.16px] leading-[1em]">
        SoraMala Roadmap
      </span>
      <div className="w-[1099px] h-[387px] border-[6px] border-[#3887BF] bg-[#F6F6F6]">
        <div className="w-full flex flex-row h-[375px]">
          <div className="flex flex-col w-auto max-w-[490px]">
            <div className="bg-white text-[#3887BF] leading-normal text-[35px] py-5 pl-8">
              The Cartoon Saga Unveiled
            </div>
            <div className="py-5 pl-[34px] pr-7 text-[#232222] text-[30px] leading-normal tracking-[0.6px]">
              Embark on a thrilling odyssey delving into the whimsical world of
              "SORAMALA" through an immersive webtoon experience.
            </div>
          </div>
          <div className="max-w-[600px] w-full bg-[#ADDFF8] flex justify-center">
            <img src="/assets/Roadmap-1.svg" className="w-[600px]" alt="" />
          </div>
        </div>
      </div>
      <div className="w-[1099px] h-[387px] border-[6px] border-[#3887BF] bg-[#F6F6F6]">
        <div className="w-full flex flex-row h-[375px]">
          <div className="w-full bg-[#ADDFF8] flex justify-center">
            <img
              src="/assets/Roadmap-2.svg"
              className="w-full h-[375px]"
              alt=""
            />
          </div>
          <div className="flex flex-col w-auto max-w-[470px]">
            <div className="bg-white text-[#3887BF] leading-normal text-[35px] py-5 pl-8 w-full">
              The Animated Chronicles
            </div>
            <div className="w-[475px] py-5 pl-[34px] pr-7 text-[#232222] text-[30px] leading-normal tracking-[0.6px]">
              Witness the captivating narrative unfold as ending characters
              traverse the realms of meme conquest in our animated series.
            </div>
          </div>
        </div>
      </div>
      <div className="w-[1099px] h-[387px] border-[6px] border-[#3887BF] bg-[#F6F6F6]">
        <div className="w-full flex flex-row h-[375px]">
          <div className="flex flex-col w-auto max-w-[490px]">
            <div className="bg-white text-[#3887BF] leading-normal text-[35px] py-5 pl-8">
              the Game of Legends
            </div>
            <div className="py-5 pl-[34px] pr-7 text-[#232222] text-[30px] leading-normal tracking-[0.6px]">
              Anticipate the launch of groundbreaking adventure games seamlessly
              integrated with AI and Web3 technologies, promising an
              unparalleled gaming experience.
            </div>
          </div>
          <div className="max-w-[600px] w-full bg-[#ADDFF8] flex justify-center">
            <img src="/assets/Roadmap-3.svg" className="w-[600px]" alt="" />
          </div>
        </div>
      </div>
      <div className="w-[1099px] h-[387px] border-[6px] border-[#3887BF] bg-[#F6F6F6]">
        <div className="w-full flex flex-row h-[375px]">
          <div className="w-full bg-[#ADDFF8] flex justify-center">
            <img
              src="/assets/Roadmap-4.svg"
              className="w-full h-[375px]"
              alt=""
            />
          </div>
          <div className="flex flex-col w-full max-w-[470px]">
            <div className="bg-white text-[#3887BF] leading-normal text-[35px] py-5 pl-8">
               Conversations with the Future
            </div>
            <div className="py-5 pl-[34px] pr-7 text-[#232222] text-[28px] leading-normal tracking-[0.6px]">
              Initiate interactions with our AI-powered chatbots, SORA and MALA,
              as they unveil their wit, wisdom, and charm, enhancing your
              engagement with our platform and enriching your digital
              experience.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
