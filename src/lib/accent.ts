const PANELS = ["bg-sun", "bg-sky", "bg-blush", "bg-sage", "bg-tomato/80"] as const;

export function panelFor(key: string | number) {
    const seed = typeof key === "number" ? key : Array.from(key).reduce((sum, ch) => sum + ch.charCodeAt(0), 0);
    return PANELS[seed % PANELS.length];
}
