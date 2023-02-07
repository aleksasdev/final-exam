import { Fetcher } from '@aleksasdev/json-api';
import React, { useEffect, useState } from 'react'
import { createContext } from 'react'
import { DATABASE_URL, USERS_ROUTE } from '@/constants/general';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {

   const [user, setUser] = useState(null);

   const loginUserWithRememberMe = async () =>{
      const savedEmail = localStorage.getItem("email");
      const savedPassword = localStorage.getItem("password");
      if(!savedEmail || !savedPassword) return;

      const allUsers = await new Fetcher(DATABASE_URL+USERS_ROUTE).get();
      const userObject = allUsers.find(user=> user.email === savedEmail && user.password === savedPassword);
      loginUser(userObject);

   }

   const loginUser = async (userObject) =>{

      setUser({
         id: userObject.id,
         email: userObject.email,
         username: userObject.username,
         avatarUrl: userObject.avatarUrl
      })
   }

   useEffect(()=>{
      loginUserWithRememberMe();
   }, [])

   return (
      <UserContext.Provider value={{
         user, setUser, 
         loginUser
      }}>
         {children}
      </UserContext.Provider>
   )
}
