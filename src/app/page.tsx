"use client";

import Image from "next/image";
import { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Code2,
  Database,
  Download,
  Github,
  Globe2,
  Layers,
  Mail,
  MapPin,
  Phone,
  Smartphone,
  Store,
  TrendingUp
} from "lucide-react";
import { fetchProjects } from "@/lib/projects";
import { SITE } from "@/lib/site";
import type { Project } from "@/lib/projects";
import AppButton from "@/components/app/app-button";
import AppCard from "@/components/app/app-card";
import AppSectionHeading from "@/components/app/app-section-heading";
import Counter from "@/components/counter";
import FeaturedWork from "@/components/featured-work";
import FeaturedSkeleton from "@/components/featured-skeleton";
import Marquee from "@/components/marquee";
import Reveal from "@/components/reveal";
import RotatingText from "@/components/rotating-text";

const roles = ["e-commerce platforms", "custom CMS", "client portals", "mobile apps", "delightful UI"];

const tech = [
  "Next.js",
  "React",
  "Laravel",
  "TypeScript",
  "Supabase",
  "Shopify",
  "React Native",
  "Firebase",
  "Tailwind CSS",
  "Webhooks",
  "WordPress"
];

const orbit = [
  { label: "Next.js", angle: 0 },
  { label: "Laravel", angle: 90 },
  { label: "Supabase", angle: 180 },
  { label: "Shopify", angle: 270 }
];

const capabilities = [
  {
    icon: Store,
    title: "E-commerce that sells",
    text: "Storefronts with ordering, payments and delivery, built with Next.js and Laravel for shops in Israel, Germany, the US and Mexico."
  },
  {
    icon: Layers,
    title: "Custom CMS and CRM",
    text: "Admin panels your team can actually use: content, orders and customers, connected through webhooks and Shopify."
  },
  {
    icon: Database,
    title: "Data and auth",
    text: "Supabase, Firebase and Laravel APIs for auth, role-based access, storage and real-time data."
  },
  {
    icon: Smartphone,
    title: "Web and mobile",
    text: "Responsive-first interfaces on the web, and React Native screens when the product needs to live in a pocket."
  }
];

function Hero() {
  const reduce = useReducedMotion();

  const fade = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" as const, delay }
  });

  return (
    <section className="relative grid items-center gap-14 pt-4 lg:grid-cols-[1.15fr_0.85fr] lg:pt-12">
      <div className="space-y-7">
        <motion.div {...fade(0)}>
          <span className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm text-foreground/90 backdrop-blur">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/70" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
            </span>
            Open to new projects
          </span>
        </motion.div>

        <motion.h1
          {...fade(0.08)}
          className="font-display text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
        >
          I build
          <br />
          <RotatingText words={roles} />
          <br />
          that people trust.
        </motion.h1>

        <motion.p {...fade(0.16)} className="max-w-xl text-lg leading-relaxed text-muted-foreground">
          I&apos;m <span className="font-semibold text-foreground">Justine Tobithe Doloiras</span>, a full stack developer
          shipping production e-commerce, CMS and portal projects with Next.js, Laravel and Supabase for clients around
          the world.
        </motion.p>

        <motion.div {...fade(0.24)} className="flex flex-wrap gap-3">
          <AppButton href="/projects" iconEnd={ArrowRight}>
            View projects
          </AppButton>
          <AppButton href="/about" variant="glass">
            About me
          </AppButton>
          <AppButton href="https://github.com/justinetobithe" variant="glass" icon={Github}>
            GitHub
          </AppButton>
          <AppButton href={SITE.resumeUrl} download={SITE.resumeFileName} variant="ghost" icon={Download}>
            Download Resume
          </AppButton>
        </motion.div>

        <motion.div
          {...fade(0.32)}
          className="flex flex-col gap-3 text-sm text-muted-foreground sm:flex-row sm:flex-wrap sm:gap-x-6"
        >
          <span className="inline-flex items-center gap-2">
            <Mail className="h-4 w-4 text-violet-300" />
            justine.tobithe27@gmail.com
          </span>
          <span className="inline-flex items-center gap-2">
            <Phone className="h-4 w-4 text-cyan-300" />
            09276192326
          </span>
          <span className="inline-flex items-center gap-2">
            <MapPin className="h-4 w-4 text-emerald-300" />
            Davao City, Philippines
          </span>
        </motion.div>
      </div>

      <motion.div
        initial={reduce ? false : { opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
        className="relative mx-auto w-[min(72vw,340px)] lg:w-[min(100%,380px)]"
      >
        <div className="orbit pointer-events-none absolute -inset-10 sm:-inset-14">
          <div className="absolute inset-0 rounded-full border border-dashed border-white/20" />
          {orbit.map((o) => (
            <div key={o.label} className="absolute inset-0" style={{ transform: `rotate(${o.angle}deg)` }}>
              <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
                <div className="orbit-reverse">
                  <span
                    className="inline-block rounded-full border border-white/15 bg-background/80 px-3 py-1 text-xs font-medium backdrop-blur"
                    style={{ transform: `rotate(${-o.angle}deg)` }}
                  >
                    {o.label}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="float-y relative">
          <div
            aria-hidden
            className="absolute -inset-6 rounded-full bg-linear-to-br from-violet-500/40 via-cyan-400/25 to-emerald-400/30 blur-3xl"
          />
          <div className="relative overflow-hidden rounded-4xl p-0.75">
            <div className="spin-slow absolute -inset-[60%] bg-[conic-gradient(from_0deg,#8b5cf6,#22d3ee,#34d399,#8b5cf6)]" />
            <div className="relative aspect-4/5 overflow-hidden rounded-[23px] bg-muted">
              <Image
                src="/profile.jpg"
                alt="Justine Tobithe Doloiras"
                fill
                priority
                sizes="(max-width: 1024px) 72vw, 380px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-background/50 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function StatCard({
  icon: Icon,
  label,
  children
}: {
  icon: typeof TrendingUp;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <AppCard className="rounded-2xl">
      <div className="flex items-center gap-4 p-5">
        <div className="grid h-11 w-11 flex-none place-items-center rounded-xl bg-linear-to-br from-violet-500/30 to-cyan-400/20">
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <div className="font-display text-2xl font-semibold tracking-tight">{children}</div>
          <div className="text-sm text-muted-foreground">{label}</div>
        </div>
      </div>
    </AppCard>
  );
}

export default function HomePage() {
  const { data, isLoading } = useQuery({
    queryKey: ["projects"],
    queryFn: fetchProjects
  });

  const list = useMemo(() => (data || []) as Project[], [data]);
  const featured = useMemo(() => list.filter((p) => p.featured), [list]);

  return (
    <div id="top" className="space-y-24">
      <Hero />

      <div className="-mx-4 sm:mx-0">
        <Marquee items={tech} />
      </div>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Reveal>
          <StatCard icon={TrendingUp} label="Years of experience">
            <Counter to={5} suffix="+" />
          </StatCard>
        </Reveal>
        <Reveal delay={0.06}>
          <StatCard icon={Layers} label="Projects delivered">
            <Counter to={Math.max(list.length, 20)} suffix="+" />
          </StatCard>
        </Reveal>
        <Reveal delay={0.12}>
          <StatCard icon={Globe2} label="Countries served">
            <Counter to={6} />
          </StatCard>
        </Reveal>
        <Reveal delay={0.18}>
          <StatCard icon={Code2} label="Main stack">
            Next · Laravel
          </StatCard>
        </Reveal>
      </section>

      <section className="space-y-10">
        <AppSectionHeading
          eyebrow="Selected work"
          title={
            <>
              Live products, <span className="text-gradient">real customers</span>
            </>
          }
          description="Production stores and platforms I built for clients across four continents, each with ordering, delivery, CMS or CRM work behind the interface."
          action={
            <AppButton href="/projects" variant="glass" size="default" iconEnd={ArrowRight}>
              All projects
            </AppButton>
          }
        />
        {isLoading ? <FeaturedSkeleton count={2} /> : <FeaturedWork projects={featured} />}
      </section>

      <section className="space-y-10">
        <AppSectionHeading
          eyebrow="What I do"
          title="From storefront to back office"
          description="I own the whole path: the interface people see and the systems that keep the business running."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.06}>
              <AppCard className="h-full">
                <div className="space-y-3 p-6">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-linear-to-br from-violet-500/30 to-cyan-400/20">
                    <c.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-lg font-semibold tracking-tight">{c.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{c.text}</p>
                </div>
              </AppCard>
            </Reveal>
          ))}
        </div>
      </section>

      <Reveal>
        <AppCard className="rounded-4xl" glow="rgba(34, 211, 238, 0.18)">
          <div className="relative flex flex-col gap-8 p-8 sm:p-12 md:flex-row md:items-center md:justify-between">
            <div
              aria-hidden
              className="spin-slow pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border border-dashed border-white/15"
            />
            <div className="relative max-w-xl space-y-3">
              <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                Have a store or platform in mind? <span className="text-gradient">Let&apos;s build it.</span>
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground">
                Open to full-stack development, e-commerce, custom CMS, dashboards and client portals.
              </p>
            </div>
            <div className="relative flex flex-wrap gap-3">
              <AppButton href="mailto:justine.tobithe27@gmail.com" icon={Mail}>
                Email me
              </AppButton>
              <AppButton href="/projects" variant="glass">
                See my work
              </AppButton>
            </div>
          </div>
        </AppCard>
      </Reveal>
    </div>
  );
}
