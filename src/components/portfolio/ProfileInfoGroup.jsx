export default function ProfileInfoGroup({ title, items, className = '' }) {
  return (
    <section className={`flex flex-col gap-space-20 ${className}`} aria-labelledby={`${title}-heading`}>
      <h3 id={`${title}-heading`} className="text-section-label font-bold text-text-primary">
        {title}
      </h3>
      <dl className="flex flex-col gap-space-16 text-body font-regular">
        {items.map((item) => (
          <div key={`${item.term}-${item.description}`} className="flex flex-col gap-space-4">
            {(() => {
              const separatorIndex = item.term.indexOf(':');
              const hasValue = separatorIndex !== -1;
              const termLabel = hasValue ? item.term.slice(0, separatorIndex).trim() : item.term;
              const termValue = hasValue ? item.term.slice(separatorIndex + 1).trim() : '';

              return (
                <div className={hasValue ? 'profile-info-group__term' : undefined}>
                  <dt className="text-text-primary">
                    {hasValue ? [...termLabel].map((character, index) => <span key={`${character}-${index}`}>{character}</span>) : termLabel}
                  </dt>
                  {hasValue && <dd className="m-0 text-text-primary">: {termValue}</dd>}
                </div>
              );
            })()}
            {item.description && <dd className="whitespace-pre-line text-left text-text-secondary">{item.description}</dd>}
          </div>
        ))}
      </dl>
    </section>
  );
}
