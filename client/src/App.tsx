import React from 'react';
import { Container } from 'react-bootstrap';
import PostsList from './PostsList';

export default function App() {
	return (
		<Container className="rounded">
			<h1 className="text-center my-4">Saubuny Reddit</h1>
			<PostsList />
		</Container>
	);
}
