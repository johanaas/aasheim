import { Component } from 'react';

  export default class Landing extends Component {
    state = {
      on: false,
      value: true
    }

    toggle = () => {
      this.setState({
        on: !this.state.on
      })
    }

  render(){
    return (
      <div className="Section Landing">

      <div className="about-me">
        
        <h1 className="lastname">Åsheim</h1>
        <h1 className="firstname">Johannes</h1>
        <p className="short-text">Utadvendt, engasjert og kreativ student som brenner for innovasjon og teknologi. </p>
        <img className="landing-picture" src="/images/greeting.png" alt=""/>
      </div>
    </div>
    )
  }
};
