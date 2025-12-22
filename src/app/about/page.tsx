"use client";

import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, GraduationCap, Mail, Phone, Sparkles, Layers, Smartphone, Database, Store } from "lucide-react";
import Reveal from "@/components/reveal";
import ExperienceCard from "@/components/experience-card";
import { motion } from "framer-motion";

export default function AboutPage() {
    const skills = [
        "React JS / Next JS Expert",
        "TypeScript",
        "React Native (Mobile)",
        "Firebase (Auth, Firestore, Storage)",
        "Laravel / PHP",
        "UI/UX and Web Design",
        "Shopify Theme Customization",
        "WordPress Page Builder + Custom UI",
        "System Analysis",
        "Multimedia Editing"
    ];

    return (
        <div className="space-y-8">
            <Reveal>
                <section className="rounded-2xl border bg-card/60 p-6 backdrop-blur">
                    <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                        <div className="flex items-center gap-5">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.96 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true, amount: 0.35 }}
                                transition={{ duration: 0.35, ease: "easeOut" }}
                                className="relative h-28 w-28 overflow-hidden rounded-2xl border bg-muted sm:h-32 sm:w-32 md:h-40 md:w-40 lg:h-44 lg:w-44"
                            >
                                <Image src="/profile.jpg" alt="Justine Tobithe" fill className="object-cover" priority />
                            </motion.div>

                            <div className="space-y-1">
                                <div className="inline-flex items-center gap-2 rounded-full border bg-background/40 px-3 py-1 text-xs text-muted-foreground">
                                    <Sparkles className="h-3.5 w-3.5" />
                                    About Me
                                </div>

                                <h1 className="text-2xl font-semibold tracking-tight">Justine Tobithe</h1>

                                <p className="text-sm text-muted-foreground">
                                    Full-stack developer focused on clean UI, fast workflows, and maintainable systems. I’m expert in
                                    React/Next.js, experienced in React Native, and I ship real apps using Firebase + Laravel.
                                </p>

                                <div className="mt-2 flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-6">
                                    <div className="flex items-center gap-2 text-sm">
                                        <Mail className="h-4 w-4" />
                                        <span>justine.tobithe27@gmail.com</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm">
                                        <Phone className="h-4 w-4" />
                                        <span>09276192326</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="grid gap-3 md:max-w-md">
                            <div className="text-sm text-muted-foreground">What I’m known for</div>
                            <div className="grid gap-2">
                                <div className="flex items-start gap-2 text-sm">
                                    <Layers className="mt-0.5 h-4 w-4" />
                                    <span>Reusable UI systems and component-driven design for fast development.</span>
                                </div>
                                <div className="flex items-start gap-2 text-sm">
                                    <Database className="mt-0.5 h-4 w-4" />
                                    <span>Firebase-based apps (auth, real-time data, uploads) and clean admin flows.</span>
                                </div>
                                <div className="flex items-start gap-2 text-sm">
                                    <Smartphone className="mt-0.5 h-4 w-4" />
                                    <span>Mobile-ready UX with React Native and responsive-first web layouts.</span>
                                </div>
                                <div className="flex items-start gap-2 text-sm">
                                    <Store className="mt-0.5 h-4 w-4" />
                                    <span>Shopify/WordPress builds for marketing, landing pages, and commerce UI.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Reveal>

            <section className="grid gap-4 md:grid-cols-2">
                <Reveal delay={0.05}>
                    <Card className="rounded-2xl bg-card/60 backdrop-blur">
                        <CardHeader className="flex flex-row items-center gap-2 font-semibold">
                            <GraduationCap className="h-5 w-5" />
                            Education
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <div className="font-medium">Holy Cross of Davao College Inc.</div>
                            <div className="text-sm text-muted-foreground">2015 - 2019 • Sta. Ana Ave., Davao City</div>
                            <div className="text-sm">Bachelor of Science in Information Technology</div>
                        </CardContent>
                    </Card>
                </Reveal>

                <Reveal delay={0.1}>
                    <Card className="rounded-2xl bg-card/60 backdrop-blur">
                        <CardHeader className="font-semibold">Skills & Tools</CardHeader>
                        <CardContent className="flex flex-wrap gap-2">
                            {skills.map((s) => (
                                <Badge key={s} variant="secondary" className="rounded-full">
                                    {s}
                                </Badge>
                            ))}
                        </CardContent>
                    </Card>
                </Reveal>
            </section>

            <section className="rounded-2xl border bg-card/60 p-6 backdrop-blur">
                <Reveal>
                    <div className="mb-4 flex items-center gap-2">
                        <Briefcase className="h-5 w-5" />
                        <h2 className="text-xl font-semibold tracking-tight">Work Experience</h2>
                    </div>
                </Reveal>

                <div className="grid gap-4">
                    <ExperienceCard
                        title="AYP Holdings Inc. — IT Staff (Software)"
                        meta="Apr 2019 – Dec 2019 • G.B CAM Bldg. Monteverde Avenue, Davao City"
                        bullets={[
                            "Troubleshoot computer hardware & software and resolve daily IT issues",
                            "Manage network and basic server operations to maintain uptime",
                            "Handle configurations and installations for office systems",
                            "Support front-end & back-end tasks when needed",
                            "Create designs and videos for marketing/ads as requested"
                        ]}
                    />

                    <ExperienceCard
                        title="Power Virtual Solutions — Systems Developer"
                        meta="Dec 2019 – Feb 2021 • Door 1, 726 YLS Bldg, Veloso St. Obrero, Davao City"
                        bullets={[
                            "Develop mobile app features and UI workflows",
                            "Build front-end & back-end components for internal tools",
                            "Manage CMS updates and site/admin maintenance",
                            "Maintain CRM VoIP app and implement UI/UX improvements",
                            "Deliver usable layouts for real operations and daily workflows"
                        ]}
                    />

                    <ExperienceCard
                        title="University of Southeastern Philippines — Science Research Assistant / Developer"
                        meta="Apr 2021 – Apr 2023 • Bo. Obrero, Iñigo St, Poblacion District, Davao City"
                        bullets={[
                            "Build full-stack modules for research and internal applications",
                            "Back-end development with Laravel/PHP for APIs and data workflows",
                            "Front-end development with React JS for dashboards and screens",
                            "Focus on stable, maintainable code and clear UI usability"
                        ]}
                    />

                    <ExperienceCard
                        title="Code Squirrel — Full Stack Developer"
                        meta="Apr 2023 – May 2025 • Australia Based"
                        bullets={[
                            "Deliver full-stack features across multiple client projects",
                            "Back-end development with Laravel/PHP for scalable systems",
                            "Front-end development with React JS and Next JS",
                            "Build polished UI with strong attention to detail and performance"
                        ]}
                    />
                </div>
            </section>
        </div>
    );
}
