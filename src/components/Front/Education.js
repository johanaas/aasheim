import Title from "../Title";
import Container from "../Container";
import Subtitle from "../Subtitle";


function Education() {
    return (
      <div className="Section Education">
        <Title name="Utdannelse" />
        <Subtitle text="Man lærer så lenge man lever" />
        <Container university="NTNU" period="Aug 2017 - Nå" title="Sivilingeniør" desc='Masterprogram datateknologi ved NTNU med spesialisering innen databaser og søk. Masteroppgaven handler om Sikkerhet og Kunstig intelligens med tittel "Adversarial input attack against obstacle detection".' />
        <Container university="Skeisvang VGS" period="Aug 2013 - Jun 2016" title="Studiespesialisering" desc="3-årig studiespesialisering med realfag på Skeisvang videregående skole. " />
      </div>
    );
  }
  
  export default Education;