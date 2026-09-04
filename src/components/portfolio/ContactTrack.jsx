export default function ContactTrack({ label, value, expandable = false }) {
  const ticks = Array.from({ length: 16 }, (_, index) => index);

  return (
    <div className="contact-track relative grid h-track-height grid-cols-[var(--spacing-track-label-width)_1fr] items-center border border-border-default bg-surface-light">
      <span className="absolute inset-y-0 left-0 w-space-16 bg-text-primary" aria-hidden="true" />
      <span className="pl-space-40 text-label font-medium text-text-primary">{label}</span>
      <span className="text-caption text-text-helper">{value}</span>
      <span className="contact-track__ticks" aria-hidden="true">
        {ticks.map((tick) => <span key={tick} className={`contact-track__tick ${tick % 4 === 0 ? 'contact-track__tick--major' : ''}`} style={{ left: `${245 + tick * 33}px` }} />)}
      </span>
      {expandable && <span className="absolute right-space-20 text-section-label" aria-hidden="true">{String.fromCharCode(0x2304)}</span>}
    </div>
  );
}
