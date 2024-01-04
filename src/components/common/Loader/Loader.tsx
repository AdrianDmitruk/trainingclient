import logo from "../../../assets/logo.svg"

import styles from "./Loader.module.scss"

export const Loader = () => {
	return (
		<div className={styles.wrap}>
			<img className={styles.wrapImg} src={logo} alt='logo' />
		</div>
	)
}
