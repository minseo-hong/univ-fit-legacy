'use server';

import { cookies } from 'next/headers';

export const setTokenCookie = async (code: string) => {
  cookies().set('access_token', code);
};

export const getTokenCookie = async () => {
  const token = cookies().get('access_token')?.value;

  if (!token) {
    return null;
  }

  return token;
};

export const deleteTokenCookie = () => {
  cookies().delete('access_token');
};
