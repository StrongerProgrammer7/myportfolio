
import { PropsWithChildren } from "react";
import css from "./pattern.module.css";

interface IPattern extends PropsWithChildren
{
	classNames:
	{
		background: string;
		block_content: string;
	};
	title?: string;
}
const Pattern = ({ classNames,title,children }: IPattern) =>
{
	return (
		<section className={css.block}>
			<div className={`${css.block__background} ${classNames.background}`}></div>
			<div className={"container " + classNames.block_content}>
				{
					title && <h1 className={css.block_content__title}>{title} </h1>
				}
				{children}
			</div>
		</section>
	);
};

export default Pattern;
