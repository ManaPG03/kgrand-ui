import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Enquire Now' };

export default function EnquireLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
