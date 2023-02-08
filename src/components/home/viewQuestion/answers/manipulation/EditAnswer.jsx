import React, { useContext, useState } from 'react'
import { useParams, useNavigate } from 'react-router';
import { PostsContext } from '@/contexts/PostsProvider';
import { UserContext } from '@/contexts/UserProvider';

export const EditAnswer = () => {

   const { id } = useParams();
   const { getAnswerById, editAnswer } = useContext(PostsContext);
   const answerObject = getAnswerById(id);

   const { getUserById } = useContext(UserContext);
   const ownerDetails = getUserById(answerObject.ownerId);

   const navigate = useNavigate();
   const [value, setValue] = useState(answerObject.content);

   const doOnChange = (e) =>{
      setValue(e.target.value);
   }

   const doFinish = async () =>{
      answerObject.content = value;
      await editAnswer(answerObject);
      navigate(-1);
   }

   const doCancel = () =>{
      navigate(-1);
   }

   return (
      <section>
         <form className="edit-answer-form">

            <div className="owner-wrapper">
               <img src={ownerDetails.avatarUrl} alt="" />
               <p>{ownerDetails.username}</p>
            </div>

            <textarea value={value} onChange={doOnChange} cols="30" rows="10" className="input-style"></textarea>
            
            <div className="buttons-wrapper">
               <div className="button-style" onClick={doFinish} >Finish</div>
               <div className="button-style cancel" onClick={doCancel} >Cancel</div>
            </div>
         </form>
      </section>

   )
}
