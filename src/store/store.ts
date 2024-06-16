import { configureStore,Tuple } from "@reduxjs/toolkit";
import infoReducer from "../models/information";
import sliderReducer from "../models/slider";
import logger from "redux-logger";

const combineReducers =
{
	information: infoReducer,
	slider: sliderReducer
};

const store = configureStore(
	{
		reducer: combineReducers,
		devTools: process.env.NODE_ENV !== "production",
		middleware: () => new Tuple(logger)
	}
);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
