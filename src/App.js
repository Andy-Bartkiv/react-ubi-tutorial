import React, { useState } from "react";
import Clock from "./components/Clock";
import './styles/App.css';

function App() {

  const [value, setValue] = useState('text');

  return (
    <div className="App">
      <div className = 'header'> React UbiTV Tutorial</div>
			<Clock />
      <input 
        value = { value }>
      </input>
    </div>
  );
}

export default App;
