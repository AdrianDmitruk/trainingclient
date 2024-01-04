import { FC, useEffect } from "react"
import { Search } from "../../components/common/Search/Search"

import { useSelector } from "react-redux"
import { Card } from "../../components/Card/Card"
import { Loader } from "../../components/common/Loader/Loader"
import { getPostsFeatch } from "../../redux/posts/async-actions"
import { selectPostsData } from "../../redux/posts/selectors"
import { useAppDispatch } from "../../redux/store"
import styles from "./MainPage.module.scss"

export const MainPage: FC = () => {
	const { data } = useSelector(selectPostsData)
	const dispatch = useAppDispatch()

	useEffect(() => {
		dispatch(
			getPostsFeatch({ search: "", sortValue: "all", page: "1", year: "2023" })
		)
	}, [dispatch])

	return (
		<div className={styles.main}>
			<Search />
			<div className={styles.mainCard}>
				{!data.posts.length && <Loader />}
				{data.posts.map(item => (
					<Card key={item._id} data={item} />
				))}
			</div>
		</div>
	)
}
