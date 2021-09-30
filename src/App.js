import './App.css';
import Toggle from "./components/Toggle";
import Front from './components/Front/Front';
import Behind from './components/Behind/Behind';
import { useState } from 'react';

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
