import { Route, Routes, Navigate } from "react-router-dom";
import About from '../pages/About';
import Posts from '../pages/Posts';
import Login from "../pages/Login";
import PostIDPage from "../pages/PostIDPage";
import { useContext } from "react";
import { AuthContext } from "../context";

const AppRouter = () => {

    const { isAuth, authInProgress } = useContext(AuthContext);
    
    if (authInProgress)
        return ( <h3 className="App-body"><br/>Authorization in Progress...</h3>)

    return (
        (isAuth)
        ? <Routes className='App-body'>
            <Route path="/posts" element = { <Posts /> }/>
            <Route path="/posts/:id" element = { <PostIDPage /> }/>
            <Route path="/about" element = { <About/> }/>
            <Route path="/*" element = { <Navigate replace to="/posts" /> }/>
        </Routes>

        : <Routes className='App-body'>
            <Route path="/login" element = { <Login /> }/>
            <Route path="/*" element = { <Navigate replace to="/login" /> }/>
        </Routes>
    )
}

export default AppRouter
