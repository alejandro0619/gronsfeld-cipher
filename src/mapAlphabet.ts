export function mapLettersToPosition(): Map<string, number> {
    return new Map([...Array(26)].map((_, i) => [String.fromCharCode(65 + i), i + 1]));
}