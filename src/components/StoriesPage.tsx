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
        onHomeClick={onBackClick}
        onAboutClick={onAboutClick}
        onBodaClick={onBodaClick}
        onFaqsClick={onFaqsClick}
        onStoriesClick={onStoriesClick}
        activePage="stories"
      />

      <main className="pt-32 pb-24 px-6">
        <div className="max-w-4xl mx-auto">
          <p
            className={`text-sm font-medium tracking-wider mb-8 ${
              isDark ? 'text-white/50' : 'text-neutral-500'
            }`}
          >
            Recent stories
          </p>

          <div className="flex flex-wrap gap-6">
            {storiesData.map((story, index) => (
              <button
                key={story.id}
                onClick={() => handleStoryClick(index)}
                className="group flex flex-col items-center gap-3"
              >
                <div className="relative w-20 h-20 md:w-24 md:h-24">
                  <svg
                    className="absolute inset-0 w-full h-full"
                    viewBox="0 0 100 100"
                  >
                    <circle
                      cx="50"
                      cy="50"
                      r="46"
                      fill="none"
                      stroke={isDark ? '#333' : '#222'}
                      strokeWidth="3"
                      strokeDasharray="18 6"
                      strokeLinecap="round"
                      className="transition-all duration-300 group-hover:stroke-amber-500"
                    />
                  </svg>
                  <div className="absolute inset-[6px] rounded-full overflow-hidden">
                    <img
                      src={story.thumbnailUrl}
                      alt={story.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                </div>
                <span
                  className={`text-xs font-medium transition-colors max-w-[80px] truncate ${
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
