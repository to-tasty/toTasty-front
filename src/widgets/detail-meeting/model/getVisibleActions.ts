import { ACTIONS } from './actions';
import type { FooterCtx, ActionDef } from './types';

export function getVisibleActions(ctx: FooterCtx): ActionDef[] {
  return ACTIONS.filter((a) => a.visibleIf(ctx));
}
