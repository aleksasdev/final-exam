import React, { useContext } from 'react'
import { PostsContext } from '@/contexts/PostsProvider';
import { Question } from './Question';
import { nanoid } from 'nanoid';
import './questions.css'

export const RenderQuestions = () => {

   const { posts } = useContext(PostsContext);

   return (
      <div id='questions-container'>
         {posts.map(entry => <Question data={entry} key={nanoid()}/>)}
      </div>
   )
}
