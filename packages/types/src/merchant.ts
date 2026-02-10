export interface Merchant {
  id: string;
  email: string;
  businessName: string;
  contactPhone?: string;
  logo?: string;
  apiKeyTest: string;
  apiKeyLive?: string;
  webhookUrl?: string;
  webhookSecret?: string;
  isLiveMode: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface MerchantSignupInput {
  email: string;
  password: string;
  businessName: string;
  contactPhone?: string;
}

export interface MerchantLoginInput {
  email: string;
  password: string;
}
