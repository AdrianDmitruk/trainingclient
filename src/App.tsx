import { FC } from "react"
import { Route, Routes } from "react-router-dom"
import { MainLayout } from "./components/Layouts/MainLayout/MainLayout"
import { AddPage } from "./page/AddPage/AddPage"
import { AdminPage } from "./page/AdminPage/AdminPage"
import { FullPage } from "./page/FullPage/FullPage"
import { MainPage } from "./page/MainPage/MainPage"

const App: FC = () => {
	return (
		<>
			<Routes>
				<Route element={<MainLayout />}>
					<Route path={"/"} element={<MainPage />} />
					<Route path={"/admin"} element={<AdminPage />} />
					<Route path={"/admin/add"} element={<AddPage />} />
					<Route path={"/post/:date/:id"} element={<FullPage />} />
				</Route>
			</Routes>
		</>
	)
}

export default App
