
function FutureCard(props) {

    return (
        <div className="future-card">
            <h3>{props.title}</h3>
            <div className="future-divider"></div>
            <p>{props.text}</p>
        </div>
    );
  }
  
  export default FutureCard;