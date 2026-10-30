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

export function jobMonths(job: Job, now = new Date()) {
    const end = job.to ?? nowYearMonth(now);
    return toIndex(end) - toIndex(job.from) + 1;
}

export function durationLabel(job: Job, now = new Date()) {
    const total = jobMonths(job, now);
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
        place: "Australia based company, remote, full time",
        from: { year: 2023, month: 4 },
        to: { year: 2026, month: 9 },
        bullets: [
            "Built and maintained full stack web applications for client projects using Laravel and PHP on the back end and React and Next.js on the front end",
            "Designed and documented REST APIs, authentication flows and role based access consumed by web front ends",
            "Integrated Zoho and Softr into Laravel projects through APIs to sync CRM data, automate workflows and apply business logic",
            "Deployed and maintained applications with Docker and Docker Compose on VPS servers and on Vercel, including environment configuration and production troubleshooting",
            "Collaborated with team members and clients on requirements, code reviews and ongoing feature updates, and reported progress on active projects"
        ]
    },
    {
        company: "University of Southeastern Philippines",
        role: "Science Research Assistant / Developer",
        place: "Davao City, Philippines",
        from: { year: 2021, month: 4 },
        to: { year: 2023, month: 4 },
        bullets: [
            "Developed full stack research and information systems using Laravel and PHP for the back end and React JS for the front end",
            "Analyzed requirements from researchers and staff and translated them into working features, data structures and user interfaces",
            "Maintained and improved existing systems, fixing bugs and delivering updates"
        ]
    },
    {
        company: "Power Virtual Solutions",
        role: "Systems Developer",
        place: "Davao City, Philippines",
        from: { year: 2019, month: 12 },
        to: { year: 2021, month: 2 },
        bullets: [
            "Developed mobile applications and web systems, covering both front end and back end work",
            "Built cross platform mobile apps for iOS and Android with Flutter (Dart) and React Native, connected to REST APIs with user authentication",
            "Managed the company CMS and a CRM VoIP application used in daily operations",
            "Designed user interfaces and user experience flows for internal and client applications"
        ]
    },
    {
        company: "AYP Holdings Inc.",
        role: "IT Staff (Software)",
        place: "Davao City, Philippines",
        from: { year: 2019, month: 4 },
        to: { year: 2019, month: 12 },
        bullets: [
            "Developed front end and back end features for company systems",
            "Managed networks and servers, handled configurations and installations, and troubleshot computer hardware and software issues",
            "Produced designs and promotional videos for advertising and company materials"
        ]
    }
];
