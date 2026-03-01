import { useState, useRef, useCallback } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import Chapter2Section from './components/Chapter2Section';
import ExploreOptionsSection from './components/ExploreOptionsSection';
import AntiSocialBanner from './components/AntiSocialBanner';
import Footer from './components/Footer';
import PrivacyPolicyPage from './components/PrivacyPolicyPage';
import AboutPage from './components/AboutPage';
import FaqsPage from './components/FaqsPage';
import BodaPage from './components/BodaPage';
import StoriesPage from './components/StoriesPage';
import { useScrollTrigger } from './hooks/useScrollTrigger';
import { useBannerSystem } from './hooks/useBannerSystem';

function App() {
  const [chapter2Visible, setChapter2Visible] = useState(false);
  const [exploreVisible, setExploreVisible] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [hasSubscribed, setHasSubscribed] = useState(false);
  const [showLegalPage, setShowLegalPage] = useState(false);
  const [showAboutPage, setShowAboutPage] = useState(false);
  const [showFaqsPage, setShowFaqsPage] = useState(false);
  const [showBodaPage, setShowBodaPage] = useState(false);
  const [showStoriesPage, setShowStoriesPage] = useState(false);

  const chapter2Ref = useRef<HTMLDivElement>(null);
  const exploreRef = useRef<HTMLDivElement>(null);
  const emailButtonRef = useRef<HTMLButtonElement>(null);

  const scrollTriggered = useScrollTrigger(emailButtonRef);

  const { currentMessage, currentAvatar, isVisible, closeBanner } = useBannerSystem({
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


  const handleGoHome = useCallback(() => {
    setShowAboutPage(false);
    setShowLegalPage(false);
    setShowFaqsPage(false);
    setShowBodaPage(false);
    setShowStoriesPage(false);
    window.scrollTo(0, 0);
  }, []);

  const handleGoAbout = useCallback(() => {
    setShowAboutPage(true);
    setShowLegalPage(false);
    setShowFaqsPage(false);
    setShowBodaPage(false);
    setShowStoriesPage(false);
    window.scrollTo(0, 0);
  }, []);

  const handleGoFaqs = useCallback(() => {
    setShowFaqsPage(true);
    setShowAboutPage(false);
    setShowLegalPage(false);
    setShowBodaPage(false);
    setShowStoriesPage(false);
    window.scrollTo(0, 0);
  }, []);

  const handleGoBoda = useCallback(() => {
    setShowBodaPage(true);
    setShowAboutPage(false);
    setShowLegalPage(false);
    setShowFaqsPage(false);
    setShowStoriesPage(false);
    window.scrollTo(0, 0);
  }, []);

  const handleGoStories = useCallback(() => {
    setShowStoriesPage(true);
    setShowBodaPage(false);
    setShowAboutPage(false);
    setShowLegalPage(false);
    setShowFaqsPage(false);
    window.scrollTo(0, 0);
  }, []);

  if (showStoriesPage) {
    return (
      <ThemeProvider>
        <StoriesPage
          onBackClick={handleGoHome}
          onAboutClick={handleGoAbout}
          onBodaClick={handleGoBoda}
          onFaqsClick={handleGoFaqs}
          onStoriesClick={handleGoStories}
        />
      </ThemeProvider>
    );
  }

  if (showLegalPage) {
    return (
      <ThemeProvider>
        <Navbar activePage="home" onHomeClick={handleGoHome} onAboutClick={handleGoAbout} onFaqsClick={handleGoFaqs} onStoriesClick={handleGoStories} />
        <PrivacyPolicyPage onBack={handleGoHome} />
      </ThemeProvider>
    );
  }

  if (showAboutPage) {
    return (
      <ThemeProvider>
        <Navbar activePage="about" onHomeClick={handleGoHome} onAboutClick={handleGoAbout} onFaqsClick={handleGoFaqs} onStoriesClick={handleGoStories} />
        <AboutPage onBack={handleGoHome} />
      </ThemeProvider>
    );
  }

  if (showFaqsPage) {
    return (
      <ThemeProvider>
        <Navbar activePage="faqs" onHomeClick={handleGoHome} onAboutClick={handleGoAbout} onFaqsClick={handleGoFaqs} onStoriesClick={handleGoStories} />
        <FaqsPage onBack={handleGoHome} />
      </ThemeProvider>
    );
  }

  if (showBodaPage) {
    return (
      <ThemeProvider>
        <Navbar activePage="boda" onHomeClick={handleGoHome} onAboutClick={handleGoAbout} onFaqsClick={handleGoFaqs} onStoriesClick={handleGoStories} />
        <BodaPage onBack={handleGoHome} />
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider>
      <div className="relative">
        <Navbar activePage="home" onHomeClick={handleGoHome} onAboutClick={handleGoAbout} onFaqsClick={handleGoFaqs} onStoriesClick={handleGoStories} />
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
        <ExploreOptionsSection ref={exploreRef} visible={exploreVisible} onBodaClick={handleGoBoda} />

        {exploreVisible && <Footer onLegalClick={() => setShowLegalPage(true)} />}

        {currentMessage && (
          <AntiSocialBanner
            message={currentMessage}
            avatar={currentAvatar}
            isVisible={isVisible}
            onClose={closeBanner}
          />
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;
