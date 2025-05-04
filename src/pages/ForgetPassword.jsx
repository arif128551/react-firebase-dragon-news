import React, { use } from "react";
import Navbar from "../components/Navbar";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";

const ForgetPassword = () => {
	const { resetPasswordRequest } = use(AuthContext);
	const navigate = useNavigate();
	const handlePasswordRequest = (e) => {
		e.preventDefault();
		const email = e.target.email.value;
		resetPasswordRequest(email)
			.then(() => {
				toast.success("Check your inbox for the password reset link.");
				navigate("/login");
			})
			.catch((error) => {
				toast.error(error);
			});
	};
	return (
		<div className="bg-[#F3F3F3] min-h-screen">
			<Navbar></Navbar>
			<div className="max-w-[752px] md:mx-auto md:p-20 p-8 bg-white rounded-md mx-4">
				<h2 className="mb-12 pb-12 border-b border-base-300 text-4xl font-semibold text-center text-primary">
					Forget Password?
				</h2>
				<form onSubmit={handlePasswordRequest}>
					<div className="fieldset">
						<label className="label text-xl text-primary mb-1 font-semibold">Email address</label>
						<input
							type="email"
							name="email"
							className="input w-full border-0 bg-base-200 text-c9f9f9f p-6"
							placeholder="Enter your email address"
						/>
						{/* {error && (
          <>
            <p className="text-red-400">{error}</p>
          </>
        )} */}
						<button type="submit" className="btn-neutral mt-4 bg-primary p-4 text-xl rounded-md text-white font-medium">
							Request Password Reset
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

export default ForgetPassword;
