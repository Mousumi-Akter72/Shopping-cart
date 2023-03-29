import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';

const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <a href="/Order">order</a>
                <a href="/shop">shop</a>
                <a href="/login">login</a>
                <a href="/Order Review">Order Review </a>
            </div>
        </nav>
    );
};

export default Header;