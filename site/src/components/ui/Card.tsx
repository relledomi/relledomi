import { Badge } from './Badge';

interface CardProps {
  title: string;
  subtitle?: string;
  badge?: { label: string; variant?: 'live' | 'coming_soon' | 'sold_out' | 'team' | 'default' };
  imagePlaceholder?: string;
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export function Card({ title, subtitle, badge, imagePlaceholder, children, className = '', onClick }: CardProps) {
  return (
    <div
      onClick={onClick}
      className={`group bg-background-surface border border-border rounded-sm overflow-hidden transition-all hover:border-primary/40 hover:shadow-[0_0_20px_rgba(194,24,91,0.1)] ${onClick ? 'cursor-pointer' : ''} ${className}`}
    >
      {/* Image area */}
      <div className="aspect-[4/3] bg-background-alt flex items-center justify-center overflow-hidden">
        {imagePlaceholder ? (
          <span className="text-4xl">{imagePlaceholder}</span>
        ) : (
          <div className="w-12 h-12 border-2 border-border rounded-sm" />
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="flex items-start justify-between gap-2 mb-1">
          <h3 className="font-heading text-sm text-text-primary group-hover:text-primary transition-colors">
            {title}
          </h3>
          {badge && <Badge variant={badge.variant}>{badge.label}</Badge>}
        </div>
        {subtitle && (
          <p className="text-xs text-text-secondary font-sans leading-relaxed">{subtitle}</p>
        )}
        {children}
      </div>
    </div>
  );
}
