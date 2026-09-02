const variants = {
  filled: 'border-transparent bg-accent-teal text-text-on-dark',
  outlined: 'border-accent-teal bg-surface-white text-accent-teal',
};

export default function CtaButton({
  children,
  variant = 'filled',
  href,
  onClick,
  className = '',
  ariaLabel,
}) {
  const styles = `inline-flex h-cta-height w-cta-width items-center justify-center rounded-2xl border-2 px-space-40 py-space-18 text-cta font-semibold ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a
        className={styles}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={ariaLabel}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={styles} type="button" onClick={onClick} aria-label={ariaLabel}>
      {children}
    </button>
  );
}
