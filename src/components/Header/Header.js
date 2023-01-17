import {NavLink, Outlet } from 'react-router-dom';
// import styles from './Header.module.css';
import './Header.css';

const activFunc =({isActive})=> isActive ? `myActive` : '';

const Header = () =>{
    
    return (
        // <header className={styles.header}>
            <header className='header'>
            {/* <div className={styles.header__nav}> */}
            <div className='header__nav'>
                        <NavLink className={activFunc} to="/" >Home</NavLink>
                        <NavLink className={activFunc} to="/posts">Posts</NavLink>
                        <NavLink className={activFunc} to="/about">About</NavLink>
                        <NavLink className={activFunc} to="/*">Not found page</NavLink>  
                        <NavLink className={activFunc} to="/login">Login Page</NavLink>        
            </div>
            <h1>Get started with React-Router-Dom</h1>
            <div className='main'>
                <Outlet />
            </div>
        </header> 
    );
}

export default Header;