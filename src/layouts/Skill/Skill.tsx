import { useTranslation } from "react-i18next";
import css from "./skill.module.css";
import { useEffect,useMemo,useState } from "react";
import SimpleRadio from "../../components/Ui/radios/SimpleRadio/SimpleRadio";
import SimpleInputText from "../../components/Ui/input/SimpleInput/SimpleInputText";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { Locales,TypeSkill } from "../../utils/enums";
import { ISkill } from "../../utils/interfaces";
import { Filter,getRandomDelayAnim,getRandomRotateBlocks,getSkillsByName } from "./utils";
import { useAppDispatch } from "../../hooks/useTypedDispatch";
import { setSkills } from "../../models/information";
import skillsEN from "../../utils/data/skills";
import { skillsRu } from "../../utils/data/skills";
import Pattern from "../../components/pattern/Pattern";

const Skill = () => 
{
	const skills = useTypedSelector((state) => state.skills);
	const dispatch = useAppDispatch();
	const { t,i18n } = useTranslation();

	const [showSkills,setShowSkills] = useState<ISkill[]>(skills);
	const [filter,setFilter] = useState<Filter>(Filter.All);
	const [search,setSearch] = useState<string>("");
	const [isLoad,setIsLoad] = useState<boolean>(false);
	const [isFirstShow,setIsShowFirst] = useState<boolean>(true);
	const [rotatingSkills,setRotatingSkills] = useState(new Set());

	useEffect(() =>
	{
		const timerId = setTimeout(() =>
		{
			setIsShowFirst(false);
		},4000);
		return () => clearTimeout(timerId);
	});

	useEffect(() =>
	{
		setShowSkills(skills);
	},[skills]);

	useEffect(() =>
	{
		if (isFirstShow)
			return;
		const interval = setInterval(() =>
		{
			setRotatingSkills(getRandomRotateBlocks(showSkills));
		},5000);

		return () => clearInterval(interval);
	},[showSkills,isFirstShow]);

	const getClassByTypeSkill = (type: string): string =>
	{
		switch (type) 
		{
			case TypeSkill.FRONT:
				return css.card_front;
			case TypeSkill.BACK:
				return css.card_back;
			default:
				return css.card_base;
		}
	};

	const getRadnomDirectionAppearance = () =>
	{
		if (Math.random() > .5)
			return css.skills_cards__appearance_from_left;
		else
			return css.skills_cards__appearance_from_right;
	};

	const handleChange = (value: string | Filter,isFilter?: boolean) =>
	{
		setIsLoad(true);
		if (isFilter)
			setFilter(value as Filter);
		else
			setSearch(value);
		setIsShowFirst(true);
		setRotatingSkills(new Set());
		setShowSkills(getSkillsByName(skills,value,isFilter ? value as Filter : filter));
		setTimeout(() =>
		{
			setIsLoad(false);
		},500);
	};

	useEffect(() =>
	{
		if (i18n.resolvedLanguage === Locales.EN)
			dispatch(setSkills(skillsEN));
		else
			dispatch(setSkills(skillsRu));
	},[i18n.resolvedLanguage]);

	const filters = useMemo(() => (
		[
			{ label: "All",value: Filter.All },
			{ label: "Front-end",value: Filter.Front },
			{ label: "Back-end",value: Filter.Back },
			{ label: "Base",value: Filter.Base }]
	),[i18n.resolvedLanguage]);

	return (
		<Pattern
			title={t("header.myskills")}
			classNames={
				{
					background: css.myskills__background,
					block_content: css.myskills_content
				}

			}>
			<div className={css.skills}>
				<div className={css.skills_controls}>
					<div className={css.skills_controls__filter}>
						{
							filters.map((filter,ind) => (
								<SimpleRadio
									key={ind}
									defaultChecked={ind === 0}
									value={filter.value}
									label={filter.label}
									colorText="white"
									onChange={(val) => handleChange(val,true)}
								/>
							))
						}
					</div>
					<SimpleInputText
						setText={setSearch}
						value={search}
						placeholder={t("skill.find")}
						onChange={handleChange}
					/>

				</div>
				{
					showSkills.length > 0 &&
					<div className={css.skills_cards}>
						{
							!isLoad
								?
								showSkills.map((skill,ind) => (
									<div
										key={ind}
										className={`${css.skills_cards__card} 
											${getClassByTypeSkill(skill.type)} 
											${rotatingSkills.has(ind) ? css.skill_rotate : ''}
											${isFirstShow ? getRadnomDirectionAppearance() : ""}`}
										style={{ animationDelay: `${getRandomDelayAnim()}` }}>
										{skill.name}
									</div>
								))
								:
								<p>Loading...</p>
						}
					</div>
				}
				{
					showSkills.length === 0 &&
					<p className={css.skills_empty}> {t("skill.study")} &#61;&#41; </p>
				}
			</div>
		</Pattern>

	);
};

export default Skill;
