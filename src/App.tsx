import { useState, useRef, useCallback } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import Chapter2Section from './components/Chapter2Section';

function App() {
  const [chapter2Visible, setChapter2Visible] = useState(false);
  const chapter2Ref = useRef<HTMLDivElement>(null);

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

  return (
    <ThemeProvider>
      <div className="relative">
        <Navbar />
        <Hero />
        <AboutSection onRevealChapter2={handleRevealChapter2} />
        <Chapter2Section ref={chapter2Ref} visible={chapter2Visible} />
      </div>
    </ThemeProvider>
  );
}

export default App;
