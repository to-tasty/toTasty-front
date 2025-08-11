export interface WishButtonProps {
  isWished: boolean;
  meetingId: number;
  onWishChange?: (newIsWished: boolean) => void;
}

export interface ContentBoxProps {
  title: string;
  content: string;
}
