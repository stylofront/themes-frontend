export function hexToHsl(hex: string): string {
    // Remove # if present
    hex = hex.replace(/^#/, '');

    // Parse r, g, b
    let r = parseInt(hex.substring(0, 2), 16);
    let g = parseInt(hex.substring(2, 4), 16);
    let b = parseInt(hex.substring(4, 6), 16);

    r /= 255;
    g /= 255;
    b /= 255;

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h = 0, s = 0, l = (max + min) / 2;

    if (max !== min) {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }

    // Convert to degrees and percentages
    h = Math.round(h * 360 * 10) / 10;
    s = Math.round(s * 100 * 10) / 10;
    l = Math.round(l * 100 * 10) / 10;

    // Return space-separated values for Tailwind CSS variables
    return `${h} ${s}% ${l}%`;
}

export function hslToHex(hsl: string): string {
    // Parse "H S% L%" string
    const parts = hsl.split(' ').map(p => parseFloat(p));
    if (parts.length < 3) return "#000000";

    let h = parts[0];
    let s = parts[1];
    let l = parts[2];

    s /= 100;
    l /= 100;

    const k = (n: number) => (n + h / 30) % 12;
    const a = s * Math.min(l, 1 - l);
    const f = (n: number) =>
        l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));

    const toHex = (n: number) => {
        const hex = Math.round(n * 255).toString(16);
        return hex.length === 1 ? '0' + hex : hex;
    };

    return `#${toHex(f(0))}${toHex(f(8))}${toHex(f(4))}`;
}

