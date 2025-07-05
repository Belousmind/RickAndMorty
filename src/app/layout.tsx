import type { Metadata } from 'next';
import { Header } from '@/components';

import styles from './main.module.scss';

export const metadata: Metadata = {
  title: 'Rick and Morty',
  description: '',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={styles.body}>
        <Header />
        <main className={styles.main}>{children}</main>
      </body>
    </html>
  );
}
