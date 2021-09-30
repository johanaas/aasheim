import RoadmapCard from "../RoadmapCard";
import Subtitle from "../Subtitle";
import Title from "../Title";

function Roadmap() {
    return (
      <div className="Section Roadmap">
        <Title name="Roadmap" />
        <Subtitle text="fra Haugesund til Trondheim" />
        <div className="roadmap-container">
            <div className="middle-line"></div>
            <RoadmapCard tag="stop0" side="line-left" time="Aug 1997" sted="Haugesund Sykehus" text="Sykehuset - Stor baby" image="/images/hgsd_sykehus.jpeg" />
            <RoadmapCard tag="stop1" side="line-right" time="Fortiden" sted="Barndom" text="Hva gjorde jeg som kid? Hvor var jeg?" image="/images/skeisvang.jpeg" />
            <RoadmapCard tag="stop2" side="line-left" time="Aug 2013 - Jun 2016" sted="Skeisvang VGS" text="Hva skjedde på Skeisvang? + IT2" image="/images/skeisvang.jpeg" />
            <RoadmapCard tag="stop3" side="line-right" time="Aug 2016 - Mai - 2017" sted="Nordfjord FHS" text="Hva skjedde på Nordfjord? Jeg har mange historier, bare spør meg!" image="/images/skeisvang.jpeg" />
            <RoadmapCard tag="stop4" side="line-right" time="Aug 2017" sted="NTNU, Trondheim" text="Hvordan var nystudent?" image="/images/skeisvang.jpeg" />
            <RoadmapCard tag="stop5" side="line-right" time="Aug 2017" sted="Start NTNU" text="Hva skjedde på Skeisvang?" image="/images/skeisvang.jpeg" />
            <RoadmapCard tag="stop6" side="line-right" time="Okt 2018" sted="Start Forum" text="Hva skjedde på Skeisvang?" image="/images/skeisvang.jpeg" />
            <RoadmapCard tag="stop7" side="line-right" time="Apr 2019" sted="NGA 2019" text="Hva skjedde på Skeisvang?" image="/images/skeisvang.jpeg" />
            <RoadmapCard tag="stop8" side="line-right" time="Mai 2018" sted="BRAIN NTNU" text="Hva skjedde på Skeisvang?" image="/images/skeisvang.jpeg" />
            <RoadmapCard tag="stop9" side="line-right" time="Nov 2019" sted="Los Angeles" text="Hva skjedde på Skeisvang?" image="/images/skeisvang.jpeg" />
            <RoadmapCard tag="stop10" side="line-right" time="Jun 2020" sted="Sandra" text="Hva skjedde på Skeisvang?" image="/images/skeisvang.jpeg" />
            <RoadmapCard tag="stop11" side="line-right" time="Aug 2021" sted="Master Life" text="Hva skjedde på Skeisvang?" image="/images/skeisvang.jpeg" />
            <RoadmapCard tag="stop12" side="line-right" time="Aug 2022" sted="Stavanger" text="Hva skjedde på Skeisvang?" />
        </div>
      </div>
    );
  }
  
  export default Roadmap;