export function isActiveTab(pathname: string, href: string): boolean {
  // pathname이 href와 일치하거나, href로 시작하는 경우 true를 반환
  return pathname === href || pathname.startsWith(`${href}/`);
}
