export default function ProjectSlide({ image, imageAlt, eyebrow, title, description, metadata = [], tags = [] }) {
  return (
    <article className="grid items-center">
      <img className="h-full w-full object-cover" src={image} alt={imageAlt} loading="lazy" />
      <div>
        {eyebrow && <p className="text-caption text-text-helper">{eyebrow}</p>}
        <h3 className="text-section-label font-bold text-text-primary">{title}</h3>
        {description && <p className="text-body text-text-secondary">{description}</p>}
        {metadata.length > 0 && (
          <dl className="text-body">
            {metadata.map((item) => (
              <div key={item.label} className="flex gap-space-12">
                <dt className="font-medium text-text-primary">{item.label}</dt>
                <dd className="text-text-secondary">{item.value}</dd>
              </div>
            ))}
          </dl>
        )}
        {tags.length > 0 && (
          <ul className="flex flex-wrap gap-space-12" aria-label="프로젝트 태그">
            {tags.map((tag) => <li key={tag}>{tag}</li>)}
          </ul>
        )}
      </div>
    </article>
  );
}
