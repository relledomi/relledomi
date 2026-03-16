type BadgeVariant = 'live' | 'coming_soon' | 'sold_out' | 'team' | 'default';

interface BadgeProps {
  variant?: BadgeVariant;
  children: React.ReactNode;
  className?: string;
}

const variantClasses: Record<BadgeVariant, string> = {
  live: 'bg-accent-turquoise/20 text-accent-turquoise border-accent-turquoise/30',
  coming_soon: 'bg-primary/20 text-primary border-primary/30',
  sold_out: 'bg-secondary/30 text-text-secondary border-border',
  team: 'bg-vox-blue/20 text-vox-blue border-vox-blue/30',
  default: 'bg-background-surface text-text-secondary border-border',
};

export function Badge({ variant = 'default', children, className = '' }: BadgeProps) {
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 text-[10px] font-mono font-bold uppercase tracking-widest border rounded-sm ${variantClasses[variant]} ${className}`}>
      {variant === 'live' && <span className="w-1.5 h-1.5 rounded-full bg-accent-turquoise mr-1.5 animate-pulse" />}
      {children}
    </span>
  );
}
