import { FC } from "react"

import { Link } from "react-router-dom"

import { IPost } from "../../redux/posts/types"
import styles from "./Card.module.scss"

interface ICardProps {
	data: IPost
}

export const Card: FC<ICardProps> = ({ data: cardPostData }) => {
	const { day, month, year, title, type, _id } = cardPostData

	const date = `${day}-${month <= 9 ? "0" + month : month}-${year}`

	return (
		<Link className={styles.card} to={`/post/${date}/${_id}`}>
			{title} | {type}
		</Link>
	)
}
