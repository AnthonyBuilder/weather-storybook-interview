export type DailyItem = {
	time: string; // ISO date e.g. "2025-11-12"
	weather_code: number;
	temperature_2m_mean: number;
	temperature_2m_max: number;
	temperature_2m_min?: number;
	precipitation_sum: number;
	wind_speed_10m_max: number;
	relative_humidity_2m_mean: number;
	shortwave_radiation_sum?: number;
	et0_fao_evapotranspiration?: number;
	sunrise?: string;
	sunset?: string;
	wind_direction_10m_dominant?: number;
	cloud_cover_mean?: number;
};

export type WeatherHistoryData = {
	daily: {
		time: string[];
		weather_code: number[];
		temperature_2m_mean: number[];
		temperature_2m_max: number[];
		temperature_2m_min?: number[];
		precipitation_sum: number[];
		wind_speed_10m_max: number[];
		relative_humidity_2m_mean: number[];
		shortwave_radiation_sum?: number[];
		et0_fao_evapotranspiration?: number[];
		sunrise?: string[];
		sunset?: string[];
		wind_direction_10m_dominant?: number[];
		cloud_cover_mean?: number[];
	};
};