import { useCallback, useEffect, useRef, useState } from 'react';
import { Header, InlineError, LoadingIndicator, MenuOverlay, SectionPagination } from './components/index.js';
import { visibleSectionItems } from './data/portfolioData.js';
import useAssetPreloader from './hooks/useAssetPreloader.js';
import useSectionNavigation from './hooks/useSectionNavigation.js';
import AboutSection from './sections/AboutSection.jsx';
import ContactSection from './sections/ContactSection.jsx';
import HeroSection from './sections/HeroSection.jsx';
import WorkSection from './sections/WorkSection.jsx';
import CursorFollower from './components/common/CursorFollower.jsx';
import { A11y, EffectFade, Keyboard, Mousewheel } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';


function PortfolioApp() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(() => window.matchMedia('(min-width: 1301px)').matches);
  const screenSliderRef = useRef(null);
  const { activeSection, navigate, registerSlider, handleSlideChange } = useSectionNavigation();
  const openMenu = useCallback(() => setMenuOpen(true), []);
  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    const media = window.matchMedia('(min-width: 1301px)');
    const update = () => setIsDesktop(media.matches);
    media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    if (isDesktop && screenSliderRef.current) {
      screenSliderRef.current.enable();
      registerSlider(screenSliderRef.current);
    } else if (!isDesktop) {
      registerSlider(null);
    }
  }, [isDesktop, registerSlider]);

  return (
    <>
      <CursorFollower />
      <a className="skip-link" href="#hero">본문으로 건너뛰기</a>
      <main id="main-content" className="min-h-screen w-full overflow-x-clip" data-active-section={activeSection}>
        <div className="portfolio-fixed-chrome">
          <Header onMenuClick={openMenu} className="absolute left-0 top-0 h-[95px] w-full pr-[50px]" />
          <SectionPagination section={activeSection} items={visibleSectionItems} onNavigate={navigate} className="absolute left-[50px] top-[378px]" />
        </div>
        <Swiper
          className="portfolio-screen-slider"
          modules={[A11y, EffectFade, Keyboard, Mousewheel]}
          effect="fade"
          fadeEffect={{ crossFade: false }}
          speed={0}
          preventInteractionOnTransition={false}
          mousewheel={{ thresholdDelta: 0, thresholdTime: 0, sensitivity: 1 }}
          keyboard={{ enabled: true }}
          enabled={isDesktop}
          onSwiper={(slider) => {
            screenSliderRef.current = slider;
            if (isDesktop) registerSlider(slider);
          }}
          onSlideChange={(slider) => handleSlideChange(slider.activeIndex)}
        >
          <SwiperSlide><HeroSection /></SwiperSlide>
          <SwiperSlide><AboutSection onMenuClick={openMenu} onNavigate={navigate} /></SwiperSlide>
          <SwiperSlide><WorkSection onMenuClick={openMenu} onNavigate={navigate} /></SwiperSlide>
          <SwiperSlide><ContactSection onMenuClick={openMenu} onNavigate={navigate} /></SwiperSlide>
        </Swiper>
      </main>
      <MenuOverlay open={menuOpen} items={visibleSectionItems} onClose={closeMenu} onNavigate={navigate} />
    </>
  );
}

export default function App() {
  const { status, failedAssets, retry } = useAssetPreloader();

  if (status === 'loading') {
    return <div className="flex min-h-screen items-center justify-center bg-surface-warm-beige"><LoadingIndicator /></div>;
  }

  if (status === 'error') {
    return (
      <div className="flex min-h-screen items-center justify-center bg-surface-light">
        <InlineError message={`필수 에셋 ${failedAssets.length}개를 불러오지 못했습니다.`} onRetry={retry} />
      </div>
    );
  }

  return <PortfolioApp />;
}
