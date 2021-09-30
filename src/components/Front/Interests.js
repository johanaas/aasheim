import Card from "../Card";
import Subtitle from "../Subtitle";
import Title from "../Title";

import * as Fa from "react-icons/fa";
import * as Di from "react-icons/di";
import * as Ai from "react-icons/ai";
import * as Si from "react-icons/si";
import * as Md from "react-icons/md";
import * as Gi from "react-icons/gi";
import * as Io from "react-icons/io";
import * as Vsc from "react-icons/vsc";
import * as Gr from "react-icons/gr";


function Interests() {
    
    return (
      <div className="Section Interests">
        <Title name="Kunnskap" />
        <Subtitle text="Mine interesser, områder og fagfelt." />
        <div className="card-container">
            <Card icon={<Fa.FaPython className="icon" />} title="Python" text="Hvilken teknologi ønsker jeg å jobbe med i fremover."/>
            <Card icon={<Fa.FaJava className="icon" />} title="Java" text=" I LOVE SLEEPING"/>
            <Card icon={<Di.DiSpark className="icon" />} title="Spark" text=" I LOVE SLEEPING"/>
            <Card icon={<Md.MdSecurity className="icon" />} title="Sikkerhet" text=" I LOVE SLEEPING"/>
            <Card icon={<Gi.GiArtificialIntelligence className="icon" />} title="AI" text=" I LOVE SLEEPING"/>
            <Card icon={<Di.DiDatabase className="icon" />} title="Big Data" text=" I LOVE SLEEPING"/>
            <Card icon={<Di.DiJavascript className="icon" />} title="Javascript" text=" I LOVE SLEEPING"/>
            <Card icon={<Di.DiReact className="icon" />} title="React" text=" I LOVE SLEEPING"/>
            <Card icon={<Di.DiCssTricks className="icon" />} title="CSS" text=" I LOVE SLEEPING"/>
            <Card icon={<Di.DiHtml5 className="icon" />} title="HTML" text=" I LOVE SLEEPING"/>
            <Card icon={<Di.DiDjango className="icon" />} title="Django" text=" I LOVE SLEEPING"/>
            <Card icon={<Gi.GiPanda className="icon" />} title="Pandas" text=" I LOVE SLEEPING"/>
            <Card icon={<Di.DiGitBranch className="icon" />} title="Git" text=" I LOVE SLEEPING"/>
            <Card icon={<Vsc.VscJson className="icon" />} title="JSON" text=" I LOVE SLEEPING"/>
            <Card icon={<Si.SiAdobeillustrator className="icon" />} title="Illustrator" text=" I LOVE SLEEPING"/>
            <Card icon={<Si.SiAdobepremiere className="icon" />} title="Premiere Pro" text=" I LOVE SLEEPING"/>
            <Card icon={<Ai.AiFillSecurityScan className="icon" />} title="Pen.testing" text=" I LOVE SLEEPING"/>
            <Card icon={<Si.SiLetsencrypt className="icon" />} title="Cryptography" text=" I LOVE SLEEPING"/>
            <Card icon={<Io.IoMdAnalytics className="icon" />} title="Analyse" text=" I LOVE SLEEPING"/>
            <Card icon={<Gr.GrUserManager className="icon" />} title="Prosjektledelse" text=" I LOVE SLEEPING"/>
        </div>
      </div>
    );
  }
  
  export default Interests;