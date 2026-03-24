import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Support Hub' };

export default function SupportLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
