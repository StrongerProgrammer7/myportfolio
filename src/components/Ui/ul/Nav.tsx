import { FC } from "react";
import css from "./nav.module.css";

interface INav
{
	list: string[];
}

const Nav: FC<INav> = ({ list }) =>
{
	return (
		<nav>
			<ul className={css.nav_list}>
				{
					list.map((li,ind) => (
						<li key={ind}><a>{li}</a></li>
					)
					)
				}
			</ul>
		</nav>
	);
};

export default Nav;
