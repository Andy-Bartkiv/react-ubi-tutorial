import React, { useState } from "react";
import Clock from "./components/Clock";
import PostItem from "./components/PostItem";
import './styles/App.css';

function App() {

  const [value, setValue] = useState('text');

  return (
    <div className="App">
      <div className = 'App-header'>
        <h2>React UbiTV Tutorial</h2>
			  <Clock />
      </div>
      <h3> { value } </h3>
      <input 
        value = { value }
        onChange = { event => setValue(event.target.value) }        
      />
      <PostItem />
      <PostItem />
      <PostItem />

    </div>
  );
}

export default App;