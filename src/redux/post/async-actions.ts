/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk } from "@reduxjs/toolkit"

import axiosInstance from "../../api"

import { notification } from "antd"
import { AxiosResponse } from "axios"
import { IPost } from "../posts/types"

export const getOnePostFeatch = createAsyncThunk(
	"post/getOnePostStatus",
	async (id: string, { rejectWithValue }) => {
		try {
			const response: AxiosResponse<IPost> = await axiosInstance.get<IPost>(
				`posts/${id}`
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
