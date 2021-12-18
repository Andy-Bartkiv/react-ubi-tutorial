import { Link, useLocation } from "react-router-dom"

const Navbar = () => {
    
    const active = useLocation().pathname; 
    
    return (
        <ul className='App-navbar'>
           <li className={(active === '/posts') ? 'active' : '' }><Link to={ '/posts' }>Posts</Link></li>
           <li className={(active === '/about') ? 'active' : '' }><Link to={ '/about' }>About</Link></li>
        </ul>
    )
}
export default Navbar
