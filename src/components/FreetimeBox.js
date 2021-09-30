function FreetimeBox(props) {

    return (
        <div className={props.tag + " freetime-box"}>
            <h3>{props.title}</h3>
            <p>{props.text}</p>
        </div>
    );
  }
  
  export default FreetimeBox;