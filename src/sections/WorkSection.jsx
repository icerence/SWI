import { useRef } from 'react';
import { SectionWatermark } from '../components/index.js';
import { projectMetadata, videoProjectMetadata } from '../data/portfolioData.js';
import { A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

export default function WorkSection({ onMenuClick, onNavigate }) {
  const videoProjectUrl = 'https://drive.google.com/file/d/1XqmriQskpY2_Jp9wrrl-_APe4ynBZBRI/view?usp=sharing';
  const projectSlideSpeed = 700;
  const visualSliderRef = useRef(null);
  const textSliderRef = useRef(null);

  if (projectMetadata.length === 0) return null;

  const syncToSlide = (index) => {
    visualSliderRef.current?.slideTo(index, projectSlideSpeed);
    textSliderRef.current?.slideTo(index, projectSlideSpeed);
  };

  const syncTextSlider = (slider) => {
    if (textSliderRef.current && textSliderRef.current.activeIndex !== slider.activeIndex) {
      textSliderRef.current.slideTo(slider.activeIndex, projectSlideSpeed);
    }
  };

  const goToPreviousProject = () => {
    const currentIndex = visualSliderRef.current?.activeIndex ?? 0;
    syncToSlide((currentIndex - 1 + 2) % 2);
  };

  const goToNextProject = () => {
    const currentIndex = visualSliderRef.current?.activeIndex ?? 0;
    syncToSlide((currentIndex + 1) % 2);
  };

  return (
    <section id="work" tabIndex="-1" className="portfolio-section relative h-[1080px] overflow-hidden bg-surface-white outline-none" aria-labelledby="work-title">
      <p className="section-reveal absolute left-[312px] top-[60px] text-action font-medium">SELECTED<br />PROJECT</p>
      <h2 id="work-title" className="sr-only">Selected Work</h2>
      <div className="section-reveal section-reveal--delay-2 absolute left-[430px] top-[100px] h-[820px] w-[750px] overflow-hidden">
        <Swiper
          className="work-visual-slider h-full w-full"
          modules={[A11y]}
          slidesPerView={1}
          speed={projectSlideSpeed}
          a11y={{ enabled: true }}
          onSwiper={(slider) => { visualSliderRef.current = slider; }}
          onSlideChangeTransitionStart={syncTextSlider}
        >
          <SwiperSlide className="section-reveal-group relative">
          <div className="absolute left-[102px] top-[60px] h-[633px] w-[470px] bg-accent-teal" />
          <div className="absolute left-[103px] top-[60px] h-[633px] w-[469px] rotate-[15deg] overflow-hidden border border-black/10">
            <img className="work-project-image block h-auto w-full max-w-none object-contain object-top" src="/assets/images/project-pulmuone-overview.png" alt="풀무원 홈페이지 리디자인" fetchPriority="high" decoding="sync" />
          </div>
          </SwiperSlide>
          <SwiperSlide className="section-reveal-group relative">
          <div className="absolute left-[102px] top-[60px] h-[633px] w-[470px] bg-accent-teal" />
          <div className="absolute left-[103px] top-[60px] flex h-[633px] w-[469px] rotate-[15deg] items-center justify-center overflow-hidden border border-black/10 bg-black">
            <a className="absolute inset-0 z-10 block" href={videoProjectUrl} target="_blank" rel="noopener noreferrer" aria-label="오미자 광고 영상 보기">
              <img className="h-full w-full object-contain" src="/assets/images/omija-video-thumbnail.png" alt="오미자 광고 영상 썸네일" />
              <span className="absolute inset-0 flex items-center justify-center bg-black/10 text-white" aria-hidden="true">
                <span className="flex h-[72px] w-[72px] items-center justify-center rounded-full bg-black/65 text-[24px]">▶</span>
              </span>
            </a>
          </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="section-reveal section-reveal--delay-5 pointer-events-none absolute left-[1300px] top-[300px] h-[550px] w-[600px] overflow-hidden">
        <Swiper
          className="work-text-slider h-full w-full"
          modules={[A11y]}
          slidesPerView={1}
          speed={projectSlideSpeed}
          allowTouchMove={false}
          a11y={{ enabled: true }}
          onSwiper={(slider) => { textSliderRef.current = slider; }}
        >
          <SwiperSlide className="section-reveal-group relative">
          <article className="pointer-events-auto absolute left-[49px] top-[46px] z-10 w-[500px] bg-surface-white">
            <h3 className="mb-space-8 text-project-title font-medium">풀무원 홈페이지<br />리디자인</h3>
            <dl className="flex flex-col gap-space-8 text-body text-text-metadata">
              {projectMetadata.map((item) => <div key={item.label} className="grid grid-cols-[120px_1fr]"><dt>• {item.label}</dt><dd>: {item.value}</dd></div>)}
            </dl>
            <div className="mt-space-8 flex w-full items-stretch gap-space-8">
              {[
                { label: 'Github', href: 'https://github.com/icerence/kiwik-project' },
                { label: '사이트', href: 'https://icerence.github.io/kiwik-project/' },
                { label: '기획서', href: 'https://www.figma.com/board/tTNn7XY4aHoeSO7p1fTaWX/%ED%82%A4%EC%9C%84-%ED%9A%8C%EC%9D%98%EB%B3%B4%EB%93%9C?node-id=556-408' },
              ].map(({ label, href }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="flex min-w-0 flex-1 items-center justify-center rounded-2xl border border-border-dark px-space-20 py-space-18 text-body transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-accent-teal hover:text-text-on-dark">
                  {label}
                </a>
              ))}
            </div>
          </article>
          </SwiperSlide>
          <SwiperSlide className="section-reveal-group relative">
          <article className="pointer-events-auto absolute left-[49px] top-[46px] w-[500px] bg-surface-white">
            <h3 className="mb-space-8 text-project-title font-medium">오미자 AI 광고<br />영상 제작</h3>
            <dl className="flex flex-col gap-space-8 text-body text-text-metadata">
              {videoProjectMetadata.map((item) => <div key={item.label} className="grid grid-cols-[120px_1fr]"><dt>• {item.label}</dt><dd className="whitespace-pre-line">: {item.value}</dd></div>)}
            </dl>
            <div className="mt-space-8 flex gap-space-8">
              {[
                { label: '기획서 보기', href: 'https://www.figma.com/deck/hAdUtLOWQn3edFB42Ap3bL' },
                { label: '영상 보기', href: videoProjectUrl },
              ].map(({ label, href }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="whitespace-nowrap rounded-2xl border border-border-dark px-space-40 py-space-18 text-body transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-accent-teal hover:text-text-on-dark">
                  {label}
                </a>
              ))}
            </div>
          </article>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="section-reveal section-reveal--delay-5 work-navigation absolute left-[280px] top-[498px] z-10 flex w-[998px] justify-between text-body">
        <button className="work-prev relative h-[24px] w-[120px] cursor-pointer text-left" type="button" aria-label="이전 포트폴리오" onClick={goToPreviousProject}>
          <span>PREV</span>
          <span className="absolute left-[45px] top-[12px] h-px w-[50px] bg-text-primary" aria-hidden="true" />
        </button>
        <button className="work-next relative h-[24px] w-[120px] cursor-pointer text-right" type="button" aria-label="다음 포트폴리오" onClick={goToNextProject}>
          <span className="absolute right-[42px] top-[12px] h-px w-[50px] bg-text-primary" aria-hidden="true" />
          <span>NEXT</span>
        </button>
      </div>
      <div className="section-reveal section-reveal--delay-6 pointer-events-none absolute left-[1665px] top-[211px] flex h-[752px] w-[250px] items-center justify-center"><SectionWatermark className="-rotate-90">WORK</SectionWatermark></div>
    </section>
  );
}
