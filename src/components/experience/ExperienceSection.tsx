import { useState } from 'react';
import { Briefcase, Calendar, MapPin, ChevronDown, ChevronUp, Sparkles, AlertCircle, CheckCircle2 } from 'lucide-react';
import { experiences } from '../../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>('novitech-mern');

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="experience" className="py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-[#22D3EE] uppercase tracking-widest mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#22D3EE]" />
            04 / EXPERIENCE
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F5F7FF] font-display">
            Internships & Applied Experience.
          </h2>
          <p className="text-[#9CA3AF] text-sm sm:text-base mt-2 max-w-2xl">
            Hands-on technical internships combining artificial intelligence, human-centered UI/UX design, and full-stack software development.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l border-white/[0.1] ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12 text-left">
          
          {/* Glowing Vertical Line Gradient overlay */}
          <div className="absolute -left-[1px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#8B5CF6] via-[#22D3EE] to-emerald-400 opacity-60" />

          {experiences.map((exp) => {
            const isExpanded = expandedId === exp.id;
            const isUpcoming = exp.status === 'Upcoming';

            return (
              <div key={exp.id} className="relative group">
                
                {/* Timeline node icon */}
                <div
                  className={`absolute -left-[35px] sm:-left-[51px] top-1.5 w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-300 shadow-md ${
                    isUpcoming
                      ? 'bg-[#080B12] border-amber-400/80 text-amber-400 ring-4 ring-amber-400/10'
                      : 'bg-[#080B12] border-[#8B5CF6] text-[#8B5CF6] ring-4 ring-[#8B5CF6]/10 group-hover:scale-110'
                  }`}
                >
                  <Briefcase className="w-3.5 h-3.5" />
                </div>

                {/* Card Container */}
                <div
                  className={`glass-panel rounded-3xl border transition-all duration-300 overflow-hidden ${
                    isExpanded
                      ? 'border-[#8B5CF6]/40 shadow-xl shadow-[#8B5CF6]/10'
                      : 'border-white/[0.08] hover:border-white/[0.18]'
                  }`}
                >
                  {/* Card Header */}
                  <div
                    onClick={() => toggleExpand(exp.id)}
                    className="p-6 sm:p-8 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-4 select-none"
                  >
                    <div>
                      {/* Status & Timing Pill */}
                      <div className="flex flex-wrap items-center gap-2.5 mb-2.5">
                        {isUpcoming ? (
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-mono font-semibold animate-pulse">
                            <AlertCircle className="w-3 h-3" />
                            Upcoming Internship (Sep – Dec 2026)
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-medium">
                            <CheckCircle2 className="w-3 h-3" />
                            Completed Internship
                          </span>
                        )}

                        <span className="inline-flex items-center gap-1.5 text-xs font-mono text-[#9CA3AF]">
                          <Calendar className="w-3 h-3 text-[#22D3EE]" />
                          {exp.duration}
                        </span>

                        <span className="inline-flex items-center gap-1 text-xs font-mono text-[#9CA3AF]">
                          <MapPin className="w-3 h-3 text-purple-400" />
                          {exp.location}
                        </span>
                      </div>

                      {/* Role & Org */}
                      <h3 className="text-xl sm:text-2xl font-bold text-[#F5F7FF] font-display flex items-center gap-2">
                        <span>{exp.role}</span>
                        <span className="text-[#8B5CF6]">@</span>
                        <span className="text-[#22D3EE]">{exp.organization}</span>
                      </h3>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono text-[#9CA3AF] hidden sm:inline">
                        {isExpanded ? 'Collapse' : 'Expand Details'}
                      </span>
                      <button
                        type="button"
                        className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#9CA3AF] group-hover:text-white group-hover:bg-white/[0.08] transition-colors"
                        aria-label={isExpanded ? 'Collapse experience' : 'Expand experience'}
                      >
                        {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>

                  {/* Expandable Details Area */}
                  {isExpanded && (
                    <div className="px-6 pb-6 sm:px-8 sm:pb-8 pt-0 border-t border-white/[0.06] mt-2 animate-in fade-in duration-200">
                      
                      {isUpcoming && (
                        <div className="my-4 p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-200/90 leading-relaxed flex items-start gap-2.5">
                          <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                          <div>
                            <strong>Upcoming Role Note:</strong> Scheduled internship focusing on MongoDB, Express.js, React.js, and Node.js full-stack development, API integration, and database architecture.
                          </div>
                        </div>
                      )}

                      <div className="space-y-3 pt-3">
                        <div className="text-xs font-mono uppercase tracking-wider text-[#9CA3AF]">
                          Key Responsibilities & Deliverables
                        </div>
                        {exp.description.map((desc, i) => (
                          <div key={i} className="flex items-start gap-3 text-sm text-[#9CA3AF] leading-relaxed">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6] shrink-0 mt-2" />
                            <span>{desc}</span>
                          </div>
                        ))}
                      </div>

                      {/* Technologies Used */}
                      <div className="pt-5 mt-5 border-t border-white/[0.05]">
                        <div className="text-xs font-mono text-[#9CA3AF] mb-2.5 flex items-center gap-1.5">
                          <Sparkles className="w-3 h-3 text-[#22D3EE]" />
                          <span>Technologies & Competencies Applied</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-2.5 py-1 rounded-lg text-xs font-medium bg-white/[0.03] border border-white/[0.07] text-slate-300"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
