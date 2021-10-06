import { useState } from 'react';

function Card(props) {

    const [view, setView] = useState(false);

    if (view) {
        return (
            <div className="card" onMouseLeave={() => {setView(false)}} >
                <p className="card-text">{props.text}</p>
            </div>
        );
    }
    return (
        <div className="card" onMouseEnter={() => {setView(true)}} >
            <h1>{props.icon}</h1><h3>{props.title}</h3>
        </div>
    );
  }
  
  export default Card;