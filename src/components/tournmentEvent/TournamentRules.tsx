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

// ---------- 내부 정보 컴포넌트 ----------
interface TournamentRuleInfoProps {
  description: string;
  link?: string;
  linkText?: string;
}
const TournamentRuleInfo: React.FC<TournamentRuleInfoProps> = ({ description, link, linkText }) => (
  <div className="space-y-2 text-gray-700">
    <p>{description}</p>
    {link && (
      <a
        className="text-blue-600 hover:underline break-all"
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        {linkText || link}
      </a>
    )}
  </div>
);

// ---------- 내부 리스트 컴포넌트 ----------
const TournamentRuleList: React.FC<{ items: string[] }> = ({ items }) => (
  <ul className="list-disc list-inside space-y-1 text-gray-700">
    {items.map((item, idx) => (
      <li key={idx}>{item}</li>
    ))}
  </ul>
);

// ---------- COMPONENT ----------

export interface TournamentRuleProps {
  title: string;
  content: TournamentRuleInfoProps | string[];
}

export interface TournamentRulesProps {
  /** Optional custom rules array. If not provided, default rules will be used. */
  rules?: TournamentRuleProps[];
  /** Optional custom footer note */
  footerNote?: string;
  /** Show/hide the footer note completely */
  showFooter?: boolean;
}

export default function TournamentRules({
  rules = [],
  footerNote = "We follow FIDE rules of chess. In case of disputes, the TD will make the final decision.",
  showFooter = true
}: TournamentRulesProps) {
  return (
    <div>
      <div className="space-y-3">
        {rules.map((r, idx) => {
          // TournamentRuleListProps 타입일 경우 처리
          if (Array.isArray(r?.content)) {
            return (
              <AccordionItem key={r.title + idx} title={r.title}>
                <TournamentRuleList items={r.content} />
              </AccordionItem>
            );
          }

          // 타입은 TournamentRuleListProps아니면 그냥 문자열 배열
          // TournamentRuleInfoProps 타입일 경우 처리
          return (
            <AccordionItem key={r.title + idx} title={r.title}>
              <TournamentRuleInfo {...(r.content as TournamentRuleInfoProps)} />
            </AccordionItem>
          );
        })}
      </div>
      {showFooter && (
        <p className="text-sm text-gray-500 mt-4 flex items-center gap-2">
          <Info className="size-4" /> {footerNote}
        </p>
      )}
    </div>
  );
}
