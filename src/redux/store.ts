import { configureStore } from "@reduxjs/toolkit"
import { useDispatch } from "react-redux"

import post from "./post/slice"
import posts from "./posts/slice"

export const store = configureStore({
	reducer: {
		posts,
		post,
	},
})

export type RootState = ReturnType<typeof store.getState>

type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
