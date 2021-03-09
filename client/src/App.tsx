import React, { useState } from 'react';
import NavbarTop from './Navbar';
import PostsList from './PostsList';
import Home from './Home';
import { Switch, Route } from 'react-router-dom';

export default function App() {
	const [isDark, setDark] = useState(true);

	return (
		<>
			<NavbarTop isDark={isDark} setDark={setDark} />
			<Switch>
				<Route
					exact
					path="/"
					component={() => <Home isDark={isDark} setDark={setDark} />}
				></Route>
				<Route
					exact
					path="/posts"
					component={() => <PostsList isDark={isDark} setDark={setDark} />}
				></Route>
			</Switch>
		</>
	);
}
