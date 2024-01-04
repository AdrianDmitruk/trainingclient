import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { AddForm } from "../../components/AddForm/AddForm"
import { getOnePostFeatch } from "../../redux/post/async-actions"
import { selectPostData } from "../../redux/post/selectors"
import { useAppDispatch } from "../../redux/store"
import styles from "./UpdatePage.module.scss"

export const UpdatePage = () => {
	const { data } = useSelector(selectPostData)
	const { id } = useParams()

	const dispatch = useAppDispatch()

	useEffect(() => {
		if (id) {
			dispatch(getOnePostFeatch(id))
		}
	}, [dispatch, id])
	return (
		<div className={styles.add}>
			<AddForm data={data} isUpdate={true} />
		</div>
	)
}
