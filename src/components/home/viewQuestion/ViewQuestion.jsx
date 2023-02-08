import React, { useContext, useEffect, useState } from 'react'
import { Question } from '@/components/home/renderQuestions/Question'
import { PostsContext } from '@/contexts/PostsProvider';
import { useParams } from 'react-router';
import './viewQuestion.css';
import { AnswerForm } from './answers/AnswerForm';
import { RenderAnswers } from './answers/RenderAnswers';

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
      <section id="view-question">
         {postData &&
            <>
            <Question data={postData} />
            <RenderAnswers postObject={postData} />
            <AnswerForm postObject={postData} />
            </>
         }
      </section>
   )
}
