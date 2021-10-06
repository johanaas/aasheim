import Title from "../Title";
import Subtitle from "../Subtitle";
import FreetimeBox from "../FreetimeBox";


function Freetime() {
    return (
      <div className="Section Freetime">
          <Title name="Fritid" />
          <Subtitle text="Aktiviteter og prosjekter som jeg prioriterer på fritiden." />
          <div className="freetime-container">
            <FreetimeBox tag="freetime-box1" title="Kajakk" text="På folkehøyskolen laget jeg min egen kajakk. Den det er Grønnlandskajakk som er bygget med naturlige mål, som vil si at lengden er 3 ganger min høyde og bredden er beregnet på midjen min. Totalt tok det omtrent 200 timer." />
            <FreetimeBox tag="freetime-box2" title="Våpenkiste" text="I tillegg har jeg laget en våpenkiste hvor jeg kan oppbevare haglen min. Den er utsmykket med treskjæring som jeg lærte på folkehøyskolen." />
            <FreetimeBox tag="freetime-box3" title="Flodhest" text="Mitt favorittdyr er flodhest! Det er noe som jeg blir veldig engasjert å snakke om. På lur har jeg mange funfacts om dyret/beistet. Bare spør!" />
            <FreetimeBox tag="freetime-box4" title="Musikk" text="Elsker musikk, spesielt Hip-Hop/Rap/RnB. Mitt favorittalbum er 'To Pimp A Butterfly' av Kendrick Lamar. Ellers ligger 'Negro swan', 'Flower Boy' og '4 Your Eyez Only' svært høyt oppe på listen. Helst vil jeg høre dem på LP-plater med en god whisky i hånden." />
            <FreetimeBox tag="freetime-box5" title="Naturen" text="Etter et år på folkehøyskole ble jeg forelsket i naturen. Å gå opp et fjell er like gøy som slappe av i skogen med et godt bål. Enda bedre blir det med en hengekøye og kaffe." />
            <FreetimeBox tag="freetime-box6" title="Squash" text="Spiller en del Squash. Det er en kombinasjon av høy intensitet og slå noen lureslag som gjør at jeg synes det er så gøy." />
            <FreetimeBox tag="freetime-box7" title="Frisbeegolf" text="Har spilt mye Frisbeegolf og prøver å få teknikken til å sitte. Jeg ser på det som en gøy tur hvor man kan gå og snakke med venner samtidig som man prøver å treffe kurven." />
            <FreetimeBox tag="freetime-box8" title="Tretørking" text="Hjemme på hytta skjærte jeg ned et stort gammel tre som nå ligger til tørking. Planen er å bruke stammen til å lage noen fine bordplater som kan brukes til kjøkkenbord/stuebord på sikt." />
            <FreetimeBox tag="freetime-box9" title="Serier" text="Er glad i serier. The Wire, Person of Interest, How I Met Your Mother, Planet Earth, House og  Silicon Valley er blant mine favoritter. Akkurat nå holder jeg på med Blacklist." />
            <FreetimeBox tag="freetime-box10" title="Jakt og Fiske" text="Er glad i både sitte lenge i ro i skogen på hjorten og gå på fjellet etter ryper. I tillegg til å ta ut båten og vente på at fisken skal bite på kroken. " />
          </div>
      </div>
    );
  }
  
  export default Freetime;