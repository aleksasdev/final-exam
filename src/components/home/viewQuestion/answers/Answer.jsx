import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '@/contexts/UserProvider';

export const Answer = ({ data }) => {

   const { content, ownerId, id } = data;
   const { getUserById } = useContext(UserContext);
   const [ownerDetails, setOwnerDetails] = useState(null);


   const getOwnerDetails = async () =>{
      setOwnerDetails( await getUserById(ownerId) );
   }

   useEffect(()=>{
      getOwnerDetails();
   }, [])

   return (
      <div className='answer'>
         {ownerDetails &&
            <>
            <div className="content-wrapper">
               <p className='content'>{content}</p>
            </div>

            <div className="owner-wrapper">
               <img src={ownerDetails.avatarUrl} alt="" />
               <p className='username'>{ownerDetails.username}</p>
            </div>
            </>
         }
      </div>
   )
}
