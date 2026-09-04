import { useCallback, useEffect, useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { visibleSectionItems as sectionItems } from '../data/portfolioData.js';

gsap.registerPlugin(ScrollToPlugin, useGSAP);

export default function useSectionNavigation() {
  const [activeSection, setActiveSection] = useState(sectionItems[0].id);
  const sliderRef = useRef(null);
  const isAnimating = useRef(false);
  const touchStart = useRef(null);
  const reducedMotion = useRef(false);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updatePreference = () => { reducedMotion.current = media.matches; };
    updatePreference();
    media.addEventListener('change', updatePreference);
    return () => media.removeEventListener('change', updatePreference);
  }, []);

  const navigate = useCallback((sectionId) => {
    const targetIndex = sectionItems.findIndex((item) => item.id === sectionId);
    const target = document.getElementById(sectionId);
    if (targetIndex < 0 || !target || isAnimating.current) return;

    isAnimating.current = true;
    setActiveSection(sectionId);
    if (sliderRef.current) {
      sliderRef.current.slideTo(targetIndex);
      isAnimating.current = false;
      target.focus({ preventScroll: true });
      return;
    }
    gsap.to(window, {
      duration: reducedMotion.current ? 0 : 0.85,
      ease: 'power3.inOut',
      scrollTo: { y: target, autoKill: false },
      onComplete: () => {
        isAnimating.current = false;
        target.focus({ preventScroll: true });
      },
    });
  }, []);

  const registerSlider = useCallback((slider) => {
    sliderRef.current = slider;
  }, []);

  const handleSlideChange = useCallback((index) => {
    const item = sectionItems[index];
    if (!item) return;
    setActiveSection(item.id);
  }, []);

  const navigateByOffset = useCallback((offset) => {
    const index = sectionItems.findIndex((item) => item.id === activeSection);
    const nextIndex = Math.min(Math.max(index + offset, 0), sectionItems.length - 1);
    if (nextIndex !== index) navigate(sectionItems[nextIndex].id);
  }, [activeSection, navigate]);

  useEffect(() => {
    const onWheel = (event) => {
      if (sliderRef.current) return;
      if (Math.abs(event.deltaY) < 20 || isAnimating.current) return;
      event.preventDefault();
      navigateByOffset(event.deltaY > 0 ? 1 : -1);
    };
    const onKeyDown = (event) => {
      if (sliderRef.current) return;
      const tag = document.activeElement?.tagName;
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes(tag) || document.activeElement?.isContentEditable) return;
      if (['ArrowDown', 'PageDown'].includes(event.key)) { event.preventDefault(); navigateByOffset(1); }
      if (['ArrowUp', 'PageUp'].includes(event.key)) { event.preventDefault(); navigateByOffset(-1); }
      if (event.key === 'Home') { event.preventDefault(); navigate(sectionItems[0].id); }
      if (event.key === 'End') { event.preventDefault(); navigate(sectionItems.at(-1).id); }
    };
    const onTouchStart = (event) => {
      if (sliderRef.current) return;
      const touch = event.changedTouches[0];
      touchStart.current = { x: touch.clientX, y: touch.clientY };
    };
    const onTouchEnd = (event) => {
      if (sliderRef.current) return;
      if (!touchStart.current || isAnimating.current) return;
      const touch = event.changedTouches[0];
      const deltaX = touch.clientX - touchStart.current.x;
      const deltaY = touch.clientY - touchStart.current.y;
      touchStart.current = null;
      if (Math.abs(deltaY) > 50 && Math.abs(deltaY) > Math.abs(deltaX)) navigateByOffset(deltaY < 0 ? 1 : -1);
    };
    const onScroll = () => {
      if (sliderRef.current) return;
      if (isAnimating.current) return;
      const center = window.scrollY + window.innerHeight / 2;
      const nearest = sectionItems.reduce((best, item) => {
        const element = document.getElementById(item.id);
        if (!element) return best;
        const distance = Math.abs(element.offsetTop + element.offsetHeight / 2 - center);
        return distance < best.distance ? { id: item.id, distance } : best;
      }, { id: activeSection, distance: Infinity });
      setActiveSection(nearest.id);
    };

    window.addEventListener('wheel', onWheel, { passive: false });
    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchend', onTouchEnd, { passive: true });
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('wheel', onWheel);
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchend', onTouchEnd);
      window.removeEventListener('scroll', onScroll);
    };
  }, [activeSection, navigate, navigateByOffset]);

  return { activeSection, navigate, registerSlider, handleSlideChange };
}
