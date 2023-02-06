import { Fetcher } from '@aleksasdev/json-api';
import React, { useState } from 'react'
import { createContext } from 'react'
import { DATABASE_URL, USERS_ROUTE } from '@/constants/general';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {

   const [user, setUser] = useState(null);

   const loginUser = async (userObject) =>{

      setUser({
         id: userObject.id,
         email: userObject.email,
         username: userObject.username,
         avatarUrl: userObject.avatarUrl
      })
   }

   return (
      <UserContext.Provider value={{
         user, setUser, 
         loginUser
      }}>
         {children}
      </UserContext.Provider>
   )
}
