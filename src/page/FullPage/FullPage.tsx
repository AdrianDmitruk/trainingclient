import { FC, useEffect, useState } from "react"

import { useParams } from "react-router-dom"
import { Video } from "../../components/Video/Video"
import { getOnePost } from "../../services/postServices"
import { IPost } from "../../services/type"
import styles from "./FullPage.module.scss"

export const FullPage: FC = () => {
	const [data, setData] = useState<IPost | null>(null)
	const { id } = useParams()

	useEffect(() => {
		if (id) {
			getOnePost(id).then(res => {
				if (res?.data) {
					setData(res.data)
				} else {
					setData(null)
				}
			})
		}
	}, [id])

	return (
		<div className={styles.full}>
			<div className={styles.fullTitle}>
				<span>{data?.type}</span>
				<span>{data?.title}</span>
			</div>

			<div className={styles.fullWrap}>
				{data?.main && data.mainEvening && (
					<h2 className={styles.fullWrapTitle}>Утро</h2>
				)}

				{data?.main && (
					<div className={styles.fullWrapCard}>
						{data?.gp && (
							<Video
								title='Вратари'
								link={data?.gp}
								linkDownload={data?.gpLink}
							/>
						)}
						{data?.upr1 && (
							<Video
								title='1 Упр'
								link={data?.upr1}
								linkDownload={data?.upr1Link}
							/>
						)}
						{data?.upr2 && (
							<Video
								title='2 Упр'
								link={data?.upr2}
								linkDownload={data?.upr2Link}
							/>
						)}
						{data?.upr3 && (
							<Video
								title='3 Упр'
								link={data?.upr3}
								linkDownload={data?.upr3Link}
							/>
						)}
						{data?.upr4 && (
							<Video
								title='4 Упр'
								link={data?.upr4}
								linkDownload={data?.upr4Link}
							/>
						)}
						{data?.upr5 && (
							<Video
								title='5 Упр'
								link={data?.upr5}
								linkDownload={data?.upr5Link}
							/>
						)}
						{data?.upr6 && (
							<Video
								title='6 Упр'
								link={data?.upr6}
								linkDownload={data?.upr6Link}
							/>
						)}
					</div>
				)}

				{data?.main && data.mainEvening && (
					<h2 className={styles.fullWrapTitle}>Вечер</h2>
				)}

				{data?.mainEvening && (
					<div className={styles.fullWrapCard}>
						{data?.gpEvening && (
							<Video
								title='Вратари'
								link={data?.gpEvening}
								linkDownload={data?.gpLinkEvening}
							/>
						)}
						{data?.upr1Evening && (
							<Video
								title='1 Упр'
								link={data?.upr1Evening}
								linkDownload={data?.upr1LinkEvening}
							/>
						)}
						{data?.upr2Evening && (
							<Video
								title='2 Упр'
								link={data?.upr2Evening}
								linkDownload={data?.upr2LinkEvening}
							/>
						)}
						{data?.upr3Evening && (
							<Video
								title='3 Упр'
								link={data?.upr3Evening}
								linkDownload={data?.upr3LinkEvening}
							/>
						)}
						{data?.upr4Evening && (
							<Video
								title='4 Упр'
								link={data?.upr4Evening}
								linkDownload={data?.upr4LinkEvening}
							/>
						)}
						{data?.upr5Evening && (
							<Video
								title='5 Упр'
								link={data?.upr5Evening}
								linkDownload={data?.upr5LinkEvening}
							/>
						)}
						{data?.upr6Evening && (
							<Video
								title='6 Упр'
								link={data?.upr6Evening}
								linkDownload={data?.upr6LinkEvening}
							/>
						)}
					</div>
				)}

				{data?.type === "Игра" && (
					<div className={styles.fullWrapCard}>
						{data?.gameDrone && (
							<Video
								title='Камера | Дрон'
								link={data?.gameDrone}
								linkDownload={data?.gameDroneLink}
							/>
						)}
						{data?.gameCam && (
							<Video
								title='Камера'
								link={data?.gameCam}
								linkDownload={data?.gameCamLink}
							/>
						)}
					</div>
				)}
			</div>
		</div>
	)
}
