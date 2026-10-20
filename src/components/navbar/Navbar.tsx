import { useState, useEffect } from 'react';
import { Menu, X, FileText, ChevronRight, Sparkles, Volume2, VolumeX } from 'lucide-react';
import { useSoundEffects } from '../../hooks/useSoundEffects';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { soundEnabled, toggleSound } = useSoundEffects();

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section tracking
      const sections = ['home', 'about', 'education', 'skills', 'experience', 'projects', 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#080B12]/80 backdrop-blur-xl border-b border-white/[0.08] shadow-lg shadow-black/20 py-3.5'
          : 'bg-transparent py-5 sm:py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Personal Wordmark / Logo */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, '#home')}
            className="group flex items-center gap-2.5 text-decoration-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6] rounded-lg p-1"
            aria-label="Varsha R S Home"
          >
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-[#8B5CF6] to-[#22D3EE] p-[1.5px] transition-transform duration-300 group-hover:scale-105 shadow-md shadow-[#8B5CF6]/25 shrink-0 overflow-hidden">
              <img
                src="/varsha-portrait.jpg"
                alt="Varsha R S"
                className="w-full h-full rounded-[9px] object-cover object-[50%_22%] scale-140 origin-[50%_22%]"
              />
              <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-[#080B12] ring-1 ring-emerald-500/50 z-10" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-base tracking-wider text-[#F5F7FF] group-hover:text-white transition-colors flex items-center gap-1.5 font-display">
                VARSHA R S
                <span className="w-1.5 h-1.5 rounded-full bg-[#22D3EE] animate-pulse" />
              </span>
              <span className="text-[10px] font-mono tracking-widest text-[#9CA3AF] uppercase">
                CSE · AI/ML
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-white/[0.03] border border-white/[0.06] rounded-full px-3 py-1.5 backdrop-blur-md shadow-inner">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`relative px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6] ${
                    isActive
                      ? 'text-white font-semibold'
                      : 'text-[#9CA3AF] hover:text-[#F5F7FF]'
                  }`}
                >
                  {isActive && (
                    <span className="absolute inset-0 bg-gradient-to-r from-[#8B5CF6]/30 to-[#22D3EE]/20 rounded-full border border-white/[0.12] -z-10 shadow-sm" />
                  )}
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action: Sound Toggle, Resume & Mobile Hamburger */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Futuristic Sound FX Toggle */}
            <button
              onClick={toggleSound}
              type="button"
              id="sound-toggle-btn"
              data-sound="none"
              className="relative p-2 sm:px-2.5 sm:py-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.08] hover:border-[#8B5CF6]/40 text-slate-300 hover:text-white transition-all duration-200 flex items-center gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6] group"
              aria-label={soundEnabled ? 'Mute interface click sounds' : 'Enable interface click sounds'}
              title={soundEnabled ? 'Click sounds enabled (Click to mute)' : 'Click sounds muted (Click to enable)'}
            >
              {soundEnabled ? (
                <>
                  <Volume2 className="w-4 h-4 text-[#22D3EE] group-hover:scale-110 transition-transform" />
                  <span className="hidden xl:inline text-[11px] font-mono text-[#22D3EE] font-medium tracking-wider">SOUND</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                </>
              ) : (
                <>
                  <VolumeX className="w-4 h-4 text-slate-500 group-hover:text-slate-300 transition-colors" />
                  <span className="hidden xl:inline text-[11px] font-mono text-slate-500 font-medium tracking-wider">MUTED</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
                </>
              )}
            </button>

            <button
              onClick={onOpenResume}
              type="button"
              id="navbar-resume-btn"
              className="relative inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-medium text-white overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-[#8B5CF6]/25 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#22D3EE] bg-gradient-to-r from-[#8B5CF6] via-[#7C3AED] to-[#22D3EE] p-[1px]"
            >
              <div className="flex items-center gap-1.5 bg-[#080B12]/90 hover:bg-[#080B12]/60 px-3 py-1.5 rounded-[11px] transition-colors">
                <FileText className="w-3.5 h-3.5 text-[#22D3EE] transition-transform group-hover:-translate-y-0.5" />
                <span className="tracking-wide">Resume</span>
                <Sparkles className="w-3 h-3 text-[#8B5CF6] opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              id="mobile-menu-toggle-btn"
              className="lg:hidden p-2 rounded-xl bg-white/[0.05] border border-white/[0.08] text-[#9CA3AF] hover:text-white hover:bg-white/[0.1] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6]"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] p-4 bg-[#080B12]/95 backdrop-blur-2xl border-b border-white/[0.1] shadow-2xl animate-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col gap-1.5 max-w-md mx-auto">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-gradient-to-r from-[#8B5CF6]/20 to-[#22D3EE]/10 text-white border border-[#8B5CF6]/30'
                      : 'text-[#9CA3AF] hover:text-white hover:bg-white/[0.04]'
                  }`}
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 opacity-50" />
                </a>
              );
            })}

            <div className="pt-3 mt-2 border-t border-white/[0.08] flex flex-col gap-2.5">
              {/* Mobile Sound Toggle Control */}
              <button
                onClick={toggleSound}
                type="button"
                data-sound="none"
                className="w-full flex items-center justify-between px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-slate-300 hover:bg-white/[0.08] transition-colors"
                aria-label={soundEnabled ? 'Mute click sounds' : 'Enable click sounds'}
              >
                <span className="flex items-center gap-2">
                  {soundEnabled ? (
                    <Volume2 className="w-4 h-4 text-[#22D3EE]" />
                  ) : (
                    <VolumeX className="w-4 h-4 text-slate-500" />
                  )}
                  <span>Futuristic UI Sounds</span>
                </span>
                <span
                  className={`px-2 py-0.5 rounded text-[10px] font-semibold ${
                    soundEnabled
                      ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                      : 'bg-white/[0.06] text-slate-400 border border-white/[0.08]'
                  }`}
                >
                  {soundEnabled ? 'ON' : 'MUTED'}
                </span>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-[#8B5CF6] to-[#22D3EE] text-white font-medium text-sm shadow-md shadow-[#8B5CF6]/20"
              >
                <FileText className="w-4 h-4" />
                <span>View & Download Full Resume</span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
