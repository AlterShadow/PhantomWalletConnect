const MemeHunt = () => {
  return (
    <div className="flex mx-auto pt-[51px] pb-[43px] items-center justify-center flex-col w-full bg-[#42CFD9]">
      <span className="stroke-text">Meme Hunting Goal</span>
      <span className="mt-5">
        <img src="/assets/HuntChain.svg" alt="huntChain" />
      </span>
      <span className="mt-5">
        <img
          src="/assets/HuntProgress.svg"
          alt="huntProgress"
          className="h-60"
        />
      </span>
    </div>
  );
};

export default MemeHunt;
