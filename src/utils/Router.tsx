import { lazy } from "react";

import { RouterPath } from "./enums";

interface IRouterItem
{
	key: string;
	path: string;
	index?: boolean;
	component: JSX.Element | null;
}

const Main = lazy(() => import("../pages/Main"));

const routes: IRouterItem[] =
	[
		{ key: "0x1",path: RouterPath.MAIN,index: true,component: <Main /> }
	];

export default routes;
