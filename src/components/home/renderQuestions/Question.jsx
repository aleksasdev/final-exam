import { UserContext } from '@/contexts/UserProvider';
import React, { useContext, useEffect, useState } from 'react'
import { Manipulation } from './manipulation/Manipulation';
import { useNavigate } from 'react-router';
import { Rating } from './Rating';

export const Question = ({ data }) => {

	const { getUserById } = useContext(UserContext);
	const { title, content, id, ownerId } = data;
	const ownerDetails = getUserById(ownerId);
	const navigator = useNavigate();

	const gotoPost = () =>{
		navigator(`/view-question/${id}`);
	}

	return (
		<div className='question'>
			<div className="content" >
				<Manipulation postId={id} />
				<h1 className="title" onClick={gotoPost} >{title}</h1>
				<p className="body" onClick={gotoPost} >{content}</p>
			</div>

			<Rating postId={id} />

			<span className="avatar-wrapper">
				<img src={ownerDetails?.avatarUrl} alt="" />
				<p className='asked-by'>Asked By</p>
				<p className='owner-username'>{ownerDetails?.username}</p>
			</span>
		</div>
	)
}
