import axiosInstance from "../api"
import { ICreateParams } from "../redux/posts/types"

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

export const updatePost = async (params: ICreateParams) => {
	try {
		if (params._id) {
			const { data } = await axiosInstance.patch(`posts/${params._id}`, params)
			return {
				data,
				status: true,
			}
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
