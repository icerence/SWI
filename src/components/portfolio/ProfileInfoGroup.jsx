export default function ProfileInfoGroup({ title, items, className = '' }) {
  return (
    <section className={`flex flex-col gap-space-20 ${className}`} aria-labelledby={`${title}-heading`}>
      <h3 id={`${title}-heading`} className="text-section-label font-bold text-text-primary">
        {title}
      </h3>
      <dl className="flex flex-col gap-space-16 text-body font-regular">
        {items.map((item) => (
          <div key={`${item.term}-${item.description}`} className="flex flex-col gap-space-4">
            <dt className="text-text-primary">{item.term}</dt>
            {item.description && <dd className="text-text-secondary">{item.description}</dd>}
          </div>
        ))}
      </dl>
    </section>
  );
}
