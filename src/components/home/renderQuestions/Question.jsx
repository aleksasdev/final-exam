import { UserContext } from '@/contexts/UserProvider';
import React, { useContext, useEffect, useState } from 'react'

export const Question = ({ data }) => {

	const { getUserById } = useContext(UserContext);
	const { title, content, ownerId } = data;
	const [ownersDetails, setOwnersDetails] = useState({});

	const getOwnerDetails = async () =>{
		setOwnersDetails(await getUserById(ownerId));
	}

	useEffect(()=>{
		getOwnerDetails();
	}, [])

	return (
		<div className='question'>
			<div className="content">
				<h1 className="title">{title}</h1>
				<p className="body">{content}</p>
				<span className="avatar-wrapper">
					<img src={ownersDetails.avatarUrl} alt="" />
					<p className='asked-by'>Asked By</p>
					<p className='owner-username'>{ownersDetails.username}</p>
				</span>
			</div>
		</div>
	)
}
