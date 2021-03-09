import React, { useState } from 'react';
import NavbarTop from './Navbar';
import PostsList from './PostsList';
import Home from './Home';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

export default function App() {
	const [isDark, setDark] = useState(true);
	const [pathname, setPathname] = useState('');

	if (pathname == window.location.href) {
		setPathname(new URL(window.location.href).pathname);
		window.location.reload();
	}

	return (
		<>
			<Router>
				<NavbarTop isDark={isDark} setDark={setDark} />
				<Switch>
					<Route exact path="/">
						<Home isDark={isDark} setDark={setDark} />
					</Route>
					<Route exact path="/posts">
						<PostsList isDark={isDark} setDark={setDark} />
					</Route>
				</Switch>
			</Router>
		</>
	);
}
