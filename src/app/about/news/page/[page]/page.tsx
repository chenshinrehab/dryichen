import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { newsList } from '@/data/news'
import NewsListContent from '../../NewsListContent'

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'https://www.dryichen.com.tw').trim().replace(/\/$/, '')
const ITEMS_PER_PAGE = 10
const totalPages = Math.ceil(newsList.filter((item) => item.category !== '門診公告').length / ITEMS_PER_PAGE)

interface PageProps {
  params: { page: string }
}

export const dynamicParams = false

export function generateStaticParams() {
  return Array.from({ length: Math.max(0, totalPages - 1) }, (_, index) => ({ page: String(index + 2) }))
}

export function generateMetadata({ params }: PageProps): Metadata {
  const page = Number.parseInt(params.page, 10)
  if (!Number.isInteger(page) || page < 2 || page > totalPages) {
    return { title: '找不到頁面', robots: { index: false, follow: false } }
  }

  return {
    title: `復健衛教文章第 ${page} 頁 | 新竹宸新復健科`,
    alternates: { canonical: `${SITE_URL}/about/news/page/${page}` },
  }
}

export default function NewsPaginationPage({ params }: PageProps) {
  const page = Number.parseInt(params.page, 10)
  if (!Number.isInteger(page) || page < 2 || page > totalPages) notFound()

  return <NewsListContent currentPage={page} />
}
