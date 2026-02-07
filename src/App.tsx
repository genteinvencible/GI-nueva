import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';

function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <Hero />
      <AboutSection />
    </ThemeProvider>
  );
}

export default App;
