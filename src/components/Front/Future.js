import FutureCard from "../FutureCard";
import Subtitle from "../Subtitle";
import Title from "../Title";

function Future() {
    return (
      <div className="Section Future">
        <Title name="Fremtid" />
        <Subtitle text="Hva ønsker jeg å fokusere på fremover?" />
        <div className="future-container">
            <FutureCard className="motivasjon" title="Motivasjon" text="Tekst om hva som motiverer meg og hvorfor det er viktig." />
            <FutureCard className="motivasjon" title="Teknologi" text="Hvilken teknologi ønsker jeg å jobbe med i fremover." />
            <FutureCard className="motivasjon" title="Ansvar" text="Hvilket ansvar vil jeg ha?" />
        </div>
      </div>
    );
  }
  
  export default Future;