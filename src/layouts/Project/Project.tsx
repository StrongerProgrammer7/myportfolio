import { useState } from "react";
import Pattern from "../../components/pattern/Pattern";
import SimpleInputText from "../../components/Ui/input/SimpleInput/SimpleInputText";
import css from "./project.module.css";
import Slider from "../../components/slider/Slider";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { IProject } from "../../utils/interfaces";
import CircleBubble from "../../components/circleBubble/CircleBubble";
import background from "../../assets/toDirectionDeep.jpg";

const Project = () => 
{
	const [projectName,setProjectName] = useState<string>("");
	const [projectBySkill,setProjectBySkill] = useState<string>("");
	const projects = useTypedSelector((state) => state.slider.items);
	const handleChangeText = (value: string) =>
	{
		console.log(value);
	};

	return (
		<Pattern
			img={background}
			classNames={
				{
					section: css.projects,
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
				<Slider<IProject> autoPlay={false} autoPlayTime={2000} height="auto" width="100%" >
					{
						projects.map((project,ind) => (
							<CircleBubble titleProject={project.name} key={"project-slider-" + ind}>
								<div className={css.circle__content}>
									<div className={css.circle__content_wrapper}>
										<p className={css.circle__content_text}>{project.description}</p>
										<div className={css.circle__content_stack}>
											{
												project.stack.map((elem,ind) => (
													<span
														key={"project-slider-stack-" + ind}
														className={elem.type === "front" ? css.card_front : css.default_background}>{elem.name}</span>
												))
											}
										</div>
										{
											project.link &&
											<a className={css.circle__content_btn} href={project.link}> More info </a>
										}
									</div>

								</div>
							</CircleBubble>
						))
					}

				</Slider>
			</div>
		</Pattern>
	);
};

export default Project;
