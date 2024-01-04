import { FC, useEffect } from "react"

import { notification } from "antd"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { Card } from "../../components/Card/Card"
import { ButtonClick } from "../../components/common/ButtonClick/ButtonClick"
import { getPostsFeatch } from "../../redux/posts/async-actions"
import { selectPostsData } from "../../redux/posts/selectors"
import { useAppDispatch } from "../../redux/store"
import { removePost } from "../../services/postServices"
import styles from "./AdminPage.module.scss"

export const AdminPage: FC = () => {
	const { data } = useSelector(selectPostsData)
	const dispatch = useAppDispatch()
	const navigate = useNavigate()

	useEffect(() => {
		dispatch(
			getPostsFeatch({ search: "", sortValue: "all", page: "1", year: "2023" })
		)
	}, [dispatch])

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
					<ButtonClick onClick={() => handleUpdate(item._id)}>
						Редактировать
					</ButtonClick>
					<ButtonClick onClick={() => handleRemove(item._id)}>
						Удалить
					</ButtonClick>
				</div>
			))}
		</div>
	)
}
