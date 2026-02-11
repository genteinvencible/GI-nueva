import { useEffect, useState, RefObject } from 'react';

export function useScrollTrigger(targetRef: RefObject<HTMLElement>): boolean {
  const [isTriggered, setIsTriggered] = useState(false);

  useEffect(() => {
    const target = targetRef.current;
    if (!target || isTriggered) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
            setIsTriggered(true);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    observer.observe(target);

    return () => {
      observer.disconnect();
    };
  }, [targetRef, isTriggered]);

  return isTriggered;
}
