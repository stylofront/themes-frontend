'use client';

import * as React from 'react';
import { useTheme } from 'next-themes';
import { Monitor, Moon, Sun } from 'lucide-react';
import { VariantProps } from 'class-variance-authority';

import {
  ThemeToggler as ThemeTogglerPrimitive,
  type ThemeTogglerProps as ThemeTogglerPrimitiveProps,
  type ThemeSelection,
  type Resolved,
} from '@/components/animate-ui/primitives/effects/theme-toggler';
import { buttonVariants } from '@/components/animate-ui/components/buttons/icon';
import { cn } from '@/lib/utils';

const getIcon = (
  effective: ThemeSelection,
  resolved: Resolved,
  modes: ThemeSelection[],
) => {
  const theme = modes.includes('system') ? effective : resolved;
  return theme === 'system' ? (
    <Monitor />
  ) : theme === 'dark' ? (
    <Moon />
  ) : (
    <Sun />
  );
};

const getNextTheme = (
  effective: ThemeSelection,
  modes: ThemeSelection[],
): ThemeSelection => {
  const i = modes.indexOf(effective);
  if (i === -1) return modes[0];
  return modes[(i + 1) % modes.length];
};

type ThemeTogglerButtonProps = React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    modes?: ThemeSelection[];
    onImmediateChange?: ThemeTogglerPrimitiveProps['onImmediateChange'];
    direction?: ThemeTogglerPrimitiveProps['direction'];
  };

function ThemeTogglerButton({
  variant = 'default',
  size = 'default',
  modes = ['light', 'dark', 'system'],
  direction = 'ttb',
  onImmediateChange,
  onClick,
  className,
  ...props
}: ThemeTogglerButtonProps) {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // Prevent hydration mismatch by only rendering theme-dependent content after mount
  React.useEffect(() => {
    setMounted(true);
  }, []);

  // Use default values during SSR to match initial client render
  // next-themes returns undefined during SSR, so we use 'system' as default
  const safeTheme = (mounted && theme ? theme : 'system') as ThemeSelection;
  const safeResolvedTheme = (mounted && resolvedTheme ? resolvedTheme : 'light') as Resolved;

  return (
    <ThemeTogglerPrimitive
      theme={safeTheme}
      resolvedTheme={safeResolvedTheme}
      setTheme={setTheme}
      direction={direction}
      onImmediateChange={onImmediateChange}
    >
      {({ effective, resolved, toggleTheme }) => {
        // During SSR and before mount, render a consistent default icon
        // This ensures server and client render the same initial HTML
        const icon = mounted && theme !== undefined && resolvedTheme !== undefined
          ? getIcon(effective, resolved, modes)
          : <Sun />;

        return (
          <button
            data-slot="theme-toggler-button"
            aria-label="Toggle theme"
            className={cn(buttonVariants({ variant, size, className }))}
            onClick={(e) => {
              onClick?.(e);
              toggleTheme(getNextTheme(effective, modes));
            }}
            {...props}
          >
            {icon}
          </button>
        );
      }}
    </ThemeTogglerPrimitive>
  );
}

export { ThemeTogglerButton, type ThemeTogglerButtonProps };
