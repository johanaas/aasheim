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
            <Card icon={<Fa.FaPython className="icon" />} title="Python" text="Python har jeg brukt i de fleste prosjektene, spesielt hvis det har vært backend eller interne kurs i BRAIN. Mitt foretrukket programmeringsspråk."/>
            <Card icon={<Fa.FaJava className="icon" />} title="Java" text="Lærte om Java i emnet TDT4100 og har erfaring med Java Spring Boot fra sommerjobb i Netcompany."/>
            <Card icon={<Di.DiSpark className="icon" />} title="Spark" text="Fra Big Data prosjekter i emnet TDT4305 har jeg erfaring med Spark for å behandle store datamengder i RDDs." />
            <Card icon={<Md.MdSecurity className="icon" />} title="Sikkerhet" text="Sikkerhet er spennende fordi det krever at man må være kreativ på hvordan man går frem for å finne svakheter. Sikkerhet gjør at jeg får binde kreativiteten og den faglige kompetansen sammen."/>
            <Card icon={<Gi.GiArtificialIntelligence className="icon" />} title="AI" text="I BRAIN NTNU har min interessere og kunnskap om kunstig intelligens vokst. Det er spenennde å finne ut hvordan AI anvendes i prosjekter."/>
            <Card icon={<Di.DiDatabase className="icon" />} title="Big Data" text="Emnet TDT4305 - Big Data-arkitektur gav erfaring med rammeverk til å prosessere store datamengder. Fikk også innføring i anbefalingssystemer."/>
            <Card icon={<Di.DiJavascript className="icon" />} title="Javascript" text="Min erfaring med Javascript kommer fra å lage spill i faget IT2 på vgs i tillegg til å bruke Javascript i React applikasjoner."/>
            <Card icon={<Di.DiReact className="icon" />} title="React" text="Har utviklet et skoleprosjekt i React og denne nettsiden er utviklet i React."/>
            <Card icon={<Di.DiCssTricks className="icon" />} title="CSS" text="Er glad i design og med CSS har jeg stylet forskjellige prosjekter. Alt fra spill på VGS, skoleprosjekter og denne nettsiden."/>
            <Card icon={<Di.DiHtml5 className="icon" />} title="HTML" text="Har vært borti HTML helt fra faget IT1 på VGS til denne nettsiden."/>
            <Card icon={<Di.DiDjango className="icon" />} title="Django" text="I ulike skoleprosjekter er det blitt brukt Django til bygge backend. "/>
            <Card icon={<Gi.GiPanda className="icon" />} title="Pandas" text="Ulike interne kurs i BRAIN NTNU har gitt erfaring med pandas og hvordan det kan brukes til å preprosserere data som kan brukes til maskinlæring."/>
            <Card icon={<Di.DiGitBranch className="icon" />} title="Git" text="Git har jeg brukt til alle skoleprosjekter og utviklingsprosjekter i sommerjobber. "/>
            <Card icon={<Vsc.VscJson className="icon" />} title="JSON" text="I emnet TDT4290 - Kundestyrt prosjekt fikk vi erfaring med å behandle data på JSON format når vi hentet det ut fra ulike værAPI. "/>
            <Card icon={<Si.SiAdobeillustrator className="icon" />} title="Illustrator" text="Har designet ulike plakater og bannerer i Illustrator. Var en periode med i PR-gruppen til Start NTNU. Ble også brukt i emnet Visuell Formidling"/>
            <Card icon={<Si.SiAdobepremiere className="icon" />} title="Premiere Pro" text="Har filmet og redigert filmer for både Start NTNU, BRAIN NTNU og Pineleaf Studio. Det meste har vært 'Aftermovies' i sammenheng med arrangementer."/>
            <Card icon={<Ai.AiFillSecurityScan className="icon" />} title="Pen.testing" text="Emnet TDT4237 handlet om programvaresikkerhet og vi fikk erfaring med å utføre penetration testing på en nettside utdelt av faglærer."/>
            <Card icon={<Si.SiLetsencrypt className="icon" />} title="Cryptography" text="Emnet TMA4160 gav innføring i krytografi hvor vi fikk lære om ulike metoder for å kryptering. I tillegg til kryptoanalyse for å knekke algoritmer."/>
            <Card icon={<Io.IoMdAnalytics className="icon" />} title="Analyse" text="Jeg synes det er interessant og utforske en mengde data og finne ut hva den kan brukes til. Har erfaring fra å hente ut data fra værapi og prosessere den."/>
            <Card icon={<Gr.GrUserManager className="icon" />} title="Prosjektledelse" text="Har erfaring med prosjektledelse fra forskjellige studentverv i Start NTNU og BRAIN NTNU. I tillegg som Prosjektleder for Trygge Rammer."/>
        </div>
      </div>
    );
  }
  
  export default Interests;