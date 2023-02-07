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
			ownerAvatarUrl: user.avatarUrl,
			ownerUsername: user.username,
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

	useEffect(()=>{
		fetchPosts();
	}, [])

	return (
		<PostsContext.Provider value={{
			posts, setPosts,
			fetchPosts, addPost
		}}>
			{children}
		</PostsContext.Provider>
	)
}
