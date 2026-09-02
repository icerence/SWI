export default function InlineError({ message, onRetry }) {
  return (
    <div className="flex items-center gap-space-20 text-body text-text-primary" role="alert">
      <p>{message}</p>
      {onRetry && (
        <button className="rounded-max border border-accent-teal px-space-20 py-space-12" type="button" onClick={onRetry}>
          다시 시도
        </button>
      )}
    </div>
  );
}
