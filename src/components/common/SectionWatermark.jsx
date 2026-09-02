export default function SectionWatermark({ children, className = '' }) {
  return (
    <p
      className={`pointer-events-none select-none whitespace-nowrap text-watermark font-bold text-text-watermark ${className}`}
      aria-hidden="true"
    >
      {children}
    </p>
  );
}
