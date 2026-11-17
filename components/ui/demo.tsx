"use client"

import * as React from "react"
import DragonTypeSpecimen from "./dragon-type-specimen"
import SPECIMEN_CONTENT from "./specimen-content"

// palette
const R = "#de0902"
const R2 = "#ff3329"
const R3 = "#ff2a1a"
const R4 = "#ff4d42"
const R5 = "#ff3b30"
const BG = "#000000"
const DIM = "#9c8e8e"
const DIM2 = "#8a7b7b"
const DIM3 = "#918181"
const DIM4 = "#6e5858"
const DIM5 = "#827171"
const CARD_BG = "#0c0202"
const CARD_BORDER = "#2e0909"
const ICON_BG = "#160404"
const ICON_BORDER = "#3d0d0d"

// svg paths for card icons — kept terse like GLYPHS
const ICONS: Record<string, string> = {
  code:     "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
  gamepad:  "M6 11V9m0 0a3 3 0 013-3h6a3 3 0 013 3v2m-12 0a3 3 0 00-3 3v2a3 3 0 003 3h1.5a1.5 1.5 0 001.5-1.5V17m6-6v2m0 0a3 3 0 003 3H18a3 3 0 003-3v-2a3 3 0 00-3-3m-6 6v2.5a1.5 1.5 0 001.5 1.5H15a3 3 0 003-3v-2",
  pen:      "M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z",
  chip:     "M9 3v2m6-2v2M9 19v2m6-2v2M3 9h2m-2 6h2m16-6h2m-2 6h2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z",
  spark:    "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z",
  bolt:     "M13 10V3L4 14h7v7l9-11h-7z",
}

// social link SVGs — fill-based, not stroke
const SOCIALS_D: Record<string, string> = {
  github:   "M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z",
  linkedin: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z",
  instagram: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
}

interface Skill { icon: string; title: string; desc: string }

const SKILLS: Skill[] = [
  { icon: "code",    title: "Web Development",       desc: "Crafting reactive, high-performance web applications and interactive architectures with TypeScript, React, Next.js, Vite, and cutting-edge WebGL graphics." },
  { icon: "gamepad", title: "Game Development",       desc: "Architecting immersive gameplay mechanics, real-time physics simulations, custom shaders, and interactive virtual environments." },
  { icon: "pen",     title: "Graphic Design",         desc: "Visual identity design, brand styling, typography, poster art, UI/UX mockups, and high-impact digital graphics with sharp aesthetics." },
  { icon: "chip",    title: "Mechatronics & Robotics", desc: "Fusing code with physical machinery: microcontrollers, autonomous systems, circuit schematics, sensors, and embedded C/C++ engineering." },
  { icon: "spark",   title: "Hackathons & Judging",   desc: "Veteran hackathon participant, lead organizer, and jury member. Driving high-intensity build sprints and mentoring emerging developer teams." },
  { icon: "bolt",    title: "Hack Club & Buildvora",  desc: "Global student maker and open-source hacker community combined with Buildvora innovation to accelerate product development." },
]

interface Social { href: string; icon: string; label: string; fill?: boolean; primary?: boolean }

const LINKS: Social[] = [
  { href: "mailto:vanshpratap2323@gmail.com", icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z", label: "vanshpratap2323@gmail.com", primary: true },
  { href: "https://github.com/vansh-vps",     icon: "github",    label: "GitHub (@vansh-vps)",      fill: true },
  { href: "https://linkedin.com/in/vanshpratap", icon: "linkedin", label: "LinkedIn (@vanshpratap)", fill: true },
  { href: "https://instagram.com/vansh.vps",   icon: "instagram", label: "Instagram (@vansh.vps)",   fill: true },
]

// shared class fragments — avoids the giant repeated strings
const cardBase = "group relative overflow-hidden rounded-xl border bg-opacity-90 p-8 backdrop-blur-md transition-all duration-300 hover:-translate-y-1"
const cardColors = `border-[${CARD_BORDER}] bg-[${CARD_BG}]/90 hover:border-[${R}] hover:shadow-[0_0_30px_rgba(222,9,2,0.25)]`
const iconBox = `mb-5 flex h-12 w-12 items-center justify-center rounded-lg border transition-colors duration-300`
const iconColors = `border-[${ICON_BORDER}] bg-[${ICON_BG}] text-[${R}] group-hover:border-[${R}] group-hover:bg-[#250505]`
const monoXS = "font-mono text-xs uppercase tracking-wider"

function SkillCard({ s }: { s: Skill }) {
  return (
    <div className={`${cardBase} ${cardColors}`}>
      <div className={`absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[${R}]/5 blur-2xl transition-all duration-300 group-hover:bg-[${R}]/15`} />
      <div className={`${iconBox} ${iconColors}`}>
        <svg className="h-5 w-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d={ICONS[s.icon]} />
        </svg>
      </div>
      <h3 className={`font-mono text-base font-bold uppercase tracking-[0.2em] text-[#ffffff] group-hover:text-[${R5}]`}>
        {s.title}
      </h3>
      <p className={`mt-3 ${monoXS} leading-relaxed text-[${DIM2}]`}>{s.desc}</p>
    </div>
  )
}

function SocialLink({ s }: { s: Social }) {
  const ext = !s.href.startsWith("mailto")
  const d = s.fill ? SOCIALS_D[s.icon] : s.icon

  // primary link gets the red border treatment
  const cls = s.primary
    ? `group inline-flex items-center gap-3 rounded-lg border border-[${R}]/60 bg-[#220505] px-6 py-3.5 ${monoXS} tracking-[0.2em] text-[${R4}] transition-all duration-300 hover:-translate-y-0.5 hover:border-[${R3}] hover:bg-[#350808] hover:text-[#ffffff] hover:shadow-[0_0_30px_rgba(222,9,2,0.4)]`
    : `group inline-flex items-center gap-3 rounded-lg border border-[${ICON_BORDER}] bg-[#140404] px-6 py-3.5 ${monoXS} tracking-[0.2em] text-[#ffffff] transition-all duration-300 hover:-translate-y-0.5 hover:border-[${R}] hover:bg-[#200505] hover:text-[${R2}] hover:shadow-[0_0_25px_rgba(222,9,2,0.3)]`

  return (
    <a href={s.href} {...(ext ? { target: "_blank", rel: "noreferrer" } : {})} className={cls}>
      <svg
        className={`h-4 w-4 transition-transform duration-300 group-hover:scale-110 ${s.fill ? "fill-current" : "fill-none stroke-current stroke-2"}`}
        style={{ color: s.fill || s.primary ? R3 : undefined }}
        viewBox="0 0 24 24"
      >
        {s.fill
          ? <path d={d} />
          : <path strokeLinecap="round" strokeLinejoin="round" d={d} />}
      </svg>
      <span>{s.label}</span>
    </a>
  )
}

export default function Demo() {
  return (
    <div className={`w-full bg-[${BG}] text-[#f2efe9] min-h-screen selection:bg-[${R}] selection:text-[#ffffff]`}>
      <DragonTypeSpecimen />

      <section className={`relative z-10 w-full border-t border-[${R}]/30 bg-gradient-to-b from-[${BG}] via-[#090101] to-[${BG}] px-6 py-24 sm:px-12 md:py-32`}>
        {/* top glow */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-96 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(222,9,2,0.2),transparent_70%)]" />

        <div className="relative mx-auto max-w-6xl">

          {/* header */}
          <div className="mb-20 text-center">
            <div className={`inline-flex items-center gap-2.5 rounded-full border border-[${R}]/50 bg-[${R}]/10 px-5 py-2 text-xs font-mono uppercase tracking-[0.3em] text-[${R2}] shadow-[0_0_20px_rgba(222,9,2,0.25)]`}>
              <span className={`inline-block h-1.5 w-1.5 rounded-full bg-[${R3}] animate-pulse`} />
              Codeavour 6.0 International Student Ambassador
            </div>

            <h2 className="mt-8 font-mono text-4xl font-extrabold uppercase tracking-[0.25em] text-[#ffffff] sm:text-6xl md:text-7xl">
              Vansh <span className={`text-[${R}] drop-shadow-[0_0_35px_rgba(222,9,2,0.6)]`}>Pratap</span>
            </h2>

            <p className={`mx-auto mt-5 max-w-3xl text-xs font-mono uppercase tracking-[0.22em] text-[${DIM}] sm:text-sm`}>
              Web Developer <span className={`text-[${R}]`}>/</span> Game Developer <span className={`text-[${R}]`}>/</span> Graphic Designer <span className={`text-[${R}]`}>/</span> Mechatronics <span className={`text-[${R}]`}>/</span> Hackathon Organizer &amp; Judge
            </p>
          </div>

          {/* skills */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SKILLS.map((s) => <SkillCard key={s.icon} s={s} />)}
          </div>

          {/* contact */}
          <div className="mt-20 rounded-2xl border border-[#360909] bg-gradient-to-b from-[#100303] to-[#080101] p-8 text-center sm:p-12 shadow-[0_0_40px_rgba(222,9,2,0.12)]">
            <h3 className="font-mono text-xl font-extrabold uppercase tracking-[0.25em] text-[#ffffff] sm:text-3xl">
              Connect <span className={`text-[${R}]`}>&amp;</span> Collaborate
            </h3>
            <p className={`mx-auto mt-3 max-w-xl text-xs font-mono uppercase tracking-[0.2em] text-[${DIM3}]`}>
              Reach out for projects, hackathons, design collaborations, or inquiries
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
              {LINKS.map((s) => <SocialLink key={s.href} s={s} />)}
            </div>
          </div>

          {/* footer */}
          <div className={`mt-16 border-t border-[#240606] pt-8 text-center font-mono text-xs uppercase tracking-[0.25em] text-[${DIM4}]`}>
            <p>
              © {SPECIMEN_CONTENT.general.year} {SPECIMEN_CONTENT.general.title} {SPECIMEN_CONTENT.general.subtitle} <span className={`text-[${R}]`}>•</span> {SPECIMEN_CONTENT.general.studio}
            </p>
            <p className={`mt-2 text-[10px] tracking-[0.2em] text-[${DIM5}]`}>
              Direct Contact: <a href="mailto:vanshpratap2323@gmail.com" className={`text-[${R5}] hover:underline`}>vanshpratap2323@gmail.com</a>
            </p>
          </div>

        </div>
      </section>
    </div>
  )
}
