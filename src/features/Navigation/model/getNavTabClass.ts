import clsx from 'clsx';

export function getNavTabClass(isActive: boolean) {
  // 내비게이션 탭의 클래스 이름을 반환하는 함수
  // isActive가 true일 경우 강조 스타일을 적용
  return clsx('text-base hover:bg-transparent focus:bg-transparent', {
    'font-bold text-[#676DFF] focus:text-[#676DFF] hover:text-[#676DFF]': isActive,
  });
}
