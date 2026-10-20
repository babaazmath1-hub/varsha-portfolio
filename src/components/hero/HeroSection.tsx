import { ArrowUpRight, Download, Brain, BarChart3, Code2, Layers, Palette, Globe, GraduationCap, Award } from 'lucide-react';
import { personalInfo, educationData } from '../../data/portfolioData';

interface HeroSectionProps {
  onOpenResume: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenResume }) => {
  const scrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const areasOfInterest = [
    {
      name: 'Artificial Intelligence & Machine Learning',
      icon: <Brain className="w-4 h-4 text-[#8B5CF6]" />,
      border: 'hover:border-[#8B5CF6]/60 hover:shadow-[#8B5CF6]/20',
      tagColor: 'text-[#8B5CF6]',
    },
    {
      name: 'Data Analytics',
      icon: <BarChart3 className="w-4 h-4 text-[#22D3EE]" />,
      border: 'hover:border-[#22D3EE]/60 hover:shadow-[#22D3EE]/20',
      tagColor: 'text-[#22D3EE]',
    },
    {
      name: 'Python & Java',
      icon: <Code2 className="w-4 h-4 text-emerald-400" />,
      border: 'hover:border-emerald-400/60 hover:shadow-emerald-400/20',
      tagColor: 'text-emerald-400',
    },
    {
      name: 'Full-Stack Development',
      icon: <Layers className="w-4 h-4 text-sky-400" />,
      border: 'hover:border-sky-400/60 hover:shadow-sky-400/20',
      tagColor: 'text-sky-400',
    },
    {
      name: 'UI/UX Design',
      icon: <Palette className="w-4 h-4 text-purple-400" />,
      border: 'hover:border-purple-400/60 hover:shadow-purple-400/20',
      tagColor: 'text-purple-400',
    },
    {
      name: 'Web Technologies',
      icon: <Globe className="w-4 h-4 text-teal-300" />,
      border: 'hover:border-teal-300/60 hover:shadow-teal-300/20',
      tagColor: 'text-teal-300',
    },
  ];

  return (
    <section
      id="home"
      className="relative min-h-[94vh] flex items-center justify-center pt-28 pb-16 lg:py-28 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* ========================================================
              1. LEFT PROFILE PHOTO CARD
             ======================================================== */}
          <div className="lg:col-span-5 flex flex-col justify-center items-center">
            <div className="relative w-full max-w-[420px] sm:max-w-[440px] group">
              
              {/* Ambient Violet/Cyan Glow behind the portrait */}
              <div
                className="absolute -inset-1.5 rounded-[32px] bg-gradient-to-tr from-[#8B5CF6]/50 via-[#22D3EE]/30 to-[#8B5CF6]/40 opacity-70 blur-xl group-hover:opacity-100 transition-opacity duration-700 -z-10"
              />

              {/* Main Portrait Card Container */}
              <div className="relative aspect-[3/4] sm:aspect-[4/5] w-full rounded-[28px] overflow-hidden bg-[#0A0E18] border border-[#22D3EE]/40 shadow-[0_0_40px_-10px_rgba(34,211,238,0.35)] transition-all duration-500 group-hover:shadow-[0_0_55px_-5px_rgba(139,92,246,0.45)] group-hover:border-[#22D3EE]/70">
                
                {/* Real Uploaded Photograph of Varsha */}
                <img
                  src="/varsha-portrait.jpg"
                  alt="Varsha R S — Computer Science Engineer & AI/ML Developer"
                  className="w-full h-full object-cover object-[50%_18%] transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  loading="eager"
                />

                {/* Subtle vignette gradient on bottom to ensure overlay readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#080B12] via-[#080B12]/35 to-transparent pointer-events-none" />

                {/* Top Corner Floating Tag */}
                <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/[0.12] text-xs font-mono text-white shadow-lg">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                  </span>
                  <span>Open to opportunities</span>
                </div>

                {/* Academic CGPA Pill on top right */}
                <div className="absolute top-4 right-4 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-emerald-500/30 text-[11px] font-mono text-emerald-300 font-semibold shadow-lg">
                  CGPA 9.2 / 10
                </div>

                {/* Translucent Information Panel Over Bottom of Photograph */}
                <div className="absolute bottom-3 inset-x-3 p-4 sm:p-5 rounded-2xl bg-[#080B12]/85 backdrop-blur-xl border border-white/[0.12] shadow-2xl text-left">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <h2 className="text-xl sm:text-2xl font-extrabold text-[#F5F7FF] font-display tracking-tight">
                      Varsha R S
                    </h2>
                    <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-[#8B5CF6]/20 border border-[#8B5CF6]/35 text-[10px] font-mono text-[#22D3EE]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#22D3EE] animate-pulse" />
                      <span>DSU · CSE</span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm font-medium text-slate-300 flex items-center gap-1.5">
                    <span>Computer Science Engineer</span>
                    <span className="text-[#8B5CF6]">|</span>
                    <span className="text-[#22D3EE]">AI/ML Enthusiast</span>
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* ========================================================
              2. RIGHT INTRODUCTION PANEL
             ======================================================== */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            <div className="relative glass-panel p-6 sm:p-9 lg:p-10 rounded-[28px] border border-white/[0.1] shadow-2xl shadow-black/60 flex flex-col justify-between h-full group hover:border-[#8B5CF6]/35 transition-all duration-500">
              
              {/* Ambient radial aura in background of card */}
              <div className="absolute -top-10 -right-10 w-72 h-72 bg-gradient-to-br from-[#8B5CF6]/15 via-[#22D3EE]/10 to-transparent rounded-full filter blur-3xl pointer-events-none" />

              <div>
                {/* Eyebrow Label */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-[#8B5CF6] uppercase tracking-wider mb-5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#22D3EE] animate-pulse" />
                  <span>{personalInfo.eyebrow}</span>
                </div>

                {/* Main Heading */}
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#F5F7FF] leading-[1.15] mb-5 font-display">
                  Building{' '}
                  <span className="text-gradient-accent">intelligent solutions</span>{' '}
                  for real-world problems.
                </h1>

                {/* Professional Introduction Paragraph */}
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6 font-normal">
                  I'm Varsha R S, a Computer Science and Engineering student at Dhanalakshmi Srinivasan University. I'm interested in artificial intelligence, machine learning, data analytics, and full-stack development. I enjoy solving practical problems and building useful applications through experimentation, thoughtful design, and continuous learning.
                </p>

                {/* Thin Animated Glowing Divider */}
                <div className="relative w-full h-[1px] my-6 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-r from-transparent via-[#8B5CF6]/50 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#22D3EE] to-transparent opacity-75 blur-xs animate-pulse" />
                </div>

                {/* ========================================================
                    3. SPECIALIZATION BADGES
                   ======================================================== */}
                <div className="mb-6">
                  <div className="text-xs font-mono uppercase tracking-widest text-[#9CA3AF] mb-3.5 flex items-center gap-2 font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6]" />
                    <span>AREAS OF INTEREST</span>
                  </div>

                  <div className="flex flex-wrap gap-2.5">
                    {areasOfInterest.map((badge) => (
                      <div
                        key={badge.name}
                        className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-md text-xs font-medium text-slate-200 transition-all duration-300 cursor-default shadow-sm hover:-translate-y-0.5 hover:bg-white/[0.07] ${badge.border}`}
                      >
                        {badge.icon}
                        <span>{badge.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Academic Snapshot Cards */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mb-7">
                  <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex items-center gap-2.5">
                    <GraduationCap className="w-4 h-4 text-[#8B5CF6] shrink-0" />
                    <div>
                      <div className="text-[10px] text-[#9CA3AF]">Institution</div>
                      <div className="text-xs font-bold text-white truncate" title="Dhanalakshmi Srinivasan University">
                        DSU (2024–28)
                      </div>
                    </div>
                  </div>

                  <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex items-center gap-2.5">
                    <Award className="w-4 h-4 text-emerald-400 shrink-0" />
                    <div>
                      <div className="text-[10px] text-[#9CA3AF]">Academic CGPA</div>
                      <div className="text-xs font-bold text-emerald-300 font-mono">
                        {educationData.cgpa} / {educationData.maxCgpa}
                      </div>
                    </div>
                  </div>

                  <div className="col-span-2 sm:col-span-1 p-3 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-[#22D3EE] animate-ping shrink-0" />
                    <div>
                      <div className="text-[10px] text-[#9CA3AF]">Internships</div>
                      <div className="text-xs font-bold text-white">
                        AI · UI/UX · MERN
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 pt-2 border-t border-white/[0.06]">
                <a
                  href="#projects"
                  onClick={scrollToProjects}
                  id="hero-explore-btn"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-[#8B5CF6] via-[#7C3AED] to-[#22D3EE] shadow-lg shadow-[#8B5CF6]/30 hover:shadow-xl hover:shadow-[#8B5CF6]/45 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6]"
                >
                  <span>Explore My Work</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <button
                  type="button"
                  onClick={onOpenResume}
                  id="hero-resume-btn"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-medium text-sm text-[#F5F7FF] bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] hover:border-white/[0.2] transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  <Download className="w-4 h-4 text-[#22D3EE]" />
                  <span>Download Resume</span>
                </button>
              </div>

            </div>
          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="pt-10 sm:pt-14 flex flex-col items-center justify-center text-center">
          <a
            href="#about"
            className="group flex flex-col items-center gap-2 text-xs font-mono text-[#9CA3AF] hover:text-[#F5F7FF] transition-colors focus:outline-none"
            aria-label="Scroll to About section"
          >
            <span>DISCOVER MORE</span>
            <div className="w-7 h-11 rounded-full border border-white/[0.2] flex items-start justify-center p-1.5 group-hover:border-[#8B5CF6] transition-colors">
              <div className="w-1.5 h-2 rounded-full bg-[#22D3EE] animate-bounce" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};
