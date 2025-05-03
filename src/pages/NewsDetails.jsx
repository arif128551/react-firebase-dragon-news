import React from "react";
import RightSidebar from "../components/RightSidebar";
import { Link } from "react-router";
import { LuArrowLeft } from "react-icons/lu";

const NewsDetails = () => {
	return (
		<div className="grid lg:grid-cols-12 grid-cols-1 container max-w-[1140px] mx-auto gap-6">
			<div className="lg:col-span-9 col-span-12 ml-4 xl:ml-0 mr-4 lg:mr-0">
				<h2 className="text-xl font-semibold text-primary mb-5">Dragon News</h2>
				<div className="border border-base-200 rounded-md mb-10 p-7">
					<img
						className="w-full mb-5"
						src="https://apparelresources.com/wp-content/uploads/2024/11/Bangladeshs-RMG-exports-decline-by-2.8-per-cent-in-FY-25-Q1-.jpg"
						alt=""
					/>
					<h3 className="text-2xl/relaxed font-bold text-primary mb-5">
						Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S. Military Aid Package Yet
					</h3>
					<div className="text-base/relaxed text-c706f6f mb-8">
						<p>
							Wednesday, August 24, 2022 | Tag Cloud Tags: Biden, EU, Euro, Europe, Joe Biden, Military, News, Russia,
							Security, UK, Ukraine, United States, Worthy News (Worthy News) – U.S. President Joe Biden has announced
							nearly $3 billion in new U.S. military aid for Kyiv as Ukraine marked its independence day six months
							after Russia invaded the country.'The United States of America is committed to supporting the people of
							Ukraine as they continue the fight to defend their sovereignty. As part of that commitment, I am proud to
							announce our biggest tranche of security assistance to date: approximately $2. Wednesday, August 24, 2022
							| Tag Cloud Tags: Biden, EU, Euro, Europe, Joe Biden, Military, News, Russia, Security, UK, Ukraine,
							United States, Worthy News (Worthy News) – U.S. President Joe Biden has announced nearly $3 billion in new
							U.S. military aid for Kyiv as Ukraine marked its independence day six months after Russia invaded the
							country.'The United States of America is committed to supporting the people of Ukraine as they continue
							the fight to defend their sovereignty. As part of that commitment, I am proud to announce our biggest
							tranche of security assistance to date: approximately $2.
						</p>
					</div>
					<Link className="flex gap-2 items-center justify-center py-2 px-4 bg-secondary max-w-[324px] text-xl text-white">
						<LuArrowLeft /> All news in this category
					</Link>
				</div>
			</div>
			<div className="lg:col-span-3 col-span-12 mr-4 xl:mr-0 ml-4 lg:ml-0">
				<RightSidebar></RightSidebar>
			</div>
		</div>
	);
};

export default NewsDetails;
