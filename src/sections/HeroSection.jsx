import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { CtaButton } from '../components/index.js';
import { heroContent } from '../data/portfolioData.js';

export default function HeroSection({ isActive, onMenuClick, onNavigate }) {
  const heroRef = useRef(null);
  const autofocusRef = useRef(null);

  useGSAP(() => {
    const autofocus = autofocusRef.current;
    const portrait = heroRef.current.querySelector('.hero-animation-portrait');
    const content = heroRef.current.querySelectorAll('.hero-animation-content');
    const cta = heroRef.current.querySelector('.hero-animation-cta');
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    autofocus.classList.remove('hero-autofocus--story');
    gsap.set(autofocus, { autoAlpha: reduceMotion ? 0 : 1, left: 466, top: 236, width: 183, height: 209, scale: 0.86 });
    gsap.set(portrait, { filter: reduceMotion ? 'none' : 'blur(1px) saturate(.55) contrast(.88)', opacity: reduceMotion ? 1 : 0.62, scale: reduceMotion ? 1 : 1.004 });
    gsap.set(content, { filter: reduceMotion ? 'none' : 'blur(1px) saturate(.35) contrast(.82)', opacity: reduceMotion ? 1 : 0.58, scale: reduceMotion ? 1 : 1.004 });
    gsap.set(cta, { autoAlpha: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 10 });

    if (reduceMotion || !isActive) {
      if (!isActive) gsap.set(autofocus, { autoAlpha: 0 });
      return undefined;
    }

    const timeline = gsap.timeline({ defaults: { ease: 'power3.out' } });
    timeline
      .to(autofocus, { scale: 1, duration: 0.22 })
      .to(autofocus, { left: 452, top: 230, duration: 0.34, ease: 'power2.inOut' })
      .to(autofocus, { left: 475, top: 239, duration: 0.2 })
      .to(autofocus, { left: 466, top: 236, duration: 0.16, ease: 'power1.inOut' })
      .to(autofocus, { scale: 1.1, duration: 0.15 })
      .to(autofocus, { scale: 0.92, duration: 0.14 })
      .to(autofocus, { scale: 1, duration: 0.14 })
      .to({}, { duration: 0.5 })
      .to(portrait, { filter: 'blur(.55px) saturate(.72) contrast(.93)', opacity: 0.78, scale: 1.002, duration: 0.11, ease: 'sine.inOut' })
      .to(portrait, { filter: 'blur(.22px) saturate(.9) contrast(.98)', opacity: 0.92, scale: 1.001, duration: 0.13, ease: 'sine.inOut' })
      .to(portrait, { filter: 'blur(0px) saturate(1) contrast(1)', opacity: 1, scale: 1, duration: 0.21 })
      .to(autofocus, { autoAlpha: 0, duration: 0.2 }, '<')
      .to(autofocus, { autoAlpha: 1, left: 945, top: 144, width: 804, height: 463, scale: 1, duration: 0.55, ease: 'power2.inOut', onStart: () => autofocus.classList.add('hero-autofocus--story') }, '+=.15')
      .to(autofocus, { left: 962, top: 160, duration: 0.34, ease: 'power2.inOut' })
      .to(autofocus, { left: 949, top: 148, duration: 0.22 })
      .to(autofocus, { left: 945, top: 144, duration: 0.24, ease: 'back.out(3)' })
      .to(autofocus, { scale: 1.1, duration: 0.15 })
      .to(autofocus, { scale: 0.92, duration: 0.14 })
      .to(autofocus, { scale: 1, duration: 0.14 })
      .to({}, { duration: 0.5 })
      .to(content, { filter: 'blur(.55px) saturate(.62) contrast(.9)', opacity: 0.76, scale: 1.002, duration: 0.11, ease: 'sine.inOut' })
      .to(content, { filter: 'blur(.22px) saturate(.88) contrast(.97)', opacity: 0.91, scale: 1.001, duration: 0.13, ease: 'sine.inOut' })
      .to(content, { filter: 'blur(0px) saturate(1) contrast(1)', opacity: 1, scale: 1, duration: 0.21 })
      .to(autofocus, { autoAlpha: 0, duration: 0.2 }, '<')
      .to(cta, { autoAlpha: 1, y: 0, duration: 0.45, ease: 'back.out(1.2)' }, '+=.05');

    return () => timeline.kill();
  }, { scope: heroRef, dependencies: [isActive] });

  return (
    <section ref={heroRef} id="hero" tabIndex="-1" className="portfolio-section relative h-[1080px] overflow-hidden bg-surface-warm-beige outline-none" aria-labelledby="hero-title">
      <img className="hero-animation-portrait absolute left-[149px] top-[12px] h-[1121px] w-[747px] object-cover" src="/assets/images/hero-portrait.png" alt={heroContent.portraitAlt} fetchPriority="high" />
      <span ref={autofocusRef} className="hero-autofocus" aria-hidden="true" />
      <div className="hero-profile-frame" aria-hidden="true">
        <span className="hero-profile-frame__corner hero-profile-frame__corner--top-left" />
        <span className="hero-profile-frame__corner hero-profile-frame__corner--top-right" />
        <span className="hero-profile-frame__corner hero-profile-frame__corner--bottom-left" />
        <span className="hero-profile-frame__corner hero-profile-frame__corner--bottom-right" />
      </div>
      <h1 id="hero-title" className="hero-animation-content absolute left-[945px] top-[144px] h-[490px] w-[810px] text-center text-hero font-semibold">
        <span className="absolute left-0 top-0 w-full whitespace-nowrap text-text-primary">{heroContent.title[0]}</span>
        <span className="absolute left-0 top-[137px] w-full whitespace-nowrap text-surface-warm-beige [text-shadow:-1px_-1px_0_#121212,1px_-1px_0_#121212,-1px_1px_0_#121212,1px_1px_0_#121212]">{heroContent.title[1]}</span>
        <span className="absolute left-0 top-[283px] w-full whitespace-nowrap text-text-primary">{heroContent.title[2]}</span>
      </h1>
      <p className="hero-animation-content absolute left-[960px] top-[646px] m-0 whitespace-nowrap text-[36px] font-medium leading-[47px] text-text-primary">{heroContent.description}</p>
      <div className="hero-animation-cta absolute left-[1154px] top-[773px] flex gap-space-20">
        {heroContent.actions.map((action) => (
          <CtaButton key={action.label} variant={action.variant}>{action.label}</CtaButton>
        ))}
      </div>
    </section>
  );
}
