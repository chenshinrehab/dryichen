import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://www.dryichen.com.tw/booking/selfpay',
  },
  openGraph: {
    url: 'https://www.dryichen.com.tw/booking/selfpay',
  },
}

export default function SelfPayLayout({ children }: { children: React.ReactNode }) {
  return children
}
