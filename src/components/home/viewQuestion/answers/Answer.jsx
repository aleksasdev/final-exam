import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '@/contexts/UserProvider';

export const Answer = ({ data }) => {

   const { content } = data;
   const { getUserById } = useContext(UserContext);
   const [ownerDetails, setOwnerDetails] = useState(null);

   const getOwnerDetails = async () =>{
      setOwnerDetails( await getUserById(data.ownerId) );
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
               <p className='username'>{ownerDetails.username}</p>
               <img src={ownerDetails.avatarUrl} alt="" />
            </div>
            </>
         }
      </div>
   )
}
