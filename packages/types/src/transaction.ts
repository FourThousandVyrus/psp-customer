import { MobileMoneyProvider, TransactionStatus } from './mobile-money';

export interface Transaction {
  id: string;
  merchantId: string;
  customerId?: string;
  provider: MobileMoneyProvider;
  phoneNumber: string;
  amount: number; // In pesewas
  currency: string;
  status: TransactionStatus;
  merchantReference: string;
  providerReference?: string;
  description?: string;
  metadata?: Record<string, any>;
  createdAt: Date;
  updatedAt: Date;
  processedAt?: Date;
}

export interface TransactionFilters {
  status?: TransactionStatus;
  provider?: MobileMoneyProvider;
  startDate?: Date;
  endDate?: Date;
  searchQuery?: string;
}
