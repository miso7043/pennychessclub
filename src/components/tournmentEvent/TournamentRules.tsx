import React, { useState } from "react";
import { ChevronDown, ChevronRight, Info } from "lucide-react";

// ---------- ACCORDION ----------
const AccordionItem: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      <button
        className="w-full flex items-center justify-between gap-4 px-4 py-3 text-left hover:bg-gray-50"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span className="font-semibold text-gray-900">{title}</span>
        {open ? <ChevronDown className="size-5 text-gray-500" /> : <ChevronRight className="size-5 text-gray-500" />}
      </button>
      {open && <div className="px-4 pb-4 pt-0">{children}</div>}
    </div>
  );
};

// ---------- RULES DATA ----------
const defaultRules = [
  {
    title: "I. Anti-cheating rules",
    content: (
      <div className="space-y-2 text-gray-700">
        <p>We will follow anti-cheating rules guidelines by FIDE. See details below:</p>
        <a
          className="text-blue-600 hover:underline break-all"
          href="https://www.fide.com/FIDE/handbook/Anti%20Cheating%20Guidelines.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://www.fide.com/FIDE/handbook/Anti%20Cheating%20Guidelines.pdf
        </a>
      </div>
    ),
  },
  { title: "II. Food", content: <p className="text-gray-700">You are allowed to bring snacks and non-alcoholic drinks to the playing venue, (e.g., fruits, chocolate, soft drinks, coffee, milk)</p> },
  {
    title: "III. CFC membership",
    content: (
      <div className="space-y-2 text-gray-700">
        <p>A valid CFC ID is required. If you need a new ID, register here:</p>
        <a
          className="text-blue-600 hover:underline"
          href="https://www.chess.ca/en/players/membership-join/"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://www.chess.ca/en/players/membership-join/
        </a>
      </div>
    ),
  },
  { title: "IV. Refusal Entry", content: <p className="text-gray-700">We reserve the right to refuse your entry.</p> },
  { title: "V. Refund", content: <p className="text-gray-700">Generally, we do not offer refunds. Requests will be assessed case by case.</p> },
  {
    title: "VI. Byes",
    content: (
      <ul className="list-disc list-inside space-y-1 text-gray-700">
        <li>If you request bye(s), please confirm with us prior to the deadline of registration.</li>
        <li>Bye requests for the next round received during the tournament may only be accepted before the pairings of the next round are published, either on the internet or at the playing venue. We will not accept any bye requests received afterwards.</li>
        <li>If your bye is allocated by the computer pairings (ie. not your request), you will have 1 point. </li>
        <li>If your bye is requested by you for round 1, 2 or 3, you will have 0.5 points per game</li>
        <li>If your bye is requested by you for round 4 or 5 you will have 0 point.</li>
        <li>You cannot request byes for more than 2 rounds.</li>
        <li>Tournament Director (TD) reserves the right to refuse your bye requests</li>
      </ul>
    ),
  },
  {
    title: "VII. 10 minutes tolerance", content:
      <ul className="list-disc list-inside space-y-1 text-gray-700">
        <li>10 minutes after round start, absent players forfeit (0 point).</li>
        <li>Players who cannot attend any round are encouraged to inform the TD or Arbiters before the start of the round.</li>
        <li>Players who are absent for 2 games without any notice to the TD or Arbiters will be removed from the tournament.</li>
      </ul>
  },
  {
    title: "VIII. Tie-break rules",
    content: (
      <ul className="list-disc list-inside space-y-1 text-gray-700">
        <li>1) Direct encounter</li>
        <li>2) Greater number of victories</li>
        <li>3) Buchholz</li>
      </ul>
    ),
  },
  {
    title: "IX. Electric devices rules",
    content: (
      <ol className="list-decimal list-inside space-y-1 text-gray-700">
        <li>No device use while playing unless approved by TD.</li>
        <li>Devices must be off and stored; remain at table if game in progress.</li>
        <li>Spectators: keep phones silent.</li>
        <li>Violations may lead to removal or investigation.</li>
      </ol>
    ),
  },
  { title: "X. Others", content: <p className="text-gray-700">We follow FIDE rules; TD's decision is final.</p> },
];

// ---------- COMPONENT ----------
interface TournamentRulesProps {
  /** Optional custom rules array. If not provided, default rules will be used. */
  rules?: Array<{ title: string; content: React.ReactNode }>;
  /** Optional custom footer note */
  footerNote?: string;
  /** Show/hide the footer note completely */
  showFooter?: boolean;
}

export default function TournamentRules({
  rules = defaultRules,
  footerNote = "We follow FIDE rules of chess. In case of disputes, the TD will make the final decision.",
  showFooter = true
}: TournamentRulesProps) {
  return (
    <div>
      <div className="space-y-3">
        {rules.map((r) => (
          <AccordionItem key={r.title} title={r.title}>
            {r.content}
          </AccordionItem>
        ))}
      </div>
      {showFooter && (
        <p className="text-sm text-gray-500 mt-4 flex items-center gap-2">
          <Info className="size-4" /> {footerNote}
        </p>
      )}
    </div>
  );
}
