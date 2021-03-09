import React from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom';

export default function NavbarTop({ isDark, setDark }: darkProps) {
	const changeTheme = () => setDark(!isDark);

	return (
		<>
			<div className={(isDark ? 'navbar-dark' : 'navbar-light') + ' navbar'}>
				<p
					className={
						(isDark
							? 'text-light navbar-brand-light'
							: 'text-dark navbar-brand-dark') + ' navbar-brand'
					}
				>
					Saubuny Reddit
				</p>
				<nav className="navbar-nav">
					<Link
						className={(isDark ? 'link-light' : 'link-dark') + ' link'}
						to="/"
					>
						Home
					</Link>
					<Link
						className={(isDark ? 'link-light' : 'link-dark') + ' link'}
						to="/posts"
					>
						View Posts
					</Link>
				</nav>
				<div className="navbar-btns">
					<button
						className={
							(isDark ? 'button-light' : 'button-dark') + ' navbar-btn'
						}
						onClick={changeTheme}
					></button>
				</div>
			</div>
		</>
	);
}
