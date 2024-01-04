import ReactPlayer from "react-player"

import { FC } from "react"
import { Button } from "../common/Button/Button"
import styles from "./Video.module.scss"

interface IVideoProps {
	title: string
	link?: string
	linkDownload?: string
}

export const Video: FC<IVideoProps> = ({ title, link, linkDownload }) => {
	return (
		<div className={styles.video}>
			<h3 className={styles.videoTitle}>{title}</h3>
			<div className={styles.videoWrap}>
				<div className={styles.videoPlayer}>
					<ReactPlayer url={link} width='100%' height='100%' controls />
				</div>
			</div>
			<div className={styles.videoBtn}>
				<Button link={linkDownload}>Скачать</Button>
			</div>
		</div>
	)
}
