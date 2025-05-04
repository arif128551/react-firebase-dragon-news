import React from "react";
import Marquee from "react-fast-marquee";

const LatestNews = ({ latestNews }) => {
	return (
		<div className="container max-w-[1140px] mx-auto flex items-center gap-5 bg-base-200 p-3">
			<button className="bg-secondary text-white text-sm md:text-xl px-4 md:px-6 py-2.5">Latest</button>

			<Marquee>
				<div className="text-sm md:text-lg flex gap-4">
					{latestNews.map((item) => (
						<p key={item.id}>{item.title}</p>
					))}
				</div>
			</Marquee>
		</div>
	);
};

export default LatestNews;
