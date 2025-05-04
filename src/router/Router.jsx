import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import NewsDetails from "../pages/NewsDetails";
import Login from "../pages/Login";
import Register from "../pages/Register";
import About from "../pages/About";
import Career from "../pages/Career";
import PageLoader from "../components/ui/PageLoader";
import CategoryNews from "../pages/CategoryNews";
import PrivateRoute from "../context/PrivateRoute";

export const router = createBrowserRouter([
	{
		path: "/",
		Component: Root,
		children: [
			{
				index: true,
				Component: Home,
				hydrateFallbackElement: <PageLoader />,
				loader: () => fetch("/news.json"),
			},
			{
				path: "/category/:id",
				Component: CategoryNews,
				loader: () => fetch("/news.json"),
			},
			{
				path: "/news-details/:id",
				element: (
					<PrivateRoute>
						<NewsDetails></NewsDetails>
					</PrivateRoute>
				),
				hydrateFallbackElement: <PageLoader />,
				loader: () => fetch("/news.json"),
			},
			{
				path: "/about",
				Component: About,
			},
			{
				path: "/career",
				Component: Career,
			},
		],
	},
	{
		path: "/login",
		Component: Login,
	},
	{
		path: "/register",
		Component: Register,
	},
]);
