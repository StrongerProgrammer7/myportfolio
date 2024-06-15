import { configureStore,Tuple } from "@reduxjs/toolkit";
import infoReducer from "../models/information";
import logger from "redux-logger";

const store = configureStore(
	{
		reducer: infoReducer,
		devTools: process.env.NODE_ENV !== "production",
		middleware: () => new Tuple(logger)
	}
);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
