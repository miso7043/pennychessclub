import { Clock as ClockIcon } from "lucide-react";

interface DeadlineItemProps {
  /** Tournament name or label */
  label: string;
  /** Deadline date and time */
  deadline: string;
  /** Optional custom styling */
  className?: string;
}

export default function DeadlineItem({ label, deadline, className = "" }: DeadlineItemProps) {
  return (
    <div className={`rounded-xl border border-gray-400 p-5 ${className}`}>
      <p className="text-sm text-gray-500">{label}</p>
      <p className="mt-1 font-semibold text-gray-900 flex items-center gap-2">
        <ClockIcon className="size-4" /> {deadline}
      </p>
    </div>
  );
}
