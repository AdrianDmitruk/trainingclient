import { FC } from "react"

import { AddForm } from "../../components/AddForm/AddForm"
import styles from "./AddPage.module.scss"

export const AddPage: FC = () => {
	return (
		<div className={styles.add}>
			<AddForm />
		</div>
	)
}
