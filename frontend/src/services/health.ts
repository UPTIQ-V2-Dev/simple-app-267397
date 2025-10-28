import { api } from '@/lib/api';
import { MOCK_HEALTH_DATA } from '@/data/mockData';

export interface HealthResponse {
    status: 'ok' | 'error';
    timestamp: string;
    version: string;
    uptime: number;
}

export const healthService = {
    checkHealth: async (): Promise<HealthResponse> => {
        if (import.meta.env.VITE_USE_MOCK_DATA === 'true') {
            return MOCK_HEALTH_DATA;
        }

        const response = await api.get<HealthResponse>('/health');
        return response.data;
    }
};
