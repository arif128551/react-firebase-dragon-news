import React, { use, useState } from "react";
import Navbar from "../components/Navbar";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";

const Login = () => {
	const [error, setError] = useState("");
	const { signInUserWithEmailPass, setLoading } = use(AuthContext);
	const location = useLocation();
	const navigate = useNavigate();
	const handleLogin = (e) => {
		e.preventDefault();
		const email = e.target.email.value;
		const password = e.target.password.value;
		signInUserWithEmailPass(email, password)
			.then((userCredential) => {
				const user = userCredential.user;
				if (user.emailVerified) {
					toast.success("Welcome back! You have successfully logged in.");
					navigate(location.state || "/");
				} else {
					toast.error("Please verify your email address before logging in.");
				}
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				setError(errorCode);
				toast.error(`${errorCode} ${errorMessage}`);
			})
			.finally(() => setLoading(false));
	};
	return (
		<div className="bg-[#F3F3F3] min-h-screen">
			<Navbar></Navbar>
			<div className="max-w-[752px] md:mx-auto md:p-20 p-8 bg-white rounded-md mx-4">
				<h2 className="mb-12 pb-12 border-b border-base-300 text-4xl font-semibold text-center text-primary">
					Login your account
				</h2>
				<form onSubmit={handleLogin}>
					<div className="fieldset">
						<label className="label text-xl text-primary mb-1 font-semibold">Email address</label>
						<input
							type="email"
							name="email"
							className="input w-full border-0 bg-base-200 text-c9f9f9f p-6"
							placeholder="Enter your email address"
						/>
						<label className="label text-xl text-primary mb-1 font-semibold mt-5">Password</label>
						<input
							type="password"
							name="password"
							className="input w-full border-0 bg-base-200 text-c9f9f9f p-6"
							placeholder="Enter your password"
							autoComplete="autocomplete"
						/>
						<div className="mt-2">
							<Link to="/forget-password" className="link link-hover">
								Forgot password?
							</Link>
						</div>
						{error && (
							<>
								<p className="text-red-400">{error}</p>
							</>
						)}
						<button type="submit" className="btn-neutral mt-4 bg-primary p-4 text-xl rounded-md text-white font-medium">
							Login
						</button>
						<p className="text-center mt-3 text-base text-c706f6f">
							Dont’t Have An Account ?{" "}
							<Link to="/register" className="text-red-500">
								Register
							</Link>
						</p>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Login;
