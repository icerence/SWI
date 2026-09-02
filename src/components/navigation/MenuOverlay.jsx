import { useEffect, useRef } from 'react';

export default function MenuOverlay({ open, items, onClose, onNavigate }) {
  const closeButtonRef = useRef(null);
  const dialogRef = useRef(null);
  const previousFocusRef = useRef(null);

  useEffect(() => {
    if (!open) return undefined;
    previousFocusRef.current = document.activeElement;
    closeButtonRef.current?.focus();
    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
      if (event.key !== 'Tab') return;
      const controls = [...dialogRef.current.querySelectorAll('button:not([disabled])')];
      const first = controls[0];
      const last = controls.at(-1);
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      previousFocusRef.current?.focus();
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div ref={dialogRef} className="fixed inset-0 z-50 flex bg-surface-warm-beige" role="dialog" aria-modal="true" aria-label="메뉴">
      <button ref={closeButtonRef} className="absolute right-[50px] top-[36px] text-body" type="button" onClick={onClose}>CLOSE</button>
      <nav className="m-auto" aria-label="주요 섹션">
        <ul className="flex flex-col items-center gap-space-20 text-statement font-medium">
          {items.map((item) => (
            <li key={item.id}>
              <button type="button" onClick={() => { onNavigate(item.id); onClose(); }}>{item.label}</button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
