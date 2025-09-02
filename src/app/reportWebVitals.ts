export function reportWebVitals(metric: any) {
  // LCP/FCP/CLS/INP/TTFB 등
  if (process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line no-console
    console.log('[WebVitals]', metric.name, Math.round(metric.value), metric);
  }
}
