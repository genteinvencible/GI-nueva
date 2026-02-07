import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import ThemeToggle from './components/ThemeToggle';

function App() {
  return (
    <ThemeProvider>
      <div className="relative">
        <ThemeToggle />
        <Navbar />
        <Hero />
        <AboutSection />
      </div>
    </ThemeProvider>
  );
}

export default App;
