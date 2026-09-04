import { useEffect, useRef } from 'react';

export default function CursorFollower() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');

    if (!finePointer.matches) return undefined;

    let frame = 0;
    let pointer = { x: -100, y: -100 };
    let ringPosition = { x: -100, y: -100 };
    let dotPosition = { x: -100, y: -100 };

    const render = () => {
      ringPosition.x += (pointer.x - ringPosition.x) * 0.16;
      ringPosition.y += (pointer.y - ringPosition.y) * 0.16;
      dotPosition.x += (ringPosition.x - dotPosition.x) * 0.2;
      dotPosition.y += (ringPosition.y - dotPosition.y) * 0.2;
      dot.style.transform = `translate3d(${dotPosition.x}px, ${dotPosition.y}px, 0) translate(-50%, -50%)`;
      ring.style.transform = `translate3d(${ringPosition.x}px, ${ringPosition.y}px, 0) translate(-50%, -50%)`;
      frame = requestAnimationFrame(render);
    };

    const move = (event) => {
      pointer = { x: event.clientX, y: event.clientY };
      dot.classList.add('cursor-follower--visible');
      ring.classList.add('cursor-follower--visible');
      const target = event.target instanceof Element
        ? event.target.closest('a, button, input, select, textarea, [role="button"], [data-cursor-hover]')
        : null;
      dot.classList.toggle('cursor-follower--inverted', Boolean(target));
      ring.classList.toggle('cursor-follower--inverted', Boolean(target));
    };
    const leave = () => {
      dot.classList.remove('cursor-follower--visible');
      ring.classList.remove('cursor-follower--visible');
      dot.classList.remove('cursor-follower--inverted');
      ring.classList.remove('cursor-follower--inverted');
    };
    const press = () => ring.classList.add('cursor-follower--pressed');
    const release = () => ring.classList.remove('cursor-follower--pressed');

    window.addEventListener('pointermove', move, { passive: true });
    document.documentElement.addEventListener('pointerleave', leave, { passive: true });
    window.addEventListener('pointerdown', press, { passive: true });
    window.addEventListener('pointerup', release, { passive: true });
    frame = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('pointermove', move);
      document.documentElement.removeEventListener('pointerleave', leave);
      window.removeEventListener('pointerdown', press);
      window.removeEventListener('pointerup', release);
    };
  }, []);

  return (
    <>
      <span ref={ringRef} className="cursor-follower cursor-follower__ring" aria-hidden="true" />
      <span ref={dotRef} className="cursor-follower cursor-follower__dot" aria-hidden="true" />
    </>
  );
}
