import { FC,PropsWithChildren } from "react";
import css from "./nav.module.css";


interface INav extends PropsWithChildren
{
	classes?:
	{
		nav?: string;
		ul?: string;
	};
}
const Nav: FC<INav> = ({ classes,children }) =>
{
	return (
		<nav className={`${css.nav} ${classes?.nav ?? ''}`}>
			<ul className={`${css.nav_list} ${classes?.ul ?? ''}`}>
				{children}
			</ul>

		</nav>
	);
};

export default Nav;
