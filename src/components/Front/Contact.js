import Title from "../Title";
import Subtitle from "../Subtitle";
import ContactBox from "../ContactBox";

import { FiPhoneCall } from "react-icons/fi";

function Contact() {
    return (
      <div className="Section Contact">
          <Title white="white-text" name="Kontakt" />
          <Subtitle white="white-text" text="Ikke nøl med å ta kontakt!" />
          <div className="contact-container">
            <ContactBox className="what" title="hvorfor" keyword="anything" text="Det kan være hva som helst. Hvis du lurer på noe om meg eller hva jeg har gjort så er det bare hyggelig å slå av en prat!" />
            <ContactBox className="how" title="hvordan" keyword="joh.aasheim at gmail.com" icon={<FiPhoneCall className="icon" /> } text="førtiseks åttitre nittiseks tjueen" />
            <ContactBox className="when" title="tidspunkt" keyword="08 - 16" text="Til vanlig er jeg stort sett ledig i løpet av en vanlig arbeidsdag, men du kan fint nå meg ellers!" />
          </div>
      </div>
    );
  }
  
  export default Contact;