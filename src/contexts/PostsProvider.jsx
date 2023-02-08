import React, { useContext, useEffect, useState } from 'react'
import { createContext } from 'react'
import { Fetcher } from '@aleksasdev/json-api';
import { DATABASE_URL } from '@/constants/general';
import { UserContext } from '@/contexts/UserProvider';
import { POSTS_ROUTE } from '@/constants/general';
import { nanoid } from 'nanoid';

export const PostsContext = createContext();

export const PostsProvider = ({ children }) => {

	const { user } = useContext(UserContext);
	const [posts, setPosts] = useState([]);

	const fetchPosts = async () =>{
		const allPosts = await new Fetcher(DATABASE_URL+POSTS_ROUTE).get();
		setPosts(allPosts);
	}

	const addPost = async (title, content) =>{
		const postObject = {
			id: nanoid(),
			ownerId: user.id,
			title,
			content,
			rating: 0,
			likedBy: [],
			dislikedBy: [],
			answers: []
		}

		await new Fetcher(DATABASE_URL+POSTS_ROUTE).post(postObject);
		setPosts(current => [...current, postObject]);
	}

	const editPost = async (postObject, id) =>{
		await new Fetcher(DATABASE_URL+POSTS_ROUTE, id).put(postObject);

      const parsedPosts = posts.map(post => post.id === id ? postObject : post);
      setPosts(parsedPosts);
	}

	useEffect(()=>{
		fetchPosts();
	}, [])

	return (
		<PostsContext.Provider value={{
			posts, setPosts,
			fetchPosts, addPost,
			editPost
		}}>
			{children}
		</PostsContext.Provider>
	)
}
