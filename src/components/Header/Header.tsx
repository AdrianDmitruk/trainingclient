import { FC } from "react"

import logo from "../../assets/logo.svg"

import { Link } from "react-router-dom"
import styles from "./Header.module.scss"

export const Header: FC = () => {
	return (
		<div className={styles.header}>
			<Link to={"/"} className={styles.headerLink}>
				<img src={logo} alt='logo' className={styles.headerLogo} />
			</Link>
			<div className={styles.headerNav}>
				<Link className={styles.headerNavLink} to={"/"}>
					Январь
				</Link>
				<Link className={styles.headerNavLink} to={"/"}>
					Февраль
				</Link>
				<Link className={styles.headerNavLink} to={"/"}>
					Март
				</Link>
				<Link className={styles.headerNavLink} to={"/"}>
					Апрель
				</Link>
				<Link className={styles.headerNavLink} to={"/"}>
					Май
				</Link>
				<Link className={styles.headerNavLink} to={"/"}>
					Июнь
				</Link>
				<Link className={styles.headerNavLink} to={"/"}>
					Июль
				</Link>
				<Link className={styles.headerNavLink} to={"/"}>
					Август
				</Link>
				<Link className={styles.headerNavLink} to={"/"}>
					Сентябрь
				</Link>
				<Link className={styles.headerNavLink} to={"/"}>
					Октябрь
				</Link>
				<Link className={styles.headerNavLink} to={"/"}>
					Ноябрь
				</Link>
				<Link className={styles.headerNavLink} to={"/"}>
					Декабрь
				</Link>
			</div>
		</div>
	)
}
