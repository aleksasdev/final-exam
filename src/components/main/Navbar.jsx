import React, { useContext } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { UserContext } from '@/contexts/UserProvider';

export const Navbar = () => {

   const { user } = useContext(UserContext);

   return (
      <>
         <nav>
            <Link to="/">Home</Link>
            {user
            ?
               <Link to="/logout">Logout</Link>
            :
               <>
               <Link to="/login">Login</Link>
               <Link to="/register">Register</Link>
               </>
            }

         </nav>

         <Outlet />
      </>
   )
}
