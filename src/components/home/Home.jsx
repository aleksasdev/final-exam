import React, { useContext } from 'react'
import './home.css'
import { Filter } from './Filter';
import { UserContext } from '@/contexts/UserProvider';
import { Link } from 'react-router-dom';
import { RenderQuestions } from './renderQuestions/RenderQuestions';
import { PostsContext } from './../../contexts/PostsProvider';

export const Home = () => {

  const { user } = useContext(UserContext);
  const { posts } = useContext(PostsContext);

   return (
      <section id="questions">
         <div className="questions-header">
            <h1 className="all-questions">All Questions</h1>
            {user
            ?
               <Link className='ask-question-button button-style' to="/new-question">
                  Ask Question
               </Link>
            :
               <p className='ask-question-button'>Login to ask a question</p>
            }
            <p>{posts.length} questions</p>
            <Filter />
         </div>

         <RenderQuestions />
      </section>
   )
}
