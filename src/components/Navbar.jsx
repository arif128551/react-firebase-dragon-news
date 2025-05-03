import React from "react";
import { PiUserCircleFill } from "react-icons/pi";
import { NavLink } from "react-router";
const Navbar = () => {
	return (
		<div className="container max-w-[1140px] mx-auto grid grid-cols-12 pt-8 pb-20">
			<div className="flex gap-4 font-medium text-[#706F6F] lg:col-span-5 lg:col-start-6 text-lg col-span-12 sm:col-span-6 ml-4 lg:ml-0 sm:justify-start justify-center mb-6 sm:mb-0">
				<NavLink to="/" className="hover:text-black transition">
					Home
				</NavLink>
				<NavLink to="/about" className="hover:text-black transition">
					About
				</NavLink>
				<NavLink to="/career" className="hover:text-black transition">
					Career
				</NavLink>
			</div>
			<div className="flex items-center gap-3  col-span-12 sm:col-span-6 lg:col-span-2 justify-center sm:justify-end mr-4 lg:mr-0">
				<div>
					<PiUserCircleFill size={41} />
				</div>

				{/* Login Button */}
				<button className="text-white hover:bg-black transition text-lg font-semibold py-1.5 px-10 bg-primary">
					Login
				</button>
			</div>
		</div>
	);
};

export default Navbar;
