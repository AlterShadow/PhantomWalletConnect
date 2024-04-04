const MemeImage = () => {
  return (
    <>
      <div className="flex mx-auto pt-8 pr-[79px] pb-[72px] pl-[85px] items-center justify-center flex-col w-full bg-[#66DCE5]">
        <img src="/assets/StoryIntro.png" alt="storyImage" />
      </div>
      <img
        src="/assets/AccornImage.png"
        alt="AccornImage"
        className="w-full h-[771px]"
      />
    </>
  );
};

export default MemeImage;
