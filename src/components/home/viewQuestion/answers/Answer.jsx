import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '@/contexts/UserProvider';
import { Link } from 'react-router-dom';
import { AnswerManipulation } from './manipulation/AnswerManipulation';

export const Answer = ({ answerObject }) => {

   const { content, ownerId } = answerObject;
   const { getUserById } = useContext(UserContext);
   const ownerDetails = getUserById(ownerId);


   return (
      <div className='answer'>
         {ownerDetails &&
            <>
            <div className="content-wrapper">
               <span className="header-wrapper">
                  <p className='username'>{ownerDetails.username}</p>
                  <AnswerManipulation answerObject={answerObject} />
               </span>
               <p className='content'>{content}</p>
            </div>

            <div className="owner-wrapper">
               <img src={ownerDetails.avatarUrl} alt="" />
            </div>

            </>
         }
      </div>
   )
}
