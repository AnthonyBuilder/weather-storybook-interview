import React from 'react';
import { tokens } from './tokens';

export default function Loader({ className = '' }: { className?: string }) {
  return (
    <div className={`p-4 ${tokens.radius.lg} ${tokens.shadow.card} ${tokens.colors.bg.card} ${className}`} aria-busy="true" role="status">
      <div className="space-y-3 animate-pulse">
        <div className="h-4 bg-slate-200 rounded w-1/3" />
        <div className="h-24 bg-slate-100 rounded" />
        <div className="h-3 bg-slate-200 rounded w-1/2" />
      </div>
    </div>
  );
}
