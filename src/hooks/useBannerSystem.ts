import { useState, useEffect, useRef } from 'react';
import { bannerMessages, processMessage } from '../data/bannerMessages';

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

const BANNER_DISPLAY_TIME = 6000;
const BANNER_PAUSE_TIME = 20000;
const FADE_OUT_TIME = 300;
const INITIAL_DELAY = 5000;

export function useBannerSystem({
  scrollTriggered,
  isFormOpen,
  isInputFocused,
  hasSubscribed,
}: UseBannerSystemOptions): BannerSystemState {
  const [currentMessage, setCurrentMessage] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const messageIndexRef = useRef(0);
  const displayTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const fadeOutTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const clearTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const pauseTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const isActiveRef = useRef(false);

  useEffect(() => {
    // Limpiar todos los timeouts
    const clearAllTimeouts = () => {
      if (displayTimeoutRef.current) clearTimeout(displayTimeoutRef.current);
      if (fadeOutTimeoutRef.current) clearTimeout(fadeOutTimeoutRef.current);
      if (clearTimeoutRef.current) clearTimeout(clearTimeoutRef.current);
      if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
    };

    // Si no está activado o ya se suscribió, limpiar todo
    if (!scrollTriggered || hasSubscribed) {
      clearAllTimeouts();
      isActiveRef.current = false;
      setIsVisible(false);
      setCurrentMessage(null);
      return;
    }

    // Función para mostrar el siguiente banner
    const showNextBanner = () => {
      // Verificar condiciones antes de mostrar
      if (!isActiveRef.current || isFormOpen || isInputFocused || hasSubscribed) {
        // Si no se puede mostrar, reprogramar
        pauseTimeoutRef.current = setTimeout(showNextBanner, BANNER_PAUSE_TIME);
        return;
      }

      // Obtener el siguiente mensaje
      const message = bannerMessages[messageIndexRef.current];
      messageIndexRef.current = (messageIndexRef.current + 1) % bannerMessages.length;
      const processedMessage = processMessage(message);

      // Mostrar el banner
      setCurrentMessage(processedMessage);
      setIsVisible(true);

      // Programar el ocultamiento del banner después de BANNER_DISPLAY_TIME
      displayTimeoutRef.current = setTimeout(() => {
        setIsVisible(false);

        // Esperar a que termine la animación de fade out
        fadeOutTimeoutRef.current = setTimeout(() => {
          setCurrentMessage(null);

          // Esperar BANNER_PAUSE_TIME antes de mostrar el siguiente
          pauseTimeoutRef.current = setTimeout(showNextBanner, BANNER_PAUSE_TIME);
        }, FADE_OUT_TIME);
      }, BANNER_DISPLAY_TIME);
    };

    // Activar el sistema
    isActiveRef.current = true;

    // Esperar el delay inicial antes de mostrar el primer banner
    const initialTimeout = setTimeout(showNextBanner, INITIAL_DELAY);

    return () => {
      clearTimeout(initialTimeout);
      clearAllTimeouts();
      isActiveRef.current = false;
    };
  }, [scrollTriggered, hasSubscribed, isFormOpen, isInputFocused]);

  return {
    currentMessage,
    isVisible,
  };
}
