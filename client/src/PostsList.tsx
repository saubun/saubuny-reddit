import React, { useState } from 'react';
import axios from 'axios';
import { ListGroup, Spinner, Nav } from 'react-bootstrap';

const url: string = 'https://www.reddit.com/r/196.json';

export default function PostsList() {
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

	const divStyling = {
		width: '100%',
		height: 'auto',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	};

	// Extremely messy return
	return (
		<>
			<ListGroup className="mt-5">
				{posts && posts.length > 0 ? (
					posts
						.filter((item: redditPost) => item.distinguished === null)
						.map((item: redditPost) => (
							<ListGroup.Item key={item.id}>
								{/* Display title */}
								<Nav>
									<Nav.Link
										href={
											item.media?.reddit_video.fallback_url ||
											item.url_overridden_by_dest
										}
										style={{
											color: 'black',
										}}
									>
										<h3>{item.title}</h3>
									</Nav.Link>
								</Nav>

								{/* Display video or image */}
								<div className="d-flex flex-row">
									{item.media?.reddit_video.fallback_url ? (
										<video
											controls
											src={item.media.reddit_video.fallback_url}
											style={{ height: '30%', width: 'auto' }}
											className="border"
										></video>
									) : item.url_overridden_by_dest ? (
										<>
											<img
												src={item.url_overridden_by_dest}
												style={{ width: '30%', height: 'auto' }}
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
							</ListGroup.Item>
						))
				) : (
					<div style={divStyling}>
						<Spinner animation="border" variant="primary"></Spinner>
					</div>
				)}
			</ListGroup>
		</>
	);
}
