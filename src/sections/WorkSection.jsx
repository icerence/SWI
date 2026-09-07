import { SectionWatermark } from '../components/index.js';
import { projectMetadata } from '../data/portfolioData.js';
import { A11y, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

export default function WorkSection({ onMenuClick, onNavigate }) {
  if (projectMetadata.length === 0) return null;

  return (
    <section id="work" tabIndex="-1" className="portfolio-section relative h-[1080px] overflow-hidden bg-surface-white outline-none" aria-labelledby="work-title">
      <p className="section-reveal absolute left-[312px] top-[60px] text-action font-medium">SELECTED<br />PROJECT</p>
      <h2 id="work-title" className="sr-only">Selected Work</h2>
      <Swiper className="section-reveal section-reveal--delay-2 h-full w-full" modules={[Navigation, A11y]} navigation={{ prevEl: '.work-prev', nextEl: '.work-next' }} slidesPerView={1} a11y={{ enabled: true }}>
        <SwiperSlide className="section-reveal-group">
          <div className="absolute left-[592px] top-[195px] h-[633px] w-[470px] bg-accent-teal" />
          <div className="absolute left-[593px] top-[195px] h-[633px] w-[469px] rotate-[15deg] overflow-hidden border border-black/10">
            <img className="work-project-image h-[396%] w-[200%] max-w-none object-cover object-top" src="/assets/images/work-project-thumbnail.png" alt="풀무원 홈페이지 리디자인" fetchPriority="high" decoding="sync" />
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
      <div className="section-reveal section-reveal--delay-5 work-navigation absolute left-[372px] top-[498px] z-10 flex w-[906px] justify-between text-body">
        <button className="work-prev relative h-[24px] w-[120px] text-left" type="button" aria-label="이전 포트폴리오">
          <span>PREV</span>
          <span className="absolute left-[45px] top-[12px] h-px w-[50px] bg-text-primary" aria-hidden="true" />
        </button>
        <button className="work-next relative h-[24px] w-[120px] text-right" type="button" aria-label="다음 포트폴리오">
          <span className="absolute right-[42px] top-[12px] h-px w-[50px] bg-text-primary" aria-hidden="true" />
          <span>NEXT</span>
        </button>
      </div>
      <div className="section-reveal section-reveal--delay-6 absolute left-[1665px] top-[211px] flex h-[752px] w-[250px] items-center justify-center"><SectionWatermark className="-rotate-90">WORK</SectionWatermark></div>
    </section>
  );
}
