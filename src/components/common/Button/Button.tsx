import { FC, ReactNode } from "react"

import { getFileLink } from "../../../services/yandexServies"
import styles from "./Button.module.scss"

interface IButtonProps {
	link?: string
	children: ReactNode
}

export const Button: FC<IButtonProps> = ({
	link,
	children: buttonChildren,
}) => {
	const clickDown = () => {
		if (link) {
			getFileLink(link)
		}
	}
	return (
		<button onClick={clickDown} className={styles.button}>
			{buttonChildren}
		</button>
	)
}
