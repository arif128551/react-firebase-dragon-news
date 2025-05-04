import dayjs from "dayjs";
import React from "react";
import { CiCalendar } from "react-icons/ci";

const SportsNewsCard = ({ news }) => {
	const {
		title,
		author: { published_date },
		category_id,
		image_url,
	} = news;
	return (
		<div>
			<img className="rounded-md" src={image_url} alt={title} />
			<h3 className="my-5 text-xl font-semibold text-primary">{title}</h3>
			<div className="flex gap-5">
				<p className="font-medium text-primary">Sports</p>
				<p className="flex items-center gap-1 text-c9f9f9f">
					<CiCalendar /> {dayjs(published_date).format("MMM D, YYYY")}
				</p>
			</div>
		</div>
	);
};

export default SportsNewsCard;
