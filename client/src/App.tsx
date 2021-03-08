import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import NavbarTop from './Navbar';
import PostsList from './PostsList';

export default function App() {
	const [isDark, setDark] = useState(false);

	return (
		<div
			className="d-flex flex-row"
			style={
				isDark
					? {
							backgroundColor: '#4c566a',
					  }
					: {
							backgroundColor: '#eceff4',
					  }
			}
		>
			<Container className="rounded mt-4">
				<NavbarTop isDark={isDark} setDark={setDark} />
				<PostsList />
			</Container>
		</div>
	);
}
