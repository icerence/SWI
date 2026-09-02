export default function ContactTrack({ label, value, active = false, expandable = false }) {
  return (
    <div className="relative grid h-track-height grid-cols-[var(--spacing-track-label-width)_1fr] items-center border border-border-default bg-surface-light">
      <span className={`absolute inset-y-0 left-0 w-space-16 ${active ? 'bg-accent-teal' : 'bg-text-primary'}`} aria-hidden="true" />
      <span className="pl-space-40 text-label font-medium text-text-primary">{label}</span>
      <span className="text-caption text-text-helper">{value}</span>
      {expandable && <span className="absolute right-space-20 text-section-label" aria-hidden="true">⌄</span>}
    </div>
  );
}
