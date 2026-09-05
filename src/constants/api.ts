/**
 * API Constants
 * Centralized configuration for API endpoints
 */

export const API_URL = import.meta.env.VITE_API_URL || 'http://13.203.196.69/api/v1';

export const API_ENDPOINTS = {
  VOLUNTEER: '/volunteer',
} as const;
