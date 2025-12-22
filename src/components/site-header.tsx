"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Github, FolderKanban, Home, UserRound } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const nav = [
    { href: "/", label: "Home", icon: Home },
    { href: "/projects", label: "Projects", icon: FolderKanban },
    { href: "/about", label: "About", icon: UserRound }
];

export default function SiteHeader() {
    const pathname = usePathname();

    return (
        <header className="sticky top-0 z-50 border-b bg-background/65 backdrop-blur">
            <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3">
                <Link href="/" className="group inline-flex items-center gap-3">
                    <motion.span
                        className="relative grid h-9 w-9 place-items-center overflow-hidden rounded-xl border bg-card/50 backdrop-blur"
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.25 }}
                    >
                        <motion.span
                            className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                            style={{
                                background:
                                    "radial-gradient(120px circle at 30% 30%, rgba(255,255,255,0.18), transparent 55%)"
                            }}
                        />
                        <motion.span
                            className="h-2.5 w-2.5 rounded-full bg-primary"
                            animate={{ scale: [1, 1.08, 1] }}
                            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                        />
                    </motion.span>

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
                                        "relative inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm transition-colors",
                                        "hover:bg-card/50",
                                        active ? "text-foreground" : "text-muted-foreground"
                                    )}
                                >
                                    <Icon className="h-4 w-4" />
                                    <span className="font-medium">{item.label}</span>

                                    {active ? (
                                        <motion.span
                                            layoutId="nav-underline"
                                            className="absolute inset-x-2 -bottom-1 h-[2px] rounded-full bg-primary"
                                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                        />
                                    ) : null}

                                    {active ? (
                                        <motion.span
                                            layoutId="nav-glow"
                                            className="pointer-events-none absolute inset-0 rounded-xl"
                                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                            style={{
                                                background:
                                                    "radial-gradient(120px circle at 50% 120%, rgba(255,255,255,0.10), transparent 65%)"
                                            }}
                                        />
                                    ) : null}
                                </Link>
                            );
                        })}
                    </nav>

                    <motion.div whileHover={{ y: -1 }} whileTap={{ scale: 0.98 }}>
                        <Button asChild size="sm" variant="outline" className="rounded-xl">
                            <Link href="https://github.com/justinetobithe" target="_blank" rel="noreferrer">
                                <Github className="mr-2 h-4 w-4" />
                                GitHub
                            </Link>
                        </Button>
                    </motion.div>
                </div>
            </div>

            <motion.div
                className="mx-auto w-full max-w-6xl px-4 pb-3 md:hidden"
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
            >
                <div className="flex gap-2 overflow-x-auto">
                    {nav.map((item) => {
                        const active = pathname === item.href;
                        const Icon = item.icon;

                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={cn(
                                    "inline-flex shrink-0 items-center gap-2 rounded-full border px-3 py-2 text-sm",
                                    active
                                        ? "border-primary/40 bg-primary/10 text-foreground"
                                        : "border-border/60 bg-card/40 text-muted-foreground"
                                )}
                            >
                                <Icon className="h-4 w-4" />
                                <span className="font-medium">{item.label}</span>
                            </Link>
                        );
                    })}
                </div>
            </motion.div>
        </header>
    );
}
