import { useEffect, useRef, useState, useCallback } from 'react';

interface ScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

interface ScrollRevealReturn {
  ref: React.RefObject<HTMLElement>;
  isVisible: boolean;
  hasRevealed: boolean;
}

export function useScrollReveal(options: ScrollRevealOptions = {}): ScrollRevealReturn {
  const { threshold = 0.15, rootMargin = '0px 0px -50px 0px', triggerOnce = true } = options;
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasRevealed, setHasRevealed] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (triggerOnce && hasRevealed) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setIsVisible(true);
      setHasRevealed(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            setHasRevealed(true);
            if (triggerOnce) {
              observer.unobserve(element);
            }
          } else if (!triggerOnce) {
            setIsVisible(false);
          }
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold, rootMargin, triggerOnce, hasRevealed]);

  return { ref: ref as React.RefObject<HTMLElement>, isVisible, hasRevealed };
}

interface RevealBlockProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: keyof JSX.IntrinsicElements;
}

export function useRevealGroup(itemCount: number, baseDelay = 0, staggerDelay = 0.08) {
  const { ref, isVisible, hasRevealed } = useScrollReveal();

  const getItemStyle = useCallback(
    (index: number) => ({
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
      transition: `opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1) ${baseDelay + index * staggerDelay}s, transform 0.6s cubic-bezier(0.22, 1, 0.36, 1) ${baseDelay + index * staggerDelay}s`,
    }),
    [isVisible, baseDelay, staggerDelay]
  );

  return { ref, isVisible, hasRevealed, getItemStyle };
}
