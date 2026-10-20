import { useState, useEffect, useCallback } from 'react';
import {
  isSoundEnabled,
  setSoundEnabled,
  playToggleSound,
  playUiClick,
  playModalOpen,
  playModalClose,
} from '../utils/soundEffects';

export function useSoundEffects() {
  const [enabled, setEnabled] = useState<boolean>(() => isSoundEnabled());

  useEffect(() => {
    const handleCustomChange = (e: Event) => {
      const customEvent = e as CustomEvent<{ enabled: boolean }>;
      if (customEvent.detail && typeof customEvent.detail.enabled === 'boolean') {
        setEnabled(customEvent.detail.enabled);
      } else {
        setEnabled(isSoundEnabled());
      }
    };

    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'varsha_ui_sound_enabled') {
        setEnabled(e.newValue !== 'false');
      }
    };

    window.addEventListener('varsha-sound-toggle-change', handleCustomChange);
    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('varsha-sound-toggle-change', handleCustomChange);
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const toggleSound = useCallback(() => {
    const nextState = !enabled;
    // Play subtle toggle chime
    playToggleSound(nextState);
    setSoundEnabled(nextState);
    setEnabled(nextState);
  }, [enabled]);

  return {
    soundEnabled: enabled,
    toggleSound,
    playUiClick,
    playModalOpen,
    playModalClose,
  };
}
