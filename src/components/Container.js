import { FiClock} from "react-icons/fi";

function Container(props) {
    return <div className="container">
        <h2 className="company"> {props.university}</h2>
        <h3 className="role"> {props.title}</h3>
        <p className="period">  <FiClock className="icon" /> {props.period}</p>
        <p className="desc"> {props.desc}</p>
    </div>;
  }
  
  export default Container;