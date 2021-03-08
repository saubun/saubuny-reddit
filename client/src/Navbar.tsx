import React from 'react';

export default function NavbarTop({ isDark, setDark }: darkProps) {
	const changeTheme = () => setDark(!isDark);

	return (
		<div className={(isDark ? 'navbar-dark' : 'navbar-light') + ' navbar'}>
			<h4 className={isDark ? 'text-light' : 'text-dark'}>Saubuny Reddit</h4>
			<nav className="navbar-nav">
				<a className={isDark ? 'link-light' : 'link-dark'} href="#home">
					Home
				</a>
				<a className={isDark ? 'link-light' : 'link-dark'} href="#posts">
					View Posts
				</a>
			</nav>
			<button
				className={(isDark ? 'button-light' : 'button-dark') + ' navbar-btn'}
				onClick={changeTheme}
			>
				Change Theme
			</button>
		</div>
	);
}
