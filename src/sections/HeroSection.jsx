import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { CtaButton } from '../components/index.js';
import { heroContent } from '../data/portfolioData.js';

export default function HeroSection({ isActive, onMenuClick, onNavigate }) {
  const heroRef = useRef(null);
  const autofocusRef = useRef(null);

  useGSAP(() => {
    const hero = heroRef.current;
    const portrait = hero.querySelector('.hero-animation-portrait');
    const content = hero.querySelectorAll('.hero-animation-content');
    const cta = hero.querySelector('.hero-animation-cta');
    const focusTargets = [portrait, ...content, cta];
    const autofocus = autofocusRef.current;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    gsap.set(autofocus, { autoAlpha: reduceMotion || !isActive ? 0 : 1, scale: reduceMotion ? 1 : 0.98 });
    gsap.set(focusTargets, {
      filter: reduceMotion ? 'none' : 'blur(8px) saturate(.58) contrast(.84)',
      opacity: reduceMotion ? 1 : 0.82,
      scale: reduceMotion ? 1 : 1.006,
    });

    if (reduceMotion || !isActive) return undefined;

    const timeline = gsap.timeline();
    timeline
      .to(autofocus, { scale: 1, duration: 0.22, ease: 'power2.out' })
      .to(autofocus, { scale: 1.08, duration: 0.18, ease: 'power1.inOut' })
      .to(autofocus, { scale: 1, duration: 0.16, ease: 'power1.inOut' })
      .to(focusTargets, {
        filter: 'blur(0px) saturate(1) contrast(1)',
        opacity: 1,
        scale: 1,
        duration: 1.35,
        ease: 'sine.inOut',
      }, 0)
      .to(autofocus, { autoAlpha: 0, duration: 0.25, ease: 'power1.out' }, 0.85);

    return () => timeline.kill();
  }, { scope: heroRef, dependencies: [isActive] });

  return (
    <section ref={heroRef} id="hero" tabIndex="-1" className="portfolio-section relative h-[1080px] overflow-hidden bg-surface-warm-beige outline-none" aria-labelledby="hero-title">
      <img className="hero-animation-portrait absolute left-[149px] top-[12px] h-[1121px] w-[747px] object-cover" src="/assets/images/hero-portrait.png" alt={heroContent.portraitAlt} fetchPriority="high" />
      <span ref={autofocusRef} className="hero-autofocus" aria-hidden="true" />
      <h1 id="hero-title" className="hero-animation-content absolute left-[945px] top-[144px] h-[490px] w-[810px] text-center text-hero font-semibold">
        <span className="absolute left-0 top-0 w-full whitespace-nowrap text-text-primary">{heroContent.title[0]}</span>
        <span className="absolute left-0 top-[137px] w-full whitespace-nowrap text-surface-warm-beige [text-shadow:-1px_-1px_0_#121212,1px_-1px_0_#121212,-1px_1px_0_#121212,1px_1px_0_#121212]">{heroContent.title[1]}</span>
        <span className="absolute left-0 top-[283px] w-full whitespace-nowrap text-text-primary">{heroContent.title[2]}</span>
      </h1>
      <p className="hero-animation-content absolute left-[960px] top-[646px] m-0 whitespace-nowrap text-[36px] font-medium leading-[47px] text-text-primary">{heroContent.description}</p>
      <div className="hero-animation-cta absolute left-[1154px] top-[773px] flex gap-space-20">
        {heroContent.actions.map((action) => (
          <CtaButton key={action.label} variant={action.variant} href={action.href}>{action.label}</CtaButton>
        ))}
      </div>
    </section>
  );
}
