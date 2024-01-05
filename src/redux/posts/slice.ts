import { PayloadAction, createSlice, isAnyOf } from "@reduxjs/toolkit"

import { getPostsFeatch } from "./async-actions"
import { IPostsList, PostsSliceState, Status } from "./types"

const initialState: PostsSliceState = {
	data: {
		totalPosts: 0,
		totalPages: 0,
		currentPage: 0,
		posts: [],
	},
	key: 0,
	year: "2023",
	searchQuery: "",
	status: Status.SUCCESS,
}

export const postsSlice = createSlice({
	name: "posts",
	initialState,
	reducers: {
		setKey(state, action: PayloadAction<number>) {
			state.key = action.payload
		},
		setSearchQuery(state, action: PayloadAction<string>) {
			state.searchQuery = action.payload
		},
		setYear(state, action: PayloadAction<string>) {
			state.year = action.payload
		},
	},
	extraReducers: builder => {
		builder.addCase(
			getPostsFeatch.fulfilled,
			(state, { payload }: PayloadAction<IPostsList>) => {
				state.data = payload
				state.status = Status.SUCCESS
			}
		)

		builder.addMatcher(isAnyOf(getPostsFeatch.pending), state => {
			state.status = Status.LOADING
		})
		builder.addMatcher(isAnyOf(getPostsFeatch.rejected), state => {
			state.status = Status.ERROR
		})
	},
})

export const { setSearchQuery, setKey, setYear } = postsSlice.actions

export default postsSlice.reducer
