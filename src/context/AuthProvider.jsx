import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
	createUserWithEmailAndPassword,
	GithubAuthProvider,
	GoogleAuthProvider,
	onAuthStateChanged,
	sendEmailVerification,
	sendPasswordResetEmail,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut,
	updateProfile,
} from "firebase/auth";
import { auth } from "../firebase/firebase.init";

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);
	const createUser = (email, password) => {
		setLoading(true);
		return createUserWithEmailAndPassword(auth, email, password);
	};
	const verifyUser = () => {
		return sendEmailVerification(auth.currentUser);
	};
	const signInUserWithEmailPass = (email, password) => {
		setLoading(true);
		return signInWithEmailAndPassword(auth, email, password);
	};

	const googleSignIn = () => {
		setLoading(true);
		return signInWithPopup(auth, googleProvider);
	};
	const githubSignIn = () => {
		setLoading(true);
		return signInWithPopup(auth, githubProvider);
	};
	const updateUser = (updateUserData) => {
		return updateProfile(auth.currentUser, updateUserData);
	};

	const resetPasswordRequest = (email) => {
		return sendPasswordResetEmail(auth, email);
	};

	const signOutUser = () => {
		setLoading(true);
		return signOut(auth);
	};

	useEffect(() => {
		const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser);
			setLoading(false);
		});
		return () => {
			unSubscribe();
		};
	}, []);

	const userInfo = {
		user,
		setUser,
		createUser,
		verifyUser,
		signInUserWithEmailPass,
		resetPasswordRequest,
		signOutUser,
		updateUser,
		googleSignIn,
		githubSignIn,
		loading,
		setLoading,
	};
	return <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
