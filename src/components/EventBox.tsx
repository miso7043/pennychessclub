import React from "react";
import { Calendar, Clock as ClockIcon } from "lucide-react";

// Badge component
const Badge: React.FC<React.PropsWithChildren<{ tone?: "blue" | "green" | "orange" | "slate" }>> = ({
  tone = "slate",
  children,
}) => {
  const tones: Record<string, string> = {
    blue: "bg-blue-50 text-blue-700 ring-blue-200",
    green: "bg-emerald-50 text-emerald-700 ring-emerald-200",
    orange: "bg-amber-50 text-amber-700 ring-amber-200",
    slate: "bg-slate-50 text-slate-700 ring-slate-200",
  };
  return (
    <span className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-medium ring-1 ${tones[tone]}`}>
      {children}
    </span>
  );
};

// CTAButton component
const CTAButton: React.FC<React.PropsWithChildren<{ href: string; tone?: "blue" | "green" | "purple" }>> = ({
  href,
  tone = "blue",
  children,
}) => {
  const tones: Record<string, string> = {
    blue: "bg-blue-600 hover:bg-blue-700 focus-visible:ring-blue-300",
    green: "bg-emerald-600 hover:bg-emerald-700 focus-visible:ring-emerald-300",
    purple: "bg-purple-600 hover:bg-purple-700 focus-visible:ring-purple-300",
  };
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex flex-col items-center justify-center gap-2 rounded-xl px-15 md:px-5 py-3 font-semibold text-white transition-colors focus:outline-none focus-visible:ring-4 ${tones[tone]}`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="size-5 opacity-90 transition-transform group-hover:-translate-y-0.5"
      >
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
        <polyline points="15 3 21 3 21 9" />
        <line x1="10" x2="21" y1="14" y2="3" />
      </svg>
      <span className="text-sm">{children}</span>
    </a>
  );
};

export interface EventCTA {
  label: string;
  href: string;
  tone: "blue" | "green" | "purple";
}

export interface EventSchedule {
  summary: string;
  rounds: string[];
}

interface EventBoxProps {
  /** Event ID for badge tone determination */
  eventId: string;
  /** Date label to display */
  dateLabel: string;
  /** Event title */
  title: string;
  /** Event rating info */
  rated: string;
  /** Array of CTA buttons */
  ctas: EventCTA[];
  /** Schedule information */
  schedule: EventSchedule;
  /** Badge tone (auto-determined by eventId if not provided) */
  badgeTone?: "blue" | "green" | "orange" | "slate";
}

export default function EventBox({ eventId, dateLabel, title, rated, ctas, schedule, badgeTone }: EventBoxProps) {
  const tone = badgeTone || (eventId === "nov" ? "blue" : "green");

  return (
    <>
      <div className="flex flex-col items-center text-center">
        <Badge tone={tone}>
          <Calendar className="size-4 mr-1.5" /> {dateLabel}
        </Badge>
        <h2 className="mt-3 text-2xl font-bold text-gray-900">{title}</h2>
        <p className="text-gray-600 mt-1 font-medium">{rated}</p>
        <div className={`mt-5 grid grid-cols-1 sm:grid-cols-${ctas.length} gap-3 w-full`}>
          {ctas.map((c) => (
            <CTAButton key={c.label} href={c.href} tone={c.tone}>
              {c.label}
            </CTAButton>
          ))}
        </div>
      </div>
      <div className="mt-6 rounded-xl bg-gray-50/70 backdrop-blur-sm p-4">
        <p className="font-semibold text-gray-800 flex items-center gap-2">
          <ClockIcon className="size-4" /> Tournament Schedule: {schedule.summary}
        </p>
        <div className="mt-2 grid grid-cols-2 sm:grid-cols-5 gap-2">
          {schedule.rounds.map((t, idx) => (
            <div key={idx} className="rounded-lg bg-white/70 backdrop-blur-sm border border-gray-200/60 px-3 py-2 text-center text-sm font-medium text-gray-700">
              R{idx + 1}: {t}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
