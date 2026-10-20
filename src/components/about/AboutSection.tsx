import { Brain, Layers, BarChart3, Sparkles, CheckCircle2 } from 'lucide-react';
import { focusAreas } from '../../data/portfolioData';

export const AboutSection: React.FC = () => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'ai-ml':
        return <Brain className="w-6 h-6 text-[#8B5CF6]" />;
      case 'full-stack':
        return <Layers className="w-6 h-6 text-[#22D3EE]" />;
      case 'analytics-ux':
        return <BarChart3 className="w-6 h-6 text-purple-400" />;
      default:
        return <Sparkles className="w-6 h-6 text-[#8B5CF6]" />;
    }
  };

  return (
    <section id="about" className="py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-[#8B5CF6] uppercase tracking-widest mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6]" />
            01 / ABOUT
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F5F7FF] font-display">
            Curiosity meets engineering.
          </h2>
        </div>

        {/* Editorial Layout: Bio on left, 3 Focus cards on right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Biography Column */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/[0.08] shadow-xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-[#8B5CF6] via-[#7C3AED] to-[#22D3EE]" />
              
              <h3 className="text-xl font-semibold text-[#F5F7FF] mb-4 font-display flex items-center gap-2">
                <span>Passionate Problem Solver</span>
              </h3>
              
              <p className="text-[#9CA3AF] text-sm sm:text-base leading-relaxed mb-4">
                I'm a Computer Science and Engineering student interested in building useful software, exploring machine learning, and transforming data into meaningful insights. Through internships and hands-on projects, I've explored AI, data analysis, full-stack application development, and user-centered design.
              </p>
              
              <p className="text-[#9CA3AF] text-sm sm:text-base leading-relaxed">
                I enjoy learning new technologies, solving practical problems, and creating experiences that combine functionality with thoughtful design.
              </p>

              {/* Highlights Checklist */}
              <div className="mt-6 pt-6 border-t border-white/[0.08] space-y-2.5">
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-[#22D3EE] shrink-0" />
                  <span>Driven by disciplined algorithmic fundamentals</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-[#8B5CF6] shrink-0" />
                  <span>Bridging deep ML theory with functional frontend interfaces</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-[#22D3EE] shrink-0" />
                  <span>Collaborative team contributor and continuous learner</span>
                </div>
              </div>
            </div>

            {/* Quick Context Card */}
            <div className="grid grid-cols-2 gap-4">
              <div className="glass-panel-subtle p-4 rounded-2xl border border-white/[0.06] text-left">
                <div className="text-xs font-mono text-[#9CA3AF] mb-1">CURRENT STATUS</div>
                <div className="text-sm font-semibold text-white">Undergraduate Scholar</div>
                <div className="text-xs text-[#8B5CF6] mt-0.5">2024 – 2028 Batch</div>
              </div>
              <div className="glass-panel-subtle p-4 rounded-2xl border border-white/[0.06] text-left">
                <div className="text-xs font-mono text-[#9CA3AF] mb-1">INTERNSHIPS</div>
                <div className="text-sm font-semibold text-white">3 Industry Roles</div>
                <div className="text-xs text-[#22D3EE] mt-0.5">AI · UI/UX · MERN</div>
              </div>
            </div>
          </div>

          {/* Focus Areas Column */}
          <div className="lg:col-span-7 space-y-5 text-left">
            <div className="text-xs font-mono uppercase tracking-widest text-[#9CA3AF] mb-3">
              Core Technical Focus Pillars
            </div>

            {focusAreas.map((area, idx) => (
              <div
                key={area.id}
                className="group glass-panel p-6 rounded-3xl border border-white/[0.08] hover:border-[#8B5CF6]/40 transition-all duration-300 hover:shadow-xl hover:shadow-[#8B5CF6]/10 relative overflow-hidden"
              >
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-white/[0.08] transition-all duration-300">
                    {getIcon(area.id)}
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-lg font-bold text-[#F5F7FF] group-hover:text-white transition-colors font-display">
                        {area.title}
                      </h4>
                      <span className="text-xs font-mono text-[#9CA3AF]">
                        0{idx + 1}
                      </span>
                    </div>

                    <p className="text-sm text-[#9CA3AF] leading-relaxed mb-4">
                      {area.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {area.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-lg text-xs font-medium bg-white/[0.04] text-slate-300 border border-white/[0.06] group-hover:border-[#8B5CF6]/20 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
