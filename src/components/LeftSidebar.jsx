import React, { Suspense } from "react";
import { CiCalendar } from "react-icons/ci";
import PageLoader from "./ui/PageLoader";
import CategoriesList from "./CategoriesList";
import SportsNewsCard from "./leftSidebarComponents/SportsNewsCard";

const LeftSidebar = ({ sportsNews }) => {
	return (
		<>
			<h3 className="text-xl font-semibold text-primary mb-5">All Category</h3>

			<div className="left-sidebar flex flex-col text-c9f9f9f gap-2 text-lg font-medium mb-8">
				<Suspense fallback={<PageLoader />}>
					<CategoriesList />
				</Suspense>
			</div>

			<div className="flex flex-col gap-4">
				{sportsNews.map((news) => (
					<SportsNewsCard key={news.id} news={news}></SportsNewsCard>
				))}
			</div>
		</>
	);
};

export default LeftSidebar;
