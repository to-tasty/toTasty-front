import TastingCard from '@/shared/ui/Tasting/TastingCard';
import TastingForm from '@/shared/ui/Tasting/TastingForm';

export default function TestPage() {
  const title = '스타벅스 에티오피아 원두';
  const imageUrl = '/images/testImage.png';

  return (
    <div className="m-50">
      <TastingCard title={title} imageUrl={imageUrl} />
      <TastingForm title={title} imageUrl={imageUrl} />
    </div>
  );
}
