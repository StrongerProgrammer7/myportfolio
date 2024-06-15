import { Route,Routes } from 'react-router-dom';
import { RouterPath } from "../utils/enums";
import routes from '../utils/Router';
import Layout from './Layout';

const AppRouter = () =>
{
	return (
		<Routes>
			<Route path={RouterPath.MAIN} element={<Layout />}>
				{
					routes.map((route) =>
					{
						return (
							<Route key={route.key} path={route.path} index={route.index ?? false} element={route.component} />
						);
					})
				}
			</Route>
		</Routes>
	);
};

export default AppRouter;
