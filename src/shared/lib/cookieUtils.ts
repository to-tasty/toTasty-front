export function getCookie(name: string): string | null {
  const cookies = Object.fromEntries(document.cookie.split('; ').map((c) => c.split('=')));
  return cookies[name] || null;
}

export function setCookie(name: string, value: string, maxAge: number) {
  document.cookie = `${name}=${value}; path=/; max-age=${maxAge}; secure; samesite=strict`;
}

export function deleteCookie(name: string) {
  document.cookie = `${name}=; path=/; max-age=0; secure; samesite=strict`;
}
