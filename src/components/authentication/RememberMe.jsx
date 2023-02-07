import React, { useEffect, useState } from 'react'
import './authentication.css'

export const RememberMe = ({ setShouldSaveDetails }) => {


	return (
		<span className='remember-me-container'>
			<p>Remember me</p>
			<input onClick={e=>setShouldSaveDetails(current => !current)} type="checkbox" name="" id="" />
		</span>
	)
}
