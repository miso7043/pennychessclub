import React from "react";
import { Trophy, Medal } from "lucide-react";

export interface PrizeSection {
  /** Section title (e.g., "Premier", "U1400") */
  title: string;
  /** Icon type */
  icon?: "trophy" | "medal";
  /** Icon color class */
  iconColor?: string;
  /** List of prizes */
  prizes: Array<{
    place: string; // e.g., "1st", "2nd", "3rd"
    placeColor?: string; // Tailwind color class for place text
    amount: string; // e.g., "$100", "Medal"
  }>;
}

interface TournamentPrizesProps {
  /** Prize sections configuration */
  sections?: PrizeSection[];
  /** Custom layout classes */
  gridCols?: string;
}

const defaultSections: PrizeSection[] = [
  {
    title: "Premier",
    icon: "trophy",
    iconColor: "text-yellow-600",
    prizes: [
      { place: "1st:", placeColor: "text-yellow-700", amount: "$100" },
      { place: "2nd:", placeColor: "text-gray-700", amount: "$50" },
      { place: "3rd:", placeColor: "text-amber-700", amount: "$30" },
    ],
  },
  {
    title: "U1400",
    icon: "medal",
    iconColor: "text-amber-600",
    prizes: [
      { place: "1st:", placeColor: "text-yellow-700", amount: "$50" },
      { place: "2nd:", placeColor: "text-gray-700", amount: "Medal" },
      { place: "3rd:", placeColor: "text-amber-700", amount: "Medal" },
    ],
  },
];

export default function TournamentPrizes({ 
  sections = defaultSections, 
  gridCols = "grid-cols-1 md:grid-cols-2" 
}: TournamentPrizesProps) {
  return (
    <div className={`grid ${gridCols} gap-6`}>
      {sections.map((section, idx) => (
        <div key={idx} className="rounded-xl border border-gray-400 p-6">
          <h3 className="font-bold text-xl text-gray-900 flex items-center gap-2">
            {section.icon === "trophy" ? (
              <Trophy className={`size-5 ${section.iconColor || "text-yellow-600"}`} />
            ) : (
              <Medal className={`size-5 ${section.iconColor || "text-amber-600"}`} />
            )}{" "}
            {section.title}
          </h3>
          <ul className="mt-3 space-y-2 text-gray-700">
            {section.prizes.map((prize, prizeIdx) => (
              <li key={prizeIdx}>
                <span className={`font-semibold ${prize.placeColor || "text-gray-700"}`}>{prize.place}</span> {prize.amount}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
