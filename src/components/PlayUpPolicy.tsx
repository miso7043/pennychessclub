import React from "react";

interface PlayUpPolicyProps {
  /** Rating floor difference allowed for play-up (default: 200) */
  ratingFloor?: number;
  /** Play-up fee amount (default: $10) */
  playUpFee?: number;
  /** Recommended rating for premier section (default: ~1400 chess.com) */
  premierRecommendation?: string;
  /** Custom content to override default */
  customContent?: React.ReactNode;
}

export default function PlayUpPolicy({
  ratingFloor = 200,
  playUpFee = 10,
  premierRecommendation = "~1400 chess.com or equivalent",
  customContent,
}: PlayUpPolicyProps) {
  if (customContent) {
    return <>{customContent}</>;
  }

  return (
    <div className="space-y-3 text-gray-700">
      <p>
        You may play up a section with a rating floor up to {ratingFloor} points above your rating. Add a ${playUpFee}{" "}
        play-up fee at checkout.
      </p>
      <p>
        Unrated players may join Premier or U1400 without the play-up fee. We do not recommend Premier unless you have
        significant chess experience (e.g., {premierRecommendation}).
      </p>
    </div>
  );
}
