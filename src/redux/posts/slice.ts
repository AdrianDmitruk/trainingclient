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
	status: Status.SUCCESS,
}

export const postsSlice = createSlice({
	name: "posts",
	initialState,
	reducers: {},
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

export default postsSlice.reducer
