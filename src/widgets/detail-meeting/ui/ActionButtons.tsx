'use client';

import { Button } from '@/shared/ui';
import { getVisibleActions } from '../model/getVisibleActions';
import { FooterCtx, Handlers, ButtonVariant } from '../model/types';

export default function ActionButtons({ ctx, handlers }: { ctx: FooterCtx; handlers: Handlers }) {
  const actions = getVisibleActions(ctx);

  if (actions.length === 0) {
    return (
      <Button variant="outline" disabled className="px-6 py-5 min-w-[120px] text-muted-foreground">
        진행 불가
      </Button>
    );
  }

  const call = (key: keyof Handlers) => () => (handlers[key] ?? handlers.onNoop)?.();

  return (
    <>
      {actions.map((a) => {
        const disabled = a.disabled?.(ctx) ?? false;
        const variant = a.variant === ButtonVariant.Outline ? 'outline' : 'default';
        return (
          <Button
            key={a.id}
            variant={variant}
            disabled={disabled}
            onClick={call(a.handlerKey)}
            className={`px-6 py-5 min-w-[120px] ${disabled ? 'text-muted-foreground' : 'text-white'}`}
          >
            {a.label}
          </Button>
        );
      })}
    </>
  );
}
