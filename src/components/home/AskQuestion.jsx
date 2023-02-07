import React, { useContext } from 'react'
import { UserContext } from '@/contexts/UserProvider';

export const AskQuestion = () => {

  const { user } = useContext(UserContext);

   return (
      <div className='ask-question-button button-style'>
         {user ? "Ask Question" : "Please login"}
      </div>
   )
}
