import { nanoid } from 'nanoid'
import React from 'react'
import { Answer } from './Answer'

export const RenderAnswers = ({ postObject }) => {

   return (
      <div className='answers-container'>
         {postObject.answers.map(post => <Answer data={post} key={nanoid()} /> )}
      </div>
   )
}
