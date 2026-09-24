import styles from './App.module.css'
import {Outlet } from 'react-router'
import { useState } from 'react'
import Navbar from '../components/navbar/Navbar'
 
const App=()=>{
  const [cartList,setCartList]=useState([]);
  return (
    <>
       <Navbar totalItems={cartList.length}/>
       <Outlet context={{cartList,setCartList}}/>
      </>  
  )
}

export default App;