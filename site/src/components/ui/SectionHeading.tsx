interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionHeading({ title, subtitle, className = '' }: SectionHeadingProps) {
  return (
    <div className={`mb-10 ${className}`}>
      <h2 className="font-heading text-3xl md:text-4xl text-text-primary tracking-tight">{title}</h2>
      {subtitle && (
        <p className="mt-2 text-text-secondary font-sans text-sm md:text-base max-w-2xl">{subtitle}</p>
      )}
      <div className="mt-4 w-16 h-0.5 bg-primary" />
    </div>
  );
}
