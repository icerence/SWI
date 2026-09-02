import { Header, SectionPagination, ServiceCard } from '../components/index.js';
import { serviceCards, visibleSectionItems as sectionItems } from '../data/portfolioData.js';

export default function ServicesSection({ onMenuClick, onNavigate }) {
  if (serviceCards.length === 0) return null;

  return (
    <section id="services" tabIndex="-1" className="portfolio-section relative h-[1080px] overflow-hidden bg-surface-mint outline-none" aria-labelledby="services-title">
      <Header onMenuClick={onMenuClick} className="absolute left-0 top-0 h-[95px] w-full pr-[50px]" />
      <SectionPagination section="services" items={sectionItems} onNavigate={onNavigate} className="absolute left-[50px] top-[378px]" />
      <h2 id="services-title" className="absolute left-[312px] top-[140px] text-statement font-medium leading-[60px]"><span className="ml-[80px]">I MAKE</span><br />THE SERVICE<br />BETTER.</h2>
      <img className="absolute left-[862px] top-[220px] h-[44px] w-[551px]" src="/assets/images/services-curved-rule.png" alt="" aria-hidden="true" />
      <p className="absolute left-[862px] top-[290px] w-[320px] text-action leading-[25px] text-text-tertiary">Static and dynamic secure code review can prevent a 0day before your product is even released. We can integrate with your dev environment</p>
      <div className="absolute left-[312px] top-[450px] flex gap-[24px]">
        {serviceCards.map((card) => <ServiceCard key={card.number} {...card} accent className="h-[249px] w-[416px] justify-between border-[1.3px] px-[39px] py-[39px]" />)}
      </div>
      <button className="absolute left-[754px] top-[769px] h-[47px] w-[413px] rounded-max border-[1.3px] border-border-dark text-action" type="button">Call me to get more extra service <span className="font-medium">Call Now</span></button>
      <img className="absolute bottom-0 right-0 h-[407px] w-[425px]" src="/assets/images/services-corner-blob.png" alt="" aria-hidden="true" />
    </section>
  );
}
