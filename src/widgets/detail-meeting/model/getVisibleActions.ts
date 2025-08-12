import { ACTIONS } from './actions';
import type { FooterCtx, ActionDef } from './types';

export function getVisibleActions(ctx: FooterCtx): ActionDef[] {
  return ACTIONS.filter((a) => a.visibleIf(ctx)).sort(
    (a, b) => (a.order ?? 100) - (b.order ?? 100),
  );
}

export function isRecruitmentClosed(ctx: FooterCtx): boolean {
  const end = new Date(ctx.joinEndAt).getTime();
  return Number.isFinite(end) && Date.now() >= end;
}
