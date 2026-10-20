import { useState, useEffect } from 'react';
import { CinematicBackground } from './components/background/CinematicBackground';
import { Navbar } from './components/navbar/Navbar';
import { HeroSection } from './components/hero/HeroSection';
import { AboutSection } from './components/about/AboutSection';
import { EducationSection } from './components/education/EducationSection';
import { SkillsSection } from './components/skills/SkillsSection';
import { ExperienceSection } from './components/experience/ExperienceSection';
import { ProjectsSection } from './components/projects/ProjectsSection';
import { CertificationsSection } from './components/certifications/CertificationsSection';
import { ContactSection } from './components/contact/ContactSection';
import { Footer } from './components/footer/Footer';
import { ResumeModal } from './components/resume/ResumeModal';
import { initSoundListener } from './utils/soundEffects';

export function App() {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  useEffect(() => {
    const cleanup = initSoundListener();
    return cleanup;
  }, []);

  return (
    <div className="relative min-h-screen bg-transparent text-[#F5F7FF] selection:bg-[#8B5CF6]/30 selection:text-[#22D3EE] font-sans">
      {/* Cinematic Animated Background (Fixed across entire site) */}
      <CinematicBackground />

      {/* Navigation */}
      <Navbar onOpenResume={() => setResumeModalOpen(true)} />

      {/* Main Content Sections */}
      <main id="main-content" className="relative z-10">
        <HeroSection onOpenResume={() => setResumeModalOpen(true)} />
        <AboutSection />
        <EducationSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <CertificationsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Dedicated Resume & Verification Modal */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />
    </div>
  );
}

export default App;
