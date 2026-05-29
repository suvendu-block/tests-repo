import axios, { AxiosError, AxiosInstance, InternalAxiosRequestConfig } from 'axios';
import type { ApiError } from '@/types';

const API_URL = import.meta.env.VITE_API_URL || '/api';

const api: AxiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 30000,
});

// ─── Request Interceptor ───────────────────────────────────
api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = localStorage.getItem('token');
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

// ─── Response Interceptor ──────────────────────────────────
api.interceptors.response.use(
  (response) => response,
  async (error: AxiosError<ApiError>) => {
    const originalRequest = error.config;

    // Handle 401 - Unauthorized
    if (error.response?.status === 401 && originalRequest) {
      // Clear stored auth data
      localStorage.removeItem('token');
      localStorage.removeItem('user');

      // Redirect to login if not already there
      if (window.location.pathname !== '/login') {
        window.location.href = '/login';
      }
    }

    // Handle 403 - Forbidden
    if (error.response?.status === 403) {
      console.error('Access forbidden:', error.response.data?.message);
    }

    // Handle 500 - Server Error
    if (error.response?.status && error.response.status >= 500) {
      console.error('Server error:', error.response.data?.message || 'Internal server error');
    }

    return Promise.reject(error);
  }
);

// ─── Auth API ──────────────────────────────────────────────
export const authAPI = {
  login: (credentials: { email: string; password: string }) =>
    api.post('/auth/login', credentials),

  register: (data: { name: string; email: string; password: string }) =>
    api.post('/auth/register', data),

  getProfile: () =>
    api.get('/auth/profile'),

  updateProfile: (data: Partial<{ name: string; email: string; avatar: string }>) =>
    api.put('/auth/profile', data),

  changePassword: (data: { currentPassword: string; newPassword: string }) =>
    api.put('/auth/change-password', data),

  forgotPassword: (email: string) =>
    api.post('/auth/forgot-password', { email }),

  resetPassword: (token: string, password: string) =>
    api.put(`/auth/reset-password/${token}`, { password }),
};

// ─── Tasks API ─────────────────────────────────────────────
export const tasksAPI = {
  getAll: (params?: Record<string, string | number>) =>
    api.get('/tasks', { params }),

  getById: (id: string) =>
    api.get(`/tasks/${id}`),

  create: (data: {
    title: string;
    description?: string;
    priority?: string;
    dueDate?: string;
  }) =>
    api.post('/tasks', data),

  update: (id: string, data: Partial<{
    title: string;
    description: string;
    status: string;
    priority: string;
    dueDate: string;
  }>) =>
    api.put(`/tasks/${id}`, data),

  delete: (id: string) =>
    api.delete(`/tasks/${id}`),

  updateStatus: (id: string, status: string) =>
    api.patch(`/tasks/${id}/status`, { status }),
};

// ─── Utility ───────────────────────────────────────────────
export const getErrorMessage = (error: unknown): string => {
  if (error instanceof AxiosError) {
    const apiError = error.response?.data as ApiError | undefined;
    if (apiError?.message) return apiError.message;

    // Handle validation errors
    if (apiError?.errors) {
      const messages = Object.values(apiError.errors).flat();
      return messages.join(', ');
    }

    // Handle HTTP status codes
    const statusMessages: Record<number, string> = {
      400: 'Invalid request. Please check your input.',
      401: 'Please log in to continue.',
      403: 'You do not have permission to perform this action.',
      404: 'Resource not found.',
      409: 'This resource already exists.',
      422: 'Validation failed. Please check your input.',
      429: 'Too many requests. Please try again later.',
      500: 'An unexpected server error occurred. Please try again.',
      502: 'Server temporarily unavailable. Please try again.',
      503: 'Service unavailable. Please try again later.',
    };

    return statusMessages[error.response?.status ?? 0] || 'An unexpected error occurred.';
  }

  if (error instanceof Error) {
    return error.message;
  }

  return 'An unexpected error occurred. Please try again.';
};

export default api;