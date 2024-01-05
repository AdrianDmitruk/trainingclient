import { FC, useEffect } from "react"

import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { Card } from "../../components/Card/Card"
import { Loader } from "../../components/common/Loader/Loader"
import { getPostsFeatch } from "../../redux/posts/async-actions"
import { selectPostsData } from "../../redux/posts/selectors"
import { Status } from "../../redux/posts/types"
import { useAppDispatch } from "../../redux/store"
import styles from "./MonthPage.module.scss"

interface Months {
	[key: string]: string
}

export const MonthPage: FC = () => {
	const { month } = useParams()
	const { data, status, year } = useSelector(selectPostsData)

	const dispatch = useAppDispatch()

	const months: Months = {
		january: "1",
		february: "2",
		march: "3",
		april: "4",
		may: "5",
		june: "6",
		july: "7",
		august: "8",
		september: "9",
		october: "10",
		november: "11",
		december: "12",
	}

	useEffect(() => {
		if (month) {
			const monthKey = month.toLowerCase()
			if (Object.prototype.hasOwnProperty.call(months, monthKey)) {
				const monthNumber = months[monthKey]
				dispatch(
					getPostsFeatch({
						search: "",
						sortValue: monthNumber,
						page: "1",
						year: year,
					})
				)
			} else {
				console.log("Неверное название месяца")
			}
		}
	}, [dispatch, month, year])

	if (status === Status.LOADING) {
		return <Loader />
	}

	return (
		<div className={styles.month}>
			{data.posts.map(item => (
				<Card key={item._id} data={item} />
			))}

			{!data.totalPosts && (
				<h2 className={styles.monthNotTitle}>Тренировок нет =(</h2>
			)}
		</div>
	)
}
