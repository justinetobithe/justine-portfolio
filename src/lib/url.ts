export function hostOf(url?: string) {
    if (!url) return "";
    try {
        return new URL(url).hostname.replace(/^www\./, "");
    } catch {
        return "";
    }
}

export function isExternalHref(href: string) {
    return /^(https?:)?\/\//.test(href) || href.toLowerCase().endsWith(".pdf");
}

export function isProtocolHref(href: string) {
    return /^(mailto|tel):/.test(href);
}
