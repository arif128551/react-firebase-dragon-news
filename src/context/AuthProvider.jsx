import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
	createUserWithEmailAndPassword,
	GoogleAuthProvider,
	onAuthStateChanged,
	sendEmailVerification,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut,
	updateProfile,
} from "firebase/auth";
import { auth } from "../firebase/firebase.init";

const googleProvider = new GoogleAuthProvider();

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

	const updateUser = (updateUserData) => {
		return updateProfile(auth.currentUser, updateUserData);
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
		signOutUser,
		updateUser,
		googleSignIn,
		loading,
	};
	return <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
