export interface WishButtonProps {
  isWished: boolean;
  meetingId: number;
  onWishChange?: (newIsWished: boolean) => void;
}
