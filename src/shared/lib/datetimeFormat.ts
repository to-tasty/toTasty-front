export function formatDate(d: Date) {
  try {
    // month/day를 숫자로만 받아서 직접 "월 일" 붙이기
    const parts = new Intl.DateTimeFormat('ko-KR', { month: 'numeric', day: 'numeric' })
      .formatToParts(d)
      .reduce<Record<string, string>>((acc, part) => {
        if (part.type !== 'literal') acc[part.type] = part.value;
        return acc;
      }, {});

    return `${parts.month}월 ${parts.day}일`;
  } catch {
    return '';
  }
}

export function formatTime(d: Date) {
  try {
    return new Intl.DateTimeFormat('ko-KR', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    }).format(d);
  } catch {
    return '';
  }
}

export function clampRating(r: number) {
  if (Number.isNaN(r)) return 0;
  return Math.max(0, Math.min(5, Math.round(r)));
}
