import React from "react";
import Header from "../components/Header";
import { Outlet, useNavigation } from "react-router";
import PageLoader from "../components/ui/PageLoader";

const Root = () => {
	const navigation = useNavigation();
	const isLoading = navigation.state === "loading";
	return (
		<>
			{isLoading && <PageLoader />}
			<Header></Header>
			<Outlet></Outlet>
		</>
	);
};

export default Root;
