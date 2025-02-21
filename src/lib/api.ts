import ky from 'ky';

export const api = ky.create({
  prefixUrl: process.env.API_URL || 'http://localhost:3333/',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});