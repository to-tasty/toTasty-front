import Image from 'next/image';

interface TastingCardProps {
  isActive?: boolean;
}

export default function TastingCard({ isActive = true }: TastingCardProps) {
  return (
    <div
      className={'w-[100px] hover:scale-103 transition-all duration-300 ease-in-out cursor-pointer'}
    >
      <div
        className={`relative w-full h-[140px] rounded-lg overflow-hidden ${isActive ? 'border-1' : ''}`}
      >
        <Image src="/images/testImage.png" alt="스타벅스 에티오피아 원두" fill objectFit="cover" />
      </div>
      <p
        className="mt-2 text-sm font-medium text-center break-words line-clamp-2 overflow-hidden text-ellipsis"
        style={{
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        }}
      >
        스타벅스 에티오피아 원두스타벅스 에티오피아 원두
      </p>
    </div>
  );
}
