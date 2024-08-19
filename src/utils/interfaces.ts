
export interface ISkill
{
	name: string;
	type: "front" | "back" | "base";
}

export interface IProject
{
	description: string;
	stack: ISkill[],
	name: string;
	briefly_name?: string;
	link?: string;
	img?: string;
}

export interface IInformation
{
	skills: ISkill[],
	projects: IProject[],
	error?: unknown,
	isLoad: boolean;
}


export interface ISlider
{
	goToSlide?: (number: number) => void;
	items: IProject[];
	slide: number;
}
