import React from "react";
import DeadlineItem from "./DeadlineItem";
import { getGridCols } from "../utils/gridUtils";

export interface DeadlineInfo {
  /** Tournament name or label */
  label: string;
  /** Deadline date and time */
  deadline: string;
}

interface TournamentDeadlinesProps {
  /** Array of deadline information */
  deadlines: DeadlineInfo[];
  /** Optional title override */
  title?: string;
  /** Optional subtitle override */
  subtitle?: string;
}

export default function TournamentDeadlines({
  deadlines,
  title = "Deadlines",
  subtitle = "Submit registration before these times",
}: TournamentDeadlinesProps) {
  return (
    <>
      {title && (
        <header className="mb-6">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900">{title}</h2>
          {subtitle && <p className="text-gray-600 mt-2">{subtitle}</p>}
        </header>
      )}
      <div className={`grid ${getGridCols(deadlines.length)} gap-6`}>
        {deadlines.map((item, idx) => (
          <DeadlineItem key={idx} label={item.label} deadline={item.deadline} />
        ))}
      </div>
    </>
  );
}
