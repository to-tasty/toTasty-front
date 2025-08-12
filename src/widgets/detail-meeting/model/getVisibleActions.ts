import { ACTIONS } from './actions';
import type { FooterCtx, ActionDef } from './types';

function toMs(s: string): number {
  const t = new Date(s).getTime();
  return Number.isFinite(t) ? t : NaN;
}

export function getVisibleActions(ctx: FooterCtx): ActionDef[] {
  return ACTIONS.filter((a) => a.visibleIf(ctx)).sort(
    (a, b) => (a.order ?? 100) - (b.order ?? 100),
  );
}

export function isRecruitmentClosed(ctx: FooterCtx): boolean {
  const end = new Date(ctx.joinEndAt).getTime();
  return Number.isFinite(end) && Date.now() >= end;
}

export function isMeetingStarted(ctx: FooterCtx): boolean {
  const start = toMs(ctx.startAt);
  return Number.isFinite(start) && Date.now() >= start;
}

export function deriveUiStatus(ctx: FooterCtx): 'open' | 'closed' | 'cancelled' {
  if (ctx.status === 'cancelled') return 'cancelled';
  if (isMeetingStarted(ctx)) return 'closed';
  return ctx.status;
}
