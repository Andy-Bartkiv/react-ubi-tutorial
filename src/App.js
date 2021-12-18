import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import About from './pages/About';
import Posts from './pages/Posts';
import Header from './components/Header';
import './styles/App.css';
import Navbar from './components/Navbar';
import { ModalContext } from './context';

function App() {

  const [modal, setModal] = useState(false);

  return (
    <ModalContext.Provider value={{
      modal, setModal
    }}>
    <BrowserRouter>
    <div className="App">

      <Header />

      <Navbar />
      
      <Routes className='App-body'>
        <Route path="/posts" element = { <Posts /> }/>
        <Route path="/about" element = { <About/> }/>
        <Route path="*" element = { <Navigate replace to="/posts" /> }/>
      </Routes>
    
    </div>
    </BrowserRouter>
    </ModalContext.Provider>
  )  
}

export default App;