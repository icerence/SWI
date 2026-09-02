const paginationAssets = {
  hero: '/assets/icons/hero-slide-pagination.svg',
  about: '/assets/icons/about-slide-pagination.svg',
  work: '/assets/icons/work-slide-pagination.svg',
  services: '/assets/icons/services-slide-pagination.svg',
  contact: '/assets/icons/contact-slide-pagination.svg',
};

export default function SectionPagination({ section, items, onNavigate, className = '' }) {
  const asset = paginationAssets[section];

  return (
    <nav className={`absolute h-pagination-height w-pagination-width ${className}`} aria-label="섹션 탐색">
      <img className="h-full w-full" src={asset} alt="" aria-hidden="true" />
      <div className="absolute inset-0 grid grid-rows-5">
        {items?.map((item) => (
          <button
            key={item.id}
            className="w-full"
            type="button"
            aria-label={`${item.label} 섹션으로 이동`}
            aria-current={item.id === section ? 'page' : undefined}
            onClick={() => onNavigate?.(item.id)}
          />
        ))}
      </div>
    </nav>
  );
}
