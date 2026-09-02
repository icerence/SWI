import { Header, ProfileInfoGroup, SectionPagination, SectionWatermark } from '../components/index.js';
import { profileGroups, visibleSectionItems as sectionItems } from '../data/portfolioData.js';

export default function AboutSection({ onMenuClick, onNavigate }) {
  const positions = ['left-[312px] w-[250px]', 'left-[621px] w-[360px]', 'left-[1040px] w-[248px]', 'left-[1347px] w-[219px]'];
  return (
    <section id="about" tabIndex="-1" className="portfolio-section relative h-[1080px] overflow-hidden bg-surface-lavender outline-none" aria-labelledby="about-title">
      <Header onMenuClick={onMenuClick} className="absolute left-0 top-0 h-[95px] w-full pr-[50px]" />
      <SectionPagination section="about" items={sectionItems} onNavigate={onNavigate} className="absolute left-[50px] top-[378px]" />
      <h2 id="about-title" className="absolute left-[312px] top-[200px] text-statement font-medium text-text-primary">보이는 완성도 보다, 믿을 수 있는 과정을 설계합니다.</h2>
      <p className="absolute left-[312px] top-[407px] text-cta font-medium leading-9">PROFILE<br />INFO</p>
      <div className="absolute left-[312px] top-[494px] h-px w-[1296px] bg-border-default" />
      <img className="absolute left-[588px] top-[494px] h-[295px] w-[350px]" src="/assets/icons/about-brands-divider.svg" alt="" aria-hidden="true" />
      {profileGroups.map((group, index) => <ProfileInfoGroup key={group.title} {...group} className={`absolute top-[540px] ${positions[index]}`} />)}
      <div className="absolute left-[1665px] top-[151px] flex h-[864px] w-[250px] items-center justify-center"><SectionWatermark className="-rotate-90">ABOUT</SectionWatermark></div>
    </section>
  );
}
