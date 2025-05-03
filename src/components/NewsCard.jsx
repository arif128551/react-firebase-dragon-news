import React from "react";
import { CiBookmark } from "react-icons/ci";
import { CiShare2 } from "react-icons/ci";
import { Link } from "react-router";
import { FaStar } from "react-icons/fa";
import { IoEye } from "react-icons/io5";
const NewsCard = () => {
	return (
		<div className="border border-base-200 rounded-md mb-10">
			<div className="flex justify-between items-center bg-base-200 rounded-t-md px-5 py-3">
				<div className="flex items-center gap-4">
					<div className="w-10 h-10">
						<img
							className="w-10 h-10 rounded-full object-cover object-center"
							src="https://randomuser.me/api/portraits/women/29.jpg"
							alt=""
						/>
					</div>
					<div>
						<h5 className="font-semibold text-primary">Awlad Hossain</h5>
						<p className="text-sm text-c706f6f">2022-08-21</p>
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
					<h3 className="text-xl font-bold text-primary mb-5">
						Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S. Military Aid Package Yet
					</h3>
					<img
						className="rounded-md mb-8"
						src="https://apparelresources.com/wp-content/uploads/2024/11/Bangladeshs-RMG-exports-decline-by-2.8-per-cent-in-FY-25-Q1-.jpg"
						alt=""
					/>
					<p className="text-c706f6f">
						Wednesday, August 24, 2022 | Tag Cloud Tags: Biden, EU, Euro, Europe, Joe Biden, Military, News, Russia,
						Security, UK, Ukraine, United States, Worthy News (Worthy News) – U.S. President Joe Biden has announced
						nearly $3 billion in new U.S. military a...{" "}
					</p>
					<Link className="text-[#FF8C47]">Read More</Link>
				</div>
				<div className="flex justify-between">
					<div className="flex items-center gap-2.5">
						<div className="flex gap-1">
							<FaStar color="#FF8C47" size={24} />
							<FaStar color="#FF8C47" size={24} />
							<FaStar color="#FF8C47" size={24} />
							<FaStar color="#FF8C47" size={24} />
							<FaStar color="#FF8C47" size={24} />
						</div>
						<p className="text-c706f6f font-medium">4.9</p>
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

export default NewsCard;
