import Image from 'next/image';

interface TastingCardProps {
  title: string;
  imageUrl: string;
  isActive?: boolean;
  onClick?: () => void;
  className?: string;
  style?: React.CSSProperties;
}

export default function TastingCard({ title, imageUrl, isActive = true }: TastingCardProps) {
  return (
    <div
      className={'w-[100px] hover:scale-103 transition-all duration-300 ease-in-out cursor-pointer'}
    >
      <div
        className={`relative w-full h-[140px] rounded-lg overflow-hidden ${isActive ? 'border-1' : ''}`}
      >
        <Image src={imageUrl} alt={title} fill objectFit="cover" />
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
        {title}
      </p>
    </div>
  );
}
