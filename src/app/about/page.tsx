"use client";

import { Download, GraduationCap, Mail, MapPin, Sparkles } from "lucide-react";
import { JOBS, formatMonth, jobMonths, periodLabel, CAREER_START, yearsOfExperience } from "@/lib/career";
import { SITE } from "@/lib/site";
import AppBadge from "@/components/app/app-badge";
import AppButton from "@/components/app/app-button";
import AppCard from "@/components/app/app-card";
import AppSectionHeading, { Mark } from "@/components/app/app-section-heading";
import ExperienceCard from "@/components/experience-card";
import Polaroid from "@/components/polaroid";
import Reveal from "@/components/reveal";

const skillGroups = [
    {
        title: "Back end",
        tone: "bg-sky",
        items: ["Laravel", "PHP", "REST API design", "Laravel Sanctum", "Auth and roles", "Google OAuth", "Queues and mail", "Supabase", "Firebase", "SQLite"]
    },
    {
        title: "Front end",
        tone: "bg-sun",
        items: ["Next.js", "React", "Vue.js", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS", "NextAuth", "Responsive UI"]
    },
    {
        title: "Mobile",
        tone: "bg-sage",
        items: ["Flutter", "Dart", "React Native", "Android Studio", "iOS and Android", "Push notifications", "Local storage"]
    },
    {
        title: "DevOps and hosting",
        tone: "bg-tomato/80",
        items: ["Docker", "Docker Compose", "Linux VPS", "Nginx", "Apache", "Virtual hosts", "CloudPanel", "Vercel", "Git and GitHub"]
    },
    {
        title: "Integrations and CMS",
        tone: "bg-blush",
        items: ["Zoho", "Softr", "Custom CMS", "VoIP CRM app", "Shopify webhooks", "Third party APIs", "Webhooks"]
    },
    {
        title: "Everything else",
        tone: "bg-sky",
        items: ["UI/UX design", "Systems analysis", "Networks and servers", "Hardware troubleshooting", "Video editing", "Working under pressure"]
    }
];

const markets = [
    { country: "Austria and Germany", work: ["WeCare360"] },
    { country: "Israel", work: ["8killo", "Shany Living"] },
    { country: "United States", work: ["Rooté", "Rooted Performance"] },
    { country: "Mexico", work: ["Sanovida"] },
    { country: "Australia and New Zealand", work: ["UGLQ", "Your Reformer"] },
    { country: "Philippines", work: ["RallyDVO"] }
];

const TIMELINE_TONES = ["bg-sun", "bg-sky", "bg-blush", "bg-sage"];

const workingWithMe = [
    { title: "Used to remote", text: "Over three years on a remote, full time team at an Australia based company, working with clients abroad." },
    { title: "Easy time zone", text: "Davao City is UTC+8. That's the same as Perth, and a few hours behind Sydney." },
    { title: "Clear English", text: "Requirements, code reviews and progress updates, in writing or on a call." },
    { title: "End to end", text: "From the first requirement to the server it runs on, and the bug report after launch." }
];

function CareerTimeline() {
    const chronological = [...JOBS].reverse();

    return (
        <div className="space-y-4 rounded-2xl border-2 border-foreground bg-card p-5 shadow-hard sm:p-6">
            <div className="flex h-8 overflow-hidden rounded-md border-2 border-foreground" aria-hidden>
                {chronological.map((job, i) => (
                    <span
                        key={job.company}
                        style={{ flexGrow: jobMonths(job) }}
                        className={`${TIMELINE_TONES[i % TIMELINE_TONES.length]} border-r-2 border-foreground last:border-r-0`}
                    />
                ))}
            </div>
            <ul className="grid gap-x-6 gap-y-3 sm:grid-cols-2 lg:grid-cols-4">
                {chronological.map((job, i) => (
                    <li key={job.company} className="flex items-start gap-2.5">
                        <span className={`${TIMELINE_TONES[i % TIMELINE_TONES.length]} mt-1 h-3 w-3 flex-none rounded-sm border-2 border-foreground`} />
                        <span className="leading-snug">
                            <span className="block text-sm font-bold">{job.company}</span>
                            <span className="block font-mono text-[11px] uppercase tracking-wide text-muted-foreground">{periodLabel(job)}</span>
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

function Fact({ label, children }: { label: string; children: React.ReactNode }) {
    return (
        <div className="grid grid-cols-[7rem_1fr] gap-3 border-b-2 border-foreground/15 py-3 text-[15px] last:border-b-0">
            <dt className="font-mono text-xs font-medium uppercase tracking-wider text-muted-foreground">{label}</dt>
            <dd className="min-w-0 font-medium [overflow-wrap:anywhere]">{children}</dd>
        </div>
    );
}

export default function AboutPage() {
    const years = yearsOfExperience();

    return (
        <div className="space-y-24 md:space-y-32">
            <section className="grid items-center gap-14 lg:grid-cols-[1.25fr_0.75fr] lg:gap-8">
                <div className="space-y-7">
                    <div className="flex items-center gap-3 font-mono text-xs font-medium uppercase tracking-[0.18em]">
                        <span className="h-0.5 w-10 bg-foreground" />
                        About me
                    </div>

                    <h1 className="font-display text-[clamp(2.6rem,9vw,5.5rem)] font-extrabold leading-[0.95] tracking-tight">
                        Nice to meet you.
                        <br />
                        I&apos;m <Mark>Justine</Mark>
                    </h1>

                    <div className="max-w-xl space-y-4 text-lg leading-relaxed text-foreground/80">
                        <p>
                            I&apos;m {SITE.firstName}, but you can call me <strong className="bg-sun px-1.5 font-bold text-foreground">{SITE.nickname}</strong>. I&apos;m a full stack and mobile developer in {SITE.location}. I started in {formatMonth(CAREER_START)} as IT
                            staff, moved into systems development and research software, and for{" "}
                            <strong className="font-bold text-foreground" suppressHydrationWarning>
                                {years}+ years
                            </strong>{" "}
                            I&apos;ve been building things people use every day.
                        </p>
                        <p>
                            Most of my days are Laravel back ends and Next.js or React front ends, with Flutter and React Native when
                            the product needs an app. I also like seeing a project through to the server it runs on.
                        </p>
                        <p>
                            <strong className="bg-sun px-1.5 font-bold text-foreground">
                                I&apos;m now looking for my next role: remote only, full-time or part-time.
                            </strong>
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-3">
                        <AppButton href={`mailto:${SITE.email}`} variant="tomato" icon={Mail}>
                            Hire me
                        </AppButton>
                        <AppButton href={SITE.resumeUrl} download={SITE.resumeFileName} variant="paper" icon={Download}>
                            Download resume
                        </AppButton>
                    </div>
                </div>

                <div className="relative mx-auto pb-4">
                    <Polaroid caption="call me jah ✶" tilt={3} />
                </div>
            </section>

            <Reveal>
                <AppCard interactive={false}>
                    <dl className="px-5 py-2 sm:px-8">
                        <Fact label="Based in">
                            <span className="inline-flex items-center gap-2">
                                <MapPin className="h-4 w-4" />
                                {SITE.location}
                            </span>
                        </Fact>
                        <Fact label="Experience">
                            <span suppressHydrationWarning>{years}+ years, since {formatMonth(CAREER_START)}</span>
                        </Fact>
                        <Fact label="Status">
                            <span className="inline-flex flex-wrap items-center gap-2">
                                <span className="blink h-2.5 w-2.5 rounded-full bg-tomato" />
                                Looking for work · remote, full-time or part-time
                            </span>
                        </Fact>
                        <Fact label="Main stack">Laravel, Next.js, React, Vue.js, Flutter, React Native</Fact>
                        <Fact label="Works with">Claude and ChatGPT as coding assistants</Fact>
                        <Fact label="Contact">
                            {SITE.email} · {SITE.phone}
                        </Fact>
                    </dl>
                </AppCard>
            </Reveal>

            <Reveal>
                <AppCard interactive={false}>
                    <div className="grid md:grid-cols-[auto_1fr]">
                        <div className="flex items-center gap-3 border-b-2 border-foreground bg-sage px-6 py-5 md:border-b-0 md:border-r-2 md:px-8">
                            <Sparkles className="h-8 w-8" strokeWidth={2.25} />
                            <span className="font-display text-2xl font-extrabold leading-tight tracking-tight">
                                How I use
                                <br />
                                AI tools
                            </span>
                        </div>
                        <div className="space-y-4 p-6 md:p-8">
                            <p className="text-lg leading-relaxed">
                                I keep <strong className="bg-sun px-1.5 font-bold">Claude</strong> and{" "}
                                <strong className="bg-sky px-1.5 font-bold">ChatGPT</strong> beside me as coding companions,
                                bringing them in whenever a task calls for a faster path, and leaning on my own judgment for
                                everything that needs a human touch.
                            </p>
                            <p className="text-[15px] leading-relaxed text-muted-foreground">
                                They help me move quicker on the work in front of me, so more of my time goes into the parts
                                clients actually feel: how it looks, how it behaves and how it holds up.
                            </p>
                        </div>
                    </div>
                </AppCard>
            </Reveal>

            <section className="space-y-8">
                <div className="flex items-baseline gap-3">
                    <h2 className="font-display text-4xl font-extrabold leading-[1.02] tracking-tight sm:text-5xl">
                        Working <Mark>with me</Mark>
                    </h2>
                    <span className="hidden -rotate-2 font-hand text-2xl font-bold text-tomato sm:inline">the short version</span>
                </div>
                <div className="grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
                    {workingWithMe.map((w, i) => (
                        <Reveal key={w.title} delay={i * 0.05}>
                            <div className="space-y-2 border-t-4 border-foreground pt-3">
                                <h3 className="font-display text-xl font-extrabold tracking-tight">{w.title}</h3>
                                <p className="text-[15px] leading-relaxed text-foreground/80">{w.text}</p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </section>

            <section className="space-y-12">
                <AppSectionHeading
                    index="01"
                    eyebrow="Toolbox"
                    title={
                        <>
                            What I <Mark>work with</Mark>
                        </>
                    }
                    description="The tools I reach for on client projects, grouped by what they're for."
                />
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {skillGroups.map((g, i) => (
                        <Reveal key={g.title} delay={i * 0.05}>
                            <AppCard className="h-full">
                                <div className={`${g.tone} border-b-2 border-foreground px-5 py-3 font-display text-xl font-extrabold`}>
                                    {g.title}
                                </div>
                                <div className="flex flex-wrap gap-2 p-5">
                                    {g.items.map((s) => (
                                        <AppBadge key={s} className="normal-case tracking-normal text-xs">
                                            {s}
                                        </AppBadge>
                                    ))}
                                </div>
                            </AppCard>
                        </Reveal>
                    ))}
                </div>
            </section>

            <section className="space-y-12">
                <AppSectionHeading
                    index="02"
                    eyebrow="Career"
                    title={
                        <>
                            Where I&apos;ve <Mark>worked</Mark>
                        </>
                    }
                    description="Four teams over the years, from office IT to remote client work. Open any role for what I did there."
                />
                <Reveal>
                    <CareerTimeline />
                </Reveal>
                <div className="relative space-y-6">
                    <div aria-hidden className="absolute bottom-6 left-0 top-6 w-0.5 bg-foreground" />
                    {JOBS.map((job, i) => (
                        <ExperienceCard key={job.company} job={job} defaultOpen={i === 0} />
                    ))}
                </div>
            </section>

            <section className="grid gap-6 lg:grid-cols-2">
                <Reveal>
                    <AppCard interactive={false} className="h-full">
                        <div className="flex items-center gap-3 border-b-2 border-foreground bg-sun px-5 py-3 font-display text-xl font-extrabold">
                            <GraduationCap className="h-6 w-6" />
                            Education
                        </div>
                        <div className="space-y-1.5 p-5">
                            <div className="font-display text-2xl font-extrabold leading-tight tracking-tight">
                                Bachelor of Science in Information Technology
                            </div>
                            <div className="font-medium">Holy Cross of Davao College Inc.</div>
                            <div className="text-sm text-muted-foreground">2015 – 2019 · Davao City, Philippines</div>
                        </div>
                    </AppCard>
                </Reveal>

                <Reveal delay={0.06}>
                    <AppCard interactive={false} className="h-full">
                        <div className="border-b-2 border-foreground bg-sky px-5 py-3 font-display text-xl font-extrabold">
                            Places I&apos;ve built for
                        </div>
                        <ul className="divide-y-2 divide-foreground/15">
                            {markets.map((m) => (
                                <li key={m.country} className="flex flex-col gap-1 px-5 py-3 sm:flex-row sm:items-center sm:justify-between">
                                    <span className="font-medium">{m.country}</span>
                                    <span className="font-mono text-xs uppercase tracking-wide text-muted-foreground">
                                        {m.work.join(" · ")}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </AppCard>
                </Reveal>
            </section>
        </div>
    );
}
