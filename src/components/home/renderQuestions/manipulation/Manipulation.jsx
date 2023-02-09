import React, { useContext } from 'react'
import { UserContext } from '@/contexts/UserProvider';
import './manipulation.css'
import { useNavigate } from 'react-router';
import { PostsContext } from '@/contexts/PostsProvider';

export const Manipulation = ({ postId }) => {

   const { user } = useContext(UserContext);
   const { getPostById, deletePost } = useContext(PostsContext);

   const postObject = getPostById(postId);
   const { ownerId, isEdited } = postObject;

   const navigator = useNavigate();

   const gotoEdit = () =>{
      navigator(`/edit-question/${postId}`);
   }

   const doDelete = () =>{
      deletePost(postId);
   }

    return (
      <div className='manipulation-container'>
         <>
         {isEdited &&
            <p className='edited'>Edited</p>
         }

         {user && user.id === ownerId &&
            <>
            <svg className="edit-button" onClick={gotoEdit} viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg"><title/><g><path d="M78,60a5.9966,5.9966,0,0,0-6,6V84H12V24H30a6,6,0,0,0,0-12H6a5.9966,5.9966,0,0,0-6,6V90a5.9966,5.9966,0,0,0,6,6H78a5.9966,5.9966,0,0,0,6-6V66A5.9966,5.9966,0,0,0,78,60Z"/><path d="M94.2422,13.7578l-12-12a5.9979,5.9979,0,0,0-8.4844,0l-36,36A5.9958,5.9958,0,0,0,36,42V54a5.9966,5.9966,0,0,0,6,6H54a5.9956,5.9956,0,0,0,4.2422-1.7578l36-36A5.9979,5.9979,0,0,0,94.2422,13.7578ZM51.5156,48H48V44.4844l30-30L81.5156,18Z"/></g></svg>
            <svg className="delete-button" onClick={doDelete} viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg"><title/><path d="M90,24H72V18A18.02,18.02,0,0,0,54,0H42A18.02,18.02,0,0,0,24,18v6H6A6,6,0,0,0,6,36h6V90a5.9966,5.9966,0,0,0,6,6H78a5.9966,5.9966,0,0,0,6-6V36h6a6,6,0,0,0,0-12ZM36,18a6.0078,6.0078,0,0,1,6-6H54a6.0078,6.0078,0,0,1,6,6v6H36ZM72,84H24V36H72Z"/></svg>
            </>
         }
         </>
      </div>
    )
}
