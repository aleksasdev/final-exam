import React, { useContext, useEffect } from 'react'
import { UserContext } from '@/contexts/UserProvider';
import { useNavigate } from 'react-router';

export const Logout = () => {

   const { setUser } = useContext(UserContext);
   const navigator = useNavigate();

   const doLogout = () =>{
      setUser(null);
      localStorage.clear();
      navigator("/");
   }

   useEffect(()=>{
      doLogout();
   }, [])

   return (
      <></>
   )
}
