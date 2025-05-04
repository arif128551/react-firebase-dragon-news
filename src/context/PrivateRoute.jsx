import React, { use } from "react";
import { AuthContext } from "./AuthContext";
import { Navigate, useLocation } from "react-router";
import toast from "react-hot-toast";
import PageLoader from "../components/ui/PageLoader";

const PrivateRoute = ({ children }) => {
	const { user, loading } = use(AuthContext);
	const location = useLocation();
	if (loading) {
		return <PageLoader />;
	}

	if (user && user?.email) {
		return children;
	}
	toast.error("You must be logged in to view full blog content.");
	return <Navigate to="/login" state={location.pathname}></Navigate>;
};

export default PrivateRoute;
