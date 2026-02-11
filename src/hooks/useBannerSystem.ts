import { useState, useEffect, useCallback } from 'react';
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

export function useBannerSystem({
  scrollTriggered,
  isFormOpen,
  isInputFocused,
  hasSubscribed,
}: UseBannerSystemOptions): BannerSystemState {
  const [currentMessage, setCurrentMessage] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [messageIndex, setMessageIndex] = useState(0);
  const [elapsedTime, setElapsedTime] = useState(0);

  const getNextMessage = useCallback((): BannerMessage => {
    const message = bannerMessages[messageIndex];
    setMessageIndex((prev) => (prev + 1) % bannerMessages.length);
    return message;
  }, [messageIndex]);

  const showBanner = useCallback(() => {
    const message = getNextMessage();
    const processedMessage = processMessage(message);
    setCurrentMessage(processedMessage);
    setIsVisible(true);

    setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentMessage(null);
      }, 300);
    }, 7000);
  }, [getNextMessage]);

  useEffect(() => {
    if (!scrollTriggered || hasSubscribed) return;

    const initialDelay = setTimeout(() => {
      showBanner();
    }, 4000);

    return () => clearTimeout(initialDelay);
  }, [scrollTriggered, hasSubscribed, showBanner]);

  useEffect(() => {
    if (!scrollTriggered || hasSubscribed || isInputFocused) return;

    const intervalTime = 45000;

    const interval = setInterval(() => {
      if (!isInputFocused && !isFormOpen) {
        showBanner();
      }
    }, intervalTime);

    return () => clearInterval(interval);
  }, [scrollTriggered, hasSubscribed, isInputFocused, isFormOpen, showBanner]);

  useEffect(() => {
    if (!scrollTriggered || hasSubscribed) return;

    const timer = setInterval(() => {
      setElapsedTime((prev) => prev + 1000);
    }, 1000);

    return () => clearInterval(timer);
  }, [scrollTriggered, hasSubscribed]);

  return {
    currentMessage,
    isVisible,
  };
}
