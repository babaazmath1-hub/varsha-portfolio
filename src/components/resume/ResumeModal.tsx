import { useEffect } from 'react';
import { X, Printer, Download, Mail, Phone, GraduationCap, Briefcase, Award, Code, Info } from 'lucide-react';
import { personalInfo, educationData, experiences, projects, certifications, skillCategories } from '../../data/portfolioData';
import { LinkedinIcon } from '../common/BrandIcons';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-2xl animate-in fade-in duration-200"
    >
      <div className="fixed inset-0 -z-10" onClick={onClose} />

      <div className="relative w-full max-w-4xl glass-panel rounded-3xl border border-white/[0.12] shadow-2xl my-6 text-left max-h-[92vh] flex flex-col overflow-hidden">
        
        {/* Modal Top Toolbar */}
        <div className="p-4 sm:px-8 border-b border-white/[0.08] flex items-center justify-between bg-black/40">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-mono text-slate-300 font-semibold tracking-wider">
              VARSHA R S — VERIFIED CURRICULUM VITAE
            </span>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={handlePrint}
              type="button"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.1] text-xs font-medium text-slate-200 transition-colors"
              title="Print or Save to PDF"
            >
              <Printer className="w-3.5 h-3.5 text-[#22D3EE]" />
              <span className="hidden sm:inline">Print / Save PDF</span>
            </button>

            <a
              href="/VARSHA_RS_Certificate.pdf"
              download="VARSHA_RS_Verified_Credentials.pdf"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-[#8B5CF6] to-[#22D3EE] text-xs font-semibold text-white shadow-sm"
              title="Download verified credentials package"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            <button
              onClick={onClose}
              type="button"
              className="p-1.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-slate-400 hover:text-white transition-colors"
              aria-label="Close resume viewer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Resume Sheet */}
        <div className="p-6 sm:p-10 overflow-y-auto bg-[#0B0F19] text-[#F5F7FF] space-y-8 select-text">
          
          {/* Header */}
          <div className="border-b border-white/[0.1] pb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h1 id="resume-title" className="text-3xl sm:text-4xl font-extrabold tracking-tight font-display text-white">
                {personalInfo.name}
              </h1>
              <p className="text-sm font-mono text-[#8B5CF6] mt-1 tracking-wider uppercase">
                {personalInfo.eyebrow}
              </p>
            </div>

            <div className="flex flex-col gap-1 text-xs font-mono text-slate-300">
              <span className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-[#22D3EE]" />
                {personalInfo.email}
              </span>
              <span className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-[#22D3EE]" />
                {personalInfo.phoneFormatted}
              </span>
              <span className="flex items-center gap-1.5">
                <LinkedinIcon className="w-3.5 h-3.5 text-[#22D3EE]" />
                linkedin.com/in/varsha214
              </span>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-[#22D3EE] mb-2 flex items-center gap-1.5 font-bold">
              <span>01. PROFESSIONAL PROFILE</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {personalInfo.bio}
            </p>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-[#22D3EE] mb-3 flex items-center gap-1.5 font-bold">
              <GraduationCap className="w-4 h-4 text-[#8B5CF6]" />
              <span>02. EDUCATION</span>
            </h2>
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h3 className="text-sm sm:text-base font-bold text-white">
                  {educationData.degree}
                </h3>
                <p className="text-xs text-slate-400">
                  {educationData.institution}
                </p>
              </div>
              <div className="text-left sm:text-right font-mono">
                <div className="text-xs text-[#8B5CF6] font-semibold">{educationData.duration}</div>
                <div className="text-sm font-bold text-emerald-400">CGPA: {educationData.cgpa} / {educationData.maxCgpa}</div>
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-[#22D3EE] mb-3 flex items-center gap-1.5 font-bold">
              <Code className="w-4 h-4 text-[#8B5CF6]" />
              <span>03. TECHNICAL SKILLS</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {skillCategories.map((cat) => (
                <div key={cat.title} className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                  <div className="text-[11px] font-mono font-semibold text-[#8B5CF6] mb-1">
                    {cat.title}
                  </div>
                  <div className="text-xs text-slate-300">
                    {cat.skills.map((s) => s.name).join(' · ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Professional Experience */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-[#22D3EE] mb-3 flex items-center gap-1.5 font-bold">
              <Briefcase className="w-4 h-4 text-[#8B5CF6]" />
              <span>04. PROFESSIONAL INTERNSHIPS</span>
            </h2>
            <div className="space-y-4">
              {experiences.map((exp) => (
                <div key={exp.id} className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                    <h3 className="text-sm font-bold text-white flex items-center gap-1.5">
                      <span>{exp.role}</span>
                      <span className="text-[#8B5CF6]">@</span>
                      <span className="text-[#22D3EE]">{exp.organization}</span>
                    </h3>
                    <div className="flex items-center gap-2">
                      {exp.status === 'Upcoming' && (
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/15 text-amber-300 border border-amber-500/30">
                          Upcoming
                        </span>
                      )}
                      <span className="text-xs font-mono text-slate-400">{exp.duration}</span>
                    </div>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-xs text-slate-300">
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="leading-relaxed">{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Featured Projects */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-[#22D3EE] mb-3 flex items-center gap-1.5 font-bold">
              <span>05. KEY PROJECTS</span>
            </h2>
            <div className="space-y-3">
              {projects.map((proj) => (
                <div key={proj.id} className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold text-white">{proj.title}</span>
                    <span className="text-[10px] font-mono text-[#8B5CF6]">{proj.category}</span>
                  </div>
                  <p className="text-xs text-slate-400 mb-1.5">{proj.description}</p>
                  <div className="text-[11px] font-mono text-slate-500">
                    Tech: {proj.technologies.join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-[#22D3EE] mb-3 flex items-center gap-1.5 font-bold">
              <Award className="w-4 h-4 text-[#8B5CF6]" />
              <span>06. CERTIFICATIONS</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {certifications.map((c) => (
                <div key={c.id} className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                  <div className="text-[10px] font-mono text-[#22D3EE] uppercase font-bold">{c.issuer}</div>
                  <div className="text-xs font-medium text-white mt-0.5">{c.title}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Deployment notice / PDF location guide */}
          <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] flex items-start gap-2.5 text-[11px] font-mono text-slate-400">
            <Info className="w-4 h-4 text-[#22D3EE] shrink-0 mt-0.5" />
            <span>
              Note for recruiters & teams: Verified credentials PDF is available via direct download. To mount a custom offline PDF version, place file at <code>public/Varsha_RS_Resume.pdf</code>.
            </span>
          </div>

        </div>

      </div>
    </div>
  );
};
