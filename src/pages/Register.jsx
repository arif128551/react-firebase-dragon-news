import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router";

const Register = () => {
	return (
		<div className="bg-[#F3F3F3] min-h-screen">
			<Navbar></Navbar>
			<div className="max-w-[752px] md:mx-auto md:p-20 p-8 bg-white rounded-md mx-4">
				<h2 className="mb-12 pb-12 border-b border-base-300 text-4xl font-semibold text-center text-primary">
					Register your account
				</h2>
				<form action="">
					<div className="fieldset">
						<label className="label text-xl text-primary mb-1 font-semibold">Name</label>
						<input
							type="text"
							className="input w-full border-0 bg-base-200 text-c9f9f9f p-6 mb-5"
							placeholder="Enter your name"
						/>
						<label className="label text-xl text-primary mb-1 font-semibold">Photo URL</label>
						<input
							type="text"
							className="input w-full border-0 bg-base-200 text-c9f9f9f p-6 mb-5"
							placeholder="Enter photo url"
						/>
						<label className="label text-xl text-primary mb-1 font-semibold">Email address</label>
						<input
							type="email"
							className="input w-full border-0 bg-base-200 text-c9f9f9f p-6 mb-5"
							placeholder="Enter your email address"
						/>
						<label className="label text-xl text-primary mb-1 font-semibold">Password</label>
						<input
							type="password"
							className="input w-full border-0 bg-base-200 text-c9f9f9f p-6"
							placeholder="Enter your password"
						/>
						<label class="label mt-5 text-base">
							<input type="checkbox" checked="checked" class="checkbox" />
							Accept <span className="font-semibold">Term & Conditions</span>
						</label>
						<button className="btn-neutral mt-4 bg-primary p-4 text-xl rounded-md text-white font-medium">
							Register
						</button>
						<p className="text-center mt-3 text-base text-c706f6f">
							Have An Account ?{" "}
							<Link to="/login" className="text-red-500">
								Login
							</Link>
						</p>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Register;
