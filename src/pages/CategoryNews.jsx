import React, { useEffect, useState } from "react";
import LatestNews from "../components/LatestNews";
import Navbar from "../components/Navbar";
import LeftSidebar from "../components/LeftSidebar";
import NewsCard from "../components/NewsCard";
import RightSidebar from "../components/RightSidebar";
import { useLoaderData, useParams } from "react-router";

const CategoryNews = () => {
	const { id } = useParams();
	const catId = parseInt(id);
	const data = useLoaderData();
	const [specificCatNews, setSpecificCatNews] = useState([]);
	const [latestNews, setLatestNews] = useState([]);
	const [sportsNews, setSportsNews] = useState([]);
	useEffect(() => {
		if (catId == 0) {
			setSpecificCatNews(data);
			return;
		} else if (catId == 1) {
			const filteredNewsForTrending = data.filter((news) => news.others.is_today_pick === true);
			setSpecificCatNews(filteredNewsForTrending);
			return;
		} else {
			const filteredNews = data.filter((news) => parseInt(news?.category_id) === catId);
			setSpecificCatNews(filteredNews);
		}
	}, [data, catId]);

	useEffect(() => {
		const latestNewsItems = data.filter((news) => news.others.is_today_pick === true);
		setLatestNews(latestNewsItems);
	}, [data]);

	useEffect(() => {
		const sportsNewsFilter = data
			.filter((news) => news.category_id === 5)
			.sort((a, b) => new Date(b.author.published_date) - new Date(a.author.published_date))
			.slice(0, 3);
		setSportsNews(sportsNewsFilter);
	}, [data]);
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
						{specificCatNews.map((news) => (
							<NewsCard key={news.id} news={news}></NewsCard>
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

export default CategoryNews;
