'use client';

import { fetchSocialLogin } from '@/api/auth';
import { setTokenCookie } from '@/app/actions/cookies';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const AuthKakaoCallback = ({
  searchParams,
}: {
  searchParams: { code: string };
}) => {
  const router = useRouter();

  useEffect(() => {
    const fetchLogin = async () => {
      try {
        const res = await fetchSocialLogin(searchParams.code, 'kakao');
        setTokenCookie(res.data.accessToken);
        if (!res.data.isOnboarding) {
          router.push('/onboarding');
        } else {
          router.push('/');
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchLogin();
  }, []);

  return <></>;
};

export default AuthKakaoCallback;
