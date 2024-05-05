import type { Metadata } from 'next';

import './globals.css';
import '/public/styles/font.css';
import NavBar from '@/components/ui/nav-bar/NavBar';

export const metadata: Metadata = {
  title: 'UnivFit',
  description: 'This is UnivFit',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="font-pretendard">
        <NavBar />
        {children}
      </body>
    </html>
  );
}
