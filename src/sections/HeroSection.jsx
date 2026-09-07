import { CtaButton } from '../components/index.js';
import { heroContent } from '../data/portfolioData.js';

export default function HeroSection() {
  return (
    <section id="hero" tabIndex="-1" className="portfolio-section relative h-[1080px] overflow-hidden bg-surface-warm-beige outline-none" aria-labelledby="hero-title">
      <img className="absolute left-[149px] top-[12px] h-[1121px] w-[747px] object-cover" src="/assets/images/hero-portrait.png" alt={heroContent.portraitAlt} fetchPriority="high" />
      <h1 id="hero-title" className="absolute left-[945px] top-[144px] h-[490px] w-[810px] text-center text-hero font-semibold">
        <span className="section-reveal section-reveal--delay-1 absolute left-0 top-0 w-full whitespace-nowrap text-text-primary">{heroContent.title[0]}</span>
        <span className="section-reveal section-reveal--delay-2 absolute left-0 top-[137px] w-full whitespace-nowrap text-surface-warm-beige [text-shadow:-1px_-1px_0_#121212,1px_-1px_0_#121212,-1px_1px_0_#121212,1px_1px_0_#121212]">{heroContent.title[1]}</span>
        <span className="section-reveal section-reveal--delay-3 absolute left-0 top-[283px] w-full whitespace-nowrap text-text-primary">{heroContent.title[2]}</span>
      </h1>
      <p className="section-reveal section-reveal--delay-4 absolute left-[960px] top-[646px] m-0 whitespace-nowrap text-[36px] font-medium leading-[47px] text-text-primary">{heroContent.description}</p>
      <div className="section-reveal section-reveal--delay-5 absolute left-[1154px] top-[773px] flex gap-space-20">
        {heroContent.actions.map((action) => (
          <CtaButton key={action.label} variant={action.variant} href={action.href}>{action.label}</CtaButton>
        ))}
      </div>
    </section>
  );
}
