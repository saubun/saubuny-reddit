import React from 'react';
import { useHistory } from 'react-router';

export default function Home({ isDark, setDark }: darkProps) {
	const history = useHistory();

	const buttonLink = (e: any) => {
		e.preventDefault();
		history.push('/posts');
	};

	return (
		<>
			<div className={isDark ? 'home-container-dark' : 'home-container-light'}>
				<div className="flex-container">
					<div
						className={
							'jumbotron ' + (isDark ? 'jumbotron-dark' : 'jumbotron-light')
						}
					>
						<h1
							className={isDark ? 'text-light navbar-brand-light' : 'text-dark'}
						>
							Welcome
						</h1>
						<p className={isDark ? 'text-light' : 'text-dark'}>
							View posts from r/196
						</p>
						<p className={isDark ? 'text-light' : 'text-dark'}>Have fun</p>
						<button
							className={isDark ? 'button-dark' : 'button-light'}
							onClick={buttonLink}
						>
							Click Me
						</button>
					</div>
				</div>
			</div>
		</>
	);
}
