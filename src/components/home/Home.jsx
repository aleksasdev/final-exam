import React, { useContext } from 'react'
import './home.css'
import { Filter } from './Filter';
import { UserContext } from '@/contexts/UserProvider';
import { Link } from 'react-router-dom';

export const Home = () => {

  const { user } = useContext(UserContext);

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
            <p>Questions count</p>
            <Filter />
         </div>
      </section>
   )
}
