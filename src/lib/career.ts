export type YearMonth = { year: number; month: number };

export type Job = {
    company: string;
    role: string;
    place: string;
    from: YearMonth;
    to?: YearMonth;
    current?: boolean;
    bullets: string[];
};

export const CAREER_START: YearMonth = { year: 2019, month: 4 };

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function toIndex(d: YearMonth) {
    return d.year * 12 + (d.month - 1);
}

function nowYearMonth(now: Date): YearMonth {
    return { year: now.getFullYear(), month: now.getMonth() + 1 };
}

export function yearsOfExperience(now = new Date()) {
    return Math.floor((toIndex(nowYearMonth(now)) - toIndex(CAREER_START)) / 12);
}

export function formatMonth(d: YearMonth) {
    return `${MONTHS[d.month - 1]} ${d.year}`;
}

export function periodLabel(job: Job) {
    return `${formatMonth(job.from)} – ${job.to ? formatMonth(job.to) : "Present"}`;
}

export function durationLabel(job: Job, now = new Date()) {
    const end = job.to ?? nowYearMonth(now);
    const total = toIndex(end) - toIndex(job.from) + 1;
    const years = Math.floor(total / 12);
    const months = total % 12;
    const parts: string[] = [];
    if (years) parts.push(`${years} yr${years > 1 ? "s" : ""}`);
    if (months) parts.push(`${months} mo${months > 1 ? "s" : ""}`);
    return parts.join(" ");
}

export const JOBS: Job[] = [
    {
        company: "Code Squirrel",
        role: "Full Stack Developer",
        place: "Australia based, remote",
        from: { year: 2023, month: 4 },
        to: { year: 2026, month: 9 },
        bullets: [
            "Deliver full-stack features across multiple client projects, from online stores to member portals",
            "Back-end development with Laravel and PHP for scalable systems, APIs and webhooks",
            "Front-end development with React JS and Next JS",
            "Build polished, responsive UI with strong attention to detail and performance"
        ]
    },
    {
        company: "University of Southeastern Philippines",
        role: "Science Research Assistant / Developer",
        place: "Bo. Obrero, Iñigo St, Poblacion District, Davao City",
        from: { year: 2021, month: 4 },
        to: { year: 2023, month: 4 },
        bullets: [
            "Built full-stack modules for research and internal applications",
            "Back-end development with Laravel and PHP for APIs and data workflows",
            "Front-end development with React JS for dashboards and screens",
            "Focused on stable, maintainable code and clear usability"
        ]
    },
    {
        company: "Power Virtual Solutions",
        role: "Systems Developer",
        place: "Door 1, 726 YLS Bldg, Veloso St. Obrero, Davao City",
        from: { year: 2019, month: 12 },
        to: { year: 2021, month: 2 },
        bullets: [
            "Developed mobile app features and UI workflows",
            "Built front-end and back-end components for internal tools",
            "Managed CMS updates and site and admin maintenance",
            "Maintained a CRM VoIP app and shipped UI/UX improvements",
            "Delivered usable layouts for real operations and daily workflows"
        ]
    },
    {
        company: "AYP Holdings Inc.",
        role: "IT Staff (Software)",
        place: "G.B CAM Bldg. Monteverde Avenue, Davao City",
        from: { year: 2019, month: 4 },
        to: { year: 2019, month: 12 },
        bullets: [
            "Troubleshot computer hardware and software and resolved daily IT issues",
            "Managed network and basic server operations to keep systems up",
            "Handled configurations and installations for office systems",
            "Supported front-end and back-end tasks when needed",
            "Created designs and videos for marketing and ads"
        ]
    }
];
