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
							backgroundColor: '#2e3440',
					  }
					: {
							backgroundColor: '#eceff4',
					  }
			}
		>
			<NavbarTop isDark={isDark} setDark={setDark} />
			<Container
				className="rounded mt-4 d-flex justify-content-center"
				style={{ height: '100vh' }}
			>
				<PostsList />
			</Container>
		</div>
	);
}
