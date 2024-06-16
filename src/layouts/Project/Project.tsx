import { useState } from "react";
import Pattern from "../../components/pattern/Pattern";
import SimpleInputText from "../../components/Ui/input/SimpleInput/SimpleInputText";
import css from "./project.module.css";
import Projects from "./Projects";

const items = [
	'Hello, World!',
	'React',
	'Slider',
	'Circle Text',
	'Example'
];
const Project = () => 
{
	const [projectName,setProjectName] = useState<string>("");
	const [projectBySkill,setProjectBySkill] = useState<string>("");
	const handleChangeText = (value: string) =>
	{
		console.log(value);
	};

	return (
		<Pattern
			classNames={
				{
					background: css.projects__background,
					block_content: css.projects_content
				}
			}
			title="Projects">
			<div>
				<div className={css.projects_searching}>
					<SimpleInputText
						placeholder="find project by name"
						value={projectName}
						setText={setProjectName}
						onChange={handleChangeText}
					/>
					<SimpleInputText
						onChange={handleChangeText}
						value={projectBySkill}
						setText={setProjectBySkill}
						placeholder="find project by skill"
					/>
				</div>
				<Projects items={items} />
			</div>
		</Pattern>
	);
};

export default Project;
