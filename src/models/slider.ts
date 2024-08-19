import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import { IProject,ISlider } from "../utils/interfaces";
import { project } from "../utils/data/projects";


const initialState: ISlider =
{
	items: project,
	slide: 0
};


const sliderSlice = createSlice(
	{
		name: "slider",
		initialState,
		reducers:
		{
			setGoToSlide: (state,action: PayloadAction<(number: number) => void>) =>
			{
				state.goToSlide = action.payload;
			},
			setItems: (state,action: PayloadAction<IProject[]>) =>
			{
				state.items = action.payload;
			},
			setSlide: (state,action: PayloadAction<number>) =>
			{
				state.slide = action.payload;
			}

		}
	}
);

export const { setGoToSlide,setItems,setSlide } = sliderSlice.actions;

export default sliderSlice.reducer;
