import AboutMe from "../layouts/AboutMe/AboutMe";
import Greeting from "../layouts/Greeting/Greeting";
import Project from "../layouts/Project/Project";
import Skill from "../layouts/Skill/Skill";


const Main = () =>
{
	return (
		<main>
			<Greeting />
			<Skill />
			<Project />
			<AboutMe />
		</main>
	);
};

export default Main;
