import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ModalContext } from './context';
import './styles/App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import AppRouter from './components/AppRouter';

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
          
          <AppRouter />
        
        </div>
      </BrowserRouter>
    </ModalContext.Provider>
  )  
}

export default App;