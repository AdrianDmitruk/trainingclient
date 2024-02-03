import { FC, useEffect, useState } from "react"

import { Pagination, PaginationItem } from "@mui/material"
import { notification } from "antd"
import { useSelector } from "react-redux"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { Card } from "../../components/Card/Card"
import { ButtonClick } from "../../components/common/ButtonClick/ButtonClick"
import { getPostsFeatch } from "../../redux/posts/async-actions"
import { selectPostsData } from "../../redux/posts/selectors"
import { useAppDispatch } from "../../redux/store"
import { checkYandex } from "../../services/checkLink"
import { removePost } from "../../services/postServices"
import styles from "./AdminPage.module.scss"

export const AdminPage: FC = () => {
	const { data, year } = useSelector(selectPostsData)
	const dispatch = useAppDispatch()
	const navigate = useNavigate()

	const location = useLocation()

	const [page, setPage] = useState(
		parseInt(location.search?.split("=")[1] || "1")
	)
	const [pageQty, setPageQty] = useState(0)

	useEffect(() => {
		setPageQty(data.totalPages)
		if (data.totalPages < +page) {
			setPage(1)
		}
	}, [data])

	useEffect(() => {
		dispatch(
			getPostsFeatch({
				search: "",
				sortValue: "all",
				page: page.toString(),
				year: year,
			})
		)
	}, [dispatch, page, year])

	const handleUpdate = (id: string) => {
		navigate(`/admin/update/${id}`)
	}

	const handleRemove = (id: string) => {
		removePost(id).then(res => {
			if (res.status) {
				notification.success({
					message: "Успешно",
					description: "Пост добавлен",
					duration: 3,
					placement: "topRight",
				})
			} else {
				notification.error({
					message: "Ошибка",
					description: "Ошибка добавления поста",
					duration: 3,
					placement: "topRight",
				})
			}
		})
	}

	return (
		<div className={styles.admin}>
			{data.posts.map(item => (
				<div className={styles.adminWrap} key={item._id}>
					<Card data={item} />
					{checkYandex(item) && <div className={styles.adminYan}>Yandex</div>}
					<ButtonClick onClick={() => handleUpdate(item._id)}>
						Редактировать
					</ButtonClick>
					<ButtonClick onClick={() => handleRemove(item._id)}>
						Удалить
					</ButtonClick>
				</div>
			))}

			{!!pageQty && (
				<div className={styles.adminPagination}>
					<Pagination
						variant='outlined'
						shape='rounded'
						count={pageQty}
						page={page}
						onChange={(_, num) => setPage(num)}
						renderItem={item => (
							<PaginationItem
								component={Link}
								className={styles.adminPaginationItem}
								to={`/admin?page=${item.page}`}
								{...item}
							/>
						)}
					/>
				</div>
			)}
		</div>
	)
}
