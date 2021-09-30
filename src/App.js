import logo from './logo.svg';
import './App.css';
import Toggle from "./components/Toggle";
import Front from './components/Front/Front';
import Behind from './components/Behind/Behind';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import { useState } from 'react';
import  { Redirect } from 'react-router-dom'
import { useHistory } from 'react-router-dom';

function App() {

  const [isToggled, setIsToggled] = useState(false);

  if (isToggled) {
    return (
      <div className="App">
      <Toggle rounded={true} isToggled={isToggled} onToggle={() => {
          setIsToggled(!isToggled);
          if (!isToggled) {
          }
          }} />
      <Behind />
    </div>
    )
  }
  return (
    <div className="App">
    <Toggle rounded={true} isToggled={isToggled} onToggle={() => {
        setIsToggled(!isToggled);
        if (!isToggled) {
        }
        }} />
    <Front />
  </div>
  );
}

export default App;
