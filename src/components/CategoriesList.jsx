import React, { use } from "react";
import { NavLink } from "react-router";
const categoriesPromise = fetch("/categories.json").then((res) => res.json());
const CategoriesList = () => {
	const categories = use(categoriesPromise);
	return (
		<>
			{categories.map((category) => (
				<NavLink to={`/category/${category.id}`} key={category.id} className="w-full py-4 px-10">
					{category.name}
				</NavLink>
			))}
		</>
	);
};

export default CategoriesList;
