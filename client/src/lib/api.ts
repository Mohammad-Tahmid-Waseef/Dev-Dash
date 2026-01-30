import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

export interface Milestone {
  _id?: string;
  title: string;
  description?: string;
  status: 'Pending' | 'In Progress' | 'Completed';
  deadline?: string;
  createdAt?: string;
}

export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const milestonesApi = {
  getAll: async (): Promise<Milestone[]> => {
    const response = await api.get('/milestones');
    return response.data;
  },

  create: async (milestone: Omit<Milestone, '_id' | 'createdAt'>): Promise<Milestone> => {
    const response = await api.post('/milestones', milestone);
    return response.data;
  },

  update: async (id: string, data: Partial<Milestone>): Promise<Milestone> => {
    const response = await api.patch(`/milestones/${id}`, data);
    return response.data;
  },

  delete: async (id: string): Promise<void> => {
    await api.delete(`/milestones/${id}`);
  },
};
