import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import { IInformation,IProject,ISkill } from "../utils/interfaces";
import skills from "../utils/data/skills";


const initialState: IInformation =
{
	skills: skills,
	projects: [],
	isLoad: false,
	error: null,

};


const informationSlice = createSlice(
	{
		name: "information",
		initialState,
		reducers:
		{
			setSkills: (state,action: PayloadAction<ISkill[]>) =>
			{
				state.skills = action.payload;
			},
			setProjects: (state,action: PayloadAction<IProject[]>) =>
			{
				state.projects = action.payload;
			},
			setError: (state,action: PayloadAction<unknown>) =>
			{
				state.error = action.payload;
			},
			setIsLoad: (state,action: PayloadAction<boolean>) =>
			{
				state.isLoad = action.payload;
			}

		}
	}
);

export const { setSkills,setProjects,setError,setIsLoad } = informationSlice.actions;

export default informationSlice.reducer;
