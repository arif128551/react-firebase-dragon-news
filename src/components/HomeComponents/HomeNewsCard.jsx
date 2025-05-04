import React from "react";
import { IoEye } from "react-icons/io5";
import StarRating from "../ui/StarRating";
import { Link } from "react-router";
import { CiBookmark, CiShare2 } from "react-icons/ci";
import dayjs from "dayjs";

const HomeNewsCard = ({ news }) => {
	const {
		id,
		title,
		rating: { number },
		author: { name, published_date, img },
		image_url,
		details,
	} = news;
	return (
		<div className="border border-base-200 rounded-md mb-10">
			<div className="flex justify-between items-center bg-base-200 rounded-t-md px-5 py-3">
				<div className="flex items-center gap-4">
					<div className="w-10 h-10">
						<img className="w-10 h-10 rounded-full object-cover object-center" src={img} alt={name} />
					</div>
					<div>
						<h5 className="font-semibold text-primary">{name}</h5>
						<p className="text-sm text-c706f6f">{dayjs(published_date).format("YYYY-MM-DD")}</p>
					</div>
				</div>
				<div>
					<button>
						<CiBookmark size={24} />
					</button>
					<button>
						<CiShare2 size={24} />
					</button>
				</div>
			</div>
			<div className="px-5 py-3.5">
				<div className="mb-5 pb-5 border-b border-base-300">
					<h3 className="text-xl font-bold text-primary mb-5">{title}</h3>
					<img className="rounded-md mb-8" src={image_url} alt={title} />
					<p className="text-c706f6f">{details.split(" ").slice(0, 30).join(" ") + "..."}</p>
					<Link className="text-[#FF8C47]" to={`/news-details/${id}`}>
						Read More
					</Link>
				</div>
				<div className="flex justify-between">
					<div className="flex items-center gap-2.5">
						<div className="flex gap-1">
							{/* <FaStar color="#FF8C47" size={24} />
          <FaStar color="#FF8C47" size={24} />
          <FaStar color="#FF8C47" size={24} />
          <FaStar color="#FF8C47" size={24} />
          <FaStar color="#FF8C47" size={24} /> */}
							<StarRating rating={number} />
						</div>
						<p className="text-c706f6f font-medium">{number}</p>
					</div>
					<div className="flex items-center gap-2.5">
						<div>
							<IoEye size={24} color="#706F6F" />
						</div>
						<p>499</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HomeNewsCard;
