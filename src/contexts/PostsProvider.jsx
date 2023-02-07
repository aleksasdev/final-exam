import React from 'react'
import { createContext } from 'react'

export const PostsContext = createContext();

export const PostsProvider = ({ children }) => {

  

   return (
      <PostsContext.Provider value={{
         
      }}>
         {children}
      </PostsContext.Provider>
   )
}
