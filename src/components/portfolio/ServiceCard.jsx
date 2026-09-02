export default function ServiceCard({ number, title, items, accent = false, className = '' }) {
  return (
    <article
      className={`flex flex-col rounded-md border border-border-default bg-surface-white p-space-20 ${accent ? 'border-r-[var(--spacing-space-8)] border-r-text-primary' : ''} ${className}`}
    >
      <p className="text-caption text-text-helper">{number}</p>
      <h3 className="whitespace-pre-line text-cta font-medium leading-9 text-text-primary">{title}</h3>
      <ul className="text-body text-text-secondary">
        {items.map((item) => <li key={item}>{item}</li>)}
      </ul>
    </article>
  );
}
