import { Button } from '@/shared/ui';
import { useThemeEffect, useThemeStore } from '@/shared/theme';
import { Theme } from '@/shared/theme/model/types';
import { Moon, Sun } from 'lucide-react';

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
      {theme === Theme.dark ? <Sun /> : <Moon />}
    </Button>
  );
}
