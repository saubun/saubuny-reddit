type redditPost = {
	title: string;
	id: string;
	url_overridden_by_dest: string;
	num_comments: number;
	media: mediaObject;
	ups: number;
	distinguished: string | null;
};

type mediaObject = {
	reddit_video: redditVideoObject;
};

type redditVideoObject = {
	fallback_url: string;
};
