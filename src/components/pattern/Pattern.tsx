
import { PropsWithChildren } from "react";
import css from "./pattern.module.css";

interface IPattern extends PropsWithChildren
{
	classNames:
	{
		section?: string;
		background?: string;
		block_content: string;
	};
	img: string;
	title?: string;
}
const Pattern = ({ img,classNames,title,children }: IPattern) =>
{
	return (
		<section className={`${css.block} ${classNames.section ?? ""}`}>
			{/* <div className={`${css.block__background} ${classNames.background}`}></div> */}
			<img src={img} className={`${css.block__background} ${classNames.background ?? ""}`} alt="background" />
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
