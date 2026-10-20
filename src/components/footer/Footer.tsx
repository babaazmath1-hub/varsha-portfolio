import { ArrowUp, Mail, Sparkles } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';
import { LinkedinIcon } from '../common/BrandIcons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const links = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative z-10 border-t border-white/[0.08] bg-[#06080E]/75 backdrop-blur-md text-[#9CA3AF] py-14 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-white/[0.06]">
          
          {/* Brand & Tagline */}
          <div className="flex flex-col sm:flex-row items-center gap-3.5 text-center sm:text-left">
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-[#8B5CF6] to-[#22D3EE] p-[1.5px] shadow-md shadow-[#8B5CF6]/20 shrink-0 overflow-hidden">
              <img
                src="/varsha-portrait.jpg"
                alt="Varsha R S"
                className="w-full h-full rounded-[9px] object-cover object-[50%_22%] scale-140 origin-[50%_22%]"
              />
            </div>
            <div>
              <div className="flex items-center justify-center sm:justify-start gap-2 mb-0.5">
                <span className="font-extrabold text-lg tracking-wider text-white font-display">
                  VARSHA R S
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#22D3EE] animate-pulse" />
              </div>
              <p className="text-xs font-mono text-slate-400">
                Computer Science & Engineering · AI/ML · Full-Stack Developer
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <nav className="flex flex-wrap items-center justify-center gap-4 text-xs font-medium">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Socials & Back To Top */}
          <div className="flex items-center gap-3">
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-slate-300 hover:text-white hover:bg-white/[0.08] transition-colors"
              aria-label="Send email to Varsha"
            >
              <Mail className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-slate-300 hover:text-white hover:bg-white/[0.08] transition-colors"
              aria-label="Varsha LinkedIn profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              type="button"
              className="p-2.5 rounded-xl bg-gradient-to-r from-[#8B5CF6]/20 to-[#22D3EE]/20 border border-white/[0.1] text-white hover:from-[#8B5CF6]/40 hover:to-[#22D3EE]/40 transition-all ml-2"
              aria-label="Scroll to top of page"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 font-mono">
          <div className="flex items-center gap-1.5">
            <span>Designed & developed with curiosity by</span>
            <span className="text-slate-300 font-semibold">Varsha R S</span>
            <Sparkles className="w-3.5 h-3.5 text-[#8B5CF6]" />
          </div>

          <div>
            © {currentYear} Varsha R S. All rights reserved.
          </div>
        </div>

      </div>
    </footer>
  );
};
