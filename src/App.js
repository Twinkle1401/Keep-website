import React, { useState, createContext} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Register from "./Components/Register";
import Login from "./Components/Login";

const CredentialsContext = createContext();

const App = () => {
  const credentials = useState(null);
  

return (<>
<CredentialsContext.Provider value={credentials}>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="register" element={<Register />} />
      <Route path="login" element={<Login />} />
    </Routes>
  </BrowserRouter>
  </CredentialsContext.Provider>
</>)
}

export default App;
export {CredentialsContext};



