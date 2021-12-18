import MyButton from "./UI/button/MyButton";
import Clock from "./UI/clock/Clock";
import { useLocation } from "react-router-dom";
import { ModalContext } from "../context";
import { useContext } from "react";

const Header = () => {

    const { setModal } = useContext(ModalContext);

    const btnVisible = (useLocation().pathname !== '/posts' && '*') 
        ? {z: '-1', op: '0'}
        : {z: '1', op: '1'}

    return (
        <div className='App-header'>
            <MyButton
                style = {{ marginLeft: '1em', fontSize: '.75em', 
                    zIndex: btnVisible.z, opacity: btnVisible.op, transition: '.25s' }} 
                onClick = { () => setModal(true) }>
                Create New Post
            </MyButton>
            
            <h2>React UlbiTV Tutorial</h2>
            <Clock />
        </div>
    )
}

export default Header;
