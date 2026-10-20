import { GraduationCap, Calendar, MapPin, BookOpen, Check } from 'lucide-react';
import { educationData } from '../../data/portfolioData';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-[#22D3EE] uppercase tracking-widest mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#22D3EE]" />
            02 / EDUCATION
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F5F7FF] font-display">
            Academic Foundation.
          </h2>
          <p className="text-[#9CA3AF] text-sm sm:text-base mt-2 max-w-xl">
            Rigorous computer science curriculum grounding theoretical principles in practical engineering execution.
          </p>
        </div>

        {/* Education Hero Showcase Card */}
        <div className="glass-panel p-6 sm:p-10 rounded-3xl border border-white/[0.1] shadow-2xl relative overflow-hidden text-left">
          
          {/* Subtle Ambient Background Gradient */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#8B5CF6]/15 via-[#22D3EE]/10 to-transparent rounded-full filter blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Degree & Institution Info */}
            <div className="lg:col-span-8 space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-[#8B5CF6]/15 border border-[#8B5CF6]/30 text-[#8B5CF6] text-xs font-mono font-medium">
                  Undergraduate Degree
                </span>
                <span className="flex items-center gap-1.5 text-xs text-[#9CA3AF] font-mono">
                  <Calendar className="w-3.5 h-3.5 text-[#22D3EE]" />
                  {educationData.duration}
                </span>
                <span className="flex items-center gap-1.5 text-xs text-[#9CA3AF] font-mono">
                  <MapPin className="w-3.5 h-3.5 text-purple-400" />
                  Tamil Nadu, India
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#F5F7FF] font-display mb-2">
                  {educationData.degree}
                </h3>
                <p className="text-lg text-[#22D3EE] font-medium flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-[#22D3EE]" />
                  {educationData.institution}
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <div className="text-xs font-mono uppercase tracking-wider text-[#9CA3AF]">
                  Core Academic Focus & Methodology
                </div>
                {educationData.highlights.map((highlight, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-[#9CA3AF]">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0 mt-0.5 text-emerald-400">
                      <Check className="w-3 h-3" />
                    </div>
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>

              {/* Coursework Pills */}
              <div className="pt-4 border-t border-white/[0.08]">
                <div className="text-xs font-mono text-[#9CA3AF] mb-2.5 flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-[#8B5CF6]" />
                  <span>Key Coursework & Competencies</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['Data Structures & Algorithms', 'Machine Learning', 'Database Management Systems (DBMS)', 'Operating Systems', 'Computer Networks', 'Object-Oriented Programming (Java)'].map((subject) => (
                    <span
                      key={subject}
                      className="px-3 py-1 rounded-xl text-xs bg-white/[0.03] border border-white/[0.06] text-slate-300 font-medium"
                    >
                      {subject}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Visual CGPA Highlight Gauge */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center">
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full glass-panel border border-white/[0.12] flex flex-col items-center justify-center shadow-2xl group hover:border-[#8B5CF6]/50 transition-all duration-300">
                
                {/* SVG Progress Arc representing 9.2/10 = 92% */}
                <svg className="absolute inset-0 w-full h-full -rotate-90 p-2" viewBox="0 0 100 100">
                  {/* Track Circle */}
                  <circle
                    cx="50"
                    cy="50"
                    r="42"
                    className="stroke-white/[0.08]"
                    strokeWidth="6"
                    fill="transparent"
                  />
                  {/* Active Progress Circle */}
                  <circle
                    cx="50"
                    cy="50"
                    r="42"
                    stroke="url(#cgpaGradient)"
                    strokeWidth="6"
                    strokeDasharray={264}
                    strokeDashoffset={264 * (1 - 0.92)}
                    strokeLinecap="round"
                    fill="transparent"
                  />
                  <defs>
                    <linearGradient id="cgpaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#8B5CF6" />
                      <stop offset="50%" stopColor="#A855F7" />
                      <stop offset="100%" stopColor="#22D3EE" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Center Content */}
                <div className="text-center z-10 space-y-1">
                  <div className="text-[11px] font-mono tracking-widest text-[#9CA3AF] uppercase">
                    CUMULATIVE CGPA
                  </div>
                  <div className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-[#F5F7FF] to-[#22D3EE] font-mono">
                    {educationData.cgpa}
                  </div>
                  <div className="text-xs font-mono text-emerald-400">
                    out of {educationData.maxCgpa}
                  </div>
                </div>

                {/* Subtle verified badge */}
                <div className="absolute -bottom-3 bg-[#080B12] px-3 py-1 rounded-full border border-emerald-500/30 text-[10px] font-mono text-emerald-400 shadow-lg">
                  Academic Record Verified
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
