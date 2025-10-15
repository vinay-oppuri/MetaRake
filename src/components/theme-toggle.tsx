'use client';

import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex w-full items-center justify-between">
      <span>Theme</span>
      <div className="flex items-center rounded-full border p-1">
        <button
          onClick={() => setTheme('light')}
          className={`rounded-full p-1.5 ${
            theme === 'light' ? 'bg-muted' : ''
          }`}
        >
          <Sun className="h-4 w-4" />
        </button>
        <button
          onClick={() => setTheme('dark')}
          className={`rounded-full p-1.5 ${
            theme === 'dark' ? 'bg-muted' : ''
          }`}
        >
          <Moon className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
