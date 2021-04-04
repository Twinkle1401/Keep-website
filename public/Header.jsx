import React from 'react';
import Logo from './images/logo.png';

const Header =() => {
    return <>
    <div className='header'>
        <img src={Logo} alt='logo' width="70" height="60"/>
        <h1> Twinkle keep </h1>
    </div>
     </>;
}

export default Header;