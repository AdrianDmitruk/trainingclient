import { FC, useEffect, useState } from "react"
import { Search } from "../../components/common/Search/Search"

import { Pagination, PaginationItem } from "@mui/material"
import { useSelector } from "react-redux"
import { Link, useLocation } from "react-router-dom"
import { Card } from "../../components/Card/Card"
import { Loader } from "../../components/common/Loader/Loader"
import { getPostsFeatch } from "../../redux/posts/async-actions"
import { selectPostsData } from "../../redux/posts/selectors"
import { useAppDispatch } from "../../redux/store"
import styles from "./MainPage.module.scss"

export const MainPage: FC = () => {
	const { data, searchQuery, key, year } = useSelector(selectPostsData)

	const location = useLocation()

	const [page, setPage] = useState(
		parseInt(location.search?.split("=")[1] || "1")
	)
	const [pageQty, setPageQty] = useState(0)

	const dispatch = useAppDispatch()

	useEffect(() => {
		setPageQty(data.totalPages)
		if (data.totalPages < +page) {
			setPage(1)
		}
	}, [data])

	useEffect(() => {
		dispatch(
			getPostsFeatch({
				search: searchQuery,
				sortValue: "all",
				page: page.toString(),
				year: year,
			})
		)
	}, [dispatch, searchQuery, page, key, year])

	return (
		<div className={styles.main}>
			<Search />
			<div className={styles.mainCard}>
				{searchQuery && !data.posts.length && (
					<h2 className={styles.mainCardTitle}>Тренировка не неайдена</h2>
				)}
				{!data.posts.length && <Loader />}
				{data.posts.map(item => (
					<Card key={item._id} data={item} />
				))}
			</div>
			{!!pageQty && (
				<div className={styles.mainPagination}>
					<Pagination
						variant='outlined'
						shape='rounded'
						count={pageQty}
						page={page}
						onChange={(_, num) => setPage(num)}
						renderItem={item => (
							<PaginationItem
								component={Link}
								className={styles.mainPaginationItem}
								to={`/?page=${item.page}`}
								{...item}
							/>
						)}
					/>
				</div>
			)}
		</div>
	)
}
