import { useState, useRef, useCallback, useEffect } from 'react';
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
import LoginPage from './components/LoginPage';
import MemberContentPage from './components/MemberContentPage';
import AuthCallbackPage from './components/AuthCallbackPage';
import { useBannerSystem } from './hooks/useBannerSystem';

function App() {
  const [chapter2Visible, setChapter2Visible] = useState(false);
  const [exploreVisible, setExploreVisible] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [hasSubscribed, setHasSubscribed] = useState(false);
  const [bannersActivated, setBannersActivated] = useState(false);
  const [showLegalPage, setShowLegalPage] = useState(false);
  const [showAboutPage, setShowAboutPage] = useState(false);
  const [showFaqsPage, setShowFaqsPage] = useState(false);
  const [showBodaPage, setShowBodaPage] = useState(false);
  const [showStoriesPage, setShowStoriesPage] = useState(false);
  const [showLoginPage, setShowLoginPage] = useState(false);
  const [showMemberContent, setShowMemberContent] = useState(false);
  const [showAuthCallback, setShowAuthCallback] = useState(false);
  const [authToken, setAuthToken] = useState<string | null>(null);

  useEffect(() => {
    const path = window.location.pathname;
    const searchParams = new URLSearchParams(window.location.search);

    if (path === '/auth/callback') {
      const token = searchParams.get('token');
      if (token) {
        setAuthToken(token);
        setShowAuthCallback(true);
      } else {
        window.location.href = '/login';
      }
    } else if (path === '/login') {
      setShowLoginPage(true);
    } else if (path === '/miembros') {
      setShowMemberContent(true);
    }
  }, []);

  const chapter2Ref = useRef<HTMLDivElement>(null);
  const exploreRef = useRef<HTMLDivElement>(null);

  const { currentMessage, currentAvatar, isVisible, closeBanner } = useBannerSystem({
    scrollTriggered: bannersActivated,
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
    setBannersActivated(true);
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
    setShowLoginPage(false);
    setShowMemberContent(false);
    setShowAuthCallback(false);
    setAuthToken(null);
    window.history.pushState({}, '', '/');
    window.scrollTo(0, 0);
  }, []);

  const handleGoLogin = useCallback(() => {
    setShowLoginPage(true);
    setShowAboutPage(false);
    setShowLegalPage(false);
    setShowFaqsPage(false);
    setShowBodaPage(false);
    setShowStoriesPage(false);
    setShowMemberContent(false);
    setShowAuthCallback(false);
    setAuthToken(null);
    window.history.pushState({}, '', '/login');
    window.scrollTo(0, 0);
  }, []);

  const handleGoMemberContent = useCallback(() => {
    setShowMemberContent(true);
    setShowLoginPage(false);
    setShowAboutPage(false);
    setShowLegalPage(false);
    setShowFaqsPage(false);
    setShowBodaPage(false);
    setShowStoriesPage(false);
    setShowAuthCallback(false);
    setAuthToken(null);
    window.history.pushState({}, '', '/miembros');
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

  const handleAuthSuccess = useCallback(() => {
    setShowAuthCallback(false);
    setAuthToken(null);
    setShowMemberContent(true);
    window.history.pushState({}, '', '/miembros');
  }, []);

  const handleAuthError = useCallback(() => {
    console.log('Auth error occurred');
  }, []);

  if (showAuthCallback && authToken) {
    return (
      <ThemeProvider>
        <AuthCallbackPage
          token={authToken}
          onSuccess={handleAuthSuccess}
          onError={handleAuthError}
        />
      </ThemeProvider>
    );
  }

  if (showLoginPage) {
    return (
      <ThemeProvider>
        <LoginPage onBackClick={handleGoHome} />
      </ThemeProvider>
    );
  }

  if (showMemberContent) {
    return (
      <ThemeProvider>
        <MemberContentPage
          onBackClick={handleGoHome}
          onLoginClick={handleGoLogin}
        />
      </ThemeProvider>
    );
  }

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
        <AboutPage onBack={handleGoHome} onFaqsClick={handleGoFaqs} />
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
        <ExploreOptionsSection ref={exploreRef} visible={exploreVisible} onBodaClick={handleGoBoda} onAboutClick={handleGoAbout} onFaqsClick={handleGoFaqs} />

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
