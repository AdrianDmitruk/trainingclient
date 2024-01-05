export interface ICreateParams {
	_id?: string
	title: string
	type: string
	day: number
	month: number
	year: number
	location: string
	main: boolean
	mainEvening: boolean
	gameCam: string
	gameCamLink: string
	gameDrone: string
	gameDroneLink: string
	gp: string
	gpLink: string
	upr1: string
	upr1Link: string
	upr2: string
	upr2Link: string
	upr3: string
	upr3Link: string
	upr4: string
	upr4Link: string
	upr5: string
	upr5Link: string
	upr6: string
	upr6Link: string
	gpEvening: string
	gpLinkEvening: string
	upr1Evening: string
	upr1LinkEvening: string
	upr2Evening: string
	upr2LinkEvening: string
	upr3Evening: string
	upr3LinkEvening: string
	upr4Evening: string
	upr4LinkEvening: string
	upr5Evening: string
	upr5LinkEvening: string
	upr6Evening: string
	upr6LinkEvening: string
	tgPost: string
	tgPostEvening: string
}

export interface IPost {
	_id: string
	title: string
	type: string
	day: number
	month: number
	year: number
	main: boolean
	mainEvening: boolean
	gameCam: string
	gameCamLink: string
	gameDrone: string
	gameDroneLink: string
	gp: string
	gpLink: string
	upr1: string
	upr1Link: string
	upr2: string
	upr2Link: string
	upr3: string
	upr3Link: string
	upr4: string
	upr4Link: string
	upr5: string
	upr5Link: string
	upr6: string
	upr6Link: string
	gpEvening: string
	gpLinkEvening: string
	upr1Evening: string
	upr1LinkEvening: string
	upr2Evening: string
	upr2LinkEvening: string
	upr3Evening: string
	upr3LinkEvening: string
	upr4Evening: string
	upr4LinkEvening: string
	upr5Evening: string
	upr5LinkEvening: string
	upr6Evening: string
	upr6LinkEvening: string
	tgPost: string
	tgPostEvening: string
}

export interface IPostsList {
	totalPosts: number
	totalPages: number
	currentPage: number
	posts: IPost[]
}

export enum Status {
	LOADING = "loading",
	SUCCESS = "success",
	ERROR = "error",
}

export type PostsSliceState = {
	data: IPostsList
	searchQuery: string
	key: number
	year: string
	status: Status
}

export interface GetPostsParams {
	search: string
	sortValue: string
	page: string
	year: string
}
