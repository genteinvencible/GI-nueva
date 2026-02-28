import { useState, useRef, useEffect, useCallback } from 'react';
import { useTheme } from '../context/ThemeContext';
import Navbar from './Navbar';
import Footer from './Footer';
import { storiesData } from '../data/storiesData';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';

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
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const progressIntervalRef = useRef<number | null>(null);

  const currentStory = selectedStoryIndex !== null ? storiesData[selectedStoryIndex] : null;
  const hasNext = selectedStoryIndex !== null && selectedStoryIndex < storiesData.length - 1;
  const hasPrev = selectedStoryIndex !== null && selectedStoryIndex > 0;

  const handleStoryClick = (index: number) => {
    setSelectedStoryIndex(index);
    setProgress(0);
    setIsPaused(false);
  };

  const handleCloseViewer = () => {
    setSelectedStoryIndex(null);
    setProgress(0);
  };

  const goToNext = useCallback(() => {
    if (hasNext) {
      setSelectedStoryIndex(prev => (prev !== null ? prev + 1 : null));
      setProgress(0);
    } else {
      handleCloseViewer();
    }
  }, [hasNext]);

  const goToPrev = useCallback(() => {
    if (hasPrev) {
      setSelectedStoryIndex(prev => (prev !== null ? prev - 1 : null));
      setProgress(0);
    }
  }, [hasPrev]);

  const togglePause = useCallback(() => {
    if (videoRef.current) {
      if (isPaused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
      setIsPaused(!isPaused);
    }
  }, [isPaused]);

  useEffect(() => {
    if (selectedStoryIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleCloseViewer();
      if (e.key === 'ArrowRight') goToNext();
      if (e.key === 'ArrowLeft') goToPrev();
      if (e.key === ' ') {
        e.preventDefault();
        togglePause();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedStoryIndex, goToNext, goToPrev, togglePause]);

  useEffect(() => {
    if (selectedStoryIndex === null) return;

    const video = videoRef.current;
    if (!video) return;

    video.currentTime = 0;
    setProgress(0);
    setIsPaused(false);

    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        setIsPaused(true);
      });
    }

    const updateProgress = () => {
      if (video.duration && !isPaused) {
        const percentage = (video.currentTime / video.duration) * 100;
        setProgress(percentage);
      }
    };

    progressIntervalRef.current = window.setInterval(updateProgress, 50);

    return () => {
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
      }
    };
  }, [selectedStoryIndex, isPaused]);

  const handleVideoEnd = () => {
    goToNext();
  };

  const handleAreaClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const width = rect.width;

    if (clickX < width * 0.3) {
      goToPrev();
    } else if (clickX > width * 0.7) {
      goToNext();
    } else {
      togglePause();
    }
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

      <main className="pt-24 pb-24">
        <div className="w-full">
          <div className="flex gap-4 px-4 py-4 overflow-x-auto scrollbar-hide">
            {storiesData.map((story, index) => (
              <button
                key={story.id}
                onClick={() => handleStoryClick(index)}
                className="group flex flex-col items-center gap-2 flex-shrink-0"
              >
                <div className="relative w-16 h-16 flex-shrink-0">
                  <svg
                    className="absolute inset-0 w-full h-full"
                    viewBox="0 0 100 100"
                  >
                    <circle
                      cx="50"
                      cy="50"
                      r="46"
                      fill="none"
                      stroke={selectedStoryIndex === index ? '#f59e0b' : (isDark ? '#444' : '#333')}
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
                    selectedStoryIndex === index
                      ? 'text-amber-500'
                      : isDark
                        ? 'text-white/70 group-hover:text-white'
                        : 'text-neutral-600 group-hover:text-neutral-900'
                  }`}
                >
                  {story.title}
                </span>
              </button>
            ))}
          </div>

          {selectedStoryIndex !== null && currentStory && (
            <div className="relative w-full bg-black mt-4">
              <div className="absolute top-0 left-0 right-0 z-10 p-4">
                <div className="flex gap-1 mb-4">
                  {storiesData.map((_, index) => (
                    <div
                      key={index}
                      className="h-1 flex-1 bg-white/30 rounded-full overflow-hidden"
                    >
                      <div
                        className="h-full bg-white transition-all duration-100 ease-linear rounded-full"
                        style={{
                          width: index < selectedStoryIndex ? '100%' : index === selectedStoryIndex ? `${progress}%` : '0%',
                        }}
                      />
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full overflow-hidden">
                      <img
                        src={currentStory.thumbnailUrl}
                        alt={currentStory.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span className="text-white font-medium">{currentStory.title}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={togglePause}
                      className="p-2 text-white/80 hover:text-white transition-colors"
                    >
                      {isPaused ? <Play className="w-6 h-6" /> : <Pause className="w-6 h-6" />}
                    </button>
                  </div>
                </div>
              </div>

              <div
                className="relative w-full aspect-[9/16] max-h-[70vh] mx-auto cursor-pointer"
                onClick={handleAreaClick}
              >
                <video
                  ref={videoRef}
                  src={currentStory.videoUrl}
                  className="w-full h-full object-contain"
                  playsInline
                  muted
                  onEnded={handleVideoEnd}
                />

                {isPaused && (
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-20 h-20 rounded-full bg-black/50 flex items-center justify-center">
                      <Play className="w-10 h-10 text-white ml-1" />
                    </div>
                  </div>
                )}
              </div>

              {hasPrev && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    goToPrev();
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-2 text-white/60 hover:text-white transition-colors z-20"
                >
                  <ChevronLeft className="w-10 h-10" />
                </button>
              )}

              {hasNext && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    goToNext();
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-2 text-white/60 hover:text-white transition-colors z-20"
                >
                  <ChevronRight className="w-10 h-10" />
                </button>
              )}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
