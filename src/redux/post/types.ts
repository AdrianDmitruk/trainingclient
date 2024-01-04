import { IPost } from "../posts/types"

export enum Status {
	LOADING = "loading",
	SUCCESS = "success",
	ERROR = "error",
}

export type PostSliceState = {
	data: IPost
	status: Status
}

export interface GetPostParams {
	id: string
}
