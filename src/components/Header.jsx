import React from "react";
import logoImg from "../assets/logo.png";
import { Link } from "react-router";
const Header = () => {
	return (
		<header className="mx-4">
			<div className="text-center mt-12 mb-8">
				<Link to="/">
					<img className="mx-auto mb-5" src={logoImg} alt="Logo" />
				</Link>
				<h3 className="text-primary mb-3 text-lg">Journalism Without Fear or Favour</h3>
				<p className="text-xl font-medium text-primary">
					<span className="text-black">Sunday</span>, November 27, 2025
				</p>
			</div>
		</header>
	);
};

export default Header;
