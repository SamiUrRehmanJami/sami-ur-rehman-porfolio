import { Github, Linkedin, Mail } from "lucide-react";
import { personal, socials, platforms } from "@/data/portfolio";

const Avatar = () => (
  <svg viewBox="0 0 300 360" className="relative z-[1] w-full h-auto" role="img" aria-label="Illustrated developer avatar">
    <defs>
      <linearGradient id="archG" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#f5efe5" />
        <stop offset="1" stopColor="#ece3d4" />
      </linearGradient>
      <linearGradient id="skinG" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#ecbb93" />
        <stop offset="1" stopColor="#dca477" />
      </linearGradient>
      <linearGradient id="hoodG" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#34302b" />
        <stop offset="1" stopColor="#211e1a" />
      </linearGradient>
    </defs>

    {/* arch backdrop */}
    <path d="M52 360 L52 158 C52 92 106 52 150 52 C194 52 248 92 248 158 L248 360 Z" fill="url(#archG)" />
    <circle cx="150" cy="150" r="96" fill="#c16132" opacity="0.06" />

    {/* hoodie / shoulders */}
    <path d="M30 360 L30 322 C30 266 92 236 150 236 C208 236 270 266 270 322 L270 360 Z" fill="url(#hoodG)" />
    {/* hood collar */}
    <path d="M108 250 C120 276 134 286 150 286 C166 286 180 276 192 250 C176 262 162 266 150 266 C138 266 124 262 108 250 Z" fill="#403a33" />

    {/* neck */}
    <path d="M131 206 L169 206 L169 250 C169 262 159 268 150 268 C141 268 131 262 131 250 Z" fill="#d79b6f" />

    {/* ears */}
    <ellipse cx="96" cy="168" rx="11" ry="15" fill="url(#skinG)" />
    <ellipse cx="204" cy="168" rx="11" ry="15" fill="url(#skinG)" />

    {/* head */}
    <path d="M96 160 C96 108 120 82 150 82 C180 82 204 108 204 160 C204 206 180 232 150 232 C120 232 96 206 96 160 Z" fill="url(#skinG)" />

    {/* beard */}
    <path d="M101 158 C101 158 108 176 108 192 C108 220 128 236 150 236 C172 236 192 220 192 192 C192 176 199 158 199 158 C199 158 196 196 178 210 C168 218 160 220 150 220 C140 220 132 218 122 210 C104 196 101 158 101 158 Z" fill="#231f1b" />
    {/* upper-lip / mustache hint */}
    <path d="M126 192 C136 200 164 200 174 192 C164 196 136 196 126 192 Z" fill="#231f1b" />

    {/* hair */}
    <path d="M92 158 C86 150 88 132 92 122 C86 112 92 92 104 86 C106 72 124 62 140 66 C150 58 170 60 180 70 C198 70 212 86 210 104 C218 114 216 134 208 142 C212 150 210 158 208 160 C208 160 206 130 196 120 C198 112 194 104 188 102 C190 94 182 88 176 90 C172 82 158 80 152 86 C140 78 124 80 118 90 C108 90 100 100 102 110 C94 114 92 124 96 132 C90 140 90 152 92 158 Z" fill="#1d1a17" />
    {/* curl bumps along hairline */}
    <g fill="#1d1a17">
      <circle cx="108" cy="92" r="11" /><circle cx="128" cy="80" r="12" /><circle cx="150" cy="76" r="12" />
      <circle cx="172" cy="80" r="12" /><circle cx="192" cy="92" r="11" /><circle cx="201" cy="112" r="9" /><circle cx="99" cy="112" r="9" />
    </g>

    {/* eyebrows */}
    <path d="M114 150 C122 145 134 145 141 149" stroke="#231f1b" strokeWidth="4" fill="none" strokeLinecap="round" />
    <path d="M159 149 C166 145 178 145 186 150" stroke="#231f1b" strokeWidth="4" fill="none" strokeLinecap="round" />

    {/* glasses */}
    <g>
      <rect x="108" y="154" width="38" height="28" rx="11" fill="#9fb0bd" fillOpacity="0.22" stroke="#26211d" strokeWidth="4.5" />
      <rect x="154" y="154" width="38" height="28" rx="11" fill="#9fb0bd" fillOpacity="0.22" stroke="#26211d" strokeWidth="4.5" />
      <path d="M146 164 C149 161 151 161 154 164" stroke="#26211d" strokeWidth="4.5" fill="none" />
      <path d="M108 162 L96 160" stroke="#26211d" strokeWidth="4.5" strokeLinecap="round" />
      <path d="M192 162 L204 160" stroke="#26211d" strokeWidth="4.5" strokeLinecap="round" />
    </g>
    {/* eyes */}
    <circle cx="127" cy="168" r="3.4" fill="#2a2420" />
    <circle cx="173" cy="168" r="3.4" fill="#2a2420" />
    {/* nose */}
    <path d="M150 174 L146 190 C148 193 152 193 154 190" stroke="#c98a5e" strokeWidth="3" fill="none" strokeLinecap="round" />
  </svg>
);

export const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = personal.cvUrl;
    link.download = "Sami-Ur-Rehman.pdf";
    link.click();
  };

  return (
    <section className="relative overflow-hidden bg-background">
      {/* soft warm glows */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(900px 420px at 88% -5%, hsl(20 59% 48% / 0.09), transparent 60%), radial-gradient(700px 360px at -5% 8%, hsl(20 59% 48% / 0.05), transparent 55%)",
        }}
      />

      <div className="relative container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-16 items-center pt-28 pb-14 lg:pt-32 lg:pb-20">
          {/* Copy */}
          <div className="animate-fade-in-up">
            <span className="inline-flex items-center gap-2.5 text-sm font-medium text-foreground bg-card border border-border px-4 py-2 rounded-full shadow-[0_1px_2px_rgba(17,17,17,.05)]">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-70" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              {personal.availability}
            </span>

            <h1 className="mt-6 text-[2.7rem] leading-[1.04] sm:text-6xl lg:text-[4.3rem] font-bold tracking-tight text-foreground">
              I build web apps <br className="hidden sm:block" />&amp; <span className="text-primary">AI products.</span>
            </h1>

            <p className="mt-5 text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed">
              Senior full-stack engineer shipping production-grade web apps and AI/LLM systems —
              React, Next.js and Angular on the front, Node.js and clean APIs underneath.
            </p>

            <div className="mt-8 flex flex-wrap gap-3.5">
              <button
                onClick={() => scrollToSection("projects")}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-foreground text-background font-semibold hover:-translate-y-0.5 hover:shadow-glow transition-all duration-200"
              >
                View my work →
              </button>
              <button
                onClick={downloadCV}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-card text-foreground font-semibold border border-border hover:border-foreground hover:-translate-y-0.5 transition-all duration-200"
              >
                Download CV
              </button>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <div className="flex">
                <span className="w-8 h-8 rounded-full border-2 border-background grid place-items-center text-[0.62rem] font-bold text-white" style={{ background: "#6366f1" }}>TF</span>
                <span className="w-8 h-8 rounded-full border-2 border-background grid place-items-center text-[0.62rem] font-bold text-white -ml-2" style={{ background: "#16a34a" }}>SH</span>
                <span className="w-8 h-8 rounded-full border-2 border-background grid place-items-center text-[0.62rem] font-bold text-white -ml-2" style={{ background: "hsl(20 59% 48%)" }}>SB</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Trusted on 8+ shipped products &amp; 8 live platforms
              </p>
            </div>

            <div className="mt-6 flex gap-3">
              <a href={socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"
                className="p-2.5 rounded-xl border border-border text-muted-foreground hover:text-foreground hover:border-foreground transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                className="p-2.5 rounded-xl border border-border text-muted-foreground hover:text-foreground hover:border-foreground transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href={socials.email} aria-label="Email"
                className="p-2.5 rounded-xl border border-border text-muted-foreground hover:text-foreground hover:border-foreground transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Visual panel with character */}
          <div className="animate-fade-in-up [animation-delay:150ms]">
            <div className="relative mx-auto max-w-[400px]">
              {/* card (clips the character) */}
              <div className="relative rounded-[26px] border border-border shadow-glow overflow-hidden"
                style={{ background: "linear-gradient(180deg,#fbfaf8,#f3f1ec)" }}>
                <div className="pointer-events-none absolute inset-0"
                  style={{ background: "radial-gradient(420px 220px at 70% 20%, hsl(20 59% 48% / 0.10), transparent 60%)" }} />
                <div className="relative px-6 pt-6">
                  <Avatar />
                </div>
              </div>

              {/* floating chips (outside the clip) — gentle staggered float */}
              <div className="absolute z-20 top-6 -left-3 sm:-left-5 bg-card border border-border rounded-2xl px-3.5 py-2.5 shadow-glow animate-float-soft hover:[animation-play-state:paused] motion-reduce:animate-none">
                <div className="text-primary tracking-widest text-xs">★★★★★</div>
                <div className="text-[0.7rem] text-muted-foreground mt-0.5 leading-tight">6+ years shipping<br />production apps</div>
              </div>

              <div className="absolute z-20 top-[40%] -right-2 sm:-right-5 bg-card border border-border rounded-full pl-2.5 pr-3.5 py-1.5 shadow-glow flex items-center gap-2 animate-float-soft [animation-delay:1.2s] [animation-duration:5s] hover:[animation-play-state:paused] motion-reduce:animate-none">
                <span className="w-2 h-2 rounded-full bg-foreground" />
                <span className="text-[0.78rem] font-semibold text-foreground whitespace-nowrap">AI Systems</span>
              </div>

              <div className="absolute z-20 -bottom-5 -right-3 sm:-right-6 bg-card border border-border rounded-2xl px-4 py-3 shadow-glow animate-float-soft [animation-delay:0.6s] [animation-duration:4.4s] hover:[animation-play-state:paused] motion-reduce:animate-none">
                <div className="text-2xl font-bold tracking-tight text-foreground leading-none">700+</div>
                <div className="text-[0.7rem] text-muted-foreground mt-1 leading-tight">REST APIs<br />designed &amp; maintained</div>
              </div>
            </div>
          </div>
        </div>

        {/* platform strip */}
        <div className="pb-10 sm:pb-14">
          <p className="text-center text-xs uppercase tracking-[0.1em] text-muted-foreground/70 mb-5">
            Platforms I've built
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-7 gap-y-3">
            {platforms.map((name) => (
              <span
                key={name}
                className="font-bold tracking-tight text-[1.02rem] text-foreground/25 hover:text-foreground transition-colors cursor-default"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
