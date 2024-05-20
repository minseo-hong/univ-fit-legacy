'use server';

import { cookies } from 'next/headers';

export const setTokenCookie = async (code: string) => {
  cookies().set('access_token', code);
};

export const getTokenCookie = async () => {
  const token = cookies().get('access_token')?.value;

  if (!token) {
    throw new Error('Failed to fetch data');
  }

  return token;
};
