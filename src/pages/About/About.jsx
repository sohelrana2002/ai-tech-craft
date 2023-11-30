import HeroAbout from "../../component/AboutComponents/HeroAbout/HeroAbout";
import OurMission from "../../component/AboutComponents/OurMission/OurMission";
import MarketingTeam from "../../component/AboutComponents/MarketingTeam/MarketingTeam";
import LeadershipTeam from "../../component/AboutComponents/LeadershipTeam/LeadershipTeam";


const About = () => {
  return (
    <div className="about__page">
      <HeroAbout />
      <OurMission />
      <MarketingTeam />
      <LeadershipTeam />
    </div>
  )
}

export default About