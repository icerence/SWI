import { ServiceCard } from '../components/index.js';
import { serviceCards } from '../data/portfolioData.js';

export default function ServicesSection({ onMenuClick, onNavigate }) {
  if (serviceCards.length === 0) return null;

  return (
    <section id="services" tabIndex="-1" className="portfolio-section relative h-[1080px] overflow-hidden bg-surface-mint outline-none" aria-labelledby="services-title">
      <h2 id="services-title" className="section-reveal absolute left-[312px] top-[140px] text-statement font-medium leading-[60px]"><span className="ml-[80px]">I MAKE</span><br />THE SERVICE<br />BETTER.</h2>
      <img className="section-reveal section-reveal--delay-2 absolute left-[862px] top-[220px] h-[44px] w-[551px]" src="/assets/images/services-curved-rule.png" alt="" aria-hidden="true" />
      <p className="section-reveal section-reveal--delay-2 absolute left-[862px] top-[290px] w-[320px] text-action leading-[25px] text-text-tertiary">Static and dynamic secure code review can prevent a 0day before your product is even released. We can integrate with your dev environment</p>
      <div className="section-reveal section-reveal--delay-3 absolute left-[312px] top-[450px] flex gap-[24px]">
        {serviceCards.map((card) => <ServiceCard key={card.number} {...card} accent className="h-[249px] w-[416px] justify-between border-[1.3px] px-[39px] py-[39px]" />)}
      </div>
      <button className="section-reveal section-reveal--delay-4 absolute left-[754px] top-[769px] h-[47px] w-[413px] rounded-max border-[1.3px] border-border-dark text-action" type="button">Call me to get more extra service <span className="font-medium">Call Now</span></button>
      <img className="section-reveal section-reveal--delay-4 absolute bottom-0 right-0 h-[407px] w-[425px]" src="/assets/images/services-corner-blob.png" alt="" aria-hidden="true" />
    </section>
  );
}
