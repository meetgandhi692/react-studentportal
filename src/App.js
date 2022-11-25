import './App.css';
import Header from './components/Header';
import LoginForm from './components/LoginForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import Profile from './components/Profile';
import Marks from './components/marks';
import { useState } from "react";

function App() {
  const[appear,setAppear]=useState(false)

  const logout=()=>{setAppear(false)}
  return (
    <>
    <Header butt={appear} onLogOut={logout}/>
    {!appear && <LoginForm onSuccess={()=>setAppear(true)}/>}
    {appear && <Profile/>}
    {appear && <Marks/>}
    </>
  );
}

export default App;
