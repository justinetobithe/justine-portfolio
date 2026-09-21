import AppLink from "@/components/app/app-link";
import { Separator } from "@/components/ui/separator";
import { Github, Mail } from "lucide-react";

export default function SiteFooter() {
    return (
        <footer>
            <Separator className="bg-white/10" />
            <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
                <div>© {new Date().getFullYear()} Justine Tobithe Doloiras. Davao City, Philippines.</div>
                <div className="flex items-center gap-5">
                    <AppLink href="/projects">Projects</AppLink>
                    <AppLink href="/about">About</AppLink>
                    <AppLink href="mailto:justine.tobithe27@gmail.com" className="inline-flex items-center gap-1.5">
                        <Mail className="h-4 w-4" />
                        Email
                    </AppLink>
                    <AppLink href="https://github.com/justinetobithe" className="inline-flex items-center gap-1.5">
                        <Github className="h-4 w-4" />
                        GitHub
                    </AppLink>
                </div>
            </div>
        </footer>
    );
}
