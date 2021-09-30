function RoadmapCard(props) {

    return (
        <div className={props.tag + " roadmap-card"} >
            <img className="image-roadmap" src={props.image} alt=""/>
            <h4>{props.sted}</h4>
            <div className={props.side}></div>
            <h3>{props.time}</h3>
            <p>{props.text}</p>
        </div>
    );
  }
  
  export default RoadmapCard;