import { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AuthContext, ModalContext } from './context';
import './styles/App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import AppRouter from './components/AppRouter';

function App() {

  const [modal, setModal] = useState(false);
  const [isAuth, setIsAuth] = useState(false);
  const [authInProgress, setAuthInProgress] = useState(true);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);

  useEffect(() => {
    if (localStorage.getItem('userAuth')) setIsAuth(true);
    setTimeout( () => 
      setAuthInProgress(false), 
    500);
  }, [])

  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth, authInProgress, page, setPage, limit, setLimit }}>
    <ModalContext.Provider value={{ modal, setModal }}>
      <BrowserRouter>
        <div className="App">

          <Header />

          <Navbar />
          
          <AppRouter />
        
        </div>
      </BrowserRouter>
    </ModalContext.Provider>
    </AuthContext.Provider>
  )  
}

export default App;