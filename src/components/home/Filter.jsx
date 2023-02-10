import React, { useContext } from 'react'
import { PostsContext } from '@/contexts/PostsProvider';

export const Filter = () => {

   const { setPosts, answers, fetchPosts } = useContext(PostsContext);

   const filterByAnswers = async (tag) =>{
      const newArray = [];
      for(const post of await fetchPosts()){
         let isPostWithAnswers = false;

         for(const answer of answers){
            if(answer.postId === post.id) isPostWithAnswers = true;
         }

         if(!isPostWithAnswers && tag === "answered") continue;
         if(isPostWithAnswers && tag === "unanswered") continue;
         newArray.push(post);
      }
      
      setPosts(newArray)
   }

   const doFilter = (e) =>{
      const choice = e.target.value;

      if(choice === "default") fetchPosts();
      if(choice === "answered") filterByAnswers("answered");
      if(choice === "unanswered") filterByAnswers("unanswered");
   }

   return (
      <select className='filter-container input-style' onChange={doFilter} >
         <option value="default">No filter</option>
         <option value="answered">Answered</option>
         <option value="unanswered">Unanswered</option>
      </select>
   )
}
