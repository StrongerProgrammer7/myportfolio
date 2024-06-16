import { ISkill } from "../../utils/interfaces";

export enum Filter
{
	All = "all",
	Front = "front",
	Back = "back",
	Base = "base"
}

const getSkillsByFilter = (skills: ISkill[],filter: string): ISkill[] =>
{
	if (Filter.All === filter)
		return skills;
	return skills.filter((elem) => elem.type === filter);
};

export const getSkillsByName = (skills: ISkill[],value: string,filter: Filter): ISkill[] =>
{
	const temp = skills;
	const goal = value.toLowerCase().trim();
	if (filter === goal)
		return getSkillsByFilter(temp,filter);

	return temp.filter((elem) => 
	{
		const temp = elem.name.toLowerCase().trim();
		if (filter === Filter.All)
			return temp.includes(goal);
		else
			return temp.includes(goal) && elem.type === filter;
	});

};


export const getRandomDelayAnim = (): string =>
{
	return `${Math.random()}s`;
};


export const getRandomRotateBlocks = (showSkills: ISkill[]): Set<number> =>
{
	const MAX = 5;
	let ind = 0;

	const newRotatingSkills = new Set<number>();
	const numberOfSkillsToRotate = Math.floor(Math.random() * showSkills.length);
	while (newRotatingSkills.size < numberOfSkillsToRotate && ind < MAX)
	{
		const randomIndex = Math.floor(Math.random() * showSkills.length);
		ind++;
		newRotatingSkills.add(randomIndex);
	}
	return newRotatingSkills;
};
