import React from "react";

interface TournamentMiscellaneousProps {
  /** Custom content for miscellaneous section */
  content?: React.ReactNode;
}

export default function TournamentMiscellaneous({ content }: TournamentMiscellaneousProps) {
  const defaultContent = (
    <p className="text-gray-700">
      CFC membership is required. Players must have a CFC ID before registering. Create one at{" "}
      <a className="text-blue-600 hover:underline" href="https://chess.ca" target="_blank" rel="noopener noreferrer">
        chess.ca
      </a>
      . All equipment is provided by the organizer.
    </p>
  );

  return <>{content || defaultContent}</>;
}
