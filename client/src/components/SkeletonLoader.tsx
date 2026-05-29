import { cn } from '@/utils/helpers';

interface SkeletonProps {
  className?: string;
  variant?: 'rect' | 'circle' | 'text';
  width?: string | number;
  height?: string | number;
}

export default function Skeleton({
  className = '',
  variant = 'rect',
  width,
  height,
}: SkeletonProps) {
  const baseClasses = 'animate-pulse bg-secondary-200 rounded';
  const variantClasses = {
    rect: 'rounded-lg',
    circle: 'rounded-full',
    text: 'h-4 rounded',
  };

  return (
    <div
      className={cn(baseClasses, variantClasses[variant], className)}
      style={{ width, height }}
      aria-hidden="true"
    />
  );
}

// ─── Card Skeleton ─────────────────────────────────────────
export function CardSkeleton() {
  return (
    <div className="card animate-pulse space-y-4">
      <Skeleton variant="text" className="w-3/4" />
      <Skeleton variant="text" className="w-full" />
      <Skeleton variant="text" className="w-1/2" />
      <div className="flex gap-2 pt-2">
        <Skeleton variant="rect" className="h-8 w-20" />
        <Skeleton variant="rect" className="h-8 w-20" />
      </div>
    </div>
  );
}

// ─── Dashboard Skeleton ────────────────────────────────────
export function DashboardSkeleton() {
  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="card animate-pulse">
            <Skeleton variant="text" className="mb-2 w-1/2" />
            <Skeleton variant="text" className="h-8 w-1/3" />
          </div>
        ))}
      </div>

      {/* Table */}
      <div className="card animate-pulse space-y-4">
        <Skeleton variant="text" className="w-1/4" />
        <div className="space-y-3">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="flex gap-4">
              <Skeleton variant="rect" className="h-10 w-10" />
              <div className="flex-1 space-y-2">
                <Skeleton variant="text" className="w-3/4" />
                <Skeleton variant="text" className="w-1/2" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}