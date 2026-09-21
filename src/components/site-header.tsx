"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Download, FolderKanban, Github, Home, UserRound } from "lucide-react";
import { motion, useScroll, useSpring } from "framer-motion";
import { SITE } from "@/lib/site";
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
        <header className="sticky top-0 z-50 border-b-2 border-foreground bg-background/95 backdrop-blur">
            <motion.div
                aria-hidden
                style={{ scaleX: progress }}
                className="absolute inset-x-0 -bottom-0.5 h-1 origin-left bg-tomato"
            />

            <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
                <Link href="/" className="group flex min-w-0 items-center gap-3">
                    <span className="wiggle relative grid h-10 w-10 flex-none place-items-center rounded-lg border-2 border-foreground bg-foreground font-display text-sm font-extrabold text-background shadow-hard-sm">
                        JT
                        <span className="absolute -right-1.5 -top-1.5 h-3 w-3 rounded-full border-2 border-foreground bg-tomato" />
                    </span>
                    <span className="min-w-0 leading-tight">
                        <span className="block truncate font-display text-base font-bold tracking-tight">{SITE.name}</span>
                        <span className="block truncate font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                            {SITE.role}
                        </span>
                    </span>
                </Link>

                <div className="flex flex-none items-center gap-2">
                    <nav className="hidden items-center gap-1 md:flex">
                        {nav.map((item) => {
                            const active = pathname === item.href;
                            const Icon = item.icon;

                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={cn(
                                        "relative inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-colors",
                                        active ? "text-background" : "hover:bg-sun"
                                    )}
                                >
                                    {active ? (
                                        <motion.span
                                            layoutId="nav-pill"
                                            className="absolute inset-0 rounded-full bg-foreground"
                                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                        />
                                    ) : null}
                                    <Icon className="relative h-4 w-4" />
                                    <span className="relative">{item.label}</span>
                                </Link>
                            );
                        })}
                    </nav>

                    <AppButton
                        href={SITE.github}
                        variant="paper"
                        size="icon"
                        aria-label="GitHub"
                        className="hidden rounded-full sm:inline-flex"
                    >
                        <Github />
                    </AppButton>
                    <AppButton
                        href={SITE.resumeUrl}
                        download={SITE.resumeFileName}
                        variant="tomato"
                        size="default"
                        icon={Download}
                        className="rounded-full"
                    >
                        Resume
                    </AppButton>
                </div>
            </div>

            <div className="mx-auto w-full max-w-6xl px-4 pb-3 sm:px-6 md:hidden">
                <div className="flex gap-2 overflow-x-auto pb-1">
                    {nav.map((item) => {
                        const active = pathname === item.href;
                        const Icon = item.icon;

                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={cn(
                                    "inline-flex shrink-0 items-center gap-2 rounded-full border-2 border-foreground px-4 py-1.5 text-sm font-semibold",
                                    active ? "bg-foreground text-background" : "bg-card"
                                )}
                            >
                                <Icon className="h-4 w-4" />
                                {item.label}
                            </Link>
                        );
                    })}
                </div>
            </div>
        </header>
    );
}
