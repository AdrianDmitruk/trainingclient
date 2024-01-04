/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk } from "@reduxjs/toolkit"

import axiosInstance from "../../api"

import { notification } from "antd"
import { AxiosResponse } from "axios"
import { GetPostsParams, IPostsList } from "./types"

export const getPostsFeatch = createAsyncThunk(
	"posts/getPostsStatus",
	async (
		{
			search = "",
			sortValue = "all",
			page = "1",
			year = "2023",
		}: GetPostsParams,
		{ rejectWithValue }
	) => {
		try {
			const response: AxiosResponse<IPostsList> =
				await axiosInstance.get<IPostsList>(
					`posts?searchTerm=${search}&month=${sortValue}&year=${year}&sortOrder=desc&page=${page}`
				)

			return response.data
		} catch (error: any) {
			const errorMessage = error.response?.data?.message || error.message
			notification.error({
				message: "Ошибка",
				description: errorMessage,
				duration: 3,
				placement: "topRight",
			})
			return rejectWithValue(errorMessage)
		}
	}
)
