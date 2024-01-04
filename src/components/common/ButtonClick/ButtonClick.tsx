import { FC, ReactNode } from "react"

import styles from "./ButtonClick.module.scss"

interface IButtonClickProps {
	onClick: () => void
	children: ReactNode
}

export const ButtonClick: FC<IButtonClickProps> = ({
	children: buttonChildren,
	onClick,
}) => {
	return (
		<button onClick={onClick} className={styles.button}>
			{buttonChildren}
		</button>
	)
}
