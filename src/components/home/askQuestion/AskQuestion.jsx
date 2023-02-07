import React, { useContext } from 'react'
import './askQuestion.css'
import { PostsContext } from '@/contexts/PostsProvider';
import { useNavigate } from 'react-router';

export const AskQuestion = () => {

   const { addPost } = useContext(PostsContext);
   const navigator = useNavigate();

   const handleSubmit = (e) =>{
      e.preventDefault();

      const [title, content] = e.target.elements;

      addPost(title.value, content.value);

      navigator("/");
   }

   return (
      <section id="ask-question">
         <form onSubmit={handleSubmit}>
            <input className='input-style' placeholder='Title' type="text" name="title" required />
            <textarea className='input-style' placeholder='Question' name="content" required cols="30" rows="10"></textarea>
            <input className='button-style' type="submit" value="Ask Question" />
         </form>
      </section>
   )
}
