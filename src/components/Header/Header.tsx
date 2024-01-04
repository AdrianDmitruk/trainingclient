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
				<Link className={styles.headerNavLink} to={"/january"}>
					Январь
				</Link>
				<Link className={styles.headerNavLink} to={"/february"}>
					Февраль
				</Link>
				<Link className={styles.headerNavLink} to={"/march"}>
					Март
				</Link>
				<Link className={styles.headerNavLink} to={"/april"}>
					Апрель
				</Link>
				<Link className={styles.headerNavLink} to={"/may"}>
					Май
				</Link>
				<Link className={styles.headerNavLink} to={"/june"}>
					Июнь
				</Link>
				<Link className={styles.headerNavLink} to={"/july"}>
					Июль
				</Link>
				<Link className={styles.headerNavLink} to={"/august"}>
					Август
				</Link>
				<Link className={styles.headerNavLink} to={"/september"}>
					Сентябрь
				</Link>
				<Link className={styles.headerNavLink} to={"/october"}>
					Октябрь
				</Link>
				<Link className={styles.headerNavLink} to={"/november"}>
					Ноябрь
				</Link>
				<Link className={styles.headerNavLink} to={"/december"}>
					Декабрь
				</Link>
			</div>
		</div>
	)
}
