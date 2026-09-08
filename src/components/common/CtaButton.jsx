const variants = {
  filled: 'border-border-dark bg-transparent text-text-primary hover:bg-border-dark hover:text-text-on-dark',
  outlined: 'border-border-dark bg-transparent text-text-primary hover:bg-border-dark hover:text-text-on-dark',
};

export default function CtaButton({
  children,
  variant = 'filled',
  href,
  onClick,
  className = '',
  ariaLabel,
}) {
  const styles = `inline-flex h-[4rem] w-[12.25rem] items-center justify-center rounded-max border-[1.5px] px-space-20 py-0 text-action font-medium ${variants[variant]} ${className}`;

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
