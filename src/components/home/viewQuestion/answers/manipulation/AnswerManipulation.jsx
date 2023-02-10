import React, { useContext } from 'react'
import { UserContext } from '@/contexts/UserProvider';
import { Link } from 'react-router-dom';
import './answerManipulation.css'
import { PostsContext } from '@/contexts/PostsProvider';

export const AnswerManipulation = ({ answerObject }) => {

   const { id, ownerId, isEdited } = answerObject;
   const { user } = useContext(UserContext);
   const { deleteAnswer } = useContext(PostsContext);

   if(user?.id !== ownerId) return;

   const doDeletion = () =>{
      deleteAnswer(id);
   }

   return (
      <div className="manipulation-wrapper">
         <Link to={`edit-answer/${id}`}>
            <svg className="edit" height="1696.143px" version="1.1" viewBox="0 0 1696.162 1696.143" width="1696.162px" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><g id="pen"><path d="M1648.016,305.367L1390.795,48.149C1359.747,17.098,1318.466,0,1274.555,0c-43.907,0-85.188,17.098-116.236,48.148   L81.585,1124.866c-10.22,10.22-16.808,23.511-18.75,37.833L0.601,1621.186c-2.774,20.448,4.161,41.015,18.753,55.605   c12.473,12.473,29.313,19.352,46.714,19.352c2.952,0,5.923-0.197,8.891-0.601l458.488-62.231   c14.324-1.945,27.615-8.529,37.835-18.752L1648.016,537.844c31.049-31.048,48.146-72.33,48.146-116.237   C1696.162,377.696,1679.064,336.415,1648.016,305.367z M493.598,1505.366l-350.381,47.558l47.56-350.376L953.78,439.557   l302.818,302.819L493.598,1505.366z M1554.575,444.404l-204.536,204.533l-302.821-302.818l204.535-204.532   c8.22-8.218,17.814-9.446,22.802-9.446c4.988,0,14.582,1.228,22.803,9.446l257.221,257.218c8.217,8.217,9.443,17.812,9.443,22.799   S1562.795,436.186,1554.575,444.404z"/></g><g id="Layer_1"/></svg>
         </Link>

         <svg 
            className="delete" 
            onClick={doDeletion}
            enableBackground="new 0 0 128 128" height="128px" id="Layer_1" version="1.1" viewBox="0 0 128 128" width="128px" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><g><g><path d="M100,16h-8c0-8.836-7.164-16-16-16H52c-8.836,0-16,7.164-16,16h-8c-8.836,0-16,7.164-16,16v16    l16.188,73.734C29,125.398,32.25,128,36,128h56c3.75,0,7-2.602,7.813-6.266L116,48V32C116,23.164,108.836,16,100,16z M92,120H36    L20,48h88L92,120z M108,40H20v-8c0-4.414,3.586-8,8-8h16v-8c0-4.414,3.586-8,8-8h24c4.414,0,8,3.586,8,8v8h16c4.414,0,8,3.586,8,8    V40z M52,24h24v-8H52V24z" />
         </g></g></svg>

         {isEdited &&
            <p className='edited'>Edited</p>
         }
      </div>
   )
}
