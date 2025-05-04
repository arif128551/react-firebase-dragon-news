import React, { useEffect, useState } from "react";
import RightSidebar from "../components/RightSidebar";
import { useLoaderData, useParams } from "react-router";
import NewsDetailsCard from "../components/NewsDetailsCard";

const NewsDetails = () => {
	const [news, setNews] = useState({});
	const { id } = useParams();
	const data = useLoaderData();
	useEffect(() => {
		const newsDetails = data.find((item) => item.id === id);
		setNews(newsDetails);
	}, [data, id]);
	return (
		<div className="grid lg:grid-cols-12 grid-cols-1 container max-w-[1140px] mx-auto gap-6">
			<div className="lg:col-span-9 col-span-12 ml-4 xl:ml-0 mr-4 lg:mr-0">
				<h2 className="text-xl font-semibold text-primary mb-5">Dragon News</h2>
				<NewsDetailsCard news={news}></NewsDetailsCard>
			</div>
			<div className="lg:col-span-3 col-span-12 mr-4 xl:mr-0 ml-4 lg:ml-0">
				<RightSidebar></RightSidebar>
			</div>
		</div>
	);
};

export default NewsDetails;
