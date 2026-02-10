export enum MobileMoneyProvider {
  MTN = 'MTN',
  VODAFONE = 'VODAFONE',
  AIRTELTIGO = 'AIRTELTIGO',
}

export enum TransactionStatus {
  PENDING = 'PENDING',
  PROCESSING = 'PROCESSING',
  SUCCESS = 'SUCCESS',
  FAILED = 'FAILED',
  EXPIRED = 'EXPIRED',
  REFUNDED = 'REFUNDED',
}

export interface InitiatePaymentParams {
  provider: MobileMoneyProvider;
  phoneNumber: string;
  amount: number; // In pesewas
  reference: string;
  description?: string;
  metadata?: Record<string, any>;
}

export interface PaymentInitiationResponse {
  transactionId: string;
  status: TransactionStatus;
  providerReference?: string;
  checkoutUrl?: string;
}

export interface GhanaPhoneValidation {
  isValid: boolean;
  formatted?: string;
  provider?: MobileMoneyProvider;
}
