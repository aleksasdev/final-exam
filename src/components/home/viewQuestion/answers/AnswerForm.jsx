import React, { useContext } from 'react'
import { PostsContext } from '@/contexts/PostsProvider';
import { UserContext } from './../../../../contexts/UserProvider';

export const AnswerForm = ({ postObject }) => {

   const { addAnswer } = useContext(PostsContext);
   const { id } = postObject;
   const { user } = useContext(UserContext);

   const doAnswer = (e) =>{
      e.preventDefault();

      const [answer] = e.target.elements;
      addAnswer(answer.value, id);
      e.target.reset();
   }

   return (
      <>
      {user
      ?
         <form className='answer-form' onSubmit={doAnswer} >
            <textarea className="input-style" name="answer" placeholder="Type your answer here..." cols="30" rows="10" required></textarea>
            <input type="submit" value="Answer" className="button-style" />
         </form>
      :
         <p>Login to post answers</p>
      }
      </>
  )
}
