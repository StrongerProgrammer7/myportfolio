import { useEffect,useState } from "react";
import Pattern from "../../components/pattern/Pattern";
import SimpleInputText from "../../components/Ui/input/SimpleInput/SimpleInputText";
import css from "./project.module.css";
import Slider from "../../components/slider/Slider";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { IProject } from "../../utils/interfaces";
import CircleBubble from "../../components/circleBubble/CircleBubble";
import background from "../../assets/toDirectionDeep.jpg";
import { useTranslation } from "react-i18next";
import { useAppDispatch } from "../../hooks/useTypedDispatch";
import { project,projectEng } from "../../utils/data/projects";
import { Locales } from "../../utils/enums";
import { setItems,setSlide } from "../../models/slider";

const Project = () => 
{
	const [projectName,setProjectName] = useState<string>("");
	const [projectBySkill,setProjectBySkill] = useState<string>("");
	const items = useTypedSelector((state) => state.slider.items);
	const dispatch = useAppDispatch();
	const [showProjects,setShowProjects] = useState<IProject[]>([]);
	const { t,i18n } = useTranslation();

	useEffect(() =>
	{
		setShowProjects(items);
	},[items]);

	useEffect(() =>
	{
		if (i18n.resolvedLanguage === Locales.EN)
			dispatch(setItems(projectEng));
		else
			dispatch(setItems(project));
	},[i18n.resolvedLanguage]);

	const handleChangeProjectName = (value: string) =>
	{
		setProjectBySkill("");
		if (value === "")
		{
			setShowProjects(items);
			return;
		}
		const temp = [...items].filter((elem) => elem.name.toLowerCase().includes(value.toLowerCase()));
		setShowProjects(temp);
		dispatch(setSlide(0));
	};

	const handleChangeSkill = (value: string) =>
	{
		setProjectName("");
		if (value === "")
		{
			setShowProjects(items);
			return;
		}
		const temp = [...items].filter((elem) => elem.stack.some((skill) => skill.name.toLowerCase().includes(value.toLowerCase())));
		setShowProjects(temp);
		dispatch(setSlide(0));
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
			<div style={{ minHeight: "700px" }}>
				<div className={css.projects_searching}>
					<SimpleInputText
						placeholder={t("project.find_name")}
						value={projectName}
						setText={setProjectName}
						onChange={handleChangeProjectName}
					/>
					<SimpleInputText
						onChange={handleChangeSkill}
						value={projectBySkill}
						setText={setProjectBySkill}
						placeholder={t("project.find_skill")}
					/>
				</div>
				{
					showProjects.length > 0 &&
					<Slider<IProject>
						autoPlay={false}
						autoPlayTime={2000}
						height="auto"
						width="100%"
						items={showProjects} >
						{
							showProjects.map((project,ind) => (
								<CircleBubble titleProject={project.briefly_name ?? project.name} key={"project-slider-" + ind}>

									<div className={css.circle__content}>

										<div className={css.circle__content_wrapper}>
											<h3 className={css.circle__title}>{project.name}</h3>
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
				}

				{
					showProjects.length === 0 &&
					<p className={css.projects_empty}> Sorry, project don't find </p>
				}
			</div>
		</Pattern>
	);
};

export default Project;
