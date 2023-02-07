import React, { useContext } from 'react'
import { AskQuestion } from './AskQuestion'
import './home.css'
import { Filter } from './Filter';

export const Home = () => {

   return (
      <section id="questions">
         <div className="questions-header">
            <h1 className="all-questions">All Questions</h1>
            <AskQuestion />
            <p>Questions count</p>
            <Filter />
         </div>
      </section>
   )
}
