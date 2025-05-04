import React, { use } from "react";
import Header from "../components/Header";
import { Outlet, useNavigation } from "react-router";
import PageLoader from "../components/ui/PageLoader";
import { AuthContext } from "../context/AuthContext";

const Root = () => {
	const { loading } = use(AuthContext);
	const navigation = useNavigation();
	const isLoading = navigation.state === "loading";
	if (loading || isLoading) {
		<PageLoader />;
		return;
	}
	return (
		<>
			<Header></Header>
			<Outlet></Outlet>
		</>
	);
};

export default Root;
