import { CtaButton } from '../components/index.js';
import { heroContent } from '../data/portfolioData.js';

export default function HeroSection() {
  return (
    <section id="hero" tabIndex="-1" className="portfolio-section hero-section relative h-[1080px] overflow-clip bg-surface-warm-beige outline-none" aria-labelledby="hero-title">
      <img className="absolute left-[149px] top-[36px] h-[1121px] w-[747px] object-cover" src="/assets/images/hero-portrait.png" alt={heroContent.portraitAlt} fetchPriority="high" />
      <h1 id="hero-title" className="absolute left-[945px] top-[144px] h-[490px] w-[810px] text-left text-hero font-semibold">
        <span className="section-reveal section-reveal--delay-1 absolute left-0 top-0 w-full whitespace-nowrap text-text-primary">{heroContent.title[0]}</span>
        <span className="hero-section__frame-text section-reveal section-reveal--delay-2 absolute left-0 top-[136px] whitespace-nowrap text-surface-warm-beige [text-shadow:-1px_-1px_0_#121212,1px_-1px_0_#121212,-1px_1px_0_#121212,1px_1px_0_#121212]">
          <span className="hero-section__frame-label">{heroContent.title[1]}</span>
          <span className="hero-section__frame-target" data-cursor-hover aria-hidden="true">
            <i className="hero-section__frame-corner hero-section__frame-corner--tl" aria-hidden="true" />
            <i className="hero-section__frame-corner hero-section__frame-corner--tr" aria-hidden="true" />
            <i className="hero-section__frame-corner hero-section__frame-corner--bl" aria-hidden="true" />
            <i className="hero-section__frame-corner hero-section__frame-corner--br" aria-hidden="true" />
          </span>
        </span>
        <span className="section-reveal section-reveal--delay-3 absolute left-0 top-[272px] w-full whitespace-nowrap text-text-primary">{heroContent.title[2]}</span>
      </h1>
      <p className="section-reveal section-reveal--delay-4 absolute left-[960px] top-[646px] m-0 whitespace-nowrap text-[36px] font-medium leading-[47px] text-text-primary">{heroContent.description}</p>
      <div className="section-reveal section-reveal--delay-5 absolute left-[1154px] top-[773px] flex gap-space-20">
        {heroContent.actions.map((action) => (
          <CtaButton key={action.label} className="hero-cta" variant={action.variant} href={action.href}>{action.label}</CtaButton>
        ))}
      </div>
    </section>
  );
}
