import { Suspense } from "react";
import Header from "./header/Header";
import { Outlet } from "react-router-dom";
import Footer from "./footer/Footer";

const Layout = () =>
{
	return (
		<Suspense fallback={<p>Loading...</p>}>
			<Header />
			<Outlet />
			<Footer />
		</Suspense>
	);
};

export default Layout;
