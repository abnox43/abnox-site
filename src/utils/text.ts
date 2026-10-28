/**
 * Case-, accent- and Arabic-diacritic-insensitive normalisation. Keeping this
 * in one place means project filtering and site search agree on what "matches".
 */
export function normalizeText(value: string): string {
  return value
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[\u064b-\u065f\u0670]/g, '')
    .replace(/\u0640/g, '')
    .replace(/[أإآٱ]/g, 'ا')
    .replace(/ى/g, 'ي')
    .replace(/ة/g, 'ه')
    .replace(/[^\p{L}\p{N}\s-]+/gu, ' ')
    .replace(/\s+/g, ' ')
    .toLowerCase()
    .trim()
}

export function tokenize(query: string): string[] {
  return normalizeText(query).split(/\s+/).filter(Boolean)
}

export function matchesTokens(haystack: string, tokens: string[]): boolean {
  if (tokens.length === 0) return true
  const normalized = normalizeText(haystack)
  return tokens.every((token) => normalized.includes(token))
}
