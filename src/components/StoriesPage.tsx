import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import Navbar from './Navbar';
import Footer from './Footer';
import StoryViewer from './StoryViewer';
import { storiesData } from '../data/storiesData';

interface StoriesPageProps {
  onBackClick: () => void;
  onAboutClick: () => void;
  onBodaClick: () => void;
  onFaqsClick: () => void;
  onStoriesClick: () => void;
}

export default function StoriesPage({
  onBackClick,
  onAboutClick,
  onBodaClick,
  onFaqsClick,
  onStoriesClick,
}: StoriesPageProps) {
  const { isDark } = useTheme();
  const [selectedStoryIndex, setSelectedStoryIndex] = useState<number | null>(null);

  const handleStoryClick = (index: number) => {
    setSelectedStoryIndex(index);
  };

  const handleCloseViewer = () => {
    setSelectedStoryIndex(null);
  };

  return (
    <div className={`min-h-screen ${isDark ? 'bg-[#0a0a0a]' : 'bg-[#FAF9F6]'}`}>
      <Navbar
        onAboutClick={onAboutClick}
        onBodaClick={onBodaClick}
        onFaqsClick={onFaqsClick}
        onStoriesClick={onStoriesClick}
        activePage="stories"
      />

      <main className="pt-32 pb-24 px-6">
        <div className="max-w-4xl mx-auto">
          <button
            onClick={onBackClick}
            className={`mb-8 text-sm font-medium tracking-wide transition-colors ${
              isDark ? 'text-white/60 hover:text-white' : 'text-neutral-500 hover:text-neutral-900'
            }`}
          >
            &larr; VOLVER
          </button>

          <h1
            className={`text-4xl md:text-5xl font-bold mb-4 ${
              isDark ? 'text-white' : 'text-neutral-900'
            }`}
          >
            Stories
          </h1>
          <p
            className={`text-lg mb-12 ${
              isDark ? 'text-white/60' : 'text-neutral-600'
            }`}
          >
            Momentos especiales en formato vertical
          </p>

          <div className="flex flex-wrap gap-6 justify-center md:justify-start">
            {storiesData.map((story, index) => (
              <button
                key={story.id}
                onClick={() => handleStoryClick(index)}
                className="group flex flex-col items-center gap-3"
              >
                <div className="relative">
                  <div
                    className="w-24 h-24 md:w-28 md:h-28 rounded-full p-[3px] bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600
                               group-hover:from-amber-300 group-hover:via-amber-400 group-hover:to-amber-500
                               transition-all duration-300 group-hover:scale-105"
                  >
                    <div
                      className={`w-full h-full rounded-full flex items-center justify-center ${
                        isDark ? 'bg-[#0a0a0a]' : 'bg-[#FAF9F6]'
                      }`}
                    >
                      <story.icon
                        className={`w-10 h-10 md:w-12 md:h-12 transition-colors duration-300 ${
                          isDark
                            ? 'text-amber-400/80 group-hover:text-amber-400'
                            : 'text-amber-600/80 group-hover:text-amber-600'
                        }`}
                      />
                    </div>
                  </div>
                </div>
                <span
                  className={`text-sm font-medium transition-colors ${
                    isDark
                      ? 'text-white/70 group-hover:text-white'
                      : 'text-neutral-600 group-hover:text-neutral-900'
                  }`}
                >
                  {story.title}
                </span>
              </button>
            ))}
          </div>

          <div
            className={`mt-16 p-6 rounded-2xl ${
              isDark ? 'bg-white/5' : 'bg-neutral-100'
            }`}
          >
            <h2
              className={`text-lg font-semibold mb-2 ${
                isDark ? 'text-white' : 'text-neutral-900'
              }`}
            >
              Como ver las stories
            </h2>
            <ul
              className={`space-y-2 text-sm ${
                isDark ? 'text-white/60' : 'text-neutral-600'
              }`}
            >
              <li>Haz clic en un circulo para abrir la story</li>
              <li>Toca los lados para avanzar o retroceder</li>
              <li>Toca el centro para pausar/reanudar</li>
              <li>Usa las flechas del teclado o ESC para cerrar</li>
            </ul>
          </div>
        </div>
      </main>

      <Footer />

      {selectedStoryIndex !== null && (
        <StoryViewer
          stories={storiesData}
          initialIndex={selectedStoryIndex}
          onClose={handleCloseViewer}
        />
      )}
    </div>
  );
}
