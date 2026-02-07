import { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import ThemeToggle from './components/ThemeToggle';

function App() {
  const [contentUnlocked, setContentUnlocked] = useState(false);

  return (
    <ThemeProvider>
      <div className="relative">
        <ThemeToggle />
        <Navbar />
        <Hero onUnlock={() => setContentUnlocked(true)} />
        {contentUnlocked && <AboutSection />}
      </div>
    </ThemeProvider>
  );
}

export default App;
