import React from "react";
import Marquee from "react-fast-marquee";

const LatestNews = () => {
	return (
		<div className="container max-w-[1140px] mx-auto flex items-center gap-5 bg-base-200 p-3">
			<button className="bg-secondary text-white text-sm md:text-xl px-4 md:px-6 py-2.5">Latest</button>
			<Marquee className="text-sm md:text-lg flex gap-4">
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, nobis. 1</p>
				<p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, nobis. 2</p>
			</Marquee>
		</div>
	);
};

export default LatestNews;
