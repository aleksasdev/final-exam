import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export const Navbar = () => {
   return (
      <>
         <nav>
            <Link to="/home">Home</Link>
         </nav>

         <Outlet />
      </>
   )
}
