'use client'

import NextLink, { type LinkProps } from 'next/link'
import { useRouter } from 'next/navigation'
import type { AnchorHTMLAttributes } from 'react'

type IntentLinkProps = LinkProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps | 'href'>

/**
 * Avoid Next.js viewport prefetch fan-out while preserving fast navigation.
 * The destination is prefetched only when the visitor shows intent to open it.
 */
export default function IntentLink({
  href,
  onMouseEnter,
  onFocus,
  onTouchStart,
  ...props
}: IntentLinkProps) {
  const router = useRouter()

  const prefetchOnIntent = () => {
    if (typeof href === 'string') router.prefetch(href)
  }

  return (
    <NextLink
      {...props}
      href={href}
      prefetch={false}
      onMouseEnter={(event) => {
        prefetchOnIntent()
        onMouseEnter?.(event)
      }}
      onFocus={(event) => {
        prefetchOnIntent()
        onFocus?.(event)
      }}
      onTouchStart={(event) => {
        prefetchOnIntent()
        onTouchStart?.(event)
      }}
    />
  )
}
