import { useEffect, useRef } from 'react';
import { SectionWatermark } from '../components/index.js';
import { projectMetadata, videoProjectMetadata } from '../data/portfolioData.js';
import { A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

// Motion adapted from Skiper UI StickyCard002 by @gurvinder-singh02.
// https://skiper-ui.com/v1/skiper17
const stackedCardEffect = {
  perspective: false,
  prev: { shadow: false, translate: [0, 0, 0], scale: 0.7, rotate: [0, 0, 5] },
  next: { shadow: false, translate: [0, '100%', 0], scale: 1, rotate: [0, 0, 0] },
};

const preserveCardOrder = (slider) => {
  slider.slides.forEach((slide, index) => { slide.style.zIndex = String(index + 1); });
};

export default function WorkSection({ activeSection, onMenuClick, onNavigate }) {
  const videoProjectUrl = 'https://drive.google.com/file/d/1XqmriQskpY2_Jp9wrrl-_APe4ynBZBRI/view?usp=sharing';
  const projectSlideSpeed = 700;
  const visualSliderRef = useRef(null);
  const textSliderRef = useRef(null);
  const wheelLockRef = useRef(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    if (activeSection === 'work') {
      visualSliderRef.current?.slideTo(0, 0);
      textSliderRef.current?.slideTo(0, 0);
    }
  }, [activeSection]);

  const syncToSlide = (index) => {
    visualSliderRef.current?.slideTo(index, projectSlideSpeed);
    textSliderRef.current?.slideTo(index, projectSlideSpeed);
  };

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return undefined;
    let unlockTimer;
    const handleProjectWheel = (event) => {
    if (wheelLockRef.current) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }
    if (event.deltaY === 0 || Math.abs(event.deltaX) > Math.abs(event.deltaY)) return;
    const currentIndex = visualSliderRef.current?.activeIndex ?? 0;
    const nextIndex = currentIndex + (event.deltaY > 0 ? 1 : -1);
    if (nextIndex < 0 || nextIndex >= 2) return;

    event.preventDefault();
    event.stopPropagation();
    wheelLockRef.current = true;
    syncToSlide(nextIndex);
    unlockTimer = window.setTimeout(() => { wheelLockRef.current = false; }, projectSlideSpeed);
    };
    section.addEventListener('wheel', handleProjectWheel, { passive: false, capture: true });
    return () => {
      section.removeEventListener('wheel', handleProjectWheel, { capture: true });
      window.clearTimeout(unlockTimer);
      wheelLockRef.current = false;
    };
  }, []);

  if (projectMetadata.length === 0) return null;

  return (
    <section id="work" ref={sectionRef} tabIndex="-1" className="portfolio-section work-section relative h-[1080px] overflow-hidden bg-surface-white outline-none" aria-labelledby="work-title">
      <h2 id="work-title" className="sr-only">Selected Work</h2>
      <div className="work-section__content absolute inset-0 translate-y-[80px]">
      <p className="work-section__eyebrow section-reveal absolute left-[232px] top-[60px] text-cta font-medium">SELECTED<br />PROJECT</p>
      <div className="work-section__visual section-reveal section-reveal--delay-2 absolute left-[430px] top-[100px] h-[820px] w-[750px] overflow-hidden">
        <Swiper
          className="work-visual-slider h-full w-full"
          modules={[A11y]}
          direction="vertical"
          slidesPerView={1}
          speed={projectSlideSpeed}
          allowTouchMove={false}
          a11y={{ enabled: true }}
          onSwiper={(slider) => { visualSliderRef.current = slider; }}
        >
          <SwiperSlide className="section-reveal-group relative">
          <div className="absolute left-[102px] top-[60px] h-[633px] w-[470px] rotate-[15deg] bg-accent-teal" />
          <div className="absolute left-[103px] top-[60px] h-[633px] w-[469px] overflow-hidden border border-black/10">
            <img className="work-project-image block h-auto w-full max-w-none object-contain object-top" src="/assets/images/project-pulmuone-overview.jpg" alt="풀무원 홈페이지 리디자인" fetchPriority="high" decoding="sync" />
          </div>
          </SwiperSlide>
          <SwiperSlide className="section-reveal-group relative">
          <div className="absolute left-[102px] top-[60px] h-[633px] w-[470px] rotate-[15deg] bg-accent-teal" />
          <div className="absolute left-[103px] top-[60px] flex h-[633px] w-[469px] items-center justify-center overflow-hidden border border-black/10 bg-black">
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
      <div className="work-section__details section-reveal section-reveal--delay-5 pointer-events-none absolute left-[1300px] top-[300px] h-[550px] w-[600px] overflow-hidden">
        <Swiper
          className="work-text-slider h-full w-full"
          modules={[A11y]}
          direction="vertical"
          slidesPerView={1}
          speed={projectSlideSpeed}
          allowTouchMove={false}
          a11y={{ enabled: true }}
          onSwiper={(slider) => { textSliderRef.current = slider; }}
        >
          <SwiperSlide className="section-reveal-group relative">
          <article className="work-project-card pointer-events-auto absolute left-[49px] top-[46px] z-10 w-[500px] bg-surface-white">
            <p className="work-project-card__eyebrow">01 <span>/ SELECTED WORK</span></p>
            <h3 className="mb-space-8 text-project-title font-medium">풀무원 홈페이지<br />리디자인</h3>
            <dl className="flex flex-col gap-space-8 text-body text-text-metadata">
              {projectMetadata.map((item) => (
                <div key={item.label} className="work-project-card__metadata-row grid grid-cols-[120px_1fr]">
                  <dt>• {item.label}</dt>
                  <dd>
                    <span aria-hidden="true">:</span>
                    <span>
                      {item.value}
                      {item.link && (
                        <> · <a className="underline decoration-current underline-offset-2" href={item.link} target="_blank" rel="noopener noreferrer">{item.linkLabel}</a></>
                      )}
                    </span>
                  </dd>
                </div>
              ))}
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
          <article className="work-project-card pointer-events-auto absolute left-[49px] top-[46px] w-[500px] bg-surface-white">
            <p className="work-project-card__eyebrow">02 <span>/ SELECTED WORK</span></p>
            <h3 className="mb-space-8 text-project-title font-medium">오미자 AI 광고<br />영상 제작</h3>
            <dl className="flex flex-col gap-space-8 text-body text-text-metadata">
              {videoProjectMetadata.map((item) => (
                <div key={item.label} className="grid grid-cols-[120px_1fr]">
                  <dt>• {item.label}</dt>
                  <dd className="whitespace-pre-line">
                    <span aria-hidden="true">:</span>
                    <span>
                      {item.value}
                      {item.link && (
                        <> · <a className="underline decoration-current underline-offset-2" href={item.link} target="_blank" rel="noopener noreferrer">{item.linkLabel}</a></>
                      )}
                    </span>
                  </dd>
                </div>
              ))}
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
      <div className="section-reveal section-reveal--delay-6 pointer-events-none absolute left-[1665px] top-[211px] flex h-[752px] w-[250px] items-center justify-center"><SectionWatermark className="-rotate-90">WORK</SectionWatermark></div>
      </div>
    </section>
  );
}
