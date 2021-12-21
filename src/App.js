import { useEffect, useState } from 'react';
import { BrowserRouter, HashRouter } from 'react-router-dom';
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
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('userAuth')) setIsAuth(true);
    setTimeout( () => 
      setAuthInProgress(false), 
    500);
  }, [])

  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth, authInProgress, page, setPage, limit, setLimit, scroll, setScroll }}>
    <ModalContext.Provider value={{ modal, setModal }}>
    <HashRouter>{/* <BrowserRouter> */}
      
        <div className="App">

          <Header />

          <Navbar />
          
          <AppRouter />
        
        </div>
      </HashRouter>
    </ModalContext.Provider>
    </AuthContext.Provider>
  )  
}

export default App;