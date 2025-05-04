import React, { use } from "react";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

import swimmingImg from "../assets/swimming.png";
import classImg from "../assets/class.png";
import playgroundImg from "../assets/playground.png";
import advertisementImg from "../assets/advertisement.png";
import { AuthContext } from "../context/AuthContext";
const RightSidebar = () => {
	const { user } = use(AuthContext);
	return (
		<>
			{!user && (
				<>
					<div className="mb-8">
						<h3 className="text-xl font-semibold text-primary mb-5">Login With</h3>
						<button className="flex items-center justify-center gap-2 text-base  rounded-md border border-blue-500 text-blue-500 w-full py-2 px-4 font-medium mb-2 cursor-pointer">
							<FaGoogle /> Login with Google
						</button>
						<button className="flex items-center justify-center gap-2 text-base  rounded-md border border-gray-800 text-gray-800 w-full py-2 px-4 font-medium cursor-pointer">
							<FaGithub /> Login with Google
						</button>
					</div>
				</>
			)}

			<div className="mb-5">
				<h3 className="text-xl font-semibold text-primary mb-5">Find Us On</h3>
				<div className="w-full border border-base-300 rounded-md">
					<Link className="p-4 flex items-center gap-2 font-medium text-c706f6f border-b border-base-300">
						<div className="w-8 h-8 rounded-full bg-base-200 flex items-center justify-center">
							<FaFacebookF size={14} color="#3B599C" />
						</div>{" "}
						Facebook
					</Link>
					<Link className="p-4 flex items-center gap-2 font-medium text-c706f6f border-b border-base-300">
						<div className="w-8 h-8 rounded-full bg-base-200 flex items-center justify-center">
							<FaXTwitter size={14} color="#58A7DE" />
						</div>{" "}
						Twitter
					</Link>
					<Link className="p-4 flex items-center gap-2 font-medium text-c706f6f">
						<div className="w-8 h-8 rounded-full bg-base-200 flex items-center justify-center">
							<FaInstagram size={14} color="#D82D7E" />
						</div>{" "}
						Instagram
					</Link>
				</div>
			</div>
			<div className="bg-base-200 py-4 px-1">
				<h3 className="text-xl font-semibold text-primary mb-5 px-4">Q-Zone</h3>
				<div>
					<img src={swimmingImg} alt="swimming Image" />
					<img src={classImg} alt="class Image" />
					<img src={playgroundImg} alt="playground Image" />
				</div>
			</div>
			<div className="my-4">
				<img src={advertisementImg} alt="advertisement" />
			</div>
		</>
	);
};

export default RightSidebar;
