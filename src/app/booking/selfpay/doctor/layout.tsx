import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '預約管理',
  alternates: {
    canonical: 'https://www.dryichen.com.tw/booking/selfpay/doctor',
  },
  robots: {
    index: false,
    follow: false,
    noarchive: true,
    googleBot: {
      index: false,
      follow: false,
      noarchive: true,
    },
  },
}

export default function DoctorLayout({ children }: { children: React.ReactNode }) {
  return children
}
