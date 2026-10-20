import { useEffect } from 'react';
import { X, Sparkles, CheckCircle2, ExternalLink, Layers, Terminal } from 'lucide-react';
import type { Project } from '../../types';
import { GithubIcon } from '../common/BrandIcons';
import { 
  DashboardVisual, 
  PredictionVisual, 
  CyberSecurityVisual, 
  ExtensionVisual, 
  IotVisual 
} from './ProjectVisuals';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const renderVisual = () => {
    switch (project.visualType) {
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
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-xl animate-in fade-in duration-200"
    >
      {/* Click backdrop to close */}
      <div className="fixed inset-0 -z-10" onClick={onClose} />

      <div className="relative w-full max-w-3xl glass-panel p-6 sm:p-8 rounded-3xl border border-white/[0.12] shadow-2xl my-8 text-left max-h-[90vh] overflow-y-auto">
        
        {/* Modal Close Button */}
        <button
          onClick={onClose}
          type="button"
          className="absolute top-5 right-5 p-2 rounded-xl bg-white/[0.05] border border-white/[0.08] text-[#9CA3AF] hover:text-white hover:bg-white/[0.1] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6]"
          aria-label="Close project modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Information */}
        <div className="pr-10 mb-6">
          <span className="inline-block px-3 py-1 rounded-full bg-[#8B5CF6]/15 border border-[#8B5CF6]/30 text-xs font-mono text-[#8B5CF6] mb-3">
            {project.category}
          </span>
          <h3 id="modal-title" className="text-2xl sm:text-3xl font-extrabold text-[#F5F7FF] font-display">
            {project.title}
          </h3>
          <p className="text-[#9CA3AF] text-sm sm:text-base mt-2 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Visual Showcase Card */}
        <div className="mb-8">
          <div className="text-xs font-mono text-[#9CA3AF] mb-2 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#22D3EE]" />
            <span>Interactive Visual Representation (Demo Model)</span>
          </div>
          {renderVisual()}
        </div>

        {/* Deep Dive: Problem & Solution */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-2">
            <div className="text-xs font-mono text-red-400 uppercase tracking-wider">
              The Engineering Challenge
            </div>
            <p className="text-xs sm:text-sm text-[#9CA3AF] leading-relaxed">
              {project.deepDive.problem}
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-2">
            <div className="text-xs font-mono text-emerald-400 uppercase tracking-wider">
              Implemented Technical Solution
            </div>
            <p className="text-xs sm:text-sm text-[#9CA3AF] leading-relaxed">
              {project.deepDive.solution}
            </p>
          </div>
        </div>

        {/* Architecture & Pipeline */}
        <div className="space-y-3 mb-6 p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
          <div className="text-xs font-mono text-[#22D3EE] uppercase tracking-wider flex items-center gap-2">
            <Layers className="w-4 h-4" />
            <span>Workflow & Architectural Flow</span>
          </div>
          <div className="space-y-2">
            {project.deepDive.architecture.map((step, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                <span className="w-5 h-5 rounded-full bg-[#8B5CF6]/20 border border-[#8B5CF6]/30 flex items-center justify-center text-[10px] font-mono text-[#8B5CF6] shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <span>{step}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Key Features from Resume */}
        <div className="space-y-2.5 mb-6">
          <div className="text-xs font-mono uppercase tracking-wider text-[#9CA3AF]">
            Verified Key Features
          </div>
          {project.features.map((feat, i) => (
            <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-[#22D3EE] shrink-0 mt-0.5" />
              <span>{feat}</span>
            </div>
          ))}
        </div>

        {/* Technologies Used */}
        <div className="pt-4 border-t border-white/[0.08] mb-6">
          <div className="text-xs font-mono text-[#9CA3AF] mb-2 flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5 text-[#8B5CF6]" />
            <span>Technologies & Libraries</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-xl text-xs bg-white/[0.04] border border-white/[0.08] text-[#F5F7FF] font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Footer Actions: Code & Live Demo */}
        <div className="pt-4 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.08] text-white text-xs font-medium hover:bg-white/[0.12] transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>View Repository</span>
              </a>
            ) : (
              <div
                title="Code repository undergoing documentation refinement before public release."
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-[#9CA3AF] cursor-help"
              >
                <GithubIcon className="w-3.5 h-3.5 opacity-60" />
                <span>Repository: Link to be added</span>
              </div>
            )}

            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-[#8B5CF6] to-[#22D3EE] text-white text-xs font-medium"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Demo</span>
              </a>
            ) : (
              <div
                title="Live deployment URL will be published upon repository verification."
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-[#9CA3AF] cursor-help"
              >
                <ExternalLink className="w-3.5 h-3.5 opacity-60" />
                <span>Deployment: Link to be added</span>
              </div>
            )}
          </div>

          <button
            onClick={onClose}
            type="button"
            className="px-5 py-2 rounded-xl bg-white/[0.06] hover:bg-white/[0.1] text-xs text-white font-medium transition-colors"
          >
            Close Details
          </button>
        </div>

      </div>
    </div>
  );
};
