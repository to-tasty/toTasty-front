import { Button } from '@/shared';
import { useThemeEffect, useThemeStore } from '@/shared/lib/theme';
import { Theme } from '@/shared/lib/theme/model/types';

export default function ThemeToggleButton() {
  const { theme, toggleTheme } = useThemeStore();
  useThemeEffect();

  return (
    <Button
      variant="ghost"
      onClick={toggleTheme}
      className="px-3 py-2 rounded transition-colors hover:bg-primary/10"
      aria-label="다크모드 토글"
    >
      {theme === Theme.dark ? '☀️' : '🌙'}
    </Button>
  );
}
