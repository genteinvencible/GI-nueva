import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';

function App() {
  return (
    <ThemeProvider>
      <div className="relative">
        <Navbar />
        <Hero />
        <AboutSection />
      </div>
    </ThemeProvider>
  );
}

export default App;
