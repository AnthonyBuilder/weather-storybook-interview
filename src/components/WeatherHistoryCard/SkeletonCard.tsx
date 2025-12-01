import React from 'react';
import { tokens } from './tokens';

export default function SkeletonCard({ className = '' }: { className?: string }) {
  return (
    <div className={`p-4 ${tokens.radius.lg} ${tokens.shadow.card} ${tokens.colors.bg.card} ${className} animate-pulse`} aria-busy="true" role="status">

      <div className="flex items-start justify-between gap-3">
        <div className="space-y-1 w-2/3">
          <div className="h-4 bg-slate-200 rounded w-32" />
          <div className="h-3 bg-slate-100 rounded w-48" />
        </div>
        <div className="w-20 h-8 bg-slate-100 rounded" />
      </div>

      <div className="mt-3 grid grid-cols-1 md:grid-cols-3 gap-3">
        <div className="col-span-1 md:col-span-2 p-3 border rounded-md border-slate-100 bg-sky-50">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="text-3xl">&nbsp;</div>
              <div>
                <div className="h-4 bg-slate-200 rounded w-20" />
                <div className="h-3 bg-slate-100 rounded w-32 mt-1" />
              </div>
            </div>
            <div className="text-right">
              <div className="h-6 bg-slate-200 rounded w-16 ml-auto" />
              <div className="h-3 bg-slate-100 rounded w-12 mt-1 ml-auto" />
            </div>
          </div>

          <div className="mt-3 grid grid-cols-2 gap-2">
            <div className="h-8 bg-slate-200 rounded w-full" />
            <div className="h-8 bg-slate-200 rounded w-full" />
            <div className="h-8 bg-slate-200 rounded w-full" />
            <div className="h-8 bg-slate-200 rounded w-full" />
            <div className="h-8 bg-slate-200 rounded w-full" />
            <div className="h-8 bg-slate-200 rounded w-full" />
            <div className="h-8 bg-slate-200 rounded w-full" />
            <div className="h-8 bg-slate-200 rounded w-full" />
          </div>
        </div>

        <div className="col-span-1 p-3 border rounded-md border-slate-100 bg-white">
          <div className="h-3 bg-slate-200 rounded w-24 mb-2" />
          <div className="space-y-2">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 bg-slate-200 rounded" />
                <div className="h-4 bg-slate-200 rounded w-20" />
              </div>
              <div className="h-4 bg-slate-200 rounded w-16" />
            </div>

            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 bg-slate-200 rounded" />
                <div className="h-4 bg-slate-200 rounded w-20" />
              </div>
              <div className="h-4 bg-slate-200 rounded w-16" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
