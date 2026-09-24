import styles from './App.module.css'
import {Outlet } from 'react-router'
import Navbar from '../components/navbar/Navbar'
 
const App=()=>{
  
  return (
    <>
       <Navbar/>
       <Outlet/>
      </>  
  )
}

export default App;