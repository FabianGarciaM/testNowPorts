import React, {   useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavBar } from './NavBar';
import { Login } from '../pages/Login';
import { Contacts } from '../pages/Contacts';

export const AppRouter = () => {
  const [token, setToken] = useState(null);

  // useEffect(() => {
    
  //   // return () => {
  //   //   second;
  //   // };
  // }, [token]);

  
  
  if(!token){
      return <Login  setToken={setToken}/>
  }
    return (
      <Router>
        <NavBar token={token} setToken={setToken} />
        <Routes>
          <Route exact path="/" element={<Contacts token={token} />} />
          {/*<Route exact path="/login" element={<Login />} />*/}
          {/*<Route exact path="/about" element={<AboutScreen />} /> */}
          <Route path="*" element={<Contacts token={token} />} />
        </Routes>
      </Router>
    );
  

  
}
