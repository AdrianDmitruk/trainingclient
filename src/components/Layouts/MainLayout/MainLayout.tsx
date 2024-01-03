import { FC } from "react"
import { Outlet } from "react-router-dom"
import { Header } from "../../Header/Header"

export const MainLayout: FC = () => {
	return (
		<div className='container'>
			<Header />
			<Outlet />
		</div>
	)
}
