import React, {useContext, useState} from 'react';
import "../App.css";
import {useNavigate} from 'react-router-dom';
import { CredentialsContext } from '../App';

const Register = () => {

    const navigate= useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [, setCredentials] = useContext(CredentialsContext);

   

 const register = async(e) =>{
       e.preventDefault();

      const res =  await fetch("https://stable-notes.herokuapp.com/register", {
        // mode: 'no-cors',
        method:"POST",
        headers:{
          "Content-Type": "application/json"
        },
        body:JSON.stringify({
          username,password
        })
      });

       const data=await res.json();
       if(res.status!==200 || !data){
         window.alert("Invalid Registration");
         console.log("Invalid Registration");
       }else {
        window.alert("Registration Successfull");
        console.log("Registration Successfull");
        
        setCredentials({
                  username,
                  password
                });

        navigate("/");
       }
 }


    return (
      <div className='form_page'>
        <div className='form_container'>
        <form method="POST" onSubmit={register}>
        <div className='shadow p-3 mb-5 bg-white rounded'>
        <div className='w-50 mx-auto heading'>Register</div>
      <div className="mb-3 mx-auto inputArea">
        <label className="form-label" htmlFor='name'>Username</label>
        <input type="email" className="form-control" name='username' id ='username' autoComplete='off'
          value={username}
          onChange={(e)=> setUsername(e.target.value)}
        />
      </div>
     
      
      <div className="mb-3 mx-auto inputArea">
        <label className="form-label" htmlFor='password'>Password</label>
        <input type="password" className="form-control" name='password' id ='password' autoComplete='off'
        value={password}
        onChange={(e)=> setPassword(e.target.value)} />
      </div>
     
      <div className='form_btn'>
      <button type="submit" className="btn btn-dark" name='register' id='register' value="register">Register</button>
      </div>
    
      {/* <div className='mx-auto inputArea'>
        <NavLink to="/login" className='linkToNewPage'>Already Registered ?</NavLink>
      </div> */}
    
      </div>
    </form>
    </div>
    </div>
      )
}

export default Register