import { FC } from "react"

import { Card } from "../../components/Card/Card"
import { Button } from "../../components/common/Button/Button"
import styles from "./AdminPage.module.scss"

export const AdminPage: FC = () => {
	return (
		<div className={styles.admin}>
			<div className={styles.adminWrap}>
				<Card />
				<Button />
			</div>
			<div className={styles.adminWrap}>
				<Card />
				<Button />
			</div>
		</div>
	)
}
