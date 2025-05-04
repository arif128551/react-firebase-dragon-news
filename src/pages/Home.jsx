import React, { useEffect, useState } from "react";
import LatestNews from "../components/LatestNews";
import Navbar from "../components/Navbar";
import LeftSidebar from "../components/LeftSidebar";
import RightSidebar from "../components/RightSidebar";
import { useLoaderData } from "react-router";
import HomeNewsCard from "../components/HomeComponents/HomeNewsCard";

const Home = () => {
	const [latestNews, setLatestNews] = useState([]);
	const [sportsNews, setSportsNews] = useState([]);
	const newsItems = useLoaderData();
	useEffect(() => {
		const latestNewsItems = newsItems.filter((news) => news.others.is_today_pick === true);
		setLatestNews(latestNewsItems);
	}, [newsItems]);

	useEffect(() => {
		const sportsNewsFilter = newsItems
			.filter((news) => news.category_id === 5)
			.sort((a, b) => new Date(b.author.published_date) - new Date(a.author.published_date))
			.slice(0, 3);
		setSportsNews(sportsNewsFilter);
	}, [newsItems]);
	return (
		<div>
			<LatestNews latestNews={latestNews}></LatestNews>
			<Navbar></Navbar>
			<div className="grid grid-cols-12 container max-w-[1140px] mx-auto gap-6">
				<div className="lg:col-span-3 col-span-12 order-2 lg:order-1 xl:ml-0 ml-4 lg:mr-0 mr-4">
					<LeftSidebar sportsNews={sportsNews}></LeftSidebar>
				</div>
				<div className="lg:col-span-6 col-span-12 order-1 lg:order-2 lg:mx-0 mx-4">
					<h2 className="text-xl font-semibold text-primary mb-5">Dragon News Home</h2>
					<div className="flex flex-col gap-8">
						{newsItems.map((news) => (
							<HomeNewsCard key={news.id} news={news}></HomeNewsCard>
						))}
					</div>
				</div>
				<div className="lg:col-span-3 col-span-12 order-3 lg:order-3 xl:mr-0 mr-4 lg:ml-0 ml-4">
					<RightSidebar></RightSidebar>
				</div>
			</div>
		</div>
	);
};

export default Home;
