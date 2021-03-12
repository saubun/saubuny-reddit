import React, { useState } from 'react';
import axios from 'axios';

const url: string = 'https://www.reddit.com/r/news/hot.json';

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
							<li
								key={item.id}
								className={
									(isDark ? 'media-li-dark' : 'media-li-light') + ' media-li'
								}
							>
								<div className="reddit-media">
									<h3
										className={(isDark ? 'text-light' : 'text-dark') + ' title'}
									>
										{item.title}
									</h3>

									{/* Display video or image (Not needed for r/news) */}
									{/* {item.media?.reddit_video.fallback_url ? (
										<video
											controls
											src={item.media.reddit_video.fallback_url}
											className="reddit-video"
										></video>
									) : item.url_overridden_by_dest ? (
										<>
											<img
												src={item.url_overridden_by_dest}
												alt="No image provided"
												className="reddit-image"
											/>
										</>
									) : null} */}

									<div className="media-info">
										<p className="media-link">
											<a
												href={
													item.media?.reddit_video.fallback_url ||
													item.url_overridden_by_dest
												}
												className={isDark ? 'text-light' : 'text-dark'}
											>
												View Content
											</a>
										</p>
										<p className="media-comments">
											{/* Display comments */}
											<p className={isDark ? 'text-light' : 'text-dark'}>
												{item.num_comments} comments
											</p>
										</p>
										<p className="media-upvotes">
											{/* Display upvotes */}
											<p className={isDark ? 'text-light' : 'text-dark'}>
												{item.ups} upvotes
											</p>
										</p>
									</div>
								</div>
							</li>
						))
				) : (
					<>
						<div className="loading-div-container">
							<div
								className={isDark ? 'loading-div-light' : 'loading-div-dark'}
							>
								<div
									className={
										isDark ? 'loading-div-dark-2' : 'loading-div-light-2'
									}
								></div>
							</div>
						</div>
					</>
				)}
			</ul>
		</>
	);
}
