import React, { useContext } from 'react';
import { CredentialsContext } from '../App';
// import Logo from './images/logo.png';

const Header =() => {
    const [credentials, setCredentials] = useContext(CredentialsContext);
    return <>
    <div className={!credentials ? 'header_out' : 'header_in'}>
        {/* <img alt='logo' width="70" height="60"/> */}
        <h1> Stable Notes </h1>
    </div>
     </>;
}

export default Header;