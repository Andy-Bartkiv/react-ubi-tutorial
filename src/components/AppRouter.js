import { Route, Routes, Navigate } from "react-router-dom";
import About from '../pages/About';
import Posts from '../pages/Posts';
import PostIDPage from "../pages/PostIDPage";

const AppRouter = () => {
    return (
        <Routes className='App-body'>
            <Route path="/posts" element = { <Posts /> }/>
            <Route path="/posts/:id" element = { <PostIDPage /> }/>
            <Route path="/about" element = { <About/> }/>
            <Route path="*" element = { <Navigate replace to="/posts" /> }/>
        </Routes>
    )
}

export default AppRouter
