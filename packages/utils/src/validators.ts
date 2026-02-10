import { z } from 'zod';
import { validateGhanaPhone } from './phone';

/**
 * Zod schema for Ghana phone numbers
 */
export const ghanaPhoneSchema = z
  .string()
  .refine((phone) => validateGhanaPhone(phone).isValid, {
    message: 'Invalid Ghana phone number',
  });

/**
 * Zod schema for email addresses
 */
export const emailSchema = z.string().email('Invalid email address');

/**
 * Zod schema for passwords
 */
export const passwordSchema = z
  .string()
  .min(8, 'Password must be at least 8 characters')
  .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
  .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
  .regex(/[0-9]/, 'Password must contain at least one number');

/**
 * Zod schema for business names
 */
export const businessNameSchema = z
  .string()
  .min(2, 'Business name must be at least 2 characters')
  .max(100, 'Business name must not exceed 100 characters');

/**
 * Zod schema for amounts in pesewas
 */
export const amountSchema = z
  .number()
  .int('Amount must be a whole number')
  .positive('Amount must be positive')
  .max(1000000000, 'Amount too large'); // Max 10 million GHS
