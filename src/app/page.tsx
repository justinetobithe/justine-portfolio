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
  ChevronUp
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

  const featured = useMemo(() => {
    const list = (data || []) as Project[];
    return list.slice(0, 3);
  }, [data]);

  const totalProjects = (data || []).length;

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
                className="relative h-20 w-20 overflow-hidden rounded-2xl border bg-muted md:h-24 md:w-24"
              >
                <Image src="/profile.jpg" alt="Justine Tobithe" fill className="object-cover" priority />
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
                  Full Stack Developer • Systems Analyst • Multimedia Design
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
                  I specialize in full-stack development, system analysis, and multimedia design,
                  delivering innovative solutions and seamless user experiences.
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
                  {["React", "Next.js", "TypeScript", "Laravel", "PHP", "UI/UX"].map((t) => (
                    <Badge key={t} variant="secondary" className="rounded-full">
                      {t}
                    </Badge>
                  ))}
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

      <section className="grid gap-4 md:grid-cols-3">
        {[
          {
            title: "Core Skills",
            body: (
              <div className="flex flex-wrap gap-2">
                {["Front-end", "Back-end", "Systems Analysis", "UI/UX", "Web Design", "Multimedia Editing"].map((t) => (
                  <Badge key={t} variant="secondary" className="rounded-full">
                    {t}
                  </Badge>
                ))}
              </div>
            )
          },
          {
            title: "Tech Focus",
            body: (
              <div className="space-y-2 text-sm text-muted-foreground">
                <div>React JS • Next JS • TypeScript</div>
                <div>Laravel • PHP</div>
                <div>UI components with shadcn/ui</div>
              </div>
            )
          },
          {
            title: "Experience",
            body: (
              <div className="space-y-2 text-sm text-muted-foreground">
                <div>Full Stack Developer</div>
                <div>Systems Developer</div>
                <div>IT Staff - Software</div>
                <div>Research Assistant / Developer</div>
              </div>
            )
          }
        ].map((item, idx) => (
          <Reveal key={item.title} delay={0.05 * (idx + 1)}>
            <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.2 }}>
              <Card className="rounded-2xl bg-card/60 backdrop-blur transition-shadow hover:shadow-xl">
                <CardHeader className="font-semibold">{item.title}</CardHeader>
                <CardContent>{item.body}</CardContent>
              </Card>
            </motion.div>
          </Reveal>
        ))}
      </section>

      <Reveal>
        <section className="rounded-2xl border bg-card/60 p-6 backdrop-blur">
          <div className="flex items-center justify-between gap-4">
            <div>
              <div className="text-xs text-muted-foreground">Featured</div>
              <h2 className="text-xl font-semibold tracking-tight">Featured UI Projects</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                A few highlights from my GitHub UI/client work.
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
                I’m open to full-stack development, UI/UX, and modern web projects.
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
