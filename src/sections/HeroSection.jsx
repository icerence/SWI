import { CtaButton, Header, SectionPagination } from '../components/index.js';
import { heroContent, visibleSectionItems as sectionItems } from '../data/portfolioData.js';

export default function HeroSection({ onMenuClick, onNavigate }) {
  return (
    <section id="hero" tabIndex="-1" className="portfolio-section relative h-[1080px] overflow-hidden bg-surface-warm-beige outline-none" aria-labelledby="hero-title">
      <Header onMenuClick={onMenuClick} className="absolute left-0 top-0 h-[95px] w-full pr-[50px]" />
      <SectionPagination section="hero" items={sectionItems} onNavigate={onNavigate} className="absolute left-[50px] top-[378px]" />
      <img className="absolute left-[149px] top-[12px] h-[1121px] w-[747px] object-cover" src="/assets/images/hero-portrait.png" alt={heroContent.portraitAlt} fetchPriority="high" />
      <div className="hero-profile-frame" aria-hidden="true">
        <span className="hero-profile-frame__corner hero-profile-frame__corner--top-left" />
        <span className="hero-profile-frame__corner hero-profile-frame__corner--top-right" />
        <span className="hero-profile-frame__corner hero-profile-frame__corner--bottom-left" />
        <span className="hero-profile-frame__corner hero-profile-frame__corner--bottom-right" />
      </div>
      <h1 id="hero-title" className="absolute left-[945px] top-[144px] h-[490px] w-[810px] text-center text-hero font-semibold">
        <span className="absolute left-0 top-0 w-full whitespace-nowrap text-text-primary">{heroContent.title[0]}</span>
        <span className="absolute left-0 top-[137px] w-full whitespace-nowrap text-surface-warm-beige [text-shadow:-1px_-1px_0_#121212,1px_-1px_0_#121212,-1px_1px_0_#121212,1px_1px_0_#121212]">{heroContent.title[1]}</span>
        <span className="absolute left-0 top-[283px] w-full whitespace-nowrap text-text-primary">{heroContent.title[2]}</span>
      </h1>
      <p className="absolute left-[960px] top-[646px] m-0 whitespace-nowrap text-[36px] font-medium leading-[47px] text-text-primary">{heroContent.description}</p>
      <div className="absolute left-[1154px] top-[773px] flex gap-space-20">
        {heroContent.actions.map((action) => (
          <CtaButton key={action.label} variant={action.variant}>{action.label}</CtaButton>
        ))}
      </div>
    </section>
  );
}
