import { configureStore } from "@reduxjs/toolkit"
import { useDispatch } from "react-redux"

import posts from "./posts/slice"

export const store = configureStore({
	reducer: {
		posts,
	},
})

export type RootState = ReturnType<typeof store.getState>

type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
