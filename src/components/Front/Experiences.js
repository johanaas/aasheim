import Title from "../Title";
import Container from "../Container";

function Experiences() {
    return (
      <div className="Section Experiences">
        <Title name="Erfaring" />
        <Container university="Trygge Rammer" period="Jun 2019 - Nå" title="Prosjektleder" desc="Work-Work er et kreativt laboratorium og co-work hus rettet mot selskaper som jobber med utvikling av nye digitale medier. Prosjektet «Trygge Rammer» skal utvikle gode løsninger på utfordringer med regional, nasjonal og internasjonal spillbransje. Oppgavene mine går ut på å utforme et akseleratorprogram for start-ups, og skape en regional arena for nordisk industri, investorkobling og øke domenekunnskap." />
        <Container university="Orakeltjenesten" period="Feb 2018 – Jun 2019" title="Studentorakel" desc="Orakeltjenesten tilbyr brukerstøtte på bruk av NTNU ITs systemer. Arbeidsoppgavene er hovedsakelig å kartlegge og løse en stor variasjon av problemer både over skranke og telefon." />
        <Title white="subsub-title" name="Summer internships" />
        <Container university="Netcompany" period="Jun 2021 – Jul 2021" title="Systemutvikler" desc="Netcompany er et IT-selskap som leverer forretningskritiske IT-prosjekter som hjelper kundene med digital forandring via digitale plattformer, kjernesystemer og infrastrukturtjenester. I løpet av sommeren utviklet vi en ny arrangementsportal for Oslo Kommune. Som backend utvikler jobbet jeg mest med Java Spring Boot for løsningen." />
        <Container university="Tiltspot" period="Jun 2019 – Aug 2019" title="Markedsføring" desc="Tiltspot.tv er en web-basert spillplattform som muliggjør bruk av mobilen som håndkontroller og en pc som vil fungere som en konsoll. Tiltspot utfordrer spillindustrien gjennom ny teknologi og et nettverk av spillutviklere." />
        <Container university="NTNU IT" period="Jun 2018 – Aug 2018" title="Utvikler" desc="Prosjektet IT-Lab Klient jobber med implementering av sikker driftsløsning på laboratorier ved NTNU. Arbeidsoppgavene ga erfaring med webprogrammering, Sharepoint, Ghost, virtualisering og SCCM." />
        <Title white="subsub-title" name="Studentverv" />
        <Container university="BRAIN NTNU" period="Aug 2018 – Nå" title="Med-grunnlegger og mentorleder" desc="BRAIN NTNU er en frivillig studentdrevet organisasjon med fokus på å spre kunnskap om kunstig intelligens blant studenter. Formålet er å skape en arena for å samle studenter, forskningsmiljø og næringsliv. Som mentorleder har jeg ansvaret for å bevare og øke kunnskapsnivået, oppfølging av styremedlemmer og prosjektledere og jobbe med utfordringer knyttet til strategisk utvikling av organisasjonen." />
        <Container university="Start NTNU" period="Aug 2017 – Jun 2020" title="Mentorleder og prosjektlede" desc="Start NTNU er en frivillig organisasjon på 50 medlemmer som fremmer innovasjon og entreprenørskap på NTNU. Som mentorleder har jeg ansvaret for å bevare og øke kunnskapsnivået, oppfølging av styremedlemmer og prosjektledere og jobbe med utfordringer knyttet til strategisk utvikling av organisasjonen. Hadde rolle som prosjektleder for Norwegian Game Awards før ansvaret som mentorleder." />
      </div>
    );
  }
  
  export default Experiences;