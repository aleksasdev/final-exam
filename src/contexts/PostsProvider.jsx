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

	const editPost = async (postObject, postId) =>{
		await new Fetcher(DATABASE_URL+POSTS_ROUTE, postId).put(postObject);

      const parsedPosts = posts.map(post => post.id === postId ? postObject : post);
      setPosts(parsedPosts);
	}

	const getPostById = (postId) =>{
		return posts.find(post => post.id === postId);
	}

	useEffect(()=>{
		fetchPosts();
	}, [])

	return (
		<PostsContext.Provider value={{
			posts, setPosts,
			fetchPosts, addPost,
			editPost, getPostById
		}}>
			{children}
		</PostsContext.Provider>
	)
}
