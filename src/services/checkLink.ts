export interface Items {
	gameCamLink?: string
	gameDroneLink?: string
	gpLink?: string
	upr1Link?: string
	upr2Link?: string
	upr3Link?: string
	upr4Link?: string
	upr5Link?: string
	upr6Link?: string
	gpLinkEvening?: string
	upr1LinkEvening?: string
	upr2LinkEvening?: string
	upr3LinkEvening?: string
	upr4LinkEvening?: string
	upr5LinkEvening?: string
	upr6LinkEvening?: string
}

export const checkYandex = (items: Items): boolean => {
	const properties: (keyof Items)[] = [
		"gameCamLink",
		"gameDroneLink",
		"gpLink",
		"upr1Link",
		"upr2Link",
		"upr3Link",
		"upr4Link",
		"upr5Link",
		"upr6Link",
		"gpLinkEvening",
		"upr1LinkEvening",
		"upr2LinkEvening",
		"upr3LinkEvening",
		"upr4LinkEvening",
		"upr5LinkEvening",
		"upr6LinkEvening",
	]

	for (const property of properties) {
		const value = items[property]
		if (value && value.includes("yandex")) {
			return true
		}
	}

	return false
}
