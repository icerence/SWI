import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { useCallback, useEffect, useRef, useState } from 'react';

const menuIconPath = '/assets/icons/header-menu-icon.png';

export default function Header({ onMenuClick, className = '' }) {
  const [labelIndex, setLabelIndex] = useState(0);
  const animationRef = useRef(null);
  const clapTriggeredRef = useRef(false);
  const previousFrameRef = useRef(null);
  const labels = ['Songwonil', '송원일', 'SWI'];

  const handleAnimationReady = useCallback((animation) => {
    animationRef.current = animation;
  }, []);

  useEffect(() => {
    let frameRequest;
    const syncWithClap = () => {
      const currentFrame = animationRef.current?.currentFrame;
      if (typeof currentFrame === 'number') {
        const previousFrame = previousFrameRef.current;
        if (typeof previousFrame === 'number' && currentFrame < previousFrame - 10) {
          clapTriggeredRef.current = false;
        }
        if (currentFrame >= 25 && !clapTriggeredRef.current) {
          clapTriggeredRef.current = true;
          setLabelIndex((current) => (current + 1) % labels.length);
        }
        if (currentFrame < 8) clapTriggeredRef.current = false;
        previousFrameRef.current = currentFrame;
      }
      frameRequest = window.requestAnimationFrame(syncWithClap);
    };
    frameRequest = window.requestAnimationFrame(syncWithClap);

    return () => window.cancelAnimationFrame(frameRequest);
  }, []);

  return (
    <header className={`flex items-center justify-end gap-space-4 ${className}`}>
      <div className="pointer-events-none absolute left-[149px] top-[12px] z-10 flex h-[50px] items-center" aria-hidden="true">
        <div className="h-[50px] w-[50px]">
          <DotLottieReact src="/Clapperboard.lottie" autoplay loop dotLottieRefCallback={handleAnimationReady} />
        </div>
        <span className="ml-space-12 whitespace-nowrap text-[20px] font-medium leading-none">{labels[labelIndex]}</span>
      </div>
      <button
        className="flex items-center gap-space-8 text-navigation font-regular text-text-primary"
        type="button"
        aria-label="메뉴 열기"
        onClick={onMenuClick}
      >
        <span>MENU</span>
        <span className="h-menu-icon-height w-menu-icon-width overflow-hidden" aria-hidden="true">
          <img className="h-full w-full object-contain" src={menuIconPath} alt="" />
        </span>
      </button>
    </header>
  );
}
