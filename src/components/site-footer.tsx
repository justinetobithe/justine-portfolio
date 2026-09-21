import { Github, Mail, MapPin, Phone } from "lucide-react";
import { SITE } from "@/lib/site";
import AppLink from "@/components/app/app-link";

const links = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/about", label: "About" }
];

export default function SiteFooter() {
    return (
        <footer className="relative border-t-2 border-foreground bg-foreground text-background">
            <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.4fr_1fr_1.2fr]">
                <div className="space-y-3">
                    <div className="font-display text-3xl font-extrabold leading-none tracking-tight sm:text-4xl">
                        {SITE.name}
                    </div>
                    <p className="max-w-xs text-sm leading-relaxed text-background/70">
                        {SITE.role} in {SITE.location}. Looking for remote work, full-time or part-time.
                    </p>
                </div>

                <div className="space-y-3">
                    <div className="font-mono text-xs uppercase tracking-[0.18em] text-sun">Pages</div>
                    <ul className="space-y-2 text-sm">
                        {links.map((l) => (
                            <li key={l.href}>
                                <AppLink href={l.href} tone="dark">
                                    {l.label}
                                </AppLink>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="space-y-3">
                    <div className="font-mono text-xs uppercase tracking-[0.18em] text-sun">Contact</div>
                    <ul className="space-y-2 text-sm">
                        <li className="flex items-center gap-2">
                            <Mail className="h-4 w-4 flex-none text-sun" />
                            <AppLink href={`mailto:${SITE.email}`} tone="dark" className="break-all">
                                {SITE.email}
                            </AppLink>
                        </li>
                        <li className="flex items-center gap-2">
                            <Phone className="h-4 w-4 flex-none text-sun" />
                            {SITE.phone}
                        </li>
                        <li className="flex items-center gap-2">
                            <MapPin className="h-4 w-4 flex-none text-sun" />
                            {SITE.location}
                        </li>
                        <li className="flex items-center gap-2">
                            <Github className="h-4 w-4 flex-none text-sun" />
                            <AppLink href={SITE.github} tone="dark">
                                github.com/justinetobithe
                            </AppLink>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="border-t border-background/20">
                <div className="mx-auto flex w-full max-w-6xl flex-col gap-1 px-4 py-4 font-mono text-xs text-background/60 sm:flex-row sm:justify-between sm:px-6">
                    <span>© {new Date().getFullYear()} {SITE.name}</span>
                    <span>Next.js · Tailwind CSS · shadcn/ui · Framer Motion</span>
                </div>
            </div>
        </footer>
    );
}
