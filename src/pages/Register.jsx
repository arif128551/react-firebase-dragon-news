import React, { use, useState } from "react";
import Navbar from "../components/Navbar";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";

const Register = () => {
	const [accepted, setAccepted] = useState(true);
	const [nameError, setNameError] = useState("");
	const { createUser, setUser, updateUser } = use(AuthContext);
	const navigate = useNavigate();
	const handleRegister = (e) => {
		e.preventDefault();
		const displayName = e.target.name.value;
		if (!displayName || displayName.length < 5) {
			setNameError("Name can't be empty & Name should be more than 5 character");
			return;
		} else {
			setNameError("");
		}
		const photoURL = e.target.photo.value;
		const email = e.target.email.value;
		const password = e.target.password.value;
		const terms = e.target.terms.checked;
		if (terms) {
			createUser(email, password)
				.then((userCredential) => {
					const user = userCredential.user;
					updateUser({ displayName, photoURL })
						.then(() => {
							setUser({ ...user, displayName, photoURL });
							navigate("/");
						})
						.catch((error) => {
							toast.error(error);
							setUser(user);
						});

					toast.success(
						"Registration successful! A verification link has been sent to your email. Please check your inbox to verify your account."
					);
				})
				.catch((error) => {
					const errorCode = error.code;
					const errorMessage = error.message;
					toast.error(errorMessage);
				});
		} else {
			toast.error("Accept terms and conditions to create account");
		}
	};
	return (
		<div className="bg-[#F3F3F3] min-h-screen">
			<Navbar></Navbar>
			<div className="max-w-[752px] md:mx-auto md:p-20 p-8 bg-white rounded-md mx-4">
				<h2 className="mb-12 pb-12 border-b border-base-300 text-4xl font-semibold text-center text-primary">
					Register your account
				</h2>
				<form onSubmit={handleRegister}>
					<div className="fieldset">
						<label className="label text-xl text-primary mb-1 font-semibold">Name</label>
						{nameError && (
							<>
								<p className="text-red-400 ">{nameError}</p>
							</>
						)}
						<input
							type="text"
							name="name"
							className="input w-full border-0 bg-base-200 text-c9f9f9f p-6 mb-5"
							placeholder="Enter your name"
						/>

						<label className="label text-xl text-primary mb-1 font-semibold">Photo URL</label>
						<input
							type="text"
							name="photo"
							className="input w-full border-0 bg-base-200 text-c9f9f9f p-6 mb-5"
							placeholder="Enter photo url"
						/>
						<label className="label text-xl text-primary mb-1 font-semibold">Email address</label>
						<input
							type="email"
							name="email"
							className="input w-full border-0 bg-base-200 text-c9f9f9f p-6 mb-5"
							placeholder="Enter your email address"
						/>
						<label className="label text-xl text-primary mb-1 font-semibold">Password</label>
						<input
							type="password"
							name="password"
							className="input w-full border-0 bg-base-200 text-c9f9f9f p-6"
							placeholder="Enter your password"
							autoComplete="autocomplete"
						/>
						<label className="label mt-5 text-base">
							<input
								name="terms"
								type="checkbox"
								checked={accepted}
								onChange={(e) => setAccepted(e.target.checked)}
								className="checkbox"
							/>
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
