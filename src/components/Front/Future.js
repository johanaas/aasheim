import FutureCard from "../FutureCard";
import Subtitle from "../Subtitle";
import Title from "../Title";

function Future() {
    return (
      <div className="Section Future">
        <Title name="Fremtid" />
        <Subtitle text="Hva ønsker jeg å fokusere på fremover?" />
        <div className="future-container">
            <FutureCard className="motivasjon" title="Motivasjon" text="For meg er det viktig å være motivert for å levere bra arbeid. Motivasjonen min kommer blant annet av at jeg har et godt sosiale miljø med personene bryr seg om meg. Jeg ser etter et miljø som både har det gøy på jobb, men også finner på aktiviterer sammen. " />
            <FutureCard className="motivasjon" title="Teknologi" text="Fremover ønsker jeg å bli utfordret faglig, hvor jeg kan dykke dypere i kjente teknologier og lære nye. Hovedsaklig ser jeg etter å jobbe med utvikling, men jeg ønsker muligheten til å kunne anvende min kunnskap om AI og Big Data i prosjektene." />
            <FutureCard className="motivasjon" title="Ansvar" text="Etter erfaring som konsulent i skoleprosjekter og sommerjobb så ser jeg etter spennende prosjekter med kunde. Min erfaring med ledelse gjør at jeg søker ansvar i prosjekter. Et miljø som er bygget på tillit og utfordringer er mitt ønske." />
        </div>
      </div>
    );
  }
  
  export default Future;