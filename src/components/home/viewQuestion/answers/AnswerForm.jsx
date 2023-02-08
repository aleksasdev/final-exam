import React, { useContext } from 'react'
import { PostsContext } from '@/contexts/PostsProvider';

export const AnswerForm = ({ postObject }) => {

   const { addAnswer } = useContext(PostsContext);
   const { id } = postObject;

   const doAnswer = (e) =>{
      e.preventDefault();

      const [answer] = e.target.elements;
      addAnswer(answer.value, id);
      e.target.reset();
   }

   return (
      <form className='answer-form' onSubmit={doAnswer} >
         <textarea className="input-style" name="answer" placeholder="Type your answer here..." cols="30" rows="10" required></textarea>
         <input type="submit" value="Answer" className="button-style" />
      </form>
  )
}
