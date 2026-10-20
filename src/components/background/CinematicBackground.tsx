import { useEffect, useRef, useState } from 'react';

export const CinematicBackground: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [parallaxOffset, setParallaxOffset] = useState({ x: 0, y: 0 });
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Guarantee instant video playback from the very first frame
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      video.defaultMuted = true;
      video.currentTime = 0;
      
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsVideoLoaded(true);
          })
          .catch(() => {
            // Fallback gracefully to CSS & canvas atmosphere
            setIsVideoLoaded(false);
          });
      }
    }
  }, []);

  useEffect(() => {
    // Detect touch device
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      setIsTouchDevice(true);
    }

    // Detect prefers-reduced-motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleMotionChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };
    mediaQuery.addEventListener('change', handleMotionChange);

    // Track mouse with gentle parallax on desktop
    let animationFrameId: number;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      
      // Calculate normalized parallax offset (subtle, max 12px displacement)
      const normX = (e.clientX / window.innerWidth - 0.5) * 2;
      const normY = (e.clientY / window.innerHeight - 0.5) * 2;
      targetX = normX * 12;
      targetY = normY * 12;
    };

    const updateParallax = () => {
      currentX += (targetX - currentX) * 0.05;
      currentY += (targetY - currentY) * 0.05;
      setParallaxOffset({ x: currentX, y: currentY });
      animationFrameId = requestAnimationFrame(updateParallax);
    };

    if (!('ontouchstart' in window || navigator.maxTouchPoints > 0)) {
      window.addEventListener('mousemove', handleMouseMove, { passive: true });
      animationFrameId = requestAnimationFrame(updateParallax);
    }

    return () => {
      mediaQuery.removeEventListener('change', handleMotionChange);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Multi-directional Canvas Particle Simulation with glowing cyan & red points
  useEffect(() => {
    if (prefersReducedMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    const isMobile = width < 768;
    const particleCount = isMobile ? 22 : Math.min(Math.floor((width * height) / 32000), 50);

    interface Particle {
      x: number;
      y: number;
      radius: number;
      vx: number;
      vy: number;
      color: string;
      glowColor: string;
      alpha: number;
      targetAlpha: number;
      pulseSpeed: number;
      isAccent: boolean;
    }

    const particles: Particle[] = Array.from({ length: particleCount }, (_, i) => {
      // Small glowing cyan, red, and violet points matching the reference video
      const isRedAccent = i % 7 === 0;
      const isCyanAccent = i % 4 === 0 && !isRedAccent;
      const isVioletAccent = i % 3 === 0 && !isRedAccent && !isCyanAccent;

      let color = 'rgba(245, 247, 255, ';
      let glowColor = '#F5F7FF';
      let radius = Math.random() * 0.8 + 0.8;

      if (isRedAccent) {
        color = 'rgba(244, 63, 94, '; // glowing red/coral
        glowColor = '#F43F5E';
        radius = Math.random() * 1.2 + 1.6;
      } else if (isCyanAccent) {
        color = 'rgba(34, 211, 238, '; // glowing cyan
        glowColor = '#22D3EE';
        radius = Math.random() * 1.2 + 1.5;
      } else if (isVioletAccent) {
        color = 'rgba(139, 92, 246, '; // glowing violet
        glowColor = '#8B5CF6';
        radius = Math.random() * 1.0 + 1.2;
      }

      const driftAngle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 0.22 + 0.08;
      const vy = Math.sin(driftAngle) * speed - 0.06;
      const vx = Math.cos(driftAngle) * speed;

      return {
        x: Math.random() * width,
        y: Math.random() * height,
        radius,
        vx,
        vy,
        color,
        glowColor,
        alpha: Math.random() * 0.5 + 0.2,
        targetAlpha: Math.random() * 0.5 + 0.2,
        pulseSpeed: Math.random() * 0.008 + 0.004,
        isAccent: isRedAccent || isCyanAccent || isVioletAccent,
      };
    });

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Subtle constellation lines
      const maxDist = isMobile ? 70 : 90;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < maxDist) {
            const lineAlpha = (1 - dist / maxDist) * 0.06;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(139, 92, 246, ${lineAlpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      // Draw each particle with optical glow
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;
        if (p.y < -10) p.y = height + 10;
        if (p.y > height + 10) p.y = -10;

        p.alpha += (p.targetAlpha - p.alpha) * p.pulseSpeed;
        if (Math.abs(p.targetAlpha - p.alpha) < 0.02) {
          p.targetAlpha = Math.random() * (p.isAccent ? 0.75 : 0.4) + 0.15;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${p.alpha})`;

        if (p.isAccent) {
          ctx.shadowBlur = 8;
          ctx.shadowColor = p.glowColor;
        }
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, [prefersReducedMotion]);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#05070D] select-none"
    >
      {/* ========================================================
          LAYER 1: SOLID DEEP BLACK BASE
         ======================================================== */}
      <div className="absolute inset-0 bg-[#05070D]" />

      {/* ========================================================
          LAYER 2: AUTOPLAYING FIXED VIDEO BACKGROUND FROM 1ST SECOND
         ======================================================== */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        onLoadedData={() => setIsVideoLoaded(true)}
        className={`absolute inset-0 w-full h-full object-cover pointer-events-none transition-opacity duration-1000 ${
          isVideoLoaded ? 'opacity-85' : 'opacity-60'
        }`}
        style={{
          transform: !isTouchDevice && !prefersReducedMotion 
            ? `translate3d(${parallaxOffset.x * 0.4}px, ${parallaxOffset.y * 0.4}px, 0) scale(1.03)` 
            : 'scale(1.02)',
        }}
      >
        <source src="/videos/background.mp4" type="video/mp4" />
      </video>

      {/* Fallback / Complementary CSS Aurora Orbs */}
      <div
        className="absolute -top-[15%] -left-[10%] w-[650px] sm:w-[900px] h-[650px] sm:h-[900px] rounded-full filter blur-[140px] animate-aurora-1 pointer-events-none opacity-40 mix-blend-screen"
        style={{
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, rgba(124, 58, 237, 0.2) 50%, transparent 75%)',
        }}
      />

      <div
        className="absolute top-[25%] -right-[15%] w-[550px] sm:w-[800px] h-[550px] sm:h-[800px] rounded-full filter blur-[150px] animate-aurora-2 pointer-events-none opacity-30 mix-blend-screen"
        style={{
          background: 'radial-gradient(circle, rgba(34, 211, 238, 0.35) 0%, rgba(6, 182, 212, 0.15) 50%, transparent 75%)',
        }}
      />

      {/* ========================================================
          LAYER 3: FLOWING LIGHT WAVES & TECHNICAL GRID
         ======================================================== */}
      {/* Flowing Cyan/Violet Light Wave */}
      <div className="absolute top-[35%] -left-[20%] w-[140%] h-[300px] opacity-20 filter blur-[75px] animate-wave-flow pointer-events-none overflow-hidden">
        <svg viewBox="0 0 1440 300" className="w-full h-full" fill="none">
          <defs>
            <linearGradient id="waveGradV" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.1" />
              <stop offset="40%" stopColor="#8B5CF6" stopOpacity="0.5" />
              <stop offset="70%" stopColor="#22D3EE" stopOpacity="0.55" />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.15" />
            </linearGradient>
          </defs>
          <path
            fill="url(#waveGradV)"
            d="M0,150 C320,280 420,40 720,170 C1020,300 1120,70 1440,190 L1440,300 L0,300 Z"
          />
        </svg>
      </div>

      {/* Breathing Technical Mesh Grid */}
      <div className="absolute inset-0 bg-grid-pattern animate-grid-breathe mix-blend-screen pointer-events-none" />

      {/* ========================================================
          LAYER 4: FLOATING PARTICLES & GLOWING POINTS (CANVAS)
         ======================================================== */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-85 pointer-events-none"
        style={{
          transform: !isTouchDevice && !prefersReducedMotion 
            ? `translate3d(${parallaxOffset.x * 0.25}px, ${parallaxOffset.y * 0.25}px, 0)` 
            : undefined,
        }}
      />

      {/* Dynamic Cursor Spotlight (Desktop only, non-reduced motion) */}
      {!isTouchDevice && !prefersReducedMotion && mousePos.x >= 0 && (
        <div
          className="absolute w-[450px] h-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none transition-transform duration-75 ease-out"
          style={{
            left: `${mousePos.x}px`,
            top: `${mousePos.y}px`,
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.08) 0%, rgba(34, 211, 238, 0.04) 45%, transparent 70%)',
            filter: 'blur(35px)',
          }}
        />
      )}

      {/* ========================================================
          LAYER 5: DARK CINEMATIC OVERLAY & RADIAL VIGNETTE
         ======================================================== */}
      {/* Near-black transparency overlay ensuring high contrast */}
      <div className="absolute inset-0 bg-[#080B12]/45 pointer-events-none" />
      
      {/* Subtle edge vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,#080B12_92%)] opacity-70 pointer-events-none" />

      {/* Subtle vertical vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#080B12]/50 via-transparent to-[#080B12]/85 pointer-events-none" />
    </div>
  );
};
