import { useState } from 'react';
import { 
  Mail, 
  Phone, 
  Send, 
  Copy, 
  Check, 
  Sparkles, 
  ArrowUpRight,
  MessageSquare,
  AlertCircle
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalInfo } from '../../data/portfolioData';
import { LinkedinIcon } from '../common/BrandIcons';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } catch {
      // fallback
    }
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please provide your name.';
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email format.';
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = 'Please provide a message (minimum 10 characters).';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Trigger celebratory confetti
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#8B5CF6', '#22D3EE', '#F5F7FF'],
      });
    } catch {
      // Confetti fallback
    }

    setIsSubmitted(true);
  };

  const handleMailtoDispatch = () => {
    const subject = encodeURIComponent(formData.subject || `Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Hi Varsha,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n`
    );
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-[#22D3EE] uppercase tracking-widest mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#22D3EE]" />
            07 / CONTACT
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F5F7FF] font-display">
            Have an idea worth building?
          </h2>
          <p className="text-[#9CA3AF] text-base sm:text-lg mt-3 max-w-2xl leading-relaxed">
            I'm interested in learning, collaborating, and exploring opportunities across software development, AI/ML, and data-driven engineering.
          </p>
        </div>

        {/* Content Layout: Contact Info & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start text-left">
          
          {/* Direct Channels Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="text-xs font-mono uppercase tracking-widest text-[#9CA3AF] mb-2">
              Direct Contact Channels
            </div>

            {/* Email Card */}
            <div className="glass-panel p-6 rounded-3xl border border-white/[0.08] hover:border-[#8B5CF6]/40 transition-all duration-300">
              <div className="flex items-start justify-between">
                <div className="w-12 h-12 rounded-2xl bg-[#8B5CF6]/15 flex items-center justify-center text-[#8B5CF6]">
                  <Mail className="w-6 h-6" />
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-xs font-mono text-[#9CA3AF] hover:text-white transition-colors"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <div className="mt-4">
                <div className="text-xs font-mono text-[#9CA3AF] mb-1">EMAIL ADDRESS</div>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-base sm:text-lg font-bold text-white hover:text-[#22D3EE] transition-colors font-mono break-all"
                >
                  {personalInfo.email}
                </a>
              </div>
            </div>

            {/* Phone Card */}
            <div className="glass-panel p-6 rounded-3xl border border-white/[0.08] hover:border-[#22D3EE]/40 transition-all duration-300">
              <div className="w-12 h-12 rounded-2xl bg-[#22D3EE]/15 flex items-center justify-center text-[#22D3EE]">
                <Phone className="w-6 h-6" />
              </div>

              <div className="mt-4">
                <div className="text-xs font-mono text-[#9CA3AF] mb-1">PHONE NUMBER</div>
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="text-base sm:text-lg font-bold text-white hover:text-[#22D3EE] transition-colors font-mono"
                >
                  {personalInfo.phoneFormatted}
                </a>
              </div>
            </div>

            {/* LinkedIn Profile Card */}
            <div className="glass-panel p-6 rounded-3xl border border-white/[0.08] hover:border-[#8B5CF6]/40 transition-all duration-300">
              <div className="flex items-start justify-between">
                <div className="w-12 h-12 rounded-2xl bg-sky-500/15 flex items-center justify-center text-sky-400">
                  <LinkedinIcon className="w-6 h-6" />
                </div>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-xs font-mono text-white transition-colors"
                >
                  <span>Open Profile</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#22D3EE]" />
                </a>
              </div>

              <div className="mt-4">
                <div className="text-xs font-mono text-[#9CA3AF] mb-1">LINKEDIN NETWORK</div>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base sm:text-lg font-bold text-white hover:text-[#8B5CF6] transition-colors font-mono"
                >
                  linkedin.com/in/varsha214
                </a>
              </div>
            </div>

            {/* Response Time Notice */}
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.05] text-xs text-[#9CA3AF] flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
              <span>Available for engineering internships, technical collaborations, and research dialogues.</span>
            </div>
          </div>

          {/* Interactive Contact Form Column */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-6 sm:p-10 rounded-3xl border border-white/[0.1] shadow-2xl relative">
              
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#F5F7FF] font-display">
                    Send a Direct Message
                  </h3>
                  <p className="text-xs sm:text-sm text-[#9CA3AF] mt-1">
                    Fill in your details below to initiate contact.
                  </p>
                </div>
                <div className="w-10 h-10 rounded-2xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#8B5CF6]">
                  <MessageSquare className="w-5 h-5" />
                </div>
              </div>

              {isSubmitted ? (
                <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-left space-y-4 animate-in fade-in">
                  <div className="flex items-center gap-2 text-emerald-400 font-bold text-lg font-display">
                    <Sparkles className="w-5 h-5" />
                    <span>Message Prepared Successfully!</span>
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Thank you, <strong>{formData.name}</strong>. Because static client applications do not host a proprietary backend SMTP server, you can trigger your email client immediately with your drafted details:
                  </p>
                  <div className="flex flex-wrap gap-3 pt-2">
                    <button
                      type="button"
                      onClick={handleMailtoDispatch}
                      className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#8B5CF6] to-[#22D3EE] text-white text-xs font-semibold shadow-md shadow-[#8B5CF6]/30 hover:opacity-90 transition-opacity"
                    >
                      Dispatch Email to Varsha Now
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsSubmitted(false)}
                      className="px-4 py-2.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.1] text-xs text-white font-medium transition-colors"
                    >
                      Edit Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  {/* Name field */}
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-mono uppercase tracking-wider text-[#9CA3AF] mb-2">
                      Your Name *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Elena Rostova"
                      className={`w-full px-4 py-3 rounded-xl bg-black/40 border text-sm text-[#F5F7FF] placeholder-slate-600 focus:outline-none transition-colors ${
                        errors.name
                          ? 'border-red-500/80 focus:border-red-500'
                          : 'border-white/[0.08] focus:border-[#8B5CF6]'
                      }`}
                    />
                    {errors.name && (
                      <p className="text-xs text-red-400 mt-1.5 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  {/* Email field */}
                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-mono uppercase tracking-wider text-[#9CA3AF] mb-2">
                      Email Address *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. elena@company.com"
                      className={`w-full px-4 py-3 rounded-xl bg-black/40 border text-sm text-[#F5F7FF] placeholder-slate-600 focus:outline-none transition-colors ${
                        errors.email
                          ? 'border-red-500/80 focus:border-red-500'
                          : 'border-white/[0.08] focus:border-[#8B5CF6]'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-xs text-red-400 mt-1.5 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>

                  {/* Subject field */}
                  <div>
                    <label htmlFor="contact-subject" className="block text-xs font-mono uppercase tracking-wider text-[#9CA3AF] mb-2">
                      Subject / Topic
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. AI Internship Discussion / Project Collaboration"
                      className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/[0.08] text-sm text-[#F5F7FF] placeholder-slate-600 focus:outline-none focus:border-[#8B5CF6] transition-colors"
                    />
                  </div>

                  {/* Message field */}
                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-mono uppercase tracking-wider text-[#9CA3AF] mb-2">
                      Message *
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Write your note, role details, or collaboration concept..."
                      className={`w-full px-4 py-3 rounded-xl bg-black/40 border text-sm text-[#F5F7FF] placeholder-slate-600 focus:outline-none transition-colors resize-none ${
                        errors.message
                          ? 'border-red-500/80 focus:border-red-500'
                          : 'border-white/[0.08] focus:border-[#8B5CF6]'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-xs text-red-400 mt-1.5 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    id="contact-submit-btn"
                    className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-[#8B5CF6] via-[#7C3AED] to-[#22D3EE] shadow-lg shadow-[#8B5CF6]/30 hover:shadow-xl hover:shadow-[#8B5CF6]/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6]"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}

              {/* Developer backend fallback note */}
              <div className="mt-6 pt-4 border-t border-white/[0.06] text-[11px] font-mono text-slate-500 text-center">
                Client-side validation enabled · Direct fallback via mailto:varsha14official@gmail.com
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
