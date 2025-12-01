import React from 'react';
import { tokens } from './tokens';

const SkeletonLine: React.FC<{ width?: string; height?: string; className?: string }> = ({ width = 'w-full', height = 'h-3', className = '' }) => (
  <div className={`${height} ${width} ${className} rounded ${tokens.colors.bg.muted.replace('bg-', 'bg-')} bg-slate-200`} />
);

// Note: tokens.colors.bg.muted is a Tailwind class string like 'bg-slate-100'.
// We use a fallback CSS class if token isn't found correctly in runtime. In practise these tokens are classnames.
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
