import { useState, useRef, useCallback } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import Chapter2Section from './components/Chapter2Section';
import ExploreOptionsSection from './components/ExploreOptionsSection';
import AntiSocialBanner from './components/AntiSocialBanner';
import PrivacyPolicy from './components/PrivacyPolicy';
import Footer from './components/Footer';
import { useScrollTrigger } from './hooks/useScrollTrigger';
import { useBannerSystem } from './hooks/useBannerSystem';

function App() {
  const [chapter2Visible, setChapter2Visible] = useState(false);
  const [exploreVisible, setExploreVisible] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [hasSubscribed, setHasSubscribed] = useState(false);
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);

  const chapter2Ref = useRef<HTMLDivElement>(null);
  const exploreRef = useRef<HTMLDivElement>(null);
  const emailButtonRef = useRef<HTMLButtonElement>(null);

  const scrollTriggered = useScrollTrigger(emailButtonRef);

  const { currentMessage, currentAvatar, isVisible } = useBannerSystem({
    scrollTriggered,
    isFormOpen,
    isInputFocused,
    hasSubscribed,
  });

  const handleRevealChapter2 = useCallback(() => {
    if (chapter2Visible) {
      chapter2Ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }
    setChapter2Visible(true);
    setTimeout(() => {
      chapter2Ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 50);
  }, [chapter2Visible]);

  const handleRevealExplore = useCallback(() => {
    if (exploreVisible) {
      exploreRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }
    setExploreVisible(true);
    setTimeout(() => {
      exploreRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 50);
  }, [exploreVisible]);

  const handleCloseBanner = useCallback(() => {
    // El banner se cerrará solo por la animación
  }, []);

  return (
    <ThemeProvider>
      <div className="relative">
        <Navbar onPrivacyClick={() => setShowPrivacyPolicy(true)} />
        <Hero />
        <AboutSection
          ref={emailButtonRef}
          onRevealChapter2={handleRevealChapter2}
          onFormOpenChange={setIsFormOpen}
          onInputFocusChange={setIsInputFocused}
          onSubscribe={() => setHasSubscribed(true)}
        />
        <Chapter2Section
          ref={chapter2Ref}
          visible={chapter2Visible}
          onExploreClick={handleRevealExplore}
        />
        <ExploreOptionsSection ref={exploreRef} visible={exploreVisible} />

        <Footer onLegalClick={() => setShowPrivacyPolicy(true)} />

        {currentMessage && (
          <AntiSocialBanner
            message={currentMessage}
            avatar={currentAvatar}
            isVisible={isVisible}
            onClose={handleCloseBanner}
          />
        )}

        <PrivacyPolicy
          isOpen={showPrivacyPolicy}
          onClose={() => setShowPrivacyPolicy(false)}
        />
      </div>
    </ThemeProvider>
  );
}

export default App;
