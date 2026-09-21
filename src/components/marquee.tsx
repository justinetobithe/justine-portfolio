export default function Marquee({ items }: { items: string[] }) {
    const row = (suffix: string) =>
        items.map((item) => (
            <li
                key={`${item}-${suffix}`}
                className="flex shrink-0 items-center gap-3 px-5 font-display text-lg font-medium text-foreground/80"
            >
                <span className="h-1.5 w-1.5 rounded-full bg-linear-to-r from-violet-400 to-cyan-300" />
                {item}
            </li>
        ));

    return (
        <div
            className="marquee overflow-hidden border-y border-white/10 bg-white/2 py-4"
            style={{
                WebkitMaskImage: "linear-gradient(to right, transparent, #000 12%, #000 88%, transparent)",
                maskImage: "linear-gradient(to right, transparent, #000 12%, #000 88%, transparent)"
            }}
        >
            <ul className="marquee-track flex w-max">
                {row("a")}
                {row("b")}
            </ul>
        </div>
    );
}
