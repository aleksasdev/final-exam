import { UserContext } from '@/contexts/UserProvider';
import React, { useContext, useEffect, useState } from 'react'
import { Manipulation } from './manipulation/Manipulation';
import { useNavigate } from 'react-router';
import { Rating } from './Rating';

export const Question = ({ data }) => {

	const { getUserById } = useContext(UserContext);
	const { title, content, id, ownerId } = data;
	const [ownersDetails, setOwnersDetails] = useState({});
	const navigator = useNavigate();

	const getOwnerDetails = async () =>{
		const ownersDetails = await getUserById(ownerId);
		setOwnersDetails(ownersDetails);
	}

	const gotoPost = () =>{
		navigator(`/view-question/${id}`);
	}

	useEffect(()=>{
		getOwnerDetails();
	}, [])

	return (
		<div className='question'>
			<div className="content" onClick={gotoPost} >
				<h1 className="title">{title}</h1>
				<p className="body">{content}</p>
			</div>

			<Manipulation ownerId={ownerId} postId={id} />
			<Rating postId={id} />

			<span className="avatar-wrapper">
				<img src={ownersDetails?.avatarUrl} alt="" />
				<p className='asked-by'>Asked By</p>
				<p className='owner-username'>{ownersDetails?.username}</p>
			</span>
		</div>
	)
}
