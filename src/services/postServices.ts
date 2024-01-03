import { AxiosResponse } from "axios"
import axiosInstance from "../api"
import { ICreateParams, IPost, IPostsList } from "./type"

export const getPosts = async ({
	search = "",
	sortValue = "all",
	page = "1",
}) => {
	try {
		const { data }: AxiosResponse<IPostsList> = await axiosInstance.get(
			`posts?searchTerm=${search}&month=${sortValue}&year=2023&sortOrder=desc&page=${page}`
		)
		return { data }
	} catch (error) {
		console.error(error)
	}
}

export const getOnePost = async (id: string) => {
	try {
		const { data }: AxiosResponse<IPost> = await axiosInstance.get(
			`posts/${id}`
		)
		return { data }
	} catch (error) {
		console.error(error)
	}
}

export const createPost = async (params: ICreateParams) => {
	try {
		const { data } = await axiosInstance.post(`posts`, params)
		return {
			data,
			status: true,
		}
	} catch (error) {
		console.error(error)
		return {
			status: false,
		}
	}
}

export const removePost = async (id: string) => {
	try {
		const { data } = await axiosInstance.delete(`posts/${id}`)
		return {
			data,
			status: true,
		}
	} catch (error) {
		console.error(error)
		return {
			status: false,
		}
	}
}
