"use client";

import { Download, GraduationCap, Mail, MapPin, Sparkles } from "lucide-react";
import { JOBS, formatMonth, CAREER_START, yearsOfExperience } from "@/lib/career";
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
        title: "Front end",
        tone: "bg-sun",
        items: ["React JS", "Next JS", "TypeScript", "Tailwind CSS", "shadcn/ui", "Framer Motion", "React Native"]
    },
    {
        title: "Back end",
        tone: "bg-sky",
        items: ["Laravel", "PHP", "Supabase", "Firebase (Auth, Firestore, Storage)", "REST APIs", "Webhooks"]
    },
    {
        title: "Commerce and CMS",
        tone: "bg-blush",
        items: ["Custom CMS", "CRM integrations", "Shopify webhooks and themes", "WordPress page builders"]
    },
    {
        title: "Design and practice",
        tone: "bg-sage",
        items: [
            "UI/UX and web design",
            "System analysis",
            "Multimedia editing",
            "Configuration and installations",
            "Working under pressure"
        ]
    }
];

const markets = [
    { country: "Israel", work: ["Shany Living"] },
    { country: "Germany", work: ["WeCare360"] },
    { country: "United States", work: ["Rooté", "Rooted Performance"] },
    { country: "Mexico", work: ["Sanovida"] },
    { country: "Australia and New Zealand", work: ["UGLQ", "Your Reformer"] }
];

function Fact({ label, children }: { label: string; children: React.ReactNode }) {
    return (
        <div className="grid grid-cols-[7rem_1fr] gap-3 border-b-2 border-foreground/15 py-3 text-[15px] last:border-b-0">
            <dt className="font-mono text-xs font-medium uppercase tracking-wider text-muted-foreground">{label}</dt>
            <dd className="font-medium">{children}</dd>
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
                            I&apos;m {SITE.firstName}, but you can call me <strong className="bg-sun px-1.5 font-bold text-foreground">{SITE.nickname}</strong>. I&apos;m a full stack developer in {SITE.location}. I started in {formatMonth(CAREER_START)} as IT
                            staff, moved into systems development and research software, and for{" "}
                            <strong className="font-bold text-foreground" suppressHydrationWarning>
                                {years}+ years
                            </strong>{" "}
                            I&apos;ve been building things people use every day.
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
                        <Fact label="Main stack">Next.js, Laravel, Supabase, Tailwind CSS</Fact>
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
                <div className="grid gap-6 sm:grid-cols-2">
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
                            <div className="text-sm text-muted-foreground">2015 – 2019 · Sta. Ana Ave., Davao City</div>
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
