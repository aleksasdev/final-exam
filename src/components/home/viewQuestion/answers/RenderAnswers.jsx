import { nanoid } from 'nanoid'
import React, { useContext } from 'react'
import { Answer } from './Answer'
import { PostsContext } from '@/contexts/PostsProvider';

export const RenderAnswers = ({ postId }) => {

   const { answers } = useContext(PostsContext);

   return (
      <div className='answers-container'>
         {answers.map(answer => {
            if(answer.postId !== postId) return;

            return <Answer data={answer} key={nanoid()} /> 
         })}
      </div>
   )
}
