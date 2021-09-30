import { FiClock} from "react-icons/fi";

function ContactBox(props) {
    return <div>
        <h3>{props.title}</h3>
        <h1>{props.keyword}</h1>
        <p>{props.text}</p>
    </div>;
  }
  
  export default ContactBox;