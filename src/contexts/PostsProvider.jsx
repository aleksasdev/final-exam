import React, { useContext, useEffect, useState } from 'react'
import { createContext } from 'react'
import { Fetcher } from '@aleksasdev/json-api';
import { ANSWERS_ROUTE, DATABASE_URL } from '@/constants/general';
import { UserContext } from '@/contexts/UserProvider';
import { POSTS_ROUTE } from '@/constants/general';
import { nanoid } from 'nanoid';

export const PostsContext = createContext();

export const PostsProvider = ({ children }) => {

	const { user } = useContext(UserContext);
	const [posts, setPosts] = useState([]);
	const [answers, setAnswers] = useState([]);

	const fetchPosts = async () =>{
		const allPosts = await new Fetcher(DATABASE_URL+POSTS_ROUTE).get();
		setPosts(allPosts);
	}

	const fetchAnswers = async () =>{
		const allAnswers = await new Fetcher(DATABASE_URL+ANSWERS_ROUTE).get();
		setAnswers(allAnswers);
	}

	const addPost = async (title, content) =>{
		const postObject = {
			id: nanoid(),
			ownerId: user.id,
			title,
			content,
			rating: 0,
			isEdited: false,
			likedBy: [],
			dislikedBy: [],
			answers: [],
		}

		await new Fetcher(DATABASE_URL+POSTS_ROUTE).post(postObject);
		setPosts(current => [...current, postObject]);
	}

	const addAnswer = async (content, postId) =>{

		const answerObject = {
			id: nanoid(),
			postId,
			ownerId: user.id,
			content,
			isEdited: false
		}

		await new Fetcher(DATABASE_URL+ANSWERS_ROUTE).post(answerObject);

		setAnswers(current => [...current, answerObject]);
	}

	const editAnswer = async (postObject, answerObject)=>{
		const postId = postObject.id;


	}

	const editPost = async (postObject) =>{
		const postId = postObject.id;
		await new Fetcher(DATABASE_URL+POSTS_ROUTE, postId).put(postObject);

      const parsedPosts = posts.map(post => post.id === postId ? postObject : post);
      setPosts(parsedPosts);
	}

	const getPostById = (postId) =>{
		return posts.find(post => post.id === postId);
	}

	useEffect(()=>{
		fetchPosts();
		fetchAnswers();
	}, [])

	return (
		<PostsContext.Provider value={{
			posts, setPosts,
			answers, setAnswers,
			addPost,
			addAnswer, editAnswer,
			editPost, getPostById
		}}>
			{children}
		</PostsContext.Provider>
	)
}
