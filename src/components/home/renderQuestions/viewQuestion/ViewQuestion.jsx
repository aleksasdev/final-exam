import React, { useContext, useEffect, useState } from 'react'
import { Question } from '../Question'
import { PostsContext } from '@/contexts/PostsProvider';
import { useParams } from 'react-router';

export const ViewQuestion = () => {

   const { id } = useParams();
   const [postData, setPostData] = useState(null);
   const { getPostById } = useContext(PostsContext);

   const getPostData = () =>{
      const postObject = getPostById(id);
      setPostData(postObject);
   }

   useEffect(()=>{
      getPostData();
   }, [])

   return (
      <section>
         {postData &&
            <Question data={postData} />
         }
      </section>
   )
}
