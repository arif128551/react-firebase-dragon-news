import React from "react";
import { LuArrowLeft } from "react-icons/lu";
import { Link } from "react-router";

const NewsDetailsCard = ({ news }) => {
	const { category_id, title, image_url, details } = news;
	return (
		<div className="border border-base-200 rounded-md mb-10 p-7">
			<img className="w-full mb-5" src={image_url} alt="" />
			<h3 className="text-2xl/relaxed font-bold text-primary mb-5">{title}</h3>
			<div className="text-base/relaxed text-c706f6f mb-8">
				<p>{details}</p>
			</div>
			<Link
				to={`/category/${category_id}`}
				className="flex gap-2 items-center justify-center py-2 px-4 bg-secondary max-w-[324px] text-xl text-white"
			>
				<LuArrowLeft /> All news in this category
			</Link>
		</div>
	);
};

export default NewsDetailsCard;
