"use client";

import { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowRight,
  Asterisk,
  Database,
  Download,
  Github,
  Layers,
  Mail,
  MapPin,
  Phone,
  Smartphone,
  Store
} from "lucide-react";
import { fetchProjects } from "@/lib/projects";
import type { Project } from "@/lib/projects";
import { yearsOfExperience } from "@/lib/career";
import { SITE } from "@/lib/site";
import AppButton from "@/components/app/app-button";
import AppCard from "@/components/app/app-card";
import AppSectionHeading, { Mark } from "@/components/app/app-section-heading";
import Counter from "@/components/counter";
import FeaturedSkeleton from "@/components/featured-skeleton";
import FeaturedWork from "@/components/featured-work";
import Marquee from "@/components/marquee";
import Polaroid from "@/components/polaroid";
import Reveal from "@/components/reveal";
import RotatingText from "@/components/rotating-text";

const words = ["online stores", "custom CMS", "client portals", "mobile apps"];

const tickerA = ["Next.js", "Laravel", "TypeScript", "Supabase", "Shopify", "React Native", "Firebase", "Webhooks"];
const tickerB = ["E-commerce", "Custom CMS", "Client portals", "CRM", "Ordering", "Delivery", "Payments", "Dashboards"];

const capabilities = [
  {
    icon: Store,
    title: "Online stores",
    text: "Storefronts with ordering, payments and delivery. Next.js on the front, Laravel behind it, shipped for shops in Israel, Germany, the US and Mexico.",
    tone: "bg-sun"
  },
  {
    icon: Layers,
    title: "CMS and CRM",
    text: "Admin panels the team can actually run: content, orders, customers. Connected to Shopify and other tools through webhooks.",
    tone: "bg-sky"
  },
  {
    icon: Database,
    title: "Data and auth",
    text: "Laravel APIs, Supabase and Firebase for login, roles, storage and information systems that stay tidy as they grow.",
    tone: "bg-blush"
  },
  {
    icon: Smartphone,
    title: "Web and mobile",
    text: "Layouts that hold up from a phone to a wide monitor, plus React Native screens when the product needs an app.",
    tone: "bg-sage"
  }
];

const steps = [
  { title: "Understand", text: "What the business sells, who buys it and where orders get stuck today." },
  { title: "Shape", text: "Sketch the flow and the pages first, so the build has a clear target." },
  { title: "Build", text: "Next.js front end, Laravel or Supabase back end, tested on real devices." },
  { title: "Ship and support", text: "Launch, watch how it behaves in production, then keep improving it." }
];

function Squiggle() {
  const reduce = useReducedMotion();

  return (
    <svg aria-hidden viewBox="0 0 300 22" fill="none" preserveAspectRatio="none" className="absolute -bottom-[0.12em] left-0 h-[0.2em] w-full text-tomato">
      <motion.path
        d="M3 14 C 28 2, 48 22, 74 12 S 122 2, 148 12 S 196 22, 222 11 S 270 3, 297 12"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
        initial={reduce ? false : { pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.9, ease: "easeInOut", delay: 0.5 }}
      />
    </svg>
  );
}

function Sticker() {
  return (
    <a
      href="#work"
      aria-label="Scroll to selected work"
      className="group absolute -right-3 -top-9 z-10 grid h-28 w-28 place-items-center rounded-full border-2 border-foreground bg-tomato shadow-hard transition-transform hover:scale-105 sm:-right-10 sm:h-32 sm:w-32"
    >
      <svg viewBox="0 0 120 120" className="spin-slow absolute inset-0 h-full w-full">
        <defs>
          <path id="sticker-ring" d="M60,60 m-45,0 a45,45 0 1,1 90,0 a45,45 0 1,1 -90,0" />
        </defs>
        <text fontSize="11" fontWeight="700" letterSpacing="2" className="fill-foreground font-mono uppercase">
          <textPath href="#sticker-ring" textLength="278" lengthAdjust="spacing">
            Open to work ✶ Open to work ✶
          </textPath>
        </text>
      </svg>
      <ArrowDownRight className="h-8 w-8 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" strokeWidth={3} />
    </a>
  );
}

function Hero() {
  const reduce = useReducedMotion();
  const years = yearsOfExperience();

  const rise = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.55, ease: "easeOut" as const, delay }
  });

  return (
    <section className="grid items-center gap-14 lg:grid-cols-[1.25fr_0.75fr] lg:gap-8">
      <div className="space-y-7">
        <motion.div {...rise(0)}>
          <span className="inline-flex items-center gap-2 rounded-full border-2 border-foreground bg-card px-3.5 py-1.5 font-mono text-xs font-medium uppercase tracking-wider shadow-hard-sm">
            <span className="blink h-2.5 w-2.5 rounded-full bg-tomato" />
            Looking for remote work
          </span>
        </motion.div>

        <motion.h1
          {...rise(0.06)}
          className="font-display text-[clamp(2.6rem,9.5vw,6.25rem)] font-extrabold leading-[0.95] tracking-tight"
        >
          Hi, I&apos;m{" "}
          <span className="relative inline-block">
            {SITE.firstName}.
            <Squiggle />
          </span>
          <br />
          I build
          <br />
          <RotatingText words={words} />
        </motion.h1>

        <motion.div {...rise(0.1)}>
          <span className="inline-block -rotate-2 rounded-md border-2 border-foreground bg-card px-3 py-1.5 font-mono text-sm shadow-hard-sm">
            psst, you can call me <strong className="bg-sun px-1.5 font-bold">{SITE.nickname}</strong>
          </span>
        </motion.div>

        <motion.p {...rise(0.14)} className="max-w-xl text-lg leading-relaxed text-foreground/80">
          Full stack developer from Davao City with{" "}
          <strong className="font-bold text-foreground" suppressHydrationWarning>
            {years}+ years
          </strong>{" "}
          of experience. I make e-commerce sites, custom CMS and client portals with Next.js, Laravel and Supabase.{" "}
          <strong className="bg-sun px-1.5 font-bold text-foreground">
            Now open to remote work, full-time or part-time.
          </strong>
        </motion.p>

        <motion.div {...rise(0.22)} className="flex flex-wrap gap-3">
          <AppButton href={`mailto:${SITE.email}`} variant="tomato" icon={Mail}>
            Hire me
          </AppButton>
          <AppButton href="/projects" iconEnd={ArrowRight}>
            See my work
          </AppButton>
          <AppButton href={SITE.resumeUrl} download={SITE.resumeFileName} variant="paper" icon={Download}>
            Resume
          </AppButton>
          <AppButton href={SITE.github} variant="paper" icon={Github}>
            GitHub
          </AppButton>
        </motion.div>

        <motion.ul
          {...rise(0.3)}
          className="flex flex-col gap-2 font-mono text-sm sm:flex-row sm:flex-wrap sm:gap-x-6"
        >
          <li className="inline-flex items-center gap-2">
            <Mail className="h-4 w-4 flex-none" />
            {SITE.email}
          </li>
          <li className="inline-flex items-center gap-2">
            <Phone className="h-4 w-4 flex-none" />
            {SITE.phone}
          </li>
          <li className="inline-flex items-center gap-2">
            <MapPin className="h-4 w-4 flex-none" />
            {SITE.location}
          </li>
        </motion.ul>
      </div>

      <div className="relative mx-auto pb-6">
        <Polaroid caption="justine aka jah · davao, ph" />
        <Sticker />
      </div>
    </section>
  );
}

function Stat({ tone, label, children }: { tone: string; label: string; children: React.ReactNode }) {
  return (
    <div className={`${tone} space-y-1 p-5 sm:p-6`}>
      <div className="font-display text-5xl font-extrabold leading-none tracking-tight sm:text-6xl">{children}</div>
      <div className="font-mono text-xs font-medium uppercase tracking-wider">{label}</div>
    </div>
  );
}

export default function HomePage() {
  const { data, isLoading } = useQuery({
    queryKey: ["projects"],
    queryFn: fetchProjects
  });

  const list = useMemo(() => (data || []) as Project[], [data]);
  const featured = useMemo(() => list.filter((p) => p.featured), [list]);
  const years = yearsOfExperience();

  return (
    <div id="top" className="space-y-24 md:space-y-32">
      <Hero />

      <div className="relative left-1/2 w-screen -translate-x-1/2 py-6" aria-hidden>
        <Marquee items={tickerB} tone="sun" reverse className="absolute inset-x-0 top-1/2 -translate-y-1/2 rotate-1" />
        <Marquee items={tickerA} className="relative -rotate-1" />
      </div>

      <Reveal>
        <section className="grid grid-cols-2 gap-0.5 overflow-hidden rounded-2xl border-2 border-foreground bg-foreground shadow-hard-lg md:grid-cols-4">
          <Stat tone="bg-sun" label="Years of experience">
            <span suppressHydrationWarning>
              <Counter to={years} suffix="+" />
            </span>
          </Stat>
          <Stat tone="bg-sky" label="Projects delivered">
            <Counter to={Math.max(list.length, 20)} suffix="+" />
          </Stat>
          <Stat tone="bg-blush" label="Countries served">
            <Counter to={6} />
          </Stat>
          <Stat tone="bg-sage" label="Main stack">
            <span className="text-3xl sm:text-4xl">
              Next.js
              <br />+ Laravel
            </span>
          </Stat>
        </section>
      </Reveal>

      <section id="work" className="scroll-mt-28 space-y-12">
        <AppSectionHeading
          index="01"
          eyebrow="Selected work"
          title={
            <>
              Sites people <Mark>order from</Mark>
            </>
          }
          description="Live stores and platforms I built for clients in four regions. Each one has ordering, delivery, CMS or CRM work behind the pretty part."
          action={
            <AppButton href="/projects" variant="paper" iconEnd={ArrowRight}>
              All projects
            </AppButton>
          }
        />
        {isLoading ? <FeaturedSkeleton count={2} /> : <FeaturedWork projects={featured} />}
      </section>

      <section className="space-y-12">
        <AppSectionHeading
          index="02"
          eyebrow="What I do"
          title={
            <>
              Storefront to <Mark>back office</Mark>
            </>
          }
          description="I own the whole path: what visitors see, and the systems that keep the business running behind it."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.06}>
              <AppCard className={i % 2 === 0 ? "h-full lg:-rotate-1" : "h-full lg:rotate-1"}>
                <div className={`${c.tone} flex items-center justify-between border-b-2 border-foreground px-5 py-4`}>
                  <c.icon className="h-7 w-7" strokeWidth={2.25} />
                  <span className="font-mono text-xs font-bold">0{i + 1}</span>
                </div>
                <div className="space-y-2 p-5">
                  <h3 className="font-display text-2xl font-extrabold tracking-tight">{c.title}</h3>
                  <p className="text-[15px] leading-relaxed text-foreground/80">{c.text}</p>
                </div>
              </AppCard>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="space-y-12">
        <AppSectionHeading
          index="03"
          eyebrow="How I work"
          title={
            <>
              Simple, <Mark>no surprises</Mark>
            </>
          }
        />
        <ol className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.06}>
              <li className="space-y-3 border-t-4 border-foreground pt-4">
                <div className="text-outline font-display text-6xl font-extrabold leading-none">{i + 1}</div>
                <h3 className="font-display text-2xl font-extrabold tracking-tight">{s.title}</h3>
                <p className="text-[15px] leading-relaxed text-foreground/80">{s.text}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </section>

      <Reveal>
        <section className="relative overflow-hidden rounded-3xl border-2 border-foreground bg-foreground p-7 text-background shadow-hard-lg sm:p-12">
          <Asterisk
            aria-hidden
            className="spin-slower pointer-events-none absolute -right-10 -top-10 h-40 w-40 text-sun sm:h-56 sm:w-56"
            strokeWidth={2.5}
          />
          <div className="relative max-w-3xl space-y-6">
            <div className="font-mono text-xs uppercase tracking-[0.18em] text-sun">
              Open to remote work · full-time or part-time
            </div>
            <h2 className="font-display text-4xl font-extrabold leading-[1.02] tracking-tight sm:text-6xl">
              Need a remote developer? Full-time or part-time, <span className="bg-sun px-2 text-foreground">let&apos;s talk.</span>
            </h2>
            <div className="flex flex-wrap gap-3">
              <AppButton href={`mailto:${SITE.email}`} variant="tomato" icon={Mail}>
                {SITE.email}
              </AppButton>
              <AppButton href={SITE.resumeUrl} download={SITE.resumeFileName} variant="paper" icon={Download}>
                Download resume
              </AppButton>
            </div>
          </div>
        </section>
      </Reveal>
    </div>
  );
}
