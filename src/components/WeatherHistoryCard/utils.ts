import { DailyItem } from './types';

export const weatherCodeToIcon = (code: number) => {
	if (code >= 80) return '🌧️';
	if (code >= 50) return '🌦️';
	if (code >= 3) return '⛅';
	if (code === 0) return '☀️';
	return '🌤️';
};

export const isoToDisplay = (iso: string) => {
	const d = new Date(iso + 'T00:00:00');
	return d.toLocaleDateString(undefined, { day: '2-digit', month: 'short' });
};

export const buildDailyItems = (data: any): DailyItem[] => {
	if (!data?.daily) return [];
	const d = data.daily;
	const len = d.time.length;
	const items: DailyItem[] = [];
	for (let i = 0; i < len; i++) {
		items.push({
			time: d.time[i],
			weather_code: d.weather_code[i],
			temperature_2m_mean: d.temperature_2m_mean[i],
			temperature_2m_max: d.temperature_2m_max[i],
			temperature_2m_min: d.temperature_2m_min?.[i],
			precipitation_sum: d.precipitation_sum[i],
			wind_speed_10m_max: d.wind_speed_10m_max[i],
			relative_humidity_2m_mean: d.relative_humidity_2m_mean[i],
			shortwave_radiation_sum: d.shortwave_radiation_sum?.[i],
			et0_fao_evapotranspiration: d.et0_fao_evapotranspiration?.[i],
			sunrise: d.sunrise?.[i],
			sunset: d.sunset?.[i],
			wind_direction_10m_dominant: d.winddirection_10m_dominant?.[i] ?? d.wind_direction_10m_dominant?.[i],
			cloud_cover_mean: d.cloud_cover_mean?.[i],
		});
	}
	return items;
};