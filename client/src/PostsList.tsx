import React, { useState } from 'react';
import axios from 'axios';

const url: string = 'https://www.reddit.com/r/196.json';

export default function PostsList({ isDark, setDark }: darkProps) {
	const [posts, setPosts] = useState([]);

	axios
		.get(url)
		.then((res) => {
			const redditJson = res.data;

			const postJson: any = redditJson.data.children.map(
				(obj: any) => obj.data
			);

			setPosts(postJson);
		})
		.catch((err) => {
			console.error(err);
		});

	// Extremely messy return
	return (
		<>
			<ul className={(isDark ? 'ul-dark' : 'ul-light') + ' ul'}>
				{posts && posts.length > 0 ? (
					posts
						.filter((item: redditPost) => item.distinguished === null)
						.map((item: redditPost) => (
							<li key={item.id}>
								{/* Display title */}
								<nav>
									<a
										href={
											item.media?.reddit_video.fallback_url ||
											item.url_overridden_by_dest
										}
										style={{
											color: 'black',
										}}
									>
										<h3>{item.title}</h3>
									</a>
								</nav>

								{/* Display video or image */}
								<div className="d-flex flex-row">
									{item.media?.reddit_video.fallback_url ? (
										<video
											controls
											src={item.media.reddit_video.fallback_url}
											style={{ height: '80%', width: 'auto' }}
											className="border"
										></video>
									) : item.url_overridden_by_dest ? (
										<>
											<img
												src={item.url_overridden_by_dest}
												style={{ width: '80%', height: 'auto' }}
												alt="No image provided"
												className="border"
											/>
										</>
									) : null}

									<ul>
										<li>
											{/* Display comments */}
											<p>{item.num_comments} comments</p>
										</li>
										<li>
											{/* Display upvotes */}
											<p>{item.ups} upvotes</p>
										</li>
									</ul>
								</div>
							</li>
						))
				) : (
					<>
						<div className={isDark ? 'loading-div-light' : 'loading-div-dark'}>
							<div
								className={
									isDark ? 'loading-div-dark-2' : 'loading-div-light-2'
								}
							></div>
						</div>
					</>
				)}
			</ul>
		</>
	);
}
