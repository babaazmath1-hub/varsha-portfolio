import { useState } from 'react';
import { ArrowUpRight, Eye } from 'lucide-react';
import { projects } from '../../data/portfolioData';
import type { Project } from '../../types';
import { GithubIcon } from '../common/BrandIcons';
import { ProjectDetailModal } from './ProjectDetailModal';
import { 
  DashboardVisual, 
  PredictionVisual, 
  CyberSecurityVisual, 
  ExtensionVisual, 
  IotVisual 
} from './ProjectVisuals';

export const ProjectsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories = [
    'all',
    'Data Analytics',
    'Machine Learning',
    'AI-Based Cybersecurity',
    'Browser Extension',
    'IoT & Emergency Response',
  ];

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter((p) => p.category === selectedCategory);

  const renderProjectVisual = (visualType: Project['visualType']) => {
    switch (visualType) {
      case 'dashboard':
        return <DashboardVisual />;
      case 'prediction':
        return <PredictionVisual />;
      case 'cybersecurity':
        return <CyberSecurityVisual />;
      case 'extension':
        return <ExtensionVisual />;
      case 'iot':
        return <IotVisual />;
      default:
        return null;
    }
  };

  return (
    <section id="projects" className="py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-[#8B5CF6] uppercase tracking-widest mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6]" />
            05 / FEATURED PROJECTS
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F5F7FF] font-display">
            Engineered with Purpose.
          </h2>
          <p className="text-[#9CA3AF] text-sm sm:text-base mt-2 max-w-2xl">
            Selected real-world applications combining mathematical rigor, machine learning inference, and user-centric software design.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-12 pb-2 overflow-x-auto text-left">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all capitalize whitespace-nowrap ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-[#8B5CF6] to-[#22D3EE] text-white shadow-md shadow-[#8B5CF6]/20'
                  : 'bg-white/[0.04] text-[#9CA3AF] hover:text-white hover:bg-white/[0.08] border border-white/[0.06]'
              }`}
            >
              {cat === 'all' ? 'All Projects' : cat}
            </button>
          ))}
        </div>

        {/* Editorial Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-left">
          {filteredProjects.map((project, index) => {
            // Give first 2 projects wider spans on desktop for editorial flair
            const isWide = index === 0 || index === 1;
            const spanClass = isWide ? 'lg:col-span-6' : 'lg:col-span-4';

            return (
              <div
                key={project.id}
                className={`${spanClass} glass-panel rounded-3xl border border-white/[0.08] hover:border-[#8B5CF6]/40 transition-all duration-300 hover:shadow-2xl hover:shadow-[#8B5CF6]/10 flex flex-col justify-between overflow-hidden group`}
              >
                {/* Visual Header */}
                <div className="p-4 sm:p-5 bg-black/40 border-b border-white/[0.06] relative">
                  {renderProjectVisual(project.visualType)}
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Category & Badge */}
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[11px] font-mono text-[#22D3EE] px-2.5 py-0.5 rounded-full bg-[#22D3EE]/10 border border-[#22D3EE]/20">
                        {project.category}
                      </span>
                      <span className="text-xs font-mono text-[#9CA3AF]">
                        0{index + 1}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl sm:text-2xl font-bold text-[#F5F7FF] group-hover:text-white font-display mb-3">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-[#9CA3AF] leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Features list */}
                    <div className="space-y-1.5 mb-6">
                      {project.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                          <span className="w-1 h-1 rounded-full bg-[#8B5CF6] shrink-0 mt-1.5" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    {/* Technologies list */}
                    <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/[0.06] mb-6">
                      {project.technologies.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-white/[0.03] text-slate-300 border border-white/[0.06]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Card Actions */}
                    <div className="flex items-center justify-between pt-2">
                      <button
                        onClick={() => setActiveModalProject(project)}
                        type="button"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#F5F7FF] hover:text-[#22D3EE] transition-colors group/btn"
                      >
                        <Eye className="w-4 h-4 text-[#8B5CF6] group-hover/btn:text-[#22D3EE] transition-colors" />
                        <span>View Deep-Dive Details</span>
                        <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                      </button>

                      <div
                        title="Repository link placeholder for upcoming release"
                        className="text-[11px] font-mono text-[#9CA3AF] hover:text-slate-300 flex items-center gap-1 cursor-help"
                      >
                        <GithubIcon className="w-3.5 h-3.5 opacity-60" />
                        <span className="hidden sm:inline">Repo to be added</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal Viewer */}
        <ProjectDetailModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />

      </div>
    </section>
  );
};
