"use client";

import Image from "next/image";
import {
    Briefcase,
    Database,
    Download,
    GraduationCap,
    Layers,
    Mail,
    Phone,
    Smartphone,
    Store
} from "lucide-react";
import { SITE } from "@/lib/site";
import AppBadge from "@/components/app/app-badge";
import AppButton from "@/components/app/app-button";
import AppCard from "@/components/app/app-card";
import AppSectionHeading from "@/components/app/app-section-heading";
import ExperienceCard from "@/components/experience-card";
import Reveal from "@/components/reveal";

const skills = [
    "React JS / Next JS Expert",
    "TypeScript",
    "Laravel / PHP",
    "Supabase",
    "React Native (Mobile)",
    "Firebase (Auth, Firestore, Storage)",
    "Shopify Webhooks and Themes",
    "Custom CMS and CRM",
    "UI/UX and Web Design",
    "WordPress Page Builder",
    "System Analysis",
    "Multimedia Editing"
];

const strengths = [
    { icon: Store, text: "E-commerce with ordering, payments and delivery for stores in Israel, Germany, the US and Mexico." },
    { icon: Layers, text: "Custom CMS, CRM and webhook integrations that keep operations in sync." },
    { icon: Database, text: "Supabase, Firebase and Laravel APIs for auth, real-time data and clean admin flows." },
    { icon: Smartphone, text: "Mobile-ready UX with React Native and responsive-first web layouts." }
];

const experience = [
    {
        title: "Code Squirrel — Full Stack Developer",
        meta: "Apr 2023 – May 2025 • Australia Based",
        bullets: [
            "Deliver full-stack features across multiple client projects",
            "Back-end development with Laravel/PHP for scalable systems",
            "Front-end development with React JS and Next JS",
            "Build polished UI with strong attention to detail and performance"
        ]
    },
    {
        title: "University of Southeastern Philippines — Science Research Assistant / Developer",
        meta: "Apr 2021 – Apr 2023 • Bo. Obrero, Iñigo St, Poblacion District, Davao City",
        bullets: [
            "Build full-stack modules for research and internal applications",
            "Back-end development with Laravel/PHP for APIs and data workflows",
            "Front-end development with React JS for dashboards and screens",
            "Focus on stable, maintainable code and clear UI usability"
        ]
    },
    {
        title: "Power Virtual Solutions — Systems Developer",
        meta: "Dec 2019 – Feb 2021 • Door 1, 726 YLS Bldg, Veloso St. Obrero, Davao City",
        bullets: [
            "Develop mobile app features and UI workflows",
            "Build front-end & back-end components for internal tools",
            "Manage CMS updates and site/admin maintenance",
            "Maintain CRM VoIP app and implement UI/UX improvements",
            "Deliver usable layouts for real operations and daily workflows"
        ]
    },
    {
        title: "AYP Holdings Inc. — IT Staff (Software)",
        meta: "Apr 2019 – Dec 2019 • G.B CAM Bldg. Monteverde Avenue, Davao City",
        bullets: [
            "Troubleshoot computer hardware & software and resolve daily IT issues",
            "Manage network and basic server operations to maintain uptime",
            "Handle configurations and installations for office systems",
            "Support front-end & back-end tasks when needed",
            "Create designs and videos for marketing/ads as requested"
        ]
    }
];

export default function AboutPage() {
    return (
        <div className="space-y-20">
            <Reveal>
                <AppCard className="rounded-4xl">
                    <div className="grid items-center gap-10 p-6 sm:p-10 lg:grid-cols-[auto_1fr]">
                        <div className="relative mx-auto w-56 sm:w-64">
                            <div className="relative overflow-hidden rounded-3xl p-0.75">
                                <div className="spin-slow absolute -inset-[60%] bg-[conic-gradient(from_0deg,#8b5cf6,#22d3ee,#34d399,#8b5cf6)]" />
                            <div className="relative aspect-4/5 overflow-hidden rounded-[19px] bg-muted">
                                <Image
                                    src="/profile.jpg"
                                    alt="Justine Tobithe Doloiras"
                                    fill
                                    priority
                                    sizes="256px"
                                    className="object-cover"
                                />
                            </div>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="space-y-3">
                                <AppBadge variant="brand">About me</AppBadge>
                                <h1 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
                                    Justine Tobithe <span className="text-gradient">Doloiras</span>
                                </h1>
                                <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
                                    Full-stack developer focused on clean UI, fast workflows and maintainable systems. I build
                                    e-commerce stores, custom CMS and portals with Next.js, Laravel and Supabase, and I&apos;m
                                    experienced in React Native for mobile.
                                </p>
                            </div>

                            <div className="flex flex-col gap-2 text-sm text-muted-foreground sm:flex-row sm:gap-6">
                                <span className="inline-flex items-center gap-2">
                                    <Mail className="h-4 w-4 text-violet-300" />
                                    justine.tobithe27@gmail.com
                                </span>
                                <span className="inline-flex items-center gap-2">
                                    <Phone className="h-4 w-4 text-cyan-300" />
                                    09276192326
                                </span>
                            </div>

                            <div className="flex flex-wrap gap-3">
                                <AppButton href="mailto:justine.tobithe27@gmail.com" icon={Mail}>
                                    Get in touch
                                </AppButton>
                                <AppButton href={SITE.resumeUrl} download={SITE.resumeFileName} variant="glass" icon={Download}>
                                    Download Resume
                                </AppButton>
                            </div>
                        </div>
                    </div>
                </AppCard>
            </Reveal>

            <section className="space-y-8">
                <AppSectionHeading eyebrow="Strengths" title="What I&rsquo;m known for" />
                <div className="grid gap-4 sm:grid-cols-2">
                    {strengths.map((s, i) => (
                        <Reveal key={s.text} delay={i * 0.06}>
                            <AppCard className="h-full rounded-2xl">
                                <div className="flex items-start gap-4 p-5">
                                    <div className="grid h-11 w-11 flex-none place-items-center rounded-xl bg-linear-to-br from-violet-500/30 to-cyan-400/20">
                                        <s.icon className="h-5 w-5" />
                                    </div>
                                    <p className="text-[15px] leading-relaxed">{s.text}</p>
                                </div>
                            </AppCard>
                        </Reveal>
                    ))}
                </div>
            </section>

            <section className="grid gap-4 md:grid-cols-2">
                <Reveal>
                    <AppCard className="h-full rounded-2xl">
                        <div className="space-y-4 p-6">
                            <div className="flex items-center gap-2 font-display text-lg font-semibold">
                                <GraduationCap className="h-5 w-5 text-violet-300" />
                                Education
                            </div>
                            <div className="space-y-1">
                                <div className="font-medium">Holy Cross of Davao College Inc.</div>
                                <div className="text-sm text-muted-foreground">2015 – 2019 • Sta. Ana Ave., Davao City</div>
                                <div className="text-[15px]">Bachelor of Science in Information Technology</div>
                            </div>
                        </div>
                    </AppCard>
                </Reveal>

                <Reveal delay={0.06}>
                    <AppCard className="h-full rounded-2xl">
                        <div className="space-y-4 p-6">
                            <div className="font-display text-lg font-semibold">Skills &amp; tools</div>
                            <div className="flex flex-wrap gap-2">
                                {skills.map((s) => (
                                    <AppBadge key={s}>{s}</AppBadge>
                                ))}
                            </div>
                        </div>
                    </AppCard>
                </Reveal>
            </section>

            <section className="space-y-8">
                <AppSectionHeading eyebrow="Career" title="Work experience" />
                <div className="relative space-y-4">
                    <div aria-hidden className="absolute bottom-4 left-0 top-4 w-px bg-linear-to-b from-violet-400/60 via-cyan-300/30 to-transparent" />
                    {experience.map((e) => (
                        <ExperienceCard key={e.title} {...e} />
                    ))}
                </div>
                <div className="flex items-center gap-2 pl-8 text-sm text-muted-foreground">
                    <Briefcase className="h-4 w-4" />
                    Available for freelance and full-time roles.
                </div>
            </section>
        </div>
    );
}
