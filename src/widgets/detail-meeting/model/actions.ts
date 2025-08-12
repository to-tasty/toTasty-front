import { deriveUiStatus, isMeetingStarted, isRecruitmentClosed } from './getVisibleActions';
import { ActionDef, ActionId, ButtonVariant, FooterCtx, MeetingStatus, Role } from './types';

export const ACTIONS: ActionDef[] = [
  {
    id: ActionId.Login,
    label: '로그인하기',
    visibleIf: (c) =>
      deriveUiStatus(c) === MeetingStatus.open && !isRecruitmentClosed(c) && c.role === Role.guest,
    variant: ButtonVariant.Default,
    handlerKey: 'onLogin',
    order: 12,
  },
  {
    id: ActionId.DisabledClosed,
    label: '모임 종료',
    visibleIf: (c: FooterCtx) => {
      const ui = deriveUiStatus(c);
      return ui === MeetingStatus.closed || ui === MeetingStatus.cancelled;
    },
    disabled: () => true,
    variant: ButtonVariant.Outline,
    handlerKey: 'onNoop',
    order: 10,
  },
  {
    id: ActionId.DisabledFull,
    label: '모집 마감',
    visibleIf: (c: FooterCtx) =>
      deriveUiStatus(c) === MeetingStatus.open && !isMeetingStarted(c) && isRecruitmentClosed(c),
    disabled: () => true,
    variant: ButtonVariant.Outline,
    handlerKey: 'onNoop',
    order: 11,
  },
  {
    id: ActionId.Join,
    label: '참여하기',
    visibleIf: (c) =>
      deriveUiStatus(c) === MeetingStatus.open &&
      !isRecruitmentClosed(c) &&
      c.role === Role.member &&
      !c.isParticipated,
    variant: ButtonVariant.Default,
    handlerKey: 'onJoin',
    order: 13,
  },
  {
    id: ActionId.CancelJoin,
    label: '참여취소',
    visibleIf: (c) =>
      deriveUiStatus(c) === MeetingStatus.open &&
      !isRecruitmentClosed(c) &&
      c.role === Role.member &&
      c.isParticipated,
    variant: ButtonVariant.Outline,
    handlerKey: 'onCancelJoin',
    order: 14,
  },
  {
    id: ActionId.WriteReview,
    label: '리뷰 작성하기',
    visibleIf: (c) => {
      const ui = deriveUiStatus(c);
      const ended =
        ui === MeetingStatus.closed || ui === MeetingStatus.cancelled || isMeetingStarted(c);
      const canWrite = c.role === Role.host || c.isParticipated;
      return ended && canWrite && !c.isReviewed;
    },
    variant: ButtonVariant.Default,
    handlerKey: 'onWriteReview',
    order: 20,
  },
  {
    id: ActionId.Share,
    label: '공유하기',
    visibleIf: (c) => {
      const ui = deriveUiStatus(c);
      const ended =
        ui === MeetingStatus.closed || ui === MeetingStatus.cancelled || isMeetingStarted(c);
      return ended && !!c.isReviewed && c.role !== Role.guest;
    },
    variant: ButtonVariant.Outline,
    handlerKey: 'onShare',
    order: 21,
  },
  {
    id: ActionId.CancelMeeting,
    label: '모임 취소하기',
    visibleIf: (c) =>
      c.role === Role.host &&
      deriveUiStatus(c) === MeetingStatus.open &&
      !isRecruitmentClosed(c) &&
      !isMeetingStarted(c),
    variant: ButtonVariant.Outline,
    handlerKey: 'onCancelMeeting',
    order: 15,
  },
];
