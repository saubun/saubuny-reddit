import React, { useState } from 'react';
import NavbarTop from './Navbar';
import PostsList from './PostsList';

export default function App() {
	const [isDark, setDark] = useState(true);

	return (
		<>
			<NavbarTop isDark={isDark} setDark={setDark} />
			<PostsList isDark={isDark} setDark={setDark} />
		</>
	);
}
