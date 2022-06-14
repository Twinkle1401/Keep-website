import React,{useContext, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { CredentialsContext } from '../App';

const Login = () => {

  const navigate=useNavigate();

   const [username, setUsername] = useState('');
   const [password, setPassword] = useState('');
   const [, setCredentials] = useContext(CredentialsContext);

   const loginUser = async (e) =>{
        e.preventDefault();

        const res = await fetch("http://localhost:5000/login", {
          method:"POST",
          headers:{
            "Content-Type": "application/json"
          },
          body: JSON.stringify({username,password})
        });

        const data= res.json();
        if(res.status!==200 || !data){           //res.status not data.status
          window.alert("Invalid Credentials");
        }else{
          window.alert("Login Successfull");
          setCredentials({username, password});
          navigate("/");
        }
        
   }

  return (
    <div className='form_page'>
    <div className='form_container'>
    <form method="POST" onSubmit={loginUser}>
    <div className='shadow p-3 mb-5 bg-white rounded'>
    <div className='w-50 mx-auto heading'>Login</div>
  
  <div className="mb-3 mx-auto inputArea">
    <label className="form-label" htmlFor='username'>Username</label>
    <input type="email" className="form-control" name='username' id ='username' autoComplete='off'
      value={username} onChange={(e)=> setUsername(e.target.value)}
    />
  </div>
  
  <div className="mb-3 mx-auto inputArea">
    <label className="form-label" htmlFor='password'>Password</label>
    <input type="password" className="form-control" name='password' id ='password' autoComplete='off'
    value={password} onChange={(e)=> setPassword(e.target.value)} />
  </div>
  
  
  <div className='form_btn'>
  <button type="submit" className="btn btn-dark" name='signin' id='signin'
    >Login</button>
  </div>

  {/* <div className='mx-auto inputArea'>
    <NavLink to="/signup" className='linkToNewPage'>Create an account</NavLink>
  </div> */}

  </div>
</form>
</div>
</div>
  )
}

export default Login;