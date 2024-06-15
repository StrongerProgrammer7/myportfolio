import { Suspense } from "react";
import Header from "./header/Header";
import { Outlet } from "react-router-dom";

const Layout = () =>
{
	return (
		<Suspense fallback={<p>Loading...</p>}>
			<Header />
			<Outlet />
		</Suspense>
	);
};

export default Layout;
