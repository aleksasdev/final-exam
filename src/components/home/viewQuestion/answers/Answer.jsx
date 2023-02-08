import React, { useState } from 'react'

export const Answer = ({ data }) => {

   const { content } = data;
   const [ownerDetails, setOwnerDetails] = useState(null);

   return (
      <div className='answer'>
         <p>{content}</p>
      </div>
   )
}
