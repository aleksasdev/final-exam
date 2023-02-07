import React, { useEffect, useState } from 'react'
import { createContext } from 'react'
import { Fetcher } from '@aleksasdev/json-api';
import { DATABASE_URL } from '@/constants/general';

export const PostsContext = createContext();

export const PostsProvider = ({ children }) => {

	const [posts, setPosts] = useState([]);

	const fetchPosts = async () =>{
		const allPosts = await new Fetcher(DATABASE_URL+POSTS_ROUTE).get();
		setPosts(allPosts);
	}

	useEffect(()=>{
		fetchPosts();
	}, [])

	return (
		<PostsContext.Provider value={{
			posts, setPosts,
			fetchPosts
		}}>
			{children}
		</PostsContext.Provider>
	)
}
