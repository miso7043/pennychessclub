import React from "react";

interface RefundPolicyProps {
  /** First deadline date (100% refund before this date) */
  firstDeadline: string;
  /** Second deadline date (no refund on/after this date) */
  secondDeadline: string;
  /** Optional custom refund percentages and rules */
  customRules?: {
    beforeFirst?: string;
    betweenDates?: string;
    afterSecond?: string;
  };
}

export default function RefundPolicy({ firstDeadline, secondDeadline, customRules }: RefundPolicyProps) {
  const rules = {
    beforeFirst: customRules?.beforeFirst || "100%",
    betweenDates: customRules?.betweenDates || "50%",
    afterSecond: customRules?.afterSecond || "No refund",
  };

  return (
    <ul className="space-y-2 text-gray-700">
      <li>{rules.beforeFirst} before {firstDeadline}</li>
      <li>{rules.betweenDates} on/after {firstDeadline} until {secondDeadline}</li>
      <li>{rules.afterSecond} on/after {secondDeadline}</li>
    </ul>
  );
}
