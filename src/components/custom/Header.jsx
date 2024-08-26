import React from 'react'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'
import { UserButton, useUser } from '@clerk/clerk-react'

function Header() {
    const {user, isSignedIn}=useUser();
  return (

    <div className='p-3 px-5 flex justify-between shadow-md'>

        <img src='/logo.svg' width={150} height={100}/>
      

        {
            isSignedIn?
            <div className='flex gap-4 items-center'>
                 <Link to={'/dashboard'}>
                <Button variant="outline">Dashboard</Button>
                </Link>
                <UserButton/>
            </div>: 
              <Link to={'/auth/signin'}>
             <Button>Get Started</Button>
             </Link>
        }
       
      
    </div>
  )
}

export default Header