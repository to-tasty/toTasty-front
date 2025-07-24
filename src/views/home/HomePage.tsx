import NewMeetingCardArea from '@/entities/homeMeetingCard/ui/newMeetingCardArea';

export default function HomePage() {
  return (
    <main className="flex items-center justify-center flex-col gap-4 py-[40px]">
      <div>
        <h1 className="font-semibold text-xl pb-[20px]">신규모임</h1>
        <NewMeetingCardArea />
      </div>
      <div>
        <h1 className="font-semibold text-xl pb-[20px]">인기모임</h1>
        <NewMeetingCardArea />
      </div>
      <div>
        <h1 className="font-semibold text-xl pb-[20px]">내가 좋아할 모임</h1>
        <div className="flex justify-center items-center text-center w-[1142px] h-[383px] bg-white text-gray-040">
          아직 내가 좋아할 모임이 없어요.
        </div>
      </div>
      <div>
        <h1 className="font-semibold text-xl pb-[20px]">위시리스트</h1>
        <div className="flex justify-center items-center text-center w-[1142px] h-[383px] bg-white text-gray-040">
          아직 위시리스트가 없어요.
          <br />
          지금 바로 모임을 찜해보세요.
        </div>
      </div>
    </main>
  );
}

/*

여기서 4개로 자름

신규모임 - 그냥 최신글 10개
<캐러셀>
  <카드 컴포넌트>
</캐러셀>

인기모임 - 좋아요 많은 순 10개

내가 좋아할 모임 - 내가 선택한 음료 최신글 10개

위시리스트 - 내가 좋아요 누른 최신글 10개

*/
