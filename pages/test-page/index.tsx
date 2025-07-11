import Chip from '@/shared/ui/Chip/Chip';

export default function TestPage() {
  return (
    <div className="flex flex-col">
      <div>This Page is test Page.</div>;
      <Chip label="전체" selected />
      <Chip label="전체" />
      <Chip label="전체" selected />
      <Chip label="전체" />
    </div>
  );
}
