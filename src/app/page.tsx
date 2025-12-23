"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchProjects } from "@/lib/projects";
import type { Project } from "@/lib/projects";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Reveal from "@/components/reveal";
import ProjectCard from "@/components/project-card";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  Github,
  MapPin,
  Sparkles,
  ArrowRight,
  Download,
  TrendingUp,
  Layers,
  Code2,
  ChevronUp,
  Smartphone,
  Database,
  Store,
  Globe
} from "lucide-react";

function Stat({ icon: Icon, label, value }: { icon: any; label: string; value: string }) {
  return (
    <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.2 }}>
      <Card className="rounded-2xl bg-card/60 backdrop-blur transition-shadow hover:shadow-xl">
        <CardContent className="flex items-center gap-4 p-5">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl border bg-background/40">
            <Icon className="h-5 w-5" />
          </div>
          <div className="space-y-0.5">
            <div className="text-xs text-muted-foreground">{label}</div>
            <div className="text-lg font-semibold tracking-tight">{value}</div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

function Highlight({ icon: Icon, title, text }: { icon: any; title: string; text: string }) {
  return (
    <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.2 }}>
      <Card className="rounded-2xl bg-card/60 backdrop-blur transition-shadow hover:shadow-xl">
        <CardHeader className="flex flex-row items-center gap-2 font-semibold">
          <Icon className="h-5 w-5" />
          {title}
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground">{text}</CardContent>
      </Card>
    </motion.div>
  );
}

function ScrollTopButton() {
  return (
    <motion.a
      href="#top"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full border bg-background/70 px-4 py-2 text-sm backdrop-blur"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
    >
      <ChevronUp className="h-4 w-4" />
      Top
    </motion.a>
  );
}

export default function HomePage() {
  const { data } = useQuery({
    queryKey: ["projects"],
    queryFn: fetchProjects
  });

  const list = (data || []) as Project[];
  const featured = useMemo(() => list.slice(0, 3), [list]);
  const totalProjects = list.length;

  return (
    <div id="top" className="space-y-8">
      <ScrollTopButton />

      <Reveal>
        <section className="rounded-2xl border bg-card/60 p-6 backdrop-blur">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-col gap-5 md:flex-row md:items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="relative h-[240px] w-full flex-none overflow-hidden rounded-2xl border bg-muted md:h-[280px] md:w-[210px] lg:h-[320px] lg:w-[240px] xl:h-[340px] xl:w-[260px]"
              >
                <Image
                  src="/profile.jpg"
                  alt="Justine Tobithe"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 210px, (max-width: 1280px) 240px, 260px"
                  className="object-cover"
                />
              </motion.div>

              <div className="space-y-2">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="inline-flex items-center gap-2 rounded-full border bg-background/40 px-3 py-1 text-xs text-muted-foreground"
                >
                  <Sparkles className="h-3.5 w-3.5" />
                  Full Stack Developer • React/Next Specialist • UI/UX Builder
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.35, ease: "easeOut", delay: 0.05 }}
                  className="text-3xl font-semibold tracking-tight"
                >
                  DOLOIRAS, JUSTINE TOBITHE L.
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.35, ease: "easeOut", delay: 0.1 }}
                  className="text-sm text-muted-foreground"
                >
                  I build modern web apps with strong UI details, smooth UX, and scalable architecture. I’m expert in
                  React/Next.js, experienced in React Native (mobile), and I also work with Firebase, Shopify, and
                  WordPress to deliver production-ready solutions.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.35, ease: "easeOut", delay: 0.15 }}
                  className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-6"
                >
                  <div className="flex items-center gap-2 text-sm">
                    <Mail className="h-4 w-4" />
                    <span>justine.tobithe27@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Phone className="h-4 w-4" />
                    <span>09276192326</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>Davao City, Philippines</span>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.35, ease: "easeOut", delay: 0.2 }}
                  className="flex flex-wrap gap-2 pt-2"
                >
                  {["React", "Next.js", "TypeScript", "Laravel", "Firebase", "React Native", "Shopify", "WordPress"].map(
                    (t) => (
                      <Badge key={t} variant="secondary" className="rounded-full">
                        {t}
                      </Badge>
                    )
                  )}
                </motion.div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.35, ease: "easeOut", delay: 0.1 }}
              className="flex flex-wrap gap-3"
            >
              <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
                <Button asChild className="rounded-xl">
                  <Link href="/projects">
                    View Projects <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>

              <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
                <Button asChild variant="outline" className="rounded-xl">
                  <Link href="/about">About Me</Link>
                </Button>
              </motion.div>

              <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
                <Button asChild variant="secondary" className="rounded-xl">
                  <Link href="https://github.com/justinetobithe" target="_blank" rel="noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </Link>
                </Button>
              </motion.div>

              <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
                <Button asChild variant="outline" className="rounded-xl">
                  <Link href="/Justine-Tobithe-CV.pdf" target="_blank" rel="noreferrer">
                    <Download className="mr-2 h-4 w-4" />
                    Download CV
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </Reveal>

      <section className="grid gap-4 md:grid-cols-3">
        <Reveal>
          <Stat icon={TrendingUp} label="Years Experience" value="5+ years" />
        </Reveal>
        <Reveal delay={0.06}>
          <Stat icon={Layers} label="Projects" value={`${totalProjects}+ UI projects`} />
        </Reveal>
        <Reveal delay={0.12}>
          <Stat icon={Code2} label="Main Stack" value="React • Next • Laravel" />
        </Reveal>
      </section>

      <section className="grid gap-4 md:grid-cols-4">
        <Reveal>
          <Highlight
            icon={Globe}
            title="React & Next.js Expert"
            text="Modern UI architecture, reusable components, routing patterns, performance improvements, and production-ready responsive layouts."
          />
        </Reveal>
        <Reveal delay={0.05}>
          <Highlight
            icon={Smartphone}
            title="Mobile with React Native"
            text="Mobile-first thinking with clean screens, navigation flows, and scalable UI structure for real products."
          />
        </Reveal>
        <Reveal delay={0.1}>
          <Highlight
            icon={Database}
            title="Firebase Skills"
            text="Auth, Firestore, storage uploads, role-based UI, and real-time data patterns for modern web apps."
          />
        </Reveal>
        <Reveal delay={0.15}>
          <Highlight
            icon={Store}
            title="Shopify & WordPress"
            text="Theme/UI customization, page building, integration-friendly layouts, and client-focused delivery for marketing and commerce."
          />
        </Reveal>
      </section>

      <Reveal>
        <section className="rounded-2xl border bg-card/60 p-6 backdrop-blur">
          <div className="flex items-center justify-between gap-4">
            <div>
              <div className="text-xs text-muted-foreground">Featured</div>
              <h2 className="text-xl font-semibold tracking-tight">Featured UI Projects</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Live production and portfolio highlights with previews, links, and tags.
              </p>
            </div>

            <Button asChild variant="outline" className="rounded-xl">
              <Link href="/projects">
                View All <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {featured.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="rounded-2xl border bg-card/60 p-6 backdrop-blur">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-xl font-semibold tracking-tight">Let’s work together</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Open to full-stack development, UI/UX projects, landing pages, dashboards, and client portals.
              </p>
            </div>

            <div className="flex gap-3">
              <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
                <Button asChild variant="outline" className="rounded-xl">
                  <Link href="mailto:justine.tobithe27@gmail.com">Email Me</Link>
                </Button>
              </motion.div>

              <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
                <Button asChild className="rounded-xl">
                  <Link href="/projects">See My Work</Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </section>
      </Reveal>
    </div>
  );
}
