import { Fetcher } from '@aleksasdev/json-api';
import React, { useEffect, useState } from 'react'
import { createContext } from 'react'
import { DATABASE_URL, USERS_ROUTE } from '@/constants/general';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {

   const [user, setUser] = useState(null);
   const [users, setUsers] = useState([]);

   const fetchUsers = async () =>{

      const allUsers = await new Fetcher(DATABASE_URL+USERS_ROUTE).get();
      setUsers(allUsers);

   }

   const loginUserWithRememberMe = async () =>{
      if(users.length === 0) return;

      const savedEmail = localStorage.getItem("email");
      const savedPassword = localStorage.getItem("password");
      if(!savedEmail || !savedPassword) return;

      const userObject = users.find(user=> user.email === savedEmail && user.password === savedPassword);
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

   const getUserById = async (userId) =>{
      const matchingUser = users.find(user => user.id === userId);
      return matchingUser;
   }

   useEffect(()=>{
      fetchUsers();
   }, [])

   useEffect(()=>{
      loginUserWithRememberMe();
   }, [users])

   return (
      <UserContext.Provider value={{
         user, setUser,
         users, setUsers,
         loginUser, getUserById
      }}>
         {children}
      </UserContext.Provider>
   )
}
