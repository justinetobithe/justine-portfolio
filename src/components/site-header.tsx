"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Download, Github, FolderKanban, Home, UserRound } from "lucide-react";
import { SITE } from "@/lib/site";
import { motion, useScroll, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";
import AppButton from "@/components/app/app-button";

const nav = [
    { href: "/", label: "Home", icon: Home },
    { href: "/projects", label: "Projects", icon: FolderKanban },
    { href: "/about", label: "About", icon: UserRound }
];

export default function SiteHeader() {
    const pathname = usePathname();
    const { scrollYProgress } = useScroll();
    const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

    return (
        <header className="sticky top-0 z-50 border-b border-white/10 bg-background/60 backdrop-blur-xl">
            <motion.div
                aria-hidden
                style={{ scaleX: progress }}
                className="absolute inset-x-0 top-0 h-0.5 origin-left bg-linear-to-r from-violet-400 via-cyan-300 to-emerald-300"
            />

            <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3 px-4 py-3">
                <Link href="/" className="group inline-flex items-center gap-3">
                    <span className="relative grid h-10 w-10 place-items-center overflow-hidden rounded-xl">
                        <span className="spin-slow absolute -inset-4 bg-[conic-gradient(from_0deg,#8b5cf6,#22d3ee,#34d399,#8b5cf6)]" />
                        <span className="absolute inset-0.5 rounded-[10px] bg-background" />
                        <span className="relative font-display text-sm font-bold tracking-tight">JT</span>
                    </span>

                    <div className="leading-tight">
                        <div className="text-sm font-semibold tracking-tight">Justine Tobithe Doloiras</div>
                        <div className="text-xs text-muted-foreground">Full Stack Developer</div>
                    </div>
                </Link>

                <div className="flex items-center gap-2">
                    <nav className="hidden items-center gap-1 md:flex">
                        {nav.map((item) => {
                            const active = pathname === item.href;
                            const Icon = item.icon;

                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={cn(
                                        "relative inline-flex items-center gap-2 rounded-xl px-3.5 py-2 text-sm transition-colors hover:text-foreground",
                                        active ? "text-foreground" : "text-muted-foreground"
                                    )}
                                >
                                    {active ? (
                                        <motion.span
                                            layoutId="nav-pill"
                                            className="absolute inset-0 rounded-xl border border-white/10 bg-white/8"
                                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                        />
                                    ) : null}
                                    <Icon className="relative h-4 w-4" />
                                    <span className="relative font-medium">{item.label}</span>
                                </Link>
                            );
                        })}
                    </nav>

                    <AppButton
                        href={SITE.github}
                        variant="glass"
                        size="default"
                        icon={Github}
                        className="hidden rounded-xl sm:inline-flex"
                    >
                        GitHub
                    </AppButton>
                    <AppButton
                        href={SITE.resumeUrl}
                        download={SITE.resumeFileName}
                        size="default"
                        icon={Download}
                        className="rounded-xl"
                    >
                        Resume
                    </AppButton>
                </div>
            </div>

            <div className="mx-auto w-full max-w-6xl px-4 pb-3 md:hidden">
                <div className="flex gap-2 overflow-x-auto">
                    {nav.map((item) => {
                        const active = pathname === item.href;
                        const Icon = item.icon;

                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={cn(
                                    "inline-flex shrink-0 items-center gap-2 rounded-full border px-3.5 py-2 text-sm",
                                    active
                                        ? "border-violet-400/50 bg-violet-400/15 text-foreground"
                                        : "border-white/10 bg-white/4 text-muted-foreground"
                                )}
                            >
                                <Icon className="h-4 w-4" />
                                <span className="font-medium">{item.label}</span>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </header>
    );
}
