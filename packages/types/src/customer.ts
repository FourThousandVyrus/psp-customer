export interface Customer {
  id: string;
  merchantId: string;
  phoneNumber: string;
  email?: string;
  name?: string;
  metadata?: Record<string, any>;
  createdAt: Date;
  updatedAt: Date;
}
