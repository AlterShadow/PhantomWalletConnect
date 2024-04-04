import About from "./About";
import MemeHunt from "./MemeHunt";
import MemeIntro from "./MemeIntro";
import MemeStory from "./MemeStory";
import Memenomics from "./Memenomics";
import Roadmap from "./Roadmap";

const Dashboard = () => {
  return (
    <>
      <div className="min-h-screen h-full w-full bg-primaryBackground">
        <div id="MemeIntro">
          <MemeIntro />
        </div>
        <div id="MemeHunt">
          <MemeHunt />
        </div>
        <div id="MemeStory">
          <MemeStory />
        </div>
        <div id="Memenomics">
          <Memenomics />
        </div>
        <div id="Roadmap">
          <Roadmap />
        </div>
        <div id="About">
          <About />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
