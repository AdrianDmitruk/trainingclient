import { FC, useState } from "react"

import cn from "classnames"
import { useSelector } from "react-redux"
import { Link, NavLink } from "react-router-dom"
import logo from "../../assets/logo.svg"
import { selectPostsData } from "../../redux/posts/selectors"
import { setKey, setYear } from "../../redux/posts/slice"
import { useAppDispatch } from "../../redux/store"
import styles from "./Header.module.scss"

export const Header: FC = () => {
	const [key, setKeys] = useState<number>(0)
	const { year } = useSelector(selectPostsData)

	const dispatch = useAppDispatch()

	const handleLogoClick = () => {
		setKeys(key + 1)
		dispatch(setKey(key))
	}

	const handleYearClick = () => {
		dispatch(setYear("2023"))
	}

	const handleYearSecondClick = () => {
		dispatch(setYear("2024"))
	}

	return (
		<div className={styles.header}>
			<Link to={"/"} className={styles.headerLink} onClick={handleLogoClick}>
				<img src={logo} alt='logo' className={styles.headerLogo} />
			</Link>
			<div className={styles.headerYear}>
				<span
					onClick={handleYearClick}
					className={cn(styles.headerYearLink, {
						[styles.headerYearLinkActive]: year === "2023",
					})}
				>
					2023
				</span>
				<span
					onClick={handleYearSecondClick}
					className={cn(styles.headerYearLink, {
						[styles.headerYearLinkActive]: year === "2024",
					})}
				>
					2024
				</span>
			</div>
			<div className={styles.headerNav}>
				<NavLink
					to={"/january"}
					className={({ isActive }) =>
						isActive ? styles.headerNavLinkActive : styles.headerNavLink
					}
				>
					Январь
				</NavLink>
				<NavLink
					className={({ isActive }) =>
						isActive ? styles.headerNavLinkActive : styles.headerNavLink
					}
					to={"/february"}
				>
					Февраль
				</NavLink>
				<NavLink
					className={({ isActive }) =>
						isActive ? styles.headerNavLinkActive : styles.headerNavLink
					}
					to={"/march"}
				>
					Март
				</NavLink>
				<NavLink
					className={({ isActive }) =>
						isActive ? styles.headerNavLinkActive : styles.headerNavLink
					}
					to={"/april"}
				>
					Апрель
				</NavLink>
				<NavLink
					className={({ isActive }) =>
						isActive ? styles.headerNavLinkActive : styles.headerNavLink
					}
					to={"/may"}
				>
					Май
				</NavLink>
				<NavLink
					className={({ isActive }) =>
						isActive ? styles.headerNavLinkActive : styles.headerNavLink
					}
					to={"/june"}
				>
					Июнь
				</NavLink>
				<NavLink
					className={({ isActive }) =>
						isActive ? styles.headerNavLinkActive : styles.headerNavLink
					}
					to={"/july"}
				>
					Июль
				</NavLink>
				<NavLink
					className={({ isActive }) =>
						isActive ? styles.headerNavLinkActive : styles.headerNavLink
					}
					to={"/august"}
				>
					Август
				</NavLink>
				<NavLink
					className={({ isActive }) =>
						isActive ? styles.headerNavLinkActive : styles.headerNavLink
					}
					to={"/september"}
				>
					Сентябрь
				</NavLink>
				<NavLink
					className={({ isActive }) =>
						isActive ? styles.headerNavLinkActive : styles.headerNavLink
					}
					to={"/october"}
				>
					Октябрь
				</NavLink>
				<NavLink
					className={({ isActive }) =>
						isActive ? styles.headerNavLinkActive : styles.headerNavLink
					}
					to={"/november"}
				>
					Ноябрь
				</NavLink>
				<NavLink
					className={({ isActive }) =>
						isActive ? styles.headerNavLinkActive : styles.headerNavLink
					}
					to={"/december"}
				>
					Декабрь
				</NavLink>
			</div>
		</div>
	)
}
