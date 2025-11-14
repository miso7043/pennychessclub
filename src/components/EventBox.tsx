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
  const tones: Record<string, { bg: string; border: string; text: string; hover: string }> = {
    blue: {
      bg: "bg-gradient-to-br from-blue-500/30 to-blue-600/30",
      border: "border-blue-400/30",
      text: "text-zinc-900",
      hover: "hover:from-blue-200 hover:to-blue-300 hover:shadow-lg hover:shadow-blue-500/30",
    },
    green: {
      bg: "bg-gradient-to-br from-emerald-500/30 to-emerald-600/30",
      border: "border-emerald-400/30",
      text: "text-zinc-900",
      hover: "hover:from-emerald-200 hover:to-emerald-300 hover:shadow-lg hover:shadow-emerald-500/30",
    },
    purple: {
      bg: "bg-gradient-to-br from-purple-500/30 to-purple-600/30",
      border: "border-purple-400/30",
      text: "text-zinc-900",
      hover: "hover:from-purple-200 hover:to-purple-300 hover:shadow-lg hover:shadow-purple-500/30",
    },
  };

  const currentTone = tones[tone];

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative inline-flex flex-col items-center justify-center gap-2 rounded-xl px-6 py-3.5 font-semibold ${currentTone.text} ${currentTone.bg} ${currentTone.hover} border ${currentTone.border} shadow-md transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus-visible:ring-4 focus-visible:ring-offset-2 focus-visible:ring-${tone}-300`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="size-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      >
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
        <polyline points="15 3 21 3 21 9" />
        <line x1="10" x2="21" y1="14" y2="3" />
      </svg>
      <span className="text-sm font-bold tracking-wide">{children}</span>
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
