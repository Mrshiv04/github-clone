import React from 'react';
import './Header.css';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import AddIcon from '@material-ui/icons/Add';
import { Avatar } from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

function Header() {
	return (
		<div className='header'>
			<div className='header_left'>
				<img
					className='header_logo'
					src='/github-logo.png'
					// src='https://www.clipartmax.com/png/full/48-483031_github-logo-black-and-white-github-icon-vector.png'
					// src='https://www.flaticon.com/svg/vstatic/svg/25/25231.svg?token=exp=1612637413~hmac=86a21f2fefbf3e94e07d3d346a013543'
					alt='github logo'
				/>
				<div className='header_input'>
					<input type='text' placeholder='Search or jump to...' />
					<button>/</button>
				</div>

				<p>Pull Request</p>
				<p>Issues</p>
				<p>Marketplace</p>
				<p>Explore</p>
			</div>
			<div className='header_right'>
				<NotificationsNoneIcon />
				<AddIcon />
				{/* <ArrowDropDownIcon /> */}
				<Avatar
					className='user_avatar'
					src='https://avatars.githubusercontent.com/u/61186385?s=400&u=bee5bca812b24d015b0e20f8ecd1d6f3e297bbcb&v=4'
				/>
			</div>
		</div>
	);
}

export default Header;
