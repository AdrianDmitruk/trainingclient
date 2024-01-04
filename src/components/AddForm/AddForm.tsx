// @ts-nocheck

import {
	Button,
	Input,
	Radio,
	Select,
	Space,
	Typography,
	notification,
} from "antd"
import CheckableTag from "antd/es/tag/CheckableTag"
import { FC, useEffect, useState } from "react"
import { IPost } from "../../redux/posts/types"
import { createPost, updatePost } from "../../services/postServices"
import styles from "./AddForm.module.scss"

const countTreaning = ["Основная тренировка", "Вечерняя"]

interface IAddFormProps {
	data?: IPost
	isUpdate: boolean
}

export const AddForm: FC<IAddFormProps> = ({ data, isUpdate }) => {
	const { Text } = Typography
	const [title, setTitle] = useState<string>()
	const [type, setType] = useState<string>("Тренировка")
	const [day, setDay] = useState<number>()
	const [month, setMonth] = useState<number>()
	const [year, setYear] = useState<number>(2023)
	const [location, setLocation] = useState()
	const [count, setCount] = useState(["Основная тренировка"])
	const [gameCam, setGameCam] = useState()
	const [gameCamLink, setGameCamLink] = useState()
	const [gameDrone, setGameDrone] = useState()
	const [gameDroneLink, setGameDroneLink] = useState()
	const [gp, setGp] = useState()
	const [gpLink, setGpLink] = useState()
	const [gpSelect, setGpSelect] = useState(2)
	const [upr1, setUpr1] = useState()
	const [upr1Link, setUpr1Link] = useState()
	const [upr2, setUpr2] = useState()
	const [upr2Link, setUpr2Link] = useState()
	const [upr3, setUpr3] = useState()
	const [upr3Link, setUpr3Link] = useState()
	const [upr4, setUpr4] = useState()
	const [upr4Link, setUpr4Link] = useState()
	const [upr5, setUpr5] = useState()
	const [upr5Link, setUpr5Link] = useState()
	const [upr6, setUpr6] = useState()
	const [upr6Link, setUpr6Link] = useState()

	const [gpSelectEvening, setGpSelectEvening] = useState(2)
	const [gpEvening, setGpEvening] = useState()
	const [gpLinkEvening, setGpLinkEvening] = useState()

	const [upr1Evening, setUpr1Evening] = useState()
	const [upr1LinkEvening, setUpr1LinkEvening] = useState()
	const [upr2Evening, setUpr2Evening] = useState()
	const [upr2LinkEvening, setUpr2LinkEvening] = useState()
	const [upr3Evening, setUpr3Evening] = useState()
	const [upr3LinkEvening, setUpr3LinkEvening] = useState()
	const [upr4Evening, setUpr4Evening] = useState()
	const [upr4LinkEvening, setUpr4LinkEvening] = useState()
	const [upr5Evening, setUpr5Evening] = useState()
	const [upr5LinkEvening, setUpr5LinkEvening] = useState()
	const [upr6Evening, setUpr6Evening] = useState()
	const [upr6LinkEvening, setUpr6LinkEvening] = useState()
	const [tgPost, setTgPost] = useState()
	const [tgPostEvening, setTgPostEvening] = useState()

	useEffect(() => {
		if (isUpdate) {
			setTitle(data?.title)
			setType(data?.type)
			setDay(data?.day)
			setMonth(data?.month)
			setYear(data?.year)
			if (data?.main) {
				setCount(["Основная тренировка"])
			}
			if (data?.main && data?.mainEvening) {
				setCount(["Основная тренировка", "Вечерняя"])
			}
			setGameCam(data?.gameCam)
			setGameCamLink(data?.gameCamLink)
			setGameDrone(data?.gameDrone)
			setGameDroneLink(data?.gameDroneLink)
			if (data?.gp) {
				setGpSelect(1)
			} else {
				setGpSelect(2)
			}
			setGp(data?.gp)
			setGpLink(data?.gpLink)
			setUpr1(data?.upr1)
			setUpr1Link(data?.upr1Link)
			setUpr2(data?.upr2)
			setUpr2Link(data?.upr2Link)
			setUpr3(data?.upr3)
			setUpr3Link(data?.upr3Link)
			setUpr4(data?.upr4)
			setUpr4Link(data?.upr4Link)
			setUpr5(data?.upr5)
			setUpr5Link(data?.upr5Link)
			setUpr6(data?.upr6)
			setUpr6Link(data?.upr6Link)
			if (data?.gpEvening) {
				setGpSelectEvening(1)
			} else {
				setGpSelectEvening(2)
			}
			setGpEvening(data?.gpEvening)
			setGpLinkEvening(data?.gpLinkEvening)
			setUpr1Evening(data?.upr1Evening)
			setUpr1LinkEvening(data?.upr1LinkEvening)
			setUpr2Evening(data?.upr2Evening)
			setUpr2LinkEvening(data?.upr2LinkEvening)
			setUpr3Evening(data?.upr3Evening)
			setUpr3LinkEvening(data?.upr3LinkEvening)
			setUpr4Evening(data?.upr4Evening)
			setUpr4LinkEvening(data?.upr4LinkEvening)
			setUpr5Evening(data?.upr5Evening)
			setUpr5LinkEvening(data?.upr5LinkEvening)
			setUpr6Evening(data?.upr6Evening)
			setUpr6LinkEvening(data?.upr6LinkEvening)
		}
	}, [data])

	const handleUpdateChange = () => {
		const params = {
			_id: data._id,
			title,
			type,
			day: +day,
			month: +month,
			year: +year,
			location,
			main: !!(count[0] === "Основная тренировка"),
			mainEvening: !!(count[1] === "Вечерняя"),
			gameCam,
			gameCamLink,
			gameDrone,
			gameDroneLink,
			gp,
			gpLink,
			upr1,
			upr1Link,
			upr2,
			upr2Link,
			upr3,
			upr3Link,
			upr4,
			upr4Link,
			upr5,
			upr5Link,
			upr6,
			upr6Link,
			gpEvening,
			gpLinkEvening,
			upr1Evening,
			upr1LinkEvening,
			upr2Evening,
			upr2LinkEvening,
			upr3Evening,
			upr3LinkEvening,
			upr4Evening,
			upr4LinkEvening,
			upr5Evening,
			upr5LinkEvening,
			upr6Evening,
			upr6LinkEvening,
			tgPost,
			tgPostEvening,
		}

		updatePost(params).then(res => {
			if (res.status) {
				notification.success({
					message: "Успешно",
					description: "Пост добавлен",
					duration: 3,
					placement: "topRight",
				})
			} else {
				notification.error({
					message: "Ошибка",
					description: "Ошибка добавления поста",
					duration: 3,
					placement: "topRight",
				})
			}
		})
	}

	const handleChange = () => {
		const params = {
			title,
			type,
			day: +day,
			month: +month,
			year: +year,
			location,
			main: !!(count[0] === "Основная тренировка"),
			mainEvening: !!(count[1] === "Вечерняя"),
			gameCam,
			gameCamLink,
			gameDrone,
			gameDroneLink,
			gp,
			gpLink,
			upr1,
			upr1Link,
			upr2,
			upr2Link,
			upr3,
			upr3Link,
			upr4,
			upr4Link,
			upr5,
			upr5Link,
			upr6,
			upr6Link,
			gpEvening,
			gpLinkEvening,
			upr1Evening,
			upr1LinkEvening,
			upr2Evening,
			upr2LinkEvening,
			upr3Evening,
			upr3LinkEvening,
			upr4Evening,
			upr4LinkEvening,
			upr5Evening,
			upr5LinkEvening,
			upr6Evening,
			upr6LinkEvening,
			tgPost,
			tgPostEvening,
		}

		createPost(params).then(res => {
			if (res.status) {
				notification.success({
					message: "Успешно",
					description: "Пост добавлен",
					duration: 3,
					placement: "topRight",
				})
			} else {
				notification.error({
					message: "Ошибка",
					description: "Ошибка добавления поста",
					duration: 3,
					placement: "topRight",
				})
			}
		})
	}

	const onChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
		setTitle(e.target.value)
	}

	const handleChangeType = value => {
		setType(value)
	}

	const onChangeDay = e => {
		setDay(+e.target.value)
	}

	const onChangeMonth = e => {
		setMonth(+e.target.value)
	}

	const onChangeYear = e => {
		setYear(+e.target.value)
	}

	const onChangeLocation = e => {
		setLocation(e.target.value)
	}

	const handleChangeCount = (tag, checked) => {
		const nextSelectedTags = checked
			? [...count, tag]
			: count.filter(t => t !== tag)
		setCount(nextSelectedTags)
	}

	const onChangeGameCam = e => {
		setGameCam(e.target.value)
	}

	const onChangeGameCamLink = e => {
		setGameCamLink(e.target.value)
	}

	const onChangeGameDrone = e => {
		setGameDrone(e.target.value)
	}

	const onChangeGameDroneLink = e => {
		setGameDroneLink(e.target.value)
	}

	const onChangeGp = e => {
		setGp(e.target.value)
	}

	const onChangeGpLink = e => {
		setGpLink(e.target.value)
	}

	const onChangeGpSelect = e => {
		setGpSelect(e.target.value)
	}

	const onChangeUpr1 = e => {
		setUpr1(e.target.value)
	}

	const onChangeUpr1Link = e => {
		setUpr1Link(e.target.value)
	}

	const onChangeUpr2 = e => {
		setUpr2(e.target.value)
	}

	const onChangeUpr2Link = e => {
		setUpr2Link(e.target.value)
	}

	const onChangeUpr3 = e => {
		setUpr3(e.target.value)
	}

	const onChangeUpr3Link = e => {
		setUpr3Link(e.target.value)
	}

	const onChangeUpr4 = e => {
		setUpr4(e.target.value)
	}

	const onChangeUpr4Link = e => {
		setUpr4Link(e.target.value)
	}

	const onChangeUpr5 = e => {
		setUpr5(e.target.value)
	}

	const onChangeUpr5Link = e => {
		setUpr5Link(e.target.value)
	}

	const onChangeUpr6 = e => {
		setUpr6(e.target.value)
	}

	const onChangeUpr6Link = e => {
		setUpr6Link(e.target.value)
	}

	const onChangeGpEvening = e => {
		setGpEvening(e.target.value)
	}

	const onChangeGpLinkEvening = e => {
		setGpLinkEvening(e.target.value)
	}

	const onChangeGpSelectEvening = e => {
		setGpSelectEvening(e.target.value)
	}

	const onChangeUpr1Evening = e => {
		setUpr1Evening(e.target.value)
	}

	const onChangeUpr1LinkEvening = e => {
		setUpr1LinkEvening(e.target.value)
	}

	const onChangeUpr2Evening = e => {
		setUpr2Evening(e.target.value)
	}

	const onChangeUpr2LinkEvening = e => {
		setUpr2LinkEvening(e.target.value)
	}

	const onChangeUpr3Evening = e => {
		setUpr3Evening(e.target.value)
	}

	const onChangeUpr3LinkEvening = e => {
		setUpr3LinkEvening(e.target.value)
	}

	const onChangeUpr4Evening = e => {
		setUpr4Evening(e.target.value)
	}

	const onChangeUpr4LinkEvening = e => {
		setUpr4LinkEvening(e.target.value)
	}

	const onChangeUpr5Evening = e => {
		setUpr5Evening(e.target.value)
	}

	const onChangeUpr5LinkEvening = e => {
		setUpr5LinkEvening(e.target.value)
	}

	const onChangeUpr6Evening = e => {
		setUpr6Evening(e.target.value)
	}

	const onChangeUpr6LinkEvening = e => {
		setUpr6LinkEvening(e.target.value)
	}

	const onChangeTgPost = e => {
		setTgPost(e.target.value)
	}

	const onChangeTgPostEvening = e => {
		setTgPostEvening(e.target.value)
	}
	return (
		<div className={styles.addContent}>
			<div className={styles.addMargen}>
				<Text strong>Заголовок</Text>
				<Input
					placeholder='Заголовок'
					allowClear
					onChange={onChangeTitle}
					value={title}
				/>
			</div>
			<div className={styles.addMargen}>
				<Text strong>Тип</Text>
				<Select
					defaultValue={type}
					value={type}
					style={{ width: "100%" }}
					allowClear
					onChange={handleChangeType}
					options={[
						{ value: "Тренировка", label: "Тренировка" },
						{ value: "Игра", label: "Игра" },
					]}
				/>
			</div>
			<div className={styles.addDate}>
				<div className={styles.addMargen}>
					<Text strong>День</Text>
					<Input
						placeholder='День'
						allowClear
						onChange={onChangeDay}
						value={day}
					/>
				</div>
				<div className={styles.addMargen}>
					<Text strong>Месяц</Text>
					<Input
						placeholder='Месяц'
						allowClear
						onChange={onChangeMonth}
						value={month}
					/>
				</div>
				<div className={styles.addMargen}>
					<Text strong>Год</Text>
					<Input
						placeholder='Год'
						allowClear
						onChange={onChangeYear}
						value={year}
					/>
				</div>
			</div>
			<div className={styles.addMargen}>
				<Text strong>Локация</Text>
				<Input
					placeholder='Локация'
					allowClear
					onChange={onChangeLocation}
					value={location}
				/>
			</div>
			<div className={styles.addMargen}>
				<Text strong>Коллисество тренировок</Text>
				<Space size={[0, 8]} wrap>
					{countTreaning.map(tag => (
						<CheckableTag
							key={tag}
							checked={count.includes(tag)}
							onChange={checked => handleChangeCount(tag, checked)}
						>
							{tag}
						</CheckableTag>
					))}
				</Space>
			</div>
			{type === "Игра" && (
				<>
					<div className={styles.addMargen}>
						<Text strong>Игра | Камера | YouTube</Text>
						<Input
							placeholder='Игра | Камера | YouTube'
							allowClear
							onChange={onChangeGameCam}
							value={gameCam}
						/>
					</div>
					<div className={styles.addMargen}>
						<Text strong>Игра | Камера | YDisk</Text>
						<Input
							placeholder='Игра | Камера | YDisk'
							allowClear
							onChange={onChangeGameCamLink}
							value={gameCamLink}
						/>
					</div>
					<div className={styles.addMargen}>
						<Text strong>Игра | Камера + Дрон | YouTube</Text>
						<Input
							placeholder='Игра | Камера + Дрон | YouTube'
							allowClear
							onChange={onChangeGameDrone}
							value={gameDrone}
						/>
					</div>
					<div className={styles.addMargen}>
						<Text strong>Игра | Камера + Дрон | YDisk</Text>
						<Input
							placeholder='Игра | Камера + Дрон | YDisk'
							allowClear
							onChange={onChangeGameDroneLink}
							value={gameDroneLink}
						/>
					</div>
				</>
			)}

			{type === "Тренировка" && (
				<>
					<Text style={{ textAlign: "center" }} strong>
						{count[0] && count[1] ? "Утро" : "Основная тренировка"}
					</Text>

					{(count[0] || count[1]) && (
						<>
							<div className={styles.addGp}>
								<Text strong>Вратари?</Text>
								<Radio.Group onChange={onChangeGpSelect} value={gpSelect}>
									<Radio value={1}>Да</Radio>
									<Radio value={2}>Нет</Radio>
								</Radio.Group>
							</div>
							{gpSelect === 1 && (
								<>
									<div className={styles.addMargen}>
										<Text strong>Вратари | YouTube</Text>
										<Input
											placeholder='Вратари | YouTube'
											allowClear
											onChange={onChangeGp}
											value={gp}
										/>
									</div>
									<div className={styles.addMargen}>
										<Text strong>Вратари | YDisk</Text>
										<Input
											placeholder='Вратари | YDisk'
											allowClear
											onChange={onChangeGpLink}
											value={gpLink}
										/>
									</div>
								</>
							)}

							<div className={styles.addMargen}>
								<Text strong>1 упр | YouTube</Text>
								<Input
									placeholder='1 упр | YouTube'
									allowClear
									onChange={onChangeUpr1}
									value={upr1}
								/>
							</div>

							<div className={styles.addMargen}>
								<Text strong>1 упр | YDisk</Text>
								<Input
									placeholder='1 упр | YDisk'
									allowClear
									onChange={onChangeUpr1Link}
									value={upr1Link}
								/>
							</div>

							<div className={styles.addMargen}>
								<Text strong>2 упр | YouTube</Text>
								<Input
									placeholder='2 упр | YouTube'
									allowClear
									onChange={onChangeUpr2}
									value={upr2}
								/>
							</div>

							<div className={styles.addMargen}>
								<Text strong>2 упр | YDisk</Text>
								<Input
									placeholder='2 упр | YDisk'
									allowClear
									onChange={onChangeUpr2Link}
									value={upr2Link}
								/>
							</div>

							<div className={styles.addMargen}>
								<Text strong>3 упр | YouTube</Text>
								<Input
									placeholder='3 упр | YouTube'
									allowClear
									onChange={onChangeUpr3}
									value={upr3}
								/>
							</div>

							<div className={styles.addMargen}>
								<Text strong>3 упр | YDisk</Text>
								<Input
									placeholder='3 упр | YDisk'
									allowClear
									onChange={onChangeUpr3Link}
									value={upr3Link}
								/>
							</div>

							<div className={styles.addMargen}>
								<Text strong>4 упр | YouTube</Text>
								<Input
									placeholder='4 упр | YouTube'
									allowClear
									onChange={onChangeUpr4}
									value={upr4}
								/>
							</div>

							<div className={styles.addMargen}>
								<Text strong>4 упр | YDisk</Text>
								<Input
									placeholder='4 упр | YDisk'
									allowClear
									onChange={onChangeUpr4Link}
									value={upr4Link}
								/>
							</div>

							<div className={styles.addMargen}>
								<Text strong>5 упр | YouTube</Text>
								<Input
									placeholder='5 упр | YouTube'
									allowClear
									onChange={onChangeUpr5}
									value={upr5}
								/>
							</div>

							<div className={styles.addMargen}>
								<Text strong>5 упр | YDisk</Text>
								<Input
									placeholder='5 упр | YDisk'
									allowClear
									onChange={onChangeUpr5Link}
									value={upr5Link}
								/>
							</div>

							<div className={styles.addMargen}>
								<Text strong>6 упр | YouTube</Text>
								<Input
									placeholder='6 упр | YouTube'
									allowClear
									onChange={onChangeUpr6}
									value={upr6}
								/>
							</div>

							<div className={styles.addMargen}>
								<Text strong>6 упр | YDisk</Text>
								<Input
									placeholder='6 упр | YDisk'
									allowClear
									onChange={onChangeUpr6Link}
									value={upr6Link}
								/>
							</div>

							<div className={styles.addMargen}>
								<Text strong>Tg Post</Text>
								<Input
									placeholder='Tg Post'
									allowClear
									onChange={onChangeTgPost}
									value={tgPost}
								/>
							</div>
						</>
					)}
				</>
			)}

			{/* --------------- */}

			<Text style={{ textAlign: "center" }} strong>
				{count[1] && "Вечерняя"}
			</Text>

			{count[1] && (
				<>
					<div className={styles.addGp}>
						<Text strong>Вратари?</Text>
						<Radio.Group
							onChange={onChangeGpSelectEvening}
							value={gpSelectEvening}
						>
							<Radio value={1}>Да</Radio>
							<Radio value={2}>Нет</Radio>
						</Radio.Group>
					</div>
					{gpSelectEvening === 1 && (
						<>
							<div className={styles.addMargen}>
								<Text strong>Вратари | YouTube</Text>
								<Input
									placeholder='Вратари | YouTube'
									allowClear
									onChange={onChangeGpEvening}
									value={gpEvening}
								/>
							</div>
							<div className={styles.addMargen}>
								<Text strong>Вратари | YDisk</Text>
								<Input
									placeholder='Вратари | YDisk'
									allowClear
									onChange={onChangeGpLinkEvening}
									value={gpLinkEvening}
								/>
							</div>
						</>
					)}

					<div className={styles.addMargen}>
						<Text strong>1 упр | YouTube</Text>
						<Input
							placeholder='1 упр | YouTube'
							allowClear
							onChange={onChangeUpr1Evening}
							value={upr1Evening}
						/>
					</div>

					<div className={styles.addMargen}>
						<Text strong>1 упр | YDisk</Text>
						<Input
							placeholder='1 упр | YDisk'
							allowClear
							onChange={onChangeUpr1LinkEvening}
							value={upr1LinkEvening}
						/>
					</div>

					<div className={styles.addMargen}>
						<Text strong>2 упр | YouTube</Text>
						<Input
							placeholder='2 упр | YouTube'
							allowClear
							onChange={onChangeUpr2Evening}
							value={upr2Evening}
						/>
					</div>

					<div className={styles.addMargen}>
						<Text strong>2 упр | YDisk</Text>
						<Input
							placeholder='2 упр | YDisk'
							allowClear
							onChange={onChangeUpr2LinkEvening}
							value={upr2LinkEvening}
						/>
					</div>

					<div className={styles.addMargen}>
						<Text strong>3 упр | YouTube</Text>
						<Input
							placeholder='3 упр | YouTube'
							allowClear
							onChange={onChangeUpr3Evening}
							value={upr3Evening}
						/>
					</div>

					<div className={styles.addMargen}>
						<Text strong>3 упр | YDisk</Text>
						<Input
							placeholder='3 упр | YDisk'
							allowClear
							onChange={onChangeUpr3LinkEvening}
							value={upr3LinkEvening}
						/>
					</div>

					<div className={styles.addMargen}>
						<Text strong>4 упр | YouTube</Text>
						<Input
							placeholder='4 упр | YouTube'
							allowClear
							onChange={onChangeUpr4Evening}
							value={upr4Evening}
						/>
					</div>

					<div className={styles.addMargen}>
						<Text strong>4 упр | YDisk</Text>
						<Input
							placeholder='4 упр | YDisk'
							allowClear
							onChange={onChangeUpr4LinkEvening}
							value={upr4LinkEvening}
						/>
					</div>

					<div className={styles.addMargen}>
						<Text strong>5 упр | YouTube</Text>
						<Input
							placeholder='5 упр | YouTube'
							allowClear
							onChange={onChangeUpr5Evening}
							value={upr5Evening}
						/>
					</div>

					<div className={styles.addMargen}>
						<Text strong>5 упр | YDisk</Text>
						<Input
							placeholder='5 упр | YDisk'
							allowClear
							onChange={onChangeUpr5LinkEvening}
							value={upr5LinkEvening}
						/>
					</div>

					<div className={styles.addMargen}>
						<Text strong>6 упр | YouTube</Text>
						<Input
							placeholder='6 упр | YouTube'
							allowClear
							onChange={onChangeUpr6Evening}
							value={upr6Evening}
						/>
					</div>

					<div className={styles.addMargen}>
						<Text strong>6 упр | YDisk</Text>
						<Input
							placeholder='6 упр | YDisk'
							allowClear
							onChange={onChangeUpr6LinkEvening}
							value={upr6LinkEvening}
						/>
					</div>

					<div className={styles.addMargen}>
						<Text strong>Tg Post</Text>
						<Input
							placeholder='Tg Post'
							allowClear
							onChange={onChangeTgPostEvening}
							value={tgPostEvening}
						/>
					</div>
				</>
			)}
			<Button
				onClick={isUpdate ? handleUpdateChange : handleChange}
				type='primary'
			>
				{isUpdate ? "Редактировать" : "Опубликовать"}
			</Button>
		</div>
	)
}
