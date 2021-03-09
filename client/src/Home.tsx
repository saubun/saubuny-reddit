import React from 'react';

export default function Home({ isDark, setDark }: darkProps) {
	return (
		<>
			<div className="home-container">
				<div className="jumbotron">
					<h1>Welcome</h1>
					<p>Lorem ipsum dolor sit amet.</p>
				</div>
			</div>
		</>
	);
}
