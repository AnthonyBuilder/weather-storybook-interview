import React, { useState } from 'react';
import WeatherHistoryCard from './components/WeatherHistoryCard/WeatherHistoryCard';

export default function App() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Weather History</h1>
        <div id="debug-visible" className="mb-4 text-sm text-slate-600">Tests for use</div>

        <div className="flex gap-3 mb-4">
          <button className="px-3 py-1 border rounded" onClick={() => setLoading((v) => !v)}>{loading ? 'Stop loading' : 'Loading'}</button>
          <button className="px-3 py-1 border rounded" onClick={() => setError((v) => (v ? null : 'Falha na conexão'))}>{error ? 'Clear error' : 'Set error'}</button>
          <button className="px-3 py-1 border rounded" onClick={() => setExpanded((v) => !v)}>{expanded ? 'Collapse' : 'Expand'}</button>
        </div>

        <WeatherHistoryCard loading={loading} error={error} expanded={expanded} onToggle={() => setExpanded(!expanded)} />
      </div>
    </div>
  );
}
