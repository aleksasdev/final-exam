import React from 'react'

export const Question = ({ data }) => {

	const { title, content, ownerUsername, ownerAvatarUrl } = data;

	return (
		<div className='question'>
			<div className="content">
				<h1 className="title">{title}</h1>
				<p className="body">{content}</p>
				<span className="avatar-wrapper">
					<img src={ownerAvatarUrl} alt="" />
					<p className='asked-by'>Asked By</p>
					<p className='owner-username'>{ownerUsername}</p>
				</span>
			</div>
		</div>
	)
}
