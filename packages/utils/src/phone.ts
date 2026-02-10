import { MobileMoneyProvider, GhanaPhoneValidation } from '@links/types';

// Provider prefixes for Ghana mobile numbers
const PROVIDER_MAP: Record<string, MobileMoneyProvider> = {
  '24': MobileMoneyProvider.MTN,
  '25': MobileMoneyProvider.MTN,
  '54': MobileMoneyProvider.MTN,
  '55': MobileMoneyProvider.MTN,
  '59': MobileMoneyProvider.MTN,
  '20': MobileMoneyProvider.VODAFONE,
  '50': MobileMoneyProvider.VODAFONE,
  '23': MobileMoneyProvider.AIRTELTIGO,
  '26': MobileMoneyProvider.AIRTELTIGO,
  '27': MobileMoneyProvider.AIRTELTIGO,
  '28': MobileMoneyProvider.AIRTELTIGO,
  '56': MobileMoneyProvider.AIRTELTIGO,
  '57': MobileMoneyProvider.AIRTELTIGO,
};

/**
 * Validates and formats a Ghana phone number
 * Supports formats: +233XXXXXXXXX or 0XXXXXXXXX
 * @param phone - The phone number to validate
 * @returns Validation result with formatted number and detected provider
 */
export function validateGhanaPhone(phone: string): GhanaPhoneValidation {
  // Remove spaces, dashes, and other formatting
  const cleaned = phone.replace(/[\s\-()]/g, '');

  // Match Ghana phone number patterns
  const match = cleaned.match(/^(?:\+233|0)?(\d{2})(\d{7})$/);

  if (!match) {
    return { isValid: false };
  }

  const [, prefix, number] = match;
  const provider = PROVIDER_MAP[prefix];

  if (!provider) {
    return { isValid: false };
  }

  return {
    isValid: true,
    formatted: `+233${prefix}${number}`,
    provider,
  };
}

/**
 * Formats a Ghana phone number for display
 * @param phone - The phone number to format
 * @returns Formatted phone number (e.g., "+233 24 123 4567")
 */
export function formatGhanaPhone(phone: string): string {
  const validation = validateGhanaPhone(phone);

  if (!validation.isValid || !validation.formatted) {
    return phone;
  }

  const cleaned = validation.formatted.replace('+233', '');
  return `+233 ${cleaned.slice(0, 2)} ${cleaned.slice(2, 5)} ${cleaned.slice(5)}`;
}

/**
 * Detects the mobile money provider from a phone number
 * @param phone - The phone number to check
 * @returns The detected provider or undefined
 */
export function detectProvider(phone: string): MobileMoneyProvider | undefined {
  const validation = validateGhanaPhone(phone);
  return validation.provider;
}
