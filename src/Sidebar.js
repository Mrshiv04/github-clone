import React from 'react';
import './Sidebar.css';
import PostAddOutlinedIcon from '@material-ui/icons/PostAddOutlined';
import InboxIcon from '@material-ui/icons/Inbox';
import { Button } from '@material-ui/core';

function Sidebar() {
	return (
		<div className='sidebar'>
			<div className='sidebar_header'>
				<p>Repositories</p>
				<button>
					<InboxIcon />
					&nbsp;New
				</button>
			</div>
			<input type='text' placeholder='Find a repository...' />
			<div className='sidebar_repository'>
				<InboxIcon /> <p>Mrshiv04 / amazon-clone</p>
			</div>
			<div className='sidebar_repository'>
				<InboxIcon /> <p>Mrshiv04 / gmail-clone</p>
			</div>
			<div className='sidebar_repository'>
				<InboxIcon /> <p>Mrshiv04 / netflix-clone</p>
			</div>
			<div className='sidebar_repository'>
				<InboxIcon /> <p>Mrshiv04 / whatsapp-clone</p>
			</div>
			<div className='sidebar_repository'>
				<InboxIcon /> <p>Mrshiv04 / linkedin-clone</p>
			</div>
			<div className='sidebar_repository'>
				<InboxIcon /> <p>Mrshiv04 / airbnb-clone</p>
			</div>
			<div className='sidebar_repository'>
				<InboxIcon /> <p>Mrshiv04 / youtube-clone</p>
			</div>
			{/* <div className='sidebar_repository'>
				<InboxIcon /> <p>Mrshiv04 / covidnew</p>
			</div>
			<div className='sidebar_repository'>
				<InboxIcon /> <p>Mrshiv04 / whatsapp-backend</p>
			</div>
			<div className='sidebar_repository'>
				<InboxIcon /> <p>Mrshiv04 / netflix-clone</p>
			</div>
			<div className='sidebar_repository'>
				<InboxIcon /> <p>Mrshiv04 / pokemon-app</p>
			</div>
			<div className='sidebar_repository'>
				<InboxIcon /> <p>Mrshiv04 / covidtracker</p>
			</div> */}
			<p>Show more</p>
			<hr />
			<div className='sidebar_bottom'>
				<h4>Working with a team?</h4>
				<p>
					GitHub is built for collaboration. Set up an organization to improve
					the way your team works together, and get access to more features.
				</p>
				<Button>Create an Organization</Button>
			</div>
		</div>
	);
}

export default Sidebar;
