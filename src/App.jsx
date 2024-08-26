import { useState } from 'react'
import { Toaster } from "@/components/ui/sonner"
import { Navigate, Outlet } from 'react-router-dom'
import './App.css'
import { Button } from './components/ui/button'
import { useUser } from '@clerk/clerk-react'
import Header from './components/custom/Header'

function App() {
 const [count, setCount]= useState(0)
 const {user,isLoaded,isSignedIn}=useUser();


 if(!isSignedIn&&isLoaded){
  return <Navigate to={'/auth/signin'}/>
 }


  return (
    <>
    <Header/>
  <Outlet/>
  <Toaster/>
    </>
  )
}

export default App
