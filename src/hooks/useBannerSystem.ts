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
  const [usedMessages, setUsedMessages] = useState<Set<string>>(new Set());
  const [elapsedTime, setElapsedTime] = useState(0);

  const getRandomMessage = useCallback((): BannerMessage | null => {
    const availableMessages = bannerMessages.filter(
      (msg) => !usedMessages.has(msg.id)
    );

    if (availableMessages.length === 0) {
      setUsedMessages(new Set());
      return bannerMessages[Math.floor(Math.random() * bannerMessages.length)];
    }

    const randomIndex = Math.floor(Math.random() * availableMessages.length);
    const selectedMessage = availableMessages[randomIndex];

    setUsedMessages((prev) => new Set([...prev, selectedMessage.id]));

    return selectedMessage;
  }, [usedMessages]);

  const showBanner = useCallback(() => {
    const message = getRandomMessage();
    if (!message) return;

    const processedMessage = processMessage(message);
    setCurrentMessage(processedMessage);
    setIsVisible(true);

    setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentMessage(null);
      }, 300);
    }, 6500);
  }, [getRandomMessage]);

  useEffect(() => {
    if (!scrollTriggered || hasSubscribed) return;

    const initialDelay = setTimeout(() => {
      showBanner();
    }, 4000);

    return () => clearTimeout(initialDelay);
  }, [scrollTriggered, hasSubscribed, showBanner]);

  useEffect(() => {
    if (!scrollTriggered || hasSubscribed || isInputFocused) return;

    const intervalTime = elapsedTime > 90000 ? 10000 : Math.floor(Math.random() * 8000) + 12000;

    const interval = setInterval(() => {
      if (!isInputFocused && !isFormOpen) {
        showBanner();
      }
    }, intervalTime);

    return () => clearInterval(interval);
  }, [scrollTriggered, hasSubscribed, isInputFocused, isFormOpen, elapsedTime, showBanner]);

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
