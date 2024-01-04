import { PayloadAction, createSlice, isAnyOf } from "@reduxjs/toolkit"

import { IPost } from "../posts/types"
import { getOnePostFeatch } from "./async-actions"
import { PostSliceState, Status } from "./types"

const initialState: PostSliceState = {
	data: {
		_id: "",
		title: "",
		type: "",
		day: 0,
		month: 0,
		year: 0,
		main: false,
		mainEvening: true,
		gameCam: "",
		gameCamLink: "",
		gameDrone: "",
		gameDroneLink: "",
		gp: "",
		gpLink: "",
		upr1: "",
		upr1Link: "",
		upr2: "",
		upr2Link: "",
		upr3: "",
		upr3Link: "",
		upr4: "",
		upr4Link: "",
		upr5: "",
		upr5Link: "",
		upr6: "",
		upr6Link: "",
		gpEvening: "",
		gpLinkEvening: "",
		upr1Evening: "",
		upr1LinkEvening: "",
		upr2Evening: "",
		upr2LinkEvening: "",
		upr3Evening: "",
		upr3LinkEvening: "",
		upr4Evening: "",
		upr4LinkEvening: "",
		upr5Evening: "",
		upr5LinkEvening: "",
		upr6Evening: "",
		upr6LinkEvening: "",
		tgPost: "",
		tgPostEvening: "",
	},
	status: Status.SUCCESS,
}

export const postSlice = createSlice({
	name: "post",
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder.addCase(
			getOnePostFeatch.fulfilled,
			(state, { payload }: PayloadAction<IPost>) => {
				state.data = payload
				state.status = Status.SUCCESS
			}
		)

		builder.addMatcher(isAnyOf(getOnePostFeatch.pending), state => {
			state.status = Status.LOADING
		})
		builder.addMatcher(isAnyOf(getOnePostFeatch.rejected), state => {
			state.status = Status.ERROR
		})
	},
})

export default postSlice.reducer
