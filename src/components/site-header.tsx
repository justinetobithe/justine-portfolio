"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Github, FolderKanban, UserRound } from "lucide-react";
import { motion } from "framer-motion";

const nav = [
    { href: "/", label: "Home", icon: UserRound },
    { href: "/projects", label: "Projects", icon: FolderKanban },
    { href: "/about", label: "About", icon: UserRound }
];

export default function SiteHeader() {
    const pathname = usePathname();

    return (
        <header className="sticky top-0 z-50 border-b bg-background/70 backdrop-blur">
            <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3">
                <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight">
                    <span className="inline-block h-2 w-2 rounded-full bg-primary" />
                    Justine Tobithe
                </Link>

                <div className="flex items-center gap-2">
                    <nav className="hidden items-center gap-2 md:flex">
                        {nav.map((item) => {
                            const active = pathname === item.href;
                            return (
                                <Button key={item.href} asChild variant={active ? "default" : "ghost"} size="sm">
                                    <Link href={item.href} className="flex items-center gap-2">
                                        <item.icon className="h-4 w-4" />
                                        {item.label}
                                    </Link>
                                </Button>
                            );
                        })}
                    </nav>

                    <Button asChild size="sm" variant="outline" className="rounded-xl">
                        <Link href="https://github.com/justinetobithe" target="_blank" rel="noreferrer">
                            <Github className="mr-2 h-4 w-4" />
                            GitHub
                        </Link>
                    </Button>
                </div>
            </div>

            <motion.div
                layout
                className="mx-auto w-full max-w-6xl px-4 pb-3 md:hidden"
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
            >
                <div className="flex gap-2 overflow-x-auto">
                    {nav.map((item) => {
                        const active = pathname === item.href;
                        return (
                            <Button key={item.href} asChild variant={active ? "default" : "secondary"} size="sm">
                                <Link href={item.href}>{item.label}</Link>
                            </Button>
                        );
                    })}
                </div>
            </motion.div>
        </header>
    );
}
