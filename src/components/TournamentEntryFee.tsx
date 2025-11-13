import React from "react";

export interface EntryFeeItem {
  /** Dot color (Tailwind color class) */
  dotColor: string;
  /** Fee description text */
  text: string;
  /** Optional email link text */
  emailText?: string;
  /** Optional email address */
  email?: string;
}

interface TournamentEntryFeeProps {
  /** Array of entry fee items */
  fees: EntryFeeItem[];
}

export default function TournamentEntryFee({ fees }: TournamentEntryFeeProps) {
  return (
    <ul className="space-y-3">
      {fees.map((fee, idx) => (
        <li key={idx} className="flex gap-3">
          <span className={`mt-1.5 size-2.5 rounded-full ${fee.dotColor}`} />
          <span className="text-gray-700">
            {fee.text}
            {fee.emailText && fee.email && (
              <>
                {" "}
                <a className="text-blue-600 hover:underline" href={`mailto:${fee.email}`}>
                  {fee.emailText}
                </a>
                .
              </>
            )}
          </span>
        </li>
      ))}
    </ul>
  );
}
