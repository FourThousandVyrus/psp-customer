/**
 * Formats an amount in pesewas to Ghana Cedis string
 * @param amountInPesewas - Amount in pesewas (1 GHS = 100 pesewas)
 * @returns Formatted currency string (e.g., "GH₵ 1,500.00")
 */
export function formatGHS(amountInPesewas: number): string {
  const ghs = amountInPesewas / 100;

  return new Intl.NumberFormat('en-GH', {
    style: 'currency',
    currency: 'GHS',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(ghs);
}

/**
 * Converts Ghana Cedis to pesewas
 * @param ghs - Amount in Ghana Cedis
 * @returns Amount in pesewas
 */
export function ghsToPesewas(ghs: number): number {
  return Math.round(ghs * 100);
}

/**
 * Converts pesewas to Ghana Cedis
 * @param pesewas - Amount in pesewas
 * @returns Amount in Ghana Cedis
 */
export function pesewasToGhs(pesewas: number): number {
  return pesewas / 100;
}

/**
 * Parses a currency input string to pesewas
 * Handles formats like "100", "100.50", "GHS 100", etc.
 * @param input - The input string to parse
 * @returns Amount in pesewas or null if invalid
 */
export function parseCurrencyInput(input: string): number | null {
  // Remove currency symbols and spaces
  const cleaned = input
    .replace(/[GHS₵\s]/gi, '')
    .replace(/,/g, '')
    .trim();

  const amount = parseFloat(cleaned);

  if (isNaN(amount) || amount < 0) {
    return null;
  }

  return ghsToPesewas(amount);
}

/**
 * Validates if an amount is within Ghana mobile money limits
 * @param amountInPesewas - Amount in pesewas
 * @param provider - The mobile money provider
 * @returns True if valid, false otherwise
 */
export function isValidAmount(
  amountInPesewas: number,
  provider: 'MTN' | 'VODAFONE' | 'AIRTELTIGO'
): boolean {
  const ghs = pesewasToGhs(amountInPesewas);

  const limits = {
    MTN: { min: 1, max: 10000 },
    VODAFONE: { min: 1, max: 5000 },
    AIRTELTIGO: { min: 1, max: 3000 },
  };

  const { min, max } = limits[provider];
  return ghs >= min && ghs <= max;
}
