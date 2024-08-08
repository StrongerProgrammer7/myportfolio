import React from 'react';
import css from './link.module.css';

interface ILink
{
	title: string;
	href: string;
	isDefaultClassUse?: boolean;
	newClasses?: string;
	extraClass?: string;
}
const Link: React.FC<ILink> = ({ title,href,newClasses,extraClass,isDefaultClassUse = true }) =>
{
	return (
		<a className={`${isDefaultClassUse ? css.btn : newClasses} ${extraClass}`} href={href}> {title} </a>
	);
};

export default Link;
