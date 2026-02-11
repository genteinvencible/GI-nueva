import { useState, useRef, useCallback } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import Chapter2Section from './components/Chapter2Section';
import AntiSocialBanner from './components/AntiSocialBanner';
import { useScrollTrigger } from './hooks/useScrollTrigger';
import { useBannerSystem } from './hooks/useBannerSystem';

function App() {
  const [chapter2Visible, setChapter2Visible] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [hasSubscribed, setHasSubscribed] = useState(false);

  const chapter2Ref = useRef<HTMLDivElement>(null);
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

  const handleCloseBanner = useCallback(() => {
    // El banner se cerrará solo por la animación
  }, []);

  return (
    <ThemeProvider>
      <div className="relative">
        <Navbar />
        <Hero />
        <AboutSection
          ref={emailButtonRef}
          onRevealChapter2={handleRevealChapter2}
          onFormOpenChange={setIsFormOpen}
          onInputFocusChange={setIsInputFocused}
          onSubscribe={() => setHasSubscribed(true)}
        />
        <Chapter2Section ref={chapter2Ref} visible={chapter2Visible} />

        {currentMessage && (
          <AntiSocialBanner
            message={currentMessage}
            avatar={currentAvatar}
            isVisible={isVisible}
            onClose={handleCloseBanner}
          />
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;
