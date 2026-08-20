'use client'

import NextLink, { type LinkProps } from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useRef, type AnchorHTMLAttributes } from 'react'

type IntentLinkProps = LinkProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps | 'href'> & {
    intentPrefetch?: boolean
  }

const PREFETCH_DELAY_MS = 350

export default function IntentLink({
  href,
  prefetch,
  intentPrefetch = prefetch !== false,
  onMouseEnter,
  onMouseLeave,
  onFocus,
  onBlur,
  onTouchStart,
  ...props
}: IntentLinkProps) {
  const router = useRouter()
  const prefetchTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const hasPrefetchedRef = useRef(false)

  const cancelScheduledPrefetch = () => {
    if (prefetchTimerRef.current !== null) {
      clearTimeout(prefetchTimerRef.current)
      prefetchTimerRef.current = null
    }
  }

  const canPrefetch =
    intentPrefetch &&
    typeof href === 'string' &&
    href.startsWith('/') &&
    !href.startsWith('//')

  const prefetchNow = () => {
    cancelScheduledPrefetch()

    if (!canPrefetch || hasPrefetchedRef.current || typeof href !== 'string') {
      return
    }

    hasPrefetchedRef.current = true
    router.prefetch(href)
  }

  const schedulePrefetch = () => {
    if (!canPrefetch || hasPrefetchedRef.current || prefetchTimerRef.current !== null) {
      return
    }

    prefetchTimerRef.current = setTimeout(() => {
      prefetchTimerRef.current = null
      prefetchNow()
    }, PREFETCH_DELAY_MS)
  }

  useEffect(() => {
    hasPrefetchedRef.current = false
    return cancelScheduledPrefetch
  }, [href, intentPrefetch])

  return (
    <NextLink
      {...props}
      href={href}
      prefetch={false}
      onMouseEnter={(event) => {
        schedulePrefetch()
        onMouseEnter?.(event)
      }}
      onMouseLeave={(event) => {
        cancelScheduledPrefetch()
        onMouseLeave?.(event)
      }}
      onFocus={(event) => {
        schedulePrefetch()
        onFocus?.(event)
      }}
      onBlur={(event) => {
        cancelScheduledPrefetch()
        onBlur?.(event)
      }}
      onTouchStart={(event) => {
        prefetchNow()
        onTouchStart?.(event)
      }}
    />
  )
}
