import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { PostsContext } from '@/contexts/PostsProvider';
import { Question } from '@/components/home/renderQuestions/Question';
import { Fetcher } from '@aleksasdev/json-api';
import { DATABASE_URL, POSTS_ROUTE } from '@/constants/general';

export const EditPost = () => {

   const { id } = useParams();
   const { posts, setPosts } = useContext(PostsContext);
   const navigator = useNavigate();

   const [postData, setPostData] = useState(null);
   const [values, setValues] = useState({});

   const doOnChange = (e) =>{
      const newValue = e.target.value;

      setValues({
         ...values,
         [e.target.name]: newValue
      })
      setPostData({
         ...postData,
         [e.target.name]: newValue
      })
   }

   const doFinishEditing = async (e) =>{
      e.preventDefault();

      await new Fetcher(DATABASE_URL+POSTS_ROUTE, id).put(postData);

      const parsedPosts = posts.map(post => post.id === id ? postData : post);
      setPosts(parsedPosts);

      navigator("/");
   }

   const getPostdata = () =>{
      const postObject = posts.find(post => post.id === id);
      
      setPostData(postObject);
      setValues({
         title: postObject.title,
         content: postObject.content
      })
   }

   useEffect(()=>{
      getPostdata();
   }, [])

   return (
      <section id="edit-post">
         {postData &&
            <>
               <Question data={postData} />
               <form onSubmit={doFinishEditing} >
                  <input className="input-style" name="title" onChange={doOnChange} type="text" value={values.title} />
                  <textarea className="input-style" name="content" onChange={doOnChange} cols="30" rows="10" value={values.content} ></textarea>
                  <input type="submit" value="Finish Editing" className="button-style" />
               </form>
            </>
         }
      </section>
   )
}
