type ChipProps = {
  label: string;
  selected?: boolean;
  onClick?: () => void;
  className?: string;
};

export default function Chip({ label, selected = false, onClick, className = '' }: ChipProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`px-4 h-8 rounded-full text-sm font-medium transition-colors w-10
        ${selected ? 'bg-[#0A1320] text-white' : 'bg-[#E3E6EB] text-[#0A1320]'}
        ${className}`}
    >
      {label}
    </button>
  );
}
