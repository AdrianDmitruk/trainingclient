import { FC, useEffect, useState } from "react"
import { Search } from "../../components/common/Search/Search"

import { Card } from "../../components/Card/Card"
import { getPosts } from "../../services/postServices"
import { IPostsList } from "../../services/type"
import styles from "./MainPage.module.scss"

export const MainPage: FC = () => {
	const [data, setData] = useState<IPostsList | null>(null)

	useEffect(() => {
		getPosts({}).then(res => {
			if (res) {
				setData(res.data)
			}
		})
	}, [])

	return (
		<div className={styles.main}>
			<Search />
			<div className={styles.mainCard}>
				{data && data.posts.map(item => <Card key={item._id} data={item} />)}
			</div>
		</div>
	)
}
