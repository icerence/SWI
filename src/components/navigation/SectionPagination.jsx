export default function SectionPagination({ section, items, onNavigate, className = '' }) {
  return (
    <nav className={`section-pagination absolute h-auto w-pagination-width ${className}`} aria-label="섹션 탐색">
      <div className="section-pagination__dots" style={{ '--pagination-count': items?.length ?? 0 }}>
        {items?.map((item) => (
          <a
            key={item.id}
            className={`section-pagination__dot${item.id === section ? ' section-pagination__dot--active' : ''}`}
            href={`#${item.id}`}
            aria-label={`${item.label} 섹션으로 이동`}
            aria-current={item.id === section ? 'page' : undefined}
            onClick={(event) => {
              event.preventDefault();
              onNavigate?.(item.id);
            }}
          >
            <span aria-hidden="true" />
          </a>
        ))}
      </div>
    </nav>
  );
}
