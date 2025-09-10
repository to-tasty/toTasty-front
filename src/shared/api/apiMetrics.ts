// src/shared/api/apiMetrics.ts
type Metric = {
  count: number;
  totalMs: number;
  maxMs: number;
  lastMs: number;
  errors: number;
};

const metrics = new Map<string, Metric>();
let TOTAL_COUNT = 0;

// dev 기본 ON. 배포에서 끄고 싶으면 NEXT_PUBLIC_ENABLE_API_METRICS=0
export const ENABLE_API_METRICS =
  process.env.NEXT_PUBLIC_ENABLE_API_METRICS === '1' ||
  (process.env.NEXT_PUBLIC_ENABLE_API_METRICS !== '0' && process.env.NODE_ENV !== 'production');

export function recordApiMetric(key: string, ms: number, isError: boolean) {
  if (!ENABLE_API_METRICS) return;
  TOTAL_COUNT += 1;
  const m = metrics.get(key) ?? { count: 0, totalMs: 0, maxMs: 0, lastMs: 0, errors: 0 };
  m.count += 1;
  m.totalMs += ms || 0;
  m.lastMs = ms || 0;
  if (ms > m.maxMs) m.maxMs = ms;
  if (isError) m.errors += 1;
  metrics.set(key, m);
}

export function getApiRequestCount() {
  return TOTAL_COUNT;
}

export function getApiMetrics() {
  const obj: Record<string, Metric & { avgMs: number }> = {};
  // no-restricted-syntax 대응: for..of 대신 forEach 사용
  metrics.forEach((v, k) => {
    obj[k] = { ...v, avgMs: v.count ? v.totalMs / v.count : 0 };
  });
  return obj;
}

export function resetApiMetrics() {
  metrics.clear();
  TOTAL_COUNT = 0;
}

export function printApiMetrics() {
  if (!ENABLE_API_METRICS) return;
  // eslint-disable-next-line no-console
  console.table(
    Object.entries(getApiMetrics()).map(([key, v]) => ({
      key,
      count: v.count,
      avgMs: Math.round(v.avgMs),
      maxMs: Math.round(v.maxMs),
      lastMs: Math.round(v.lastMs),
      errors: v.errors,
    })),
  );
  // eslint-disable-next-line no-console
  console.log('TOTAL_REQ:', getApiRequestCount());
}

// 브라우저 콘솔에서 바로 쓰기: window.apiMetrics.print()
declare global {
  interface Window {
    apiMetrics?: {
      get: typeof getApiMetrics;
      reset: typeof resetApiMetrics;
      print: typeof printApiMetrics;
    };
    __apiMetrics?: {
      get: typeof getApiMetrics;
      reset: typeof resetApiMetrics;
      print: typeof printApiMetrics;
    };
  }
}
if (typeof window !== 'undefined') {
  const api = { get: getApiMetrics, reset: resetApiMetrics, print: printApiMetrics };
  window.apiMetrics = api;
  // 기존 사용 호환을 위해 alias 제공 (한 줄만 예외 허용)
  // eslint-disable-next-line no-underscore-dangle
  window.__apiMetrics = api;
}
