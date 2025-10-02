import { MeetingDetailInfo } from '@/entities/meetings';
import { UserRole } from '@/shared/constants/user';

export interface FooterCtx {
  role: UserRole;
  status: MeetingStatus;
  current: number;
  max: number;
  fee: number;
  isParticipated: boolean;
  isReviewed?: boolean;
  joinEndAt: string;
  startAt: string;
}

export enum MeetingStatus {
  open = 'open',
  closed = 'closed',
  cancelled = 'cancelled',
}

export interface Handlers {
  onLogin: () => void;
  onJoin: () => void;
  onCancelJoin: () => void;
  onWriteReview: () => void;
  onShare: () => void;
  onCancelMeeting: () => void;
  onNoop?: () => void;
}

export enum ButtonVariant {
  Default = 'default',
  Outline = 'outline',
}

export interface MeetingFooterProps {
  meeting: MeetingDetailInfo;
  role?: UserRole;
  isHost?: boolean;
  handlers: Handlers;
}

export enum ActionId {
  Login = 'login',
  Join = 'join',
  CancelJoin = 'cancelJoin',
  WriteReview = 'writeReview',
  Share = 'share',
  CancelMeeting = 'cancelMeeting',
  DisabledFull = 'disabledFull',
  DisabledClosed = 'disabledClosed',
}

export interface ActionDef {
  id: ActionId;
  label: string;
  visibleIf: (ctx: FooterCtx) => boolean;
  disabled?: (ctx: FooterCtx) => boolean;
  variant?: ButtonVariant;
  handlerKey: keyof Handlers;
  order?: number;
}
