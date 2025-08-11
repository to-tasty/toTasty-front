export function getFormattedDate(dateStr: string): string {
  if (!dateStr) return '';

  try {
    const date = new Date(dateStr);
    const month = date.getMonth() + 1;
    const day = date.getDate();

    return `${month}월 ${day}일`;
  } catch (error) {
    console.error('날짜 형식 변환 오류:', error);
    return '';
  }
}

export function getFormattedTime(dateStr: string, variant: string = ''): string {
  if (!dateStr) return '';

  try {
    const date = new Date(dateStr);
    const hours = date.getHours();
    const minutes = date.getMinutes();

    const formattedHours = hours < 10 ? `0${hours}` : hours;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

    return variant === 'withText'
      ? `${formattedHours}시 ${formattedMinutes}분`
      : `${formattedHours}:${formattedMinutes}`;
  } catch (error) {
    console.error('시간 형식 변환 오류:', error);
    return '';
  }
}
