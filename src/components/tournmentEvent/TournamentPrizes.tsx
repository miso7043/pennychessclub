import { Trophy, Medal } from "lucide-react";

// 1st 칸 트로피+금액 표시용 내부 컴포넌트
function TrophyCell({ value }: { value: number | null }) {
  return (
    <span className="flex flex-col items-center justify-center md:inline-flex md:flex-row md:items-center md:gap-5 gap-1">
      <Trophy className="size-4 text-yellow-600" />
      <span>{value !== null && value !== undefined ? value : ""}</span>
    </span>
  );
}

export interface PrizeSectionInterface {
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

export interface PrizeTableRow {
  section: string;
  first: number | null;
  second: number | null;
  third: number | null;
  subtotal: number;
  type: "main" | "women";
}

export type PrizeTableInfo = PrizeTableRow[][];

export interface TournamentPrizesInterface {
  /** Prize sections configuration */
  notes?: {
    icon: string,
    iconColor?: string,
    prizes: Array<{ place: string; amount: string }>;
  },
  prizes?: Array<{
    title: string;
    icon: "trophy" | "medal";
    iconColor?: string;
    prizeList: Array<{ place: string; amount: string }>;
  }>;
  gridCols?: string;
  prizeTableInfo?: PrizeTableInfo;
}

const defaultSections: PrizeSectionInterface[] = [
  {
    title: "Premier",
    icon: "trophy",
    iconColor: "text-yellow-100/30",
    prizes: [
      { place: "1st:", placeColor: "text-yellow-700", amount: "$100" },
      { place: "2nd:", placeColor: "text-gray-700", amount: "$50" },
      { place: "3rd:", placeColor: "text-amber-700", amount: "$30" },
    ],
  },
  {
    title: "U1400",
    icon: "medal",
    iconColor: "text-amber-100/30",
    prizes: [
      { place: "1st:", placeColor: "text-yellow-700", amount: "$50" },
      { place: "2nd:", placeColor: "text-gray-700", amount: "Medal" },
      { place: "3rd:", placeColor: "text-amber-700", amount: "Medal" },
    ],
  },
];

export default function TournamentPrizes({
  notes,
  prizes,
  gridCols = "grid-cols-1 md:grid-cols-2",
  prizeTableInfo
}: TournamentPrizesInterface) {
  // prizeTableInfo가 있으면 테이블로 렌더링
  if (prizeTableInfo && prizeTableInfo.length > 0) {
    return (
      <>
        {prizeTableInfo.map((table, tableIdx) => (
          <div key={tableIdx} className="mb-8">
            <table className="w-full border-collapse mb-6 text-center">
              <thead>
                <tr>
                  <th className="bg-green-100/70 text-zinc-900 font-bold py-2">{tableIdx === 0 ? "2025 BC Open" : "2025 BC Open Blitz"}</th>
                  <th className="bg-green-100/70 text-zinc-900 font-bold">1st</th>
                  <th className="bg-green-100/70 text-zinc-900 font-bold">2nd</th>
                  <th className="bg-green-100/70 text-zinc-900 font-bold">3rd</th>
                  <th className="bg-green-100/70 text-zinc-900 font-bold">Sub-Total</th>
                </tr>
              </thead>
              <tbody>
                {table.map((row, idx) => (
                  <tr key={idx} className={row.type === "main" ? "bg-blue-300 text-stone-900" : "bg-yellow-100"}>
                    <td className="py-5 md:py-2">{row.section}</td>
                    <td><TrophyCell value={row.first} /></td>
                    <td><TrophyCell value={row.second} /></td>
                    <td><TrophyCell value={row.third} /></td>
                    <td>{row.subtotal}</td>
                  </tr>
                ))}
                <tr className="bg-gray-300 font-bold">
                  <td className="py-5 md:py-2">Total</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>{table.reduce((sum, row) => sum + row.subtotal, 0)}</td>
                </tr>
              </tbody>
            </table>
          </div>
        ))}
      </>
    );
  }
  // prizes가 없으면 기존 defaultSections 사용
  if (notes && notes.prizes.length > 0 && (!prizes || prizes.length === 0)) {
    return (
      <>
        {notes && (
          <div className="mt-8">
            <h4 className="font-bold text-lg flex items-center gap-2">
              {notes.icon === "trophy" ? (
                <Trophy className={`size-5 ${notes.iconColor || "text-yellow-100/30"}`} />
              ) : (
                <Medal className={`size-5 ${notes.iconColor || "text-amber-100/30"}`} />
              )}{" "}
              Notes
            </h4>
            <ul className="mt-2 space-y-1 text-gray-700">
              {notes.prizes.map((note, idx) => (
                <li key={idx}>{note.place && <span className="font-semibold">{note.place}:</span>} {note.amount}</li>
              ))}
            </ul>
          </div>
        )}
      </>
    );
  }
  else if (!prizes || prizes.length === 0) {
    return (
      <div className={`grid ${gridCols} gap-6`}>
        {defaultSections.map((section, idx) => (
          <div key={idx} className="rounded-xl border border-gray-400 p-6">
            <h3 className="font-bold text-xl text-gray-900 flex items-center gap-2">
              {section.icon === "trophy" ? (
                <Trophy className={`size-5 ${section.iconColor || "text-yellow-100/30"}`} />
              ) : (
                <Medal className={`size-5 ${section.iconColor || "text-amber-100/30"}`} />
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

  // prizes가 있으면 새로운 구조로 렌더링
  return (
    <>
      <div className={`grid ${gridCols} gap-6`}>
        {prizes.map((section, idx) => (
          <div key={idx} className="rounded-xl border border-gray-400 p-6">
            <h3 className="font-bold text-xl text-gray-900 flex items-center gap-2">
              {section.icon === "trophy" ? (
                <Trophy className={`size-5 ${section.iconColor || "text-yellow-100/30"}`} />
              ) : (
                <Medal className={`size-5 ${section.iconColor || "text-amber-100/30"}`} />
              )}{" "}
              {section.title}
            </h3>
            <ul className="mt-3 space-y-2 text-gray-700">
              {section.prizeList.map((prize, prizeIdx) => (
                <li key={prizeIdx}>
                  <span className="font-semibold text-gray-700">{prize.place}</span> {prize.amount}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      {notes && (
        <div className="mt-8">
          <h4 className="font-bold text-lg flex items-center gap-2">
            {notes.icon === "trophy" ? (
              <Trophy className={`size-5 ${notes.iconColor || "text-yellow-100/30"}`} />
            ) : (
              <Medal className={`size-5 ${notes.iconColor || "text-amber-100/30"}`} />
            )}{" "}
            Notes
          </h4>
          <ul className="mt-2 space-y-1 text-gray-700">
            {notes.prizes.map((note, idx) => (
              <li key={idx}><span className="font-semibold">{note.place}:</span> {note.amount}</li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
