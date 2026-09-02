export default function LoadingIndicator({ label = '콘텐츠 불러오는 중' }) {
  return (
    <div className="flex items-center justify-center" role="status" aria-live="polite">
      <span className="h-space-20 w-space-20 animate-pulse rounded-max bg-accent-teal" aria-hidden="true" />
      <span className="sr-only">{label}</span>
    </div>
  );
}
