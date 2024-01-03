import React, { FC, useCallback, useState } from "react"

import debounce from "lodash.debounce"

import styles from "./Search.module.scss"

export const Search: FC = () => {
	const [value, setValue] = useState("")

	const updateSearchValue = useCallback(
		debounce(str => {
			// dispatch(setSearchValue(str));
		}, 900),
		[]
	)

	const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
		setValue(event.target.value)
		updateSearchValue(event.target.value)
	}

	return (
		<div className={styles.search}>
			<input
				className={styles.searchInput}
				type='text'
				placeholder='Введите дату тренировки'
				onChange={onChangeInput}
				value={value}
			/>
		</div>
	)
}
