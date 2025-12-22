import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, GraduationCap, Mail, Phone } from "lucide-react";
import Reveal from "@/components/reveal";
import ExperienceCard from "@/components/experience-card";

export default function AboutPage() {
    return (
        <div className="space-y-8">
            <Reveal>
                <section className="rounded-2xl border bg-card/60 p-6 backdrop-blur">
                    <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                        <div className="flex items-center gap-4">
                            <div className="relative h-20 w-20 overflow-hidden rounded-2xl border bg-muted md:h-24 md:w-24">
                                <Image src="/profile.jpg" alt="Justine Tobithe" fill className="object-cover" />
                            </div>
                            <div className="space-y-1">
                                <h1 className="text-2xl font-semibold tracking-tight">About</h1>
                                <p className="text-sm text-muted-foreground">
                                    I specialize in full-stack development, system analysis, and multimedia design,
                                    delivering innovative solutions and seamless user experiences.
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

                        <div className="grid gap-2">
                            <div className="text-sm text-muted-foreground">Quick Summary</div>
                            <div className="text-sm">
                                Full-stack developer with strong experience in React/Next.js and Laravel/PHP, plus
                                multimedia editing and UI/UX design.
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
                            <div className="text-sm text-muted-foreground">
                                2015 - 2019 • Sta. Ana Ave., Davao City
                            </div>
                            <div className="text-sm">Bachelor of Science in Information Technology</div>
                        </CardContent>
                    </Card>
                </Reveal>

                <Reveal delay={0.1}>
                    <Card className="rounded-2xl bg-card/60 backdrop-blur">
                        <CardHeader className="font-semibold">Skills</CardHeader>
                        <CardContent className="flex flex-wrap gap-2">
                            {[
                                "Ability to work under pressure",
                                "Configuration and Installations",
                                "Front-end and Back-end Developer",
                                "Systems Analyst",
                                "Web Design",
                                "Multimedia Editing Literate"
                            ].map((s) => (
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
                            "Troubleshoot Computer Hardware & Software",
                            "Manage Network & Servers",
                            "Configurations and Installations",
                            "Front-end & Back-end Developer",
                            "Provide designs and videos for ads and etc."
                        ]}
                    />

                    <ExperienceCard
                        title="Power Virtual Solutions — Systems Developer"
                        meta="Dec 2019 – Feb 2021 • Door 1, 726 YLS Bldg, Veloso St. Obrero, Davao City"
                        bullets={[
                            "Mobile App Developer",
                            "Front-end & Back-end Developer",
                            "Manage CMS",
                            "Manage CRM VoIP App",
                            "UI/UX Developer"
                        ]}
                    />

                    <ExperienceCard
                        title="University of Southeastern Philippines — Science Research Assistant / Developer"
                        meta="Apr 2021 – Apr 2023 • Bo. Obrero, Iñigo St, Poblacion District, Davao City"
                        bullets={[
                            "Full Stack Developer",
                            "Back-end (Laravel, PHP)",
                            "Front-end (React JS)"
                        ]}
                    />

                    <ExperienceCard
                        title="Code Squirrel — Full Stack Developer"
                        meta="Apr 2023 – May 2025 • Australia Based"
                        bullets={[
                            "Full Stack Developer",
                            "Back-end (Laravel, PHP)",
                            "Front-end (React JS, Next JS)"
                        ]}
                    />
                </div>
            </section>
        </div>
    );
}
