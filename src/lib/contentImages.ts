function escapeAttribute(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

/**
 * Content images are below the page heading, so they can be loaded lazily.
 * Existing descriptive alt text is preserved; only missing alt text falls back
 * to the current page title.
 */
export function optimizeContentImages(html: string | undefined, fallbackAlt: string): string {
  if (!html) return ''

  return html.replace(/<img\b[^>]*>/gi, (tag) => {
    let optimized = tag

    if (!/\salt\s*=/i.test(optimized)) {
      optimized = optimized.replace(/\s*\/?\s*>$/, ` alt="${escapeAttribute(fallbackAlt)}"$&`)
    }
    if (!/\sloading\s*=/i.test(optimized)) {
      optimized = optimized.replace(/\s*\/?\s*>$/, ' loading="lazy"$&')
    }
    if (!/\sdecoding\s*=/i.test(optimized)) {
      optimized = optimized.replace(/\s*\/?\s*>$/, ' decoding="async"$&')
    }

    return optimized
  })
}
