import { Avatar, Button } from '@material-ui/core';
import React from 'react';
import './General.css';
import EmojiObjectsOutlinedIcon from '@material-ui/icons/EmojiObjectsOutlined';
import RssFeedOutlinedIcon from '@material-ui/icons/RssFeedOutlined';

function General() {
	return (
		<div className='general'>
			<div className='general_banner'>
				<h2>
					Discover interesting projects and people to populate your personal
					news feed.
				</h2>
				<p>
					Your news feed helps you keep up with recent activity on repositories
					you <span>watch</span> and people you <span>follow</span>.
				</p>
				<Button>Explore Github</Button>
			</div>
			<div className='general_info'>
				<p>
					<EmojiObjectsOutlinedIcon />
					<span style={{ color: 'black' }}>ProTip! &nbsp;</span>The feed shows
					you events from people you follow and repositories you watch.
				</p>
				<p>
					<RssFeedOutlinedIcon />
					Subscribe to your news feed
				</p>
			</div>
			<div className='general_footer'>
				<div className='general_footerLeft'>
					<img
						className='footer_avatar'
						src='https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png'
					/>
					<p>&copy; 2021 GitHub, Inc.</p>
				</div>
				<div className='general_footerRight'>
					<div className='general_subFooterLeft'>
						<p>Blog</p>
						<p>About</p>
						<p>Shop</p>
						<p>Contact GitHub</p>
						<p>Pricing</p>
					</div>
					<div className='general_subFooterLeft'>
						<p>API</p>
						<p>Training</p>
						<p>Status</p>
						<p>Security</p>
					</div>
					<div className='general_subFooterLeft'>
						<p>Terms</p>
						<p>Privacy</p>
						<p>Docs</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default General;
