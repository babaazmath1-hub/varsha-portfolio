/**
 * Futuristic Web Audio UI Sound System
 * 
 * Generates soft, crisp, high-tech interface sounds using the native Web Audio API.
 * - Zero external sound asset dependencies.
 * - Lazy AudioContext initialization on first user interaction.
 * - Respects user preferences via localStorage.
 * - Debounced and gain-controlled to prevent loud or overlapping clicks.
 */

const SOUND_STORAGE_KEY = 'varsha_ui_sound_enabled';
const MIN_SOUND_INTERVAL_MS = 45; // Prevent overlapping clicks

let audioCtx: AudioContext | null = null;
let lastSoundTimestamp = 0;
let isListenerAttached = false;

/**
 * Get or create the singleton AudioContext lazily.
 */
function getAudioContext(): AudioContext | null {
  if (typeof window === 'undefined') return null;

  if (!audioCtx) {
    const AudioContextClass =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;

    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }

  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume().catch(() => {
      // AudioContext resume rejected or pending user gesture
    });
  }

  return audioCtx;
}

/**
 * Check whether sound effects are currently enabled.
 * Defaults to true.
 */
export function isSoundEnabled(): boolean {
  if (typeof window === 'undefined') return true;
  try {
    const val = localStorage.getItem(SOUND_STORAGE_KEY);
    if (val === null) return true;
    return val === 'true';
  } catch {
    return true;
  }
}

/**
 * Enable or disable UI sound effects.
 */
export function setSoundEnabled(enabled: boolean): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(SOUND_STORAGE_KEY, enabled ? 'true' : 'false');
    window.dispatchEvent(
      new CustomEvent('varsha-sound-toggle-change', { detail: { enabled } })
    );
  } catch {
    // Ignore localStorage write failures
  }
}

/**
 * Check debounce threshold to avoid harsh audio layering.
 */
function canPlaySound(): boolean {
  if (!isSoundEnabled()) return false;
  const now = performance.now();
  if (now - lastSoundTimestamp < MIN_SOUND_INTERVAL_MS) {
    return false;
  }
  lastSoundTimestamp = now;
  return true;
}

/**
 * Primary UI Click Sound
 * A short, elegant, futuristic digital tick/tap (~45ms).
 * Combines a soft resonant sine drop with a crisp micro-transient.
 */
export function playUiClick(): void {
  if (!canPlaySound()) return;

  const ctx = getAudioContext();
  if (!ctx) return;

  const now = ctx.currentTime;

  try {
    // --- 1. Resonant Body: Smooth downward pitch sweep (1650Hz -> 650Hz) ---
    const osc = ctx.createOscillator();
    const gainNode = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(1650, now);
    osc.frequency.exponentialRampToValueAtTime(650, now + 0.038);

    // Fast soft attack (1.5ms) to eliminate DC click, steep exponential decay
    gainNode.gain.setValueAtTime(0.0001, now);
    gainNode.gain.linearRampToValueAtTime(0.09, now + 0.002);
    gainNode.gain.exponentialRampToValueAtTime(0.0001, now + 0.042);

    osc.connect(gainNode);
    gainNode.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.045);

    // --- 2. Micro-Transient Click: High-frequency glass haptic layer (~15ms) ---
    const clickOsc = ctx.createOscillator();
    const clickFilter = ctx.createBiquadFilter();
    const clickGain = ctx.createGain();

    clickOsc.type = 'triangle';
    clickOsc.frequency.setValueAtTime(3200, now);
    clickOsc.frequency.exponentialRampToValueAtTime(1800, now + 0.015);

    clickFilter.type = 'bandpass';
    clickFilter.frequency.setValueAtTime(2800, now);
    clickFilter.Q.setValueAtTime(3.0, now);

    clickGain.gain.setValueAtTime(0.0001, now);
    clickGain.gain.linearRampToValueAtTime(0.035, now + 0.001);
    clickGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.018);

    clickOsc.connect(clickFilter);
    clickFilter.connect(clickGain);
    clickGain.connect(ctx.destination);

    clickOsc.start(now);
    clickOsc.stop(now + 0.02);
  } catch {
    // Graceful silent fallback
  }
}

/**
 * Modal Open / Expand Sound
 * Subtle high-tech ascending dual micro-tone (~70ms).
 */
export function playModalOpen(): void {
  if (!canPlaySound()) return;

  const ctx = getAudioContext();
  if (!ctx) return;

  const now = ctx.currentTime;

  try {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(950, now);
    osc.frequency.exponentialRampToValueAtTime(1400, now + 0.065);

    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.linearRampToValueAtTime(0.08, now + 0.004);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.075);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.08);
  } catch {
    // Graceful fallback
  }
}

/**
 * Modal Close / Collapse Sound
 * Soft downward micro-tone (~45ms).
 */
export function playModalClose(): void {
  if (!canPlaySound()) return;

  const ctx = getAudioContext();
  if (!ctx) return;

  const now = ctx.currentTime;

  try {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(1250, now);
    osc.frequency.exponentialRampToValueAtTime(750, now + 0.04);

    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.linearRampToValueAtTime(0.07, now + 0.003);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.045);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.05);
  } catch {
    // Graceful fallback
  }
}

/**
 * Feedback sound when user toggles sound ON/OFF.
 */
export function playToggleSound(enabled: boolean): void {
  const ctx = getAudioContext();
  if (!ctx) return;

  const now = ctx.currentTime;

  try {
    if (enabled) {
      // Friendly double ascending tick
      const osc1 = ctx.createOscillator();
      const gain1 = ctx.createGain();
      osc1.type = 'sine';
      osc1.frequency.setValueAtTime(1100, now);
      gain1.gain.setValueAtTime(0.0001, now);
      gain1.gain.linearRampToValueAtTime(0.08, now + 0.002);
      gain1.gain.exponentialRampToValueAtTime(0.0001, now + 0.035);
      osc1.connect(gain1);
      gain1.connect(ctx.destination);
      osc1.start(now);
      osc1.stop(now + 0.04);

      const osc2 = ctx.createOscillator();
      const gain2 = ctx.createGain();
      osc2.type = 'sine';
      osc2.frequency.setValueAtTime(1600, now + 0.04);
      gain2.gain.setValueAtTime(0.0001, now + 0.04);
      gain2.gain.linearRampToValueAtTime(0.09, now + 0.042);
      gain2.gain.exponentialRampToValueAtTime(0.0001, now + 0.08);
      osc2.connect(gain2);
      gain2.connect(ctx.destination);
      osc2.start(now + 0.04);
      osc2.stop(now + 0.085);
    } else {
      // Soft single descending tick before silence
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(800, now);
      osc.frequency.exponentialRampToValueAtTime(500, now + 0.04);
      gain.gain.setValueAtTime(0.0001, now);
      gain.gain.linearRampToValueAtTime(0.06, now + 0.002);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.045);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.05);
    }
  } catch {
    // Graceful fallback
  }
}

/**
 * Global Document Click Handler with Event Delegation.
 * Automatically plays futuristic sounds on buttons, links, and interactive elements.
 * Preserves all default behavior and event bubbling.
 */
export function initSoundListener(): () => void {
  if (typeof window === 'undefined' || isListenerAttached) {
    return () => {};
  }

  const handleClick = (e: MouseEvent) => {
    if (!isSoundEnabled()) return;

    const target = e.target as HTMLElement | null;
    if (!target) return;

    // Find closest interactive element
    const interactive = target.closest<HTMLElement>(
      'button, a, [role="button"], summary, input[type="submit"], input[type="button"], input[type="reset"], [data-sound], .cursor-pointer'
    );

    if (!interactive) return;

    // Skip if disabled or explicitly disabled for audio
    if (
      interactive.hasAttribute('disabled') ||
      interactive.getAttribute('aria-disabled') === 'true' ||
      interactive.dataset.noSound === 'true' ||
      interactive.dataset.sound === 'none' ||
      interactive.classList.contains('disabled')
    ) {
      return;
    }

    // Modal / Expand sound detection
    const soundType = interactive.dataset.sound;
    const textContent = (interactive.textContent || '').trim().toLowerCase();
    const ariaLabel = (interactive.getAttribute('aria-label') || '').toLowerCase();

    const isModalClose =
      soundType === 'modal-close' ||
      ariaLabel.includes('close') ||
      textContent.includes('close details');

    const isModalOpen =
      soundType === 'modal-open' ||
      interactive.id === 'navbar-resume-btn' ||
      interactive.id === 'hero-resume-btn' ||
      interactive.getAttribute('aria-haspopup') === 'dialog' ||
      textContent.includes('view deep-dive') ||
      textContent.includes('view & verify');

    if (isModalClose) {
      playModalClose();
    } else if (isModalOpen) {
      playModalOpen();
    } else {
      playUiClick();
    }
  };

  // Attach using capture phase so it triggers even if child handlers stop propagation,
  // and passive so scrolling/touch isn't blocked.
  document.addEventListener('click', handleClick, { capture: true, passive: true });
  isListenerAttached = true;

  return () => {
    document.removeEventListener('click', handleClick, { capture: true });
    isListenerAttached = false;
  };
}
