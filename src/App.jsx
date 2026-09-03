import { useCallback, useState } from 'react';
import { InlineError, LoadingIndicator, MenuOverlay } from './components/index.js';
import { visibleSectionItems } from './data/portfolioData.js';
import useAssetPreloader from './hooks/useAssetPreloader.js';
import useSectionNavigation from './hooks/useSectionNavigation.js';
import AboutSection from './sections/AboutSection.jsx';
import ContactSection from './sections/ContactSection.jsx';
import HeroSection from './sections/HeroSection.jsx';
import ServicesSection from './sections/ServicesSection.jsx';
import WorkSection from './sections/WorkSection.jsx';
import ContactForm from "./ContactForm";


function PortfolioApp() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { activeSection, navigate } = useSectionNavigation();
  const openMenu = useCallback(() => setMenuOpen(true), []);
  const closeMenu = useCallback(() => setMenuOpen(false), []);

  return (
    <>
      <a className="skip-link" href="#hero">본문으로 건너뛰기</a>
      <main id="main-content" className="w-full overflow-x-clip bg-surface-neutral" data-active-section={activeSection}>
        <HeroSection onMenuClick={openMenu} onNavigate={navigate} />
        <AboutSection onMenuClick={openMenu} onNavigate={navigate} />
        <WorkSection onMenuClick={openMenu} onNavigate={navigate} />
        <ServicesSection onMenuClick={openMenu} onNavigate={navigate} />
        <ContactSection onMenuClick={openMenu} onNavigate={navigate} />
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
  return <ContactForm />;
}
