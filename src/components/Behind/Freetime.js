import Title from "../Title";
import Subtitle from "../Subtitle";
import ContactBox from "../ContactBox";
import FreetimeBox from "../FreetimeBox";


function Freetime() {
    return (
      <div className="Section Freetime">
          <Title name="Fritid" />
          <Subtitle text="Aktiviteter og prosjekter som jeg prioriterer på fritiden." />
          <div className="freetime-container">
            <FreetimeBox tag="freetime-box1" title="Kajakk" text="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." />
            <FreetimeBox tag="freetime-box2" title="Våpenkiste" text="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." />
            <FreetimeBox tag="freetime-box3" title="Flodhest" text="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." />
            <FreetimeBox tag="freetime-box4" title="Musikk" text="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." />
            <FreetimeBox tag="freetime-box5" title="Naturen" text="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." />
            <FreetimeBox tag="freetime-box6" title="Squash" text="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." />
            <FreetimeBox tag="freetime-box7" title="Frisbeegolf" text="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." />
            <FreetimeBox tag="freetime-box8" title="Tretørking" text="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." />
            <FreetimeBox tag="freetime-box9" title="Serier" text="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." />
            <FreetimeBox tag="freetime-box10" title="Jakt og Fiske" text="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." />
          </div>
      </div>
    );
  }
  
  export default Freetime;