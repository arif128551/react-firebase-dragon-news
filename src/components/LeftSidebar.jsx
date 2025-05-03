import React, { Suspense } from "react";
import { CiCalendar } from "react-icons/ci";
import PageLoader from "./ui/PageLoader";
import CategoriesList from "./CategoriesList";

const LeftSidebar = () => {
	return (
		<>
			<h3 className="text-xl font-semibold text-primary mb-5">All Category</h3>

			<div className="left-sidebar flex flex-col text-c9f9f9f gap-2 text-lg font-medium mb-8">
				<Suspense fallback={<PageLoader />}>
					<CategoriesList />
				</Suspense>
			</div>

			<div className="flex flex-col gap-4">
				<div>
					<img
						className="rounded-md"
						src="https://apparelresources.com/wp-content/uploads/2024/11/Bangladeshs-RMG-exports-decline-by-2.8-per-cent-in-FY-25-Q1-.jpg"
						alt=""
					/>
					<h3 className="my-5 text-xl font-semibold text-primary">
						Bayern Slams Authorities Over Flight Delay to Club World Cup
					</h3>
					<div className="flex gap-5">
						<p className="font-medium text-primary">Sports</p>
						<p className="flex items-center gap-1 text-c9f9f9f">
							<CiCalendar /> Jan 4, 2022
						</p>
					</div>
				</div>
				<div>
					<img
						className="rounded-md"
						src="https://apparelresources.com/wp-content/uploads/2024/11/Bangladeshs-RMG-exports-decline-by-2.8-per-cent-in-FY-25-Q1-.jpg"
						alt=""
					/>
					<h3 className="my-5 text-xl font-semibold text-primary">
						Bayern Slams Authorities Over Flight Delay to Club World Cup
					</h3>
					<div className="flex gap-5">
						<p className="font-medium text-primary">Sports</p>
						<p className="flex items-center gap-1 text-c9f9f9f">
							<CiCalendar /> Jan 4, 2022
						</p>
					</div>
				</div>
				<div>
					<img
						className="rounded-md"
						src="https://apparelresources.com/wp-content/uploads/2024/11/Bangladeshs-RMG-exports-decline-by-2.8-per-cent-in-FY-25-Q1-.jpg"
						alt=""
					/>
					<h3 className="my-5 text-xl font-semibold text-primary">
						Bayern Slams Authorities Over Flight Delay to Club World Cup
					</h3>
					<div className="flex gap-5">
						<p className="font-medium text-primary">Sports</p>
						<p className="flex items-center gap-1 text-c9f9f9f">
							<CiCalendar /> Jan 4, 2022
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default LeftSidebar;
