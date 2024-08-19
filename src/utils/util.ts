
export const shuffleArray = <T>(arr: T[]): T[] =>
{
	const temp = [...arr];
	let tempElem;
	const max = temp.length - 1;
	const min = 0;
	for (let i = 0; i < temp.length; i++)
	{
		const index = Math.floor(Math.random() * (max - min + 1)) + min;
		tempElem = temp[i];
		temp[i] = temp[index];
		temp[index] = tempElem;
	}
	return temp;
};
