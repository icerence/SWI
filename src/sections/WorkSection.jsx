import { Header, SectionPagination, SectionWatermark } from '../components/index.js';
import { projectMetadata, visibleSectionItems as sectionItems } from '../data/portfolioData.js';
import { A11y, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

export default function WorkSection({ onMenuClick, onNavigate }) {
  if (projectMetadata.length === 0) return null;

  return (
    <section id="work" tabIndex="-1" className="portfolio-section relative h-[1080px] overflow-hidden bg-surface-white outline-none" aria-labelledby="work-title">
      <Header onMenuClick={onMenuClick} className="absolute left-0 top-0 z-10 h-[95px] w-full pr-[50px]" />
      <SectionPagination section="work" items={sectionItems} onNavigate={onNavigate} className="absolute left-[50px] top-[378px] z-10" />
      <p className="absolute left-[312px] top-[60px] text-action font-medium">SELECTED<br />PROJECT</p>
      <h2 id="work-title" className="sr-only">Selected Work</h2>
      <Swiper className="h-full w-full" modules={[Navigation, A11y]} navigation={{ prevEl: '.work-prev', nextEl: '.work-next' }} slidesPerView={1} a11y={{ enabled: true }}>
        <SwiperSlide>
          <div className="absolute left-[592px] top-[195px] h-[633px] w-[470px] bg-accent-teal" />
          <div className="absolute left-[593px] top-[195px] h-[633px] w-[469px] rotate-[15deg] overflow-hidden border border-black/10">
            <img className="h-[198%] w-full object-cover object-top" src="/assets/images/work-project-thumbnail.png" alt="풀무원 홈페이지 리디자인" loading="lazy" />
          </div>
          <article className="absolute left-[1349px] top-[346px] w-[500px] bg-surface-white">
            <h3 className="mb-space-8 text-project-title font-medium">풀무원 홈페이지<br />리디자인</h3>
            <dl className="flex flex-col gap-space-8 text-body text-text-metadata">
              {projectMetadata.map((item) => <div key={item.label} className="grid grid-cols-[120px_1fr]"><dt>• {item.label}</dt><dd>: {item.value}</dd></div>)}
            </dl>
            <div className="mt-space-8 flex gap-space-8">
              {['Github', '사이트', '기획서'].map((label) => <button key={label} type="button" className="rounded-2xl border border-border-dark px-space-40 py-space-18 text-body">{label}</button>)}
            </div>
          </article>
        </SwiperSlide>
      </Swiper>
      <div className="absolute left-[372px] top-[498px] z-10 flex w-[906px] justify-between text-body">
        <button className="work-prev" type="button">PREV ─────</button>
        <button className="work-next" type="button">───── NEXT</button>
      </div>
      <div className="absolute left-[1665px] top-[211px] flex h-[752px] w-[250px] items-center justify-center"><SectionWatermark className="-rotate-90">WORK</SectionWatermark></div>
    </section>
  );
}
