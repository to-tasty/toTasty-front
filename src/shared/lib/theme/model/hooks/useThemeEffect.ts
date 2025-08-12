import { useEffect } from 'react';
import { Theme } from '../types';
import useThemeStore from './useThemeStore';

export default function useThemeEffect() {
  const theme = useThemeStore((s) => s.theme);
  useEffect(() => {
    if (theme === Theme.dark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);
}
