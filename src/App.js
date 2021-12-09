import React, { useState } from "react";
import Clock from "./components/Clock";
import './styles/App.css';

function App() {

  const [value, setValue] = useState('text');

  return (
    <div className="App">
      <div className = 'header'> React UbiTV Tutorial</div>
			<Clock />
      <h3> { value } </h3>
      <input 
        value = { value }
        onChange = { event => setValue(event.target.value) }        
      />  
    </div>
  );
}

export default App;