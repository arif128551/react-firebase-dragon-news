import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const StarRating = ({ rating }) => {
	const fullStars = Math.floor(rating);
	const hasHalfStar = rating % 1 !== 0;
	const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

	return (
		<div className="flex gap-1">
			{[...Array(fullStars)].map((_, i) => (
				<FaStar key={`full-${i}`} color="#FF8C47" size={24} />
			))}
			{hasHalfStar && <FaStarHalfAlt color="#FF8C47" size={24} />}
			{[...Array(emptyStars)].map((_, i) => (
				<FaRegStar key={`empty-${i}`} color="#FF8C47" size={24} />
			))}
		</div>
	);
};

export default StarRating;
