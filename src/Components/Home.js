import React, { useContext } from 'react';
import {Link} from "react-router-dom";
import { CredentialsContext } from '../App';
import CreateNote from './CreateNote';
import Header from "./Header";
// import Footer from "./Footer";

const Home = () => {

  const [credentials, setCredentials] = useContext(CredentialsContext);

  const logout = () => {
    setCredentials(null);
  }

  return (
    <div className={!credentials ? 'home_body bg-clr-dark' : 'bg-clr-light'}>
    {/* {!credentials && <Header />} */}
    <Header/>
    <div className={!credentials ? 'home_container home_out' : 'home_container'}>
       <h1 className={!credentials ? 'welcome': 'wel-cred'}>WELCOME {credentials && credentials.username.split("@")[0]}</h1>
       {!credentials && <p className='lead home_para'>Collect your thoughts and Make notes</p>}
       {credentials && <button className='logout_btn' onClick={logout}>Logout</button>}
        {!credentials && <Link className="links" to="/register">Register</Link>}
        {!credentials && <Link className="links" to="/login">Login</Link>}
        {credentials && <div className=''><CreateNote /></div>}
        
    </div>
    {/* <Footer /> */}
    </div>
  )
    
}

export default Home;