import { Section, PublicationItem } from "@/components/Section";
import { CollapsibleNewsList } from "@/components/CollapsibleNewsList";
import { news, publications } from "./data";
import Image from "next/image";
import { GraduationCap, Github, Linkedin, Twitter, FileText } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen max-w-2xl mx-auto px-6 pt-24 pb-16 sm:px-8 sm:pt-28">
      <a href="#main" className="skip-link font-sans">
        Skip to content
      </a>
      <nav className="fixed top-0 left-0 right-0 z-10" aria-label="Main">
        <div className="max-w-2xl mx-auto px-6 sm:px-8 py-3 bg-white/95 backdrop-blur-sm border-b border-[#e5e5e5] font-sans text-sm">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-1">
            <a href="#about" className="text-[#666] hover:text-[#1a1a1a] transition-colors rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1a1a1a] focus-visible:ring-offset-2">About</a>
            <a href="#research" className="text-[#666] hover:text-[#1a1a1a] transition-colors rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1a1a1a] focus-visible:ring-offset-2">Research</a>
            <a href="#news" className="text-[#666] hover:text-[#1a1a1a] transition-colors rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1a1a1a] focus-visible:ring-offset-2">News</a>
            <a href="#publications" className="text-[#666] hover:text-[#1a1a1a] transition-colors rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1a1a1a] focus-visible:ring-offset-2">Publications</a>
            <a href="#awards" className="text-[#666] hover:text-[#1a1a1a] transition-colors rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1a1a1a] focus-visible:ring-offset-2">Awards</a>
            <a href="#services" className="text-[#666] hover:text-[#1a1a1a] transition-colors rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1a1a1a] focus-visible:ring-offset-2">Services</a>
          </div>
        </div>
      </nav>

      <main id="main">
      <header className="mb-20 flex flex-col items-center gap-6 sm:flex-row sm:items-start">
        <div className="shrink-0">
          <Image
            src="/avatar.png"
            alt="Xinrui Fang"
            width={120}
            height={120}
            className="object-cover aspect-square border border-[#e5e5e5]"
            priority
            unoptimized
          />
        </div>
        <div className="min-w-0 flex-1 text-center sm:text-left">
        <h1 className="font-sans text-2xl font-semibold tracking-tight mb-2">
          Xinrui Fang
        </h1>
        <p className="font-sans text-[#666] text-sm mb-1">
          PhD Student
        </p>
        <p className="font-sans text-[#666] text-sm mb-1">
          The University of Tokyo
        </p>
        <p className="font-sans text-sm">
          <a href="mailto:xinrui.fang@iis-lab.org" className="text-[#1a1a1a] underline decoration-[#ccc] underline-offset-2 hover:decoration-[#1a1a1a] transition-colors">xinrui.fang (at) iis-lab.org</a>
        </p>
        </div>
      </header>

      <Section id="about" title="About Me">
        <p className="mb-4">
          I am a 2nd year PhD student specializing in Human-Computer Interaction
          (HCI) at the University of Tokyo, under the supervision of{" "}
          <a href="https://iis-lab.org/member/koji-yatani/" target="_blank" rel="noopener noreferrer" className="text-[#1a1a1a] underline decoration-[#999] underline-offset-2 hover:decoration-[#1a1a1a]">Prof. Koji Yatani</a>. My passion is to design critical AI tools that foster human’s
          science communication and well-being. Previously I was working in the
          Rakuten Group Inc. as an Application Engineer for 2 years. Before
          that, I got my master degree from the Keio University under the
          supervision of <a href="https://lclab.org/people/yutasugiura" target="_blank" rel="noopener noreferrer" className="text-[#1a1a1a] underline decoration-[#999] underline-offset-2 hover:decoration-[#1a1a1a]">Prof. Yuta Sugiura</a>, and got my bachelor degree from the
          Dalian University of Technology.
        </p>
        <p className="mb-4">
          I like making coffee, workout and playing console games in my leisure
          time. I am also a collector of 怪獣ソフビ (kaijū sofubi). Recently, I
          am playing Battlefield 6 on PS5.
        </p>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mt-6">
          <a href="https://scholar.google.com/citations?user=ere6gk4AAAAJ&hl=en" target="_blank" rel="noopener noreferrer" aria-label="Google Scholar" className="flex items-center gap-1.5 text-[#666] hover:text-[#1a1a1a] transition-colors font-sans text-sm no-underline rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1a1a1a] focus-visible:ring-offset-2">
            <GraduationCap size={18} strokeWidth={2} />
            <span>Google Scholar</span>
          </a>
          <a href="https://github.com/Xinrui-Fang" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="flex items-center gap-1.5 text-[#666] hover:text-[#1a1a1a] transition-colors font-sans text-sm no-underline rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1a1a1a] focus-visible:ring-offset-2">
            <Github size={18} strokeWidth={2} />
            <span>GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/xinrui-fang/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="flex items-center gap-1.5 text-[#666] hover:text-[#1a1a1a] transition-colors font-sans text-sm no-underline rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1a1a1a] focus-visible:ring-offset-2">
            <Linkedin size={18} strokeWidth={2} />
            <span>LinkedIn</span>
          </a>
          <a href="https://x.com/Tony_Fang_" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className="flex items-center gap-1.5 text-[#666] hover:text-[#1a1a1a] transition-colors font-sans text-sm no-underline rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1a1a1a] focus-visible:ring-offset-2">
            <Twitter size={18} strokeWidth={2} />
            <span>X</span>
          </a>
          <a href="/xinrui-fang.pdf" target="_blank" rel="noopener noreferrer" aria-label="CV" className="flex items-center gap-1.5 text-[#666] hover:text-[#1a1a1a] transition-colors font-sans text-sm no-underline rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1a1a1a] focus-visible:ring-offset-2">
            <FileText size={18} strokeWidth={2} />
            <span>CV</span>
          </a>
        </div>
      </Section>

      <Section id="research" title="Research Interests">
        <p>
          <strong>Human Computer Interaction:</strong> Human–AI Interaction and
          AI for Science, focusing on how AI can be designed to foster human
          critical thinking and positively support mental well-being.
        </p>
      </Section>

      <Section id="news" title="News">
        <CollapsibleNewsList items={news} />
      </Section>

      <Section id="publications" title="Publications">
        {publications.map((p, i) => (
          <PublicationItem key={i} p={p} />
        ))}
      </Section>

      <Section id="awards" title="Awards & Honors">
        <ul className="list-none space-y-2 text-[#1a1a1a]">
          <li className="flex gap-4"><span className="text-[#666] shrink-0">2026</span> Google Cloud Research Credit Grant ($1,000)</li>
          <li className="flex gap-4"><span className="text-[#666] shrink-0">2025</span> JSPS Research Fellowships for Young Scientists (DC2) (2026.04–2028.03)</li>
          <li className="flex gap-4"><span className="text-[#666] shrink-0">2024</span> SPRING GX Fellowship (2024.04–2026.03)</li>
          <li className="flex gap-4"><span className="text-[#666] shrink-0">2021</span> Sony Sensing Solution Hackathon: Outstanding Award (¥100,000)</li>
          <li className="flex gap-4"><span className="text-[#666] shrink-0">2021</span> Keio University Graduate School Scholarship (¥500,000)</li>
          <li className="flex gap-4"><span className="text-[#666] shrink-0">2021</span> KF-ICC Scholarship (¥720,000)</li>
          <li className="flex gap-4"><span className="text-[#666] shrink-0">2020</span> Fujiwara Scholarship (¥50,000)</li>
          <li className="flex gap-4"><span className="text-[#666] shrink-0">2020</span> JASSO Scholarship (¥480,000)</li>
        </ul>
      </Section>

      <Section id="services" title="Services">
        <h3 className="font-sans text-xs font-medium uppercase tracking-wider text-[#666] mt-4 mb-2">
          External Reviewers
        </h3>
        <ul className="list-none space-y-1 text-[#666]">
          <li>IEEE VR, 2026</li>
          <li>ACM CHI Posters (LBW), 2022, 2025–2026</li>
        </ul>
        <h3 className="font-sans text-xs font-medium uppercase tracking-wider text-[#666] mt-6 mb-2">
          Student Volunteer
        </h3>
        <ul className="list-none space-y-1 text-[#666]">
          <li>The ACM Symposium on User Interface Software and Technology (UIST) 2021</li>
          <li>The ACM SIGACCESS Conference on Computers and Accessibility (ASSETS) 2021</li>
        </ul>
      </Section>

      <footer className="mt-24 pt-8 border-t border-[#e5e5e5] font-sans text-xs text-[#999]">
        Designed by Xinrui with Cursor
      </footer>
      </main>
    </div>
  );
}
