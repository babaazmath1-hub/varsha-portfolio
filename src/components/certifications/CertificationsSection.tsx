import { ShieldCheck, FileText, ExternalLink } from 'lucide-react';
import { certifications } from '../../data/portfolioData';

export const CertificationsSection: React.FC = () => {
  return (
    <section id="certifications" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-[#8B5CF6] uppercase tracking-widest mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6]" />
            06 / CERTIFICATIONS
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F5F7FF] font-display">
            Validated Knowledge.
          </h2>
          <p className="text-[#9CA3AF] text-sm sm:text-base mt-2 max-w-2xl">
            Certified technical proficiencies across machine learning foundations, cloud security defense, and generative AI.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="glass-panel p-6 sm:p-7 rounded-3xl border border-white/[0.08] hover:border-[#8B5CF6]/40 transition-all duration-300 hover:shadow-xl hover:shadow-[#8B5CF6]/10 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Subtle accent border on top */}
              <div
                className="absolute top-0 left-0 right-0 h-1"
                style={{ backgroundColor: cert.badgeColor }}
              />

              <div>
                {/* Issuer Badge & Verified indicator */}
                <div className="flex items-center justify-between mb-4">
                  <span
                    className="px-3 py-1 rounded-full text-xs font-mono font-semibold"
                    style={{
                      backgroundColor: `${cert.badgeColor}20`,
                      color: cert.badgeColor,
                      border: `1px solid ${cert.badgeColor}40`,
                    }}
                  >
                    {cert.issuer}
                  </span>
                  <div className="flex items-center gap-1 text-[11px] font-mono text-emerald-400">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Verified</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-[#F5F7FF] group-hover:text-white transition-colors font-display mb-3">
                  {cert.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#9CA3AF] leading-relaxed mb-6">
                  {cert.description}
                </p>

                {/* Skill Pills */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-lg text-[11px] font-mono bg-white/[0.03] text-slate-300 border border-white/[0.06]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer */}
              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                <span className="text-[11px] font-mono text-[#9CA3AF]">
                  Official Credential
                </span>

                {cert.hasFile ? (
                  <a
                    href="/VARSHA_RS_Certificate.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-[#22D3EE] hover:text-white transition-colors"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>View PDF</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                ) : (
                  <span className="text-[11px] font-mono text-[#9CA3AF]">
                    Document on Record
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
