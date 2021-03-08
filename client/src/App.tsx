import React, { useState } from 'react';
import NavbarTop from './Navbar';
import PostsList from './PostsList';

export default function App() {
	const [isDark, setDark] = useState(false);

	return (
		<>
			<div
				className={(isDark ? 'main-div-dark' : 'main-div-light') + ' main-div'}
			>
				<NavbarTop isDark={isDark} setDark={setDark} />
				<PostsList isDark={isDark} setDark={setDark} />
			</div>
		</>
	);
}
