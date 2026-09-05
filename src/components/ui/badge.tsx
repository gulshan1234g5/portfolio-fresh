import * as React from 'react';
import { cn } from '@/lib/utils';

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'secondary' | 'destructive' | 'outline' | 'brand' | 'accent';
}

export function Badge({ className, variant = 'default', ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2',
        {
          'border-transparent bg-brand-500 text-surface-950 hover:bg-brand-500/90': variant === 'default',
          'border-transparent bg-surface-700 text-foreground hover:bg-surface-600': variant === 'secondary',
          'border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/90': variant === 'destructive',
          'text-foreground border-surface-700': variant === 'outline',
          'border-transparent bg-brand-500/10 text-brand-500 border-brand-500/20': variant === 'brand',
          'border-transparent bg-accent-500/10 text-accent-500 border-accent-500/20': variant === 'accent',
        },
        className
      )}
      {...props}
    />
  );
}