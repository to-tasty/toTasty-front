'use client';

import { useState } from 'react';
import { Heart, Check } from 'lucide-react';
import { Button, Popover, PopoverContent, PopoverTrigger } from '@/shared/ui';
import { usePostWishlistMutation, useDeleteWishlistMutation } from '@/features/wishlist';
import { useUserStore } from '@/entities/user';
import { WishButtonProps } from '../model/types';

export default function WishButton({
  isWished: initialWished,
  meetingId,
  onWishChange,
}: WishButtonProps) {
  const [isWished, setIsWished] = useState(initialWished);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [popoverMessage, setPopoverMessage] = useState('');

  const { isLoggedIn, accessToken } = useUserStore((state) => state);

  const postWishlist = usePostWishlistMutation();
  const deleteWishlist = useDeleteWishlistMutation();

  const isLoading = postWishlist.isPending || deleteWishlist.isPending;

  const toggleWish = async () => {
    // 로그인 상태 확인
    if (!isLoggedIn || !accessToken) {
      setPopoverMessage('로그인 후 이용할 수 있습니다');
      setIsPopoverOpen(true);
      setTimeout(() => setIsPopoverOpen(false), 3000);
      return;
    }

    try {
      if (!isWished) {
        console.log('위시리스트 추가 요청:', { meetingId, accessToken: !!accessToken });
        await postWishlist.mutateAsync(meetingId);
        setIsWished(true);
        setPopoverMessage('관심 모임에 추가됐어요!');
      } else {
        console.log('위시리스트 삭제 요청:', { meetingId, accessToken: !!accessToken });
        await deleteWishlist.mutateAsync(meetingId);
        setIsWished(false);
        setPopoverMessage('관심 모임에서 제외됐어요');
      }

      if (onWishChange) {
        onWishChange(!isWished);
      }

      setIsPopoverOpen(true);

      setTimeout(() => {
        setIsPopoverOpen(false);
      }, 3000);
    } catch (error) {
      console.error('좋아요 토글 에러:', error);
      const errorMessage = '요청 처리에 실패했습니다';
      // if (error.response?.status === 401) {
      //   errorMessage = '로그인 세션이 만료되었습니다';
      //   선택적: 자동 로그아웃 처리
      //   useUserStore.getState().logout();
      // }
      setPopoverMessage(errorMessage);
      setIsPopoverOpen(true);
    }
  };

  return (
    <Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          className="bg-transparent hover:bg-transparent group"
          onClick={toggleWish}
          disabled={isLoading}
          aria-label={isWished ? '관심 모임에서 제거' : '관심 모임에 추가'}
        >
          <Heart
            className={
              isWished ? 'fill-danger/70 text-danger/70' : 'text-muted group-hover:fill-danger/70'
            }
          />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-3" side="bottom" align="end">
        <div className="flex items-center gap-2">
          <Check className="h-4 w-4 text-green-500" />
          <span className="text-sm font-medium">{popoverMessage}</span>
        </div>
      </PopoverContent>
    </Popover>
  );
}
