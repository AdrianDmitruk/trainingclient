import axios from "axios"

const baseURL = "https://video.fcenter.by/api/"

const axiosInstance = axios.create({
	baseURL: baseURL,
})

export default axiosInstance
