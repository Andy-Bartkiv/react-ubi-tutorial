import MyButton from "../components/UI/button/MyButton";
import MyInput from "../components/UI/input/MyInput";
import { useContext } from "react";
import { AuthContext } from "../context";

const Login = () => {

    const { setIsAuth } = useContext(AuthContext);
    
    const loginUser = (e) => {
        e.preventDefault();
        setIsAuth(true);
        localStorage.setItem('userAuth', 'true');
    }

    return (
        <div className="App-body" style={{ width: '50%', margin: '0 auto', marginTop: '.5em' }}>
            <h2>Login Page</h2>
            <form onSubmit={ loginUser }>
                <MyInput type='text' placeholder='Enter Login'/>
                <MyInput type='password' placeholder='Enter Password'/>
                <MyButton>Login</MyButton>
            </form>
        </div>
    )
}

export default Login
