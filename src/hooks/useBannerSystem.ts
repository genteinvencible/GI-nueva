import { useState, useEffect, useCallback, useRef } from 'react';
import { bannerMessages, processMessage, BannerMessage } from '../data/bannerMessages';

interface BannerSystemState {
  currentMessage: string | null;
  isVisible: boolean;
}

interface UseBannerSystemOptions {
  scrollTriggered: boolean;
  isFormOpen: boolean;
  isInputFocused: boolean;
  hasSubscribed: boolean;
}

const BANNER_DISPLAY_TIME = 12000;
const BANNER_PAUSE_TIME = 60000;

export function useBannerSystem({
  scrollTriggered,
  isFormOpen,
  isInputFocused,
  hasSubscribed,
}: UseBannerSystemOptions): BannerSystemState {
  const [currentMessage, setCurrentMessage] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [messageIndex, setMessageIndex] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const isShowingRef = useRef(false);

  const getNextMessage = useCallback((): BannerMessage => {
    const message = bannerMessages[messageIndex];
    setMessageIndex((prev) => (prev + 1) % bannerMessages.length);
    return message;
  }, [messageIndex]);

  const scheduleNextBanner = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      if (!isInputFocused && !isFormOpen && !hasSubscribed && isShowingRef.current) {
        const message = getNextMessage();
        const processedMessage = processMessage(message);
        setCurrentMessage(processedMessage);
        setIsVisible(true);

        setTimeout(() => {
          setIsVisible(false);
          setTimeout(() => {
            setCurrentMessage(null);
            scheduleNextBanner();
          }, 300);
        }, BANNER_DISPLAY_TIME);
      }
    }, BANNER_PAUSE_TIME);
  }, [isInputFocused, isFormOpen, hasSubscribed, getNextMessage]);

  useEffect(() => {
    if (!scrollTriggered || hasSubscribed) {
      isShowingRef.current = false;
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      return;
    }

    isShowingRef.current = true;

    const initialDelay = setTimeout(() => {
      if (!isInputFocused && !isFormOpen) {
        const message = getNextMessage();
        const processedMessage = processMessage(message);
        setCurrentMessage(processedMessage);
        setIsVisible(true);

        setTimeout(() => {
          setIsVisible(false);
          setTimeout(() => {
            setCurrentMessage(null);
            scheduleNextBanner();
          }, 300);
        }, BANNER_DISPLAY_TIME);
      }
    }, 5000);

    return () => {
      clearTimeout(initialDelay);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [scrollTriggered, hasSubscribed, isInputFocused, isFormOpen, getNextMessage, scheduleNextBanner]);

  return {
    currentMessage,
    isVisible,
  };
}
