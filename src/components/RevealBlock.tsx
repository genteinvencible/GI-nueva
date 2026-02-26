import { useEffect, useRef, useState, ReactNode, CSSProperties } from 'react';

interface RevealBlockProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  as?: keyof JSX.IntrinsicElements;
  threshold?: number;
  rootMargin?: string;
  style?: CSSProperties;
}

export default function RevealBlock({
  children,
  className = '',
  delay = 0,
  duration = 0.6,
  as: Component = 'div',
  threshold = 0.15,
  rootMargin = '0px 0px -40px 0px',
  style,
}: RevealBlockProps) {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(element);
          }
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  const revealStyle: CSSProperties = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
    transition: `opacity ${duration}s cubic-bezier(0.22, 1, 0.36, 1) ${delay}s, transform ${duration}s cubic-bezier(0.22, 1, 0.36, 1) ${delay}s`,
    ...style,
  };

  return (
    <Component
      ref={ref as any}
      className={className}
      style={revealStyle}
    >
      {children}
    </Component>
  );
}

interface RevealStaggerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  baseDelay?: number;
  duration?: number;
  threshold?: number;
  rootMargin?: string;
}

export function RevealStagger({
  children,
  className = '',
  staggerDelay = 0.08,
  baseDelay = 0,
  duration = 0.6,
  threshold = 0.1,
  rootMargin = '0px 0px -30px 0px',
}: RevealStaggerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(element);
          }
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return (
    <div ref={ref} className={className}>
      <style>{`
        .reveal-stagger-item {
          opacity: 0;
          transform: translateY(20px);
        }
        .reveal-stagger-item.visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
      {Array.isArray(children)
        ? children.map((child, index) => (
            <div
              key={index}
              className={`reveal-stagger-item ${isVisible ? 'visible' : ''}`}
              style={{
                transition: `opacity ${duration}s cubic-bezier(0.22, 1, 0.36, 1) ${baseDelay + index * staggerDelay}s, transform ${duration}s cubic-bezier(0.22, 1, 0.36, 1) ${baseDelay + index * staggerDelay}s`,
              }}
            >
              {child}
            </div>
          ))
        : children}
    </div>
  );
}
