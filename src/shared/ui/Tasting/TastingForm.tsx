import Image from 'next/image';
import TextArea from '../TextArea/TextArea';

interface TastingFormProps {
  imageUrl: string;
  title: string;
}

export default function TastingForm({ imageUrl, title }: TastingFormProps) {
  return (
    <form className="flex flex-row items-center justify-between gap-4">
      <div className={`relative flex-1/2 h-96 rounded-lg overflow-hidden`}>
        <Image src={imageUrl} alt={title} fill objectFit="cover" />
      </div>
      <div className="flex-1/2 flex flex-col gap-4">
        <TextArea title={'향미'} />
        <TextArea title={'산미'} />
        <TextArea title={'바디감'} />
      </div>
    </form>
  );
}
