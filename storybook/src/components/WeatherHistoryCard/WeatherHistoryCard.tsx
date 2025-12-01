import React from 'react';
import { tokens } from './tokens';
import { WeatherHistoryData, DailyItem } from './types';
import { weatherCodeToIcon, isoToDisplay, buildDailyItems } from './utils';
import SkeletonCard from './SkeletonCard';
import { BsCloudSlash } from "react-icons/bs";

export type Props = {
  data?: WeatherHistoryData | null;
  loading?: boolean;
  error?: string | null;
  expanded?: boolean;
  onToggle?: () => void;
  className?: string;
};

const StatRow: React.FC<{ label: string; value?: string | number; small?: boolean }> = ({ label, value, small }) => (
  <div className="flex items-baseline gap-2">
    <div className={`text-slate-500 ${small ? 'text-xs' : 'text-sm'}`}>{label}</div>
    <div className={`${small ? 'text-sm font-medium' : 'text-base font-semibold'}`}>{value ?? '—'}</div>
  </div>
);

export default function WeatherHistoryCard({
  data,
  loading = false,
  error = null,
  expanded = false,
  onToggle,
  className = '',
}: Props) {
  if (loading) return <SkeletonCard className={className} />;

  if (error) {
    return (
      <div className={`p-4 ${tokens.radius.lg} ${tokens.shadow.card} bg-white ${className}`}>
        <div className="flex items-center gap-3">
          <div className="p-2 bg-rose-100 rounded-full text-rose-600">   <BsCloudSlash className="w-6 h-6" /></div>
          <div>
            <div className="text-sm font-semibold text-rose-700">Erro ao carregar histórico climático</div>
            <div className="text-xs text-slate-500">{error}</div>
          </div>
        </div>
      </div>
    );
  }

  const items: DailyItem[] = data ? buildDailyItems(data) : [];

  if (!data || items.length === 0) {
    return (
      <div className={`p-4 ${tokens.radius.lg} ${tokens.shadow.card} bg-white ${className}`}>
        <div className="text-slate-600 text-sm">Nenhum histórico climático disponível.</div>
      </div>
    );
  }

  const recent = items[items.length - 1];
  const prior = items.slice(0, items.length - 1);

  return (
    <div className={`p-4 ${tokens.radius.lg} ${tokens.shadow.card} bg-white ${className}`}>
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="text-sm font-semibold text-slate-700">Histórico Climático — Últimos 3 dias</div>
          <div className="text-xs text-slate-500">Resumo rápido para decisões de manejo da cana</div>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={onToggle}
            aria-expanded={expanded}
            className="px-3 py-1 text-xs border rounded-md border-slate-200 hover:bg-slate-50"
          >
            {expanded ? 'Colapsar' : 'Expandir'}
          </button>
        </div>
      </div>

      <div className="mt-3 grid grid-cols-1 md:grid-cols-3 gap-3">
        <div className="col-span-1 md:col-span-2 p-3 border rounded-md border-slate-100 bg-sky-50">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="text-3xl">{weatherCodeToIcon(recent.weather_code)}</div>
              <div>
                <div className="text-sm font-semibold text-slate-700">{isoToDisplay(recent.time)}</div>
                <div className="text-xs text-slate-500">Dia mais recente (destaque)</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-lg font-semibold text-slate-800">{recent.temperature_2m_mean.toFixed(1)}°C</div>
              <div className="text-xs text-slate-500">Média</div>
            </div>
          </div>

          <div className="mt-3 grid grid-cols-2 gap-2">
            <StatRow label="Máx / Mín" value={`${recent.temperature_2m_max.toFixed(0)}° / ${recent.temperature_2m_min?.toFixed(0) ?? '—'}°`} />
            <StatRow label="Chuva (mm)" value={recent.precipitation_sum.toFixed(1)} />
            <StatRow label="Vento máx (km/h)" value={recent.wind_speed_10m_max.toFixed(0)} />
            <StatRow label="Umid. (%)" value={`${recent.relative_humidity_2m_mean.toFixed(0)}%`} />
            <StatRow label="Radiação (MJ/m²)" value={recent.shortwave_radiation_sum?.toFixed(1) ?? '—'} />
            <StatRow label="ET0 (mm)" value={recent.et0_fao_evapotranspiration?.toFixed(2) ?? '—'} />
            <StatRow label="Nasc./Pôr" value={`${recent.sunrise?.slice(11) ?? '—'} / ${recent.sunset?.slice(11) ?? '—'}`} />
            <StatRow label="Nuvens (%)" value={`${recent.cloud_cover_mean ?? '—'}`} />
          </div>
        </div>

        <div className="col-span-1 p-3 border rounded-md border-slate-100 bg-white">
          <div className="text-xs text-slate-500 mb-2">Dias anteriores</div>
          <div className="space-y-2">
            {prior.map((it) => (
              <div key={it.time} className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <div className="text-xl">{weatherCodeToIcon(it.weather_code)}</div>
                  <div className="text-xs">
                    <div className="font-medium text-slate-700">{isoToDisplay(it.time)}</div>
                    <div className="text-slate-500 text-[11px]">{it.temperature_2m_mean.toFixed(1)}°C</div>
                  </div>
                </div>
                <div className="text-right text-xs text-slate-600">
                  <div>{it.precipitation_sum.toFixed(1)} mm</div>
                  <div>{it.wind_speed_10m_max.toFixed(0)} km/h</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {expanded && (
        <div className="mt-3 p-3 border rounded-md border-slate-100 bg-white">
          <div className="text-sm font-semibold mb-2">Detalhes do dia mais recente</div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div>
              <StatRow label="Temperatura média" value={`${recent.temperature_2m_mean.toFixed(1)}°C`} />
              <StatRow label="Máx" value={`${recent.temperature_2m_max.toFixed(1)}°C`} />
              <StatRow label="Mín" value={`${recent.temperature_2m_min?.toFixed(1) ?? '—'}°C`} />
            </div>
            <div>
              <StatRow label="Chuva total" value={`${recent.precipitation_sum.toFixed(1)} mm`} />
              <StatRow label="Horas de precipitação" value={`${(recent.precipitation_sum > 0 ? 'Sim' : 'Não')}`} />
              <StatRow label="Cobertura de nuvens" value={`${recent.cloud_cover_mean ?? '—'}%`} />
            </div>
            <div>
              <StatRow label="Vento (máx)" value={`${recent.wind_speed_10m_max.toFixed(0)} km/h`} />
              <StatRow label="Direção (°)" value={`${recent.wind_direction_10m_dominant ?? '—'}`} />
              <StatRow label="ET0 (mm)" value={`${recent.et0_fao_evapotranspiration?.toFixed(2) ?? '—'}`} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
