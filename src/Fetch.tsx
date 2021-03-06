import React, { useState } from 'react';
import axios from 'axios';

const url: string = 'https://www.reddit.com/r/196.json';

type redditPost = {
	title: string;
	id: string;
};

export default function Fetch() {
	const [posts, setPosts] = useState([]);

	axios
		.get(url)
		.then((res) => {
			const redditJson = res.data;
			setPosts(redditJson.data.children.map((obj: any) => obj.data));
		})
		.catch((err) => {
			console.error(err);
		});

	return (
		<div>
			<ul>
				{posts && posts.length > 0 ? (
					posts.map((item: redditPost) => <li key={item.id}>{item.title}</li>)
				) : (
					<p>No data to show</p>
				)}
			</ul>
		</div>
	);
}
