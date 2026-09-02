import { useCallback, useEffect, useState } from 'react';

const portfolioAssets = [
  '/assets/icons/header-menu-icon.png',
  '/assets/icons/hero-slide-pagination.svg',
  '/assets/icons/about-slide-pagination.svg',
  '/assets/icons/work-slide-pagination.svg',
  '/assets/icons/services-slide-pagination.svg',
  '/assets/icons/contact-slide-pagination.svg',
  '/assets/icons/about-brands-divider.svg',
  '/assets/images/hero-portrait.png',
  '/assets/images/work-project-thumbnail.png',
  '/assets/images/services-corner-blob.png',
  '/assets/images/services-curved-rule.png',
  '/assets/images/contact-corner-blob.png',
  '/assets/images/contact-sparkles.png',
  '/assets/images/contact-asterisk.png',
];

function loadImage(source) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = resolve;
    image.onerror = () => reject(new Error(source));
    image.src = source;
  });
}

export default function useAssetPreloader() {
  const [attempt, setAttempt] = useState(0);
  const [state, setState] = useState({ status: 'loading', failedAssets: [] });

  useEffect(() => {
    let cancelled = false;
    setState({ status: 'loading', failedAssets: [] });
    const fontReady = document.fonts?.load('1rem Pretendard') ?? Promise.resolve();
    Promise.allSettled([fontReady, ...portfolioAssets.map(loadImage)]).then((results) => {
      if (cancelled) return;
      const failedAssets = results
        .map((result, index) => ({ result, source: index === 0 ? 'Pretendard' : portfolioAssets[index - 1] }))
        .filter(({ result }) => result.status === 'rejected')
        .map(({ source }) => source);
      setState(failedAssets.length ? { status: 'error', failedAssets } : { status: 'ready', failedAssets: [] });
    });
    return () => { cancelled = true; };
  }, [attempt]);

  const retry = useCallback(() => setAttempt((current) => current + 1), []);
  return { ...state, retry };
}
