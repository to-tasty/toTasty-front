import { ActionDef, ActionId, ButtonVariant, FooterCtx, MeetingStatus, Role } from './types';

export const ACTIONS: ActionDef[] = [
  {
    id: ActionId.Login,
    label: '로그인하기',
    visibleIf: (c: FooterCtx) => c.role === Role.guest && c.status === MeetingStatus.open,
    variant: ButtonVariant.Default,
    handlerKey: 'onLogin',
    order: 10,
  },
  {
    id: ActionId.DisabledClosed,
    label: '모임 종료',
    visibleIf: (c: FooterCtx) =>
      c.status === MeetingStatus.closed || c.status === MeetingStatus.cancelled,
    variant: ButtonVariant.Outline,
    handlerKey: 'onNoop',
    disabled: () => true,
    order: 20,
  },
  {
    id: ActionId.DisabledFull,
    label: '모집 마감',
    visibleIf: (c: FooterCtx) =>
      c.status === MeetingStatus.open && c.role !== Role.host && c.current >= c.max,
    variant: ButtonVariant.Outline,
    handlerKey: 'onNoop',
    disabled: () => true,
    order: 30,
  },
  {
    id: ActionId.Join,
    label: '참여하기',
    visibleIf: (c: FooterCtx) =>
      c.role === Role.member &&
      !c.isParticipated &&
      c.status === MeetingStatus.open &&
      c.current < c.max,
    variant: ButtonVariant.Default,
    handlerKey: 'onJoin',
    order: 10,
  },
  {
    id: ActionId.CancelJoin,
    label: '참여취소',
    visibleIf: (c: FooterCtx) =>
      c.role === Role.member && c.isParticipated && c.status === MeetingStatus.open,
    variant: ButtonVariant.Outline,
    handlerKey: 'onCancelJoin',
    order: 15,
  },
  {
    id: ActionId.WriteReview,
    label: '리뷰 작성하기',
    visibleIf: (c: FooterCtx) =>
      (c.status === MeetingStatus.closed || c.status === MeetingStatus.cancelled) &&
      c.role !== Role.guest &&
      c.isParticipated &&
      !c.isReviewed,
    variant: ButtonVariant.Default,
    handlerKey: 'onWriteReview',
    order: 5,
  },
  {
    id: ActionId.Share,
    label: '공유하기',
    visibleIf: (c: FooterCtx) =>
      (c.status === MeetingStatus.closed || c.status === MeetingStatus.cancelled) &&
      c.role !== Role.guest &&
      !!c.isReviewed,
    variant: ButtonVariant.Outline,
    handlerKey: 'onShare',
    order: 25,
  },
  {
    id: ActionId.CancelMeeting,
    label: '모임 취소하기',
    visibleIf: (c: FooterCtx) => c.role === Role.host && c.status === MeetingStatus.open,
    variant: ButtonVariant.Outline,
    handlerKey: 'onCancelMeeting',
    order: 12,
  },
];
