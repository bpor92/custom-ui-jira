import { API_PROVIDER } from '@/constants/ai-provider-const';

export type ApiProvider = typeof API_PROVIDER[keyof typeof API_PROVIDER];
