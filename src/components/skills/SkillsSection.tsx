import { useState } from 'react';
import { 
  Code2, 
  BrainCircuit, 
  Boxes, 
  BarChart, 
  Terminal, 
  Globe, 
  CheckCircle,
  Filter
} from 'lucide-react';
import { skillCategories } from '../../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const getCategoryIcon = (title: string) => {
    switch (title) {
      case 'Programming Languages':
        return <Code2 className="w-5 h-5 text-[#8B5CF6]" />;
      case 'Machine Learning':
        return <BrainCircuit className="w-5 h-5 text-[#22D3EE]" />;
      case 'Libraries & Frameworks':
        return <Boxes className="w-5 h-5 text-purple-400" />;
      case 'Data Analysis':
        return <BarChart className="w-5 h-5 text-emerald-400" />;
      case 'Tools & Platforms':
        return <Terminal className="w-5 h-5 text-amber-400" />;
      case 'Web Technologies':
        return <Globe className="w-5 h-5 text-sky-400" />;
      default:
        return <Code2 className="w-5 h-5 text-[#8B5CF6]" />;
    }
  };

  const filteredCategories = selectedCategory === 'all'
    ? skillCategories
    : skillCategories.filter((c) => c.title === selectedCategory);

  return (
    <section id="skills" className="py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-[#8B5CF6] uppercase tracking-widest mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6]" />
            03 / TECHNICAL SKILLS
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F5F7FF] font-display">
            Tools & Technologies.
          </h2>
          <p className="text-[#9CA3AF] text-sm sm:text-base mt-2 max-w-2xl">
            A structured ecosystem spanning mathematical model engineering, deep data exploration, and full-stack software development.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2 overflow-x-auto text-left">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-medium transition-all ${
              selectedCategory === 'all'
                ? 'bg-gradient-to-r from-[#8B5CF6] to-[#22D3EE] text-white shadow-md shadow-[#8B5CF6]/20'
                : 'bg-white/[0.04] text-[#9CA3AF] hover:text-white hover:bg-white/[0.08] border border-white/[0.06]'
            }`}
          >
            <Filter className="w-3.5 h-3.5" />
            <span>All Categories ({skillCategories.length})</span>
          </button>

          {skillCategories.map((cat) => (
            <button
              key={cat.title}
              onClick={() => setSelectedCategory(cat.title)}
              className={`px-3.5 py-2 rounded-xl text-xs font-medium transition-all whitespace-nowrap ${
                selectedCategory === cat.title
                  ? 'bg-white/[0.12] text-white border border-[#8B5CF6]/40 shadow-sm'
                  : 'bg-white/[0.03] text-[#9CA3AF] hover:text-white hover:bg-white/[0.06] border border-white/[0.05]'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Skill Panels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {filteredCategories.map((cat) => (
            <div
              key={cat.title}
              className="glass-panel p-6 rounded-3xl border border-white/[0.08] hover:border-[#8B5CF6]/35 transition-all duration-300 hover:shadow-xl hover:shadow-[#8B5CF6]/10 flex flex-col justify-between group"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    {getCategoryIcon(cat.title)}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#F5F7FF] font-display">
                      {cat.title}
                    </h3>
                    <span className="text-[11px] font-mono text-[#9CA3AF]">
                      {cat.skills.length} skills listed
                    </span>
                  </div>
                </div>

                <p className="text-xs text-[#9CA3AF] leading-relaxed mb-6">
                  {cat.description}
                </p>

                {/* Individual Skills List */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/[0.03] border border-white/[0.07] hover:border-[#22D3EE]/30 hover:bg-white/[0.06] transition-all group/chip"
                    >
                      <CheckCircle className="w-3 h-3 text-[#22D3EE] opacity-70 group-hover/chip:opacity-100 transition-opacity" />
                      <span className="text-xs font-medium text-slate-200 group-hover/chip:text-white">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom decorative border */}
              <div className="pt-6 mt-6 border-t border-white/[0.05] flex items-center justify-between text-[11px] font-mono text-[#9CA3AF]">
                <span>Status: Verified Active</span>
                <span className="text-[#8B5CF6] group-hover:translate-x-1 transition-transform">
                  ● Grounded
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
